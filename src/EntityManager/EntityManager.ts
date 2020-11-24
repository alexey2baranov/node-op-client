import fetch from 'cross-fetch';

import Abstract from "../entity/Abstract/Abstract";
import {IEndpoint} from "../entity/Abstract/IEndpoint";
import ClientOAuth2, {Token} from "client-oauth2";
import WP from "../entity/WP/WP";

interface IFotchInit extends Omit<RequestInit, 'body'> {
  body?: BodyInit | object,
}

interface IApiOptions {
  // path: string,
}

export default class EntityManager {
  private OAuth
  private baseUrl: string
  private apiOptions: IApiOptions
  token: Token
  createLogger: () => any

  constructor(options: { baseUrl: string, oauthOptions?, apiOptions?: IApiOptions, token?: Token, createLogger: () => any }) {
    this.baseUrl = options.baseUrl
    const fullOauthOptions = {
      ...options.oauthOptions,
      accessTokenUri: `${options.baseUrl}/oauth/token`,
    }
    if (!fullOauthOptions.clientSecret) {
      fullOauthOptions.authorizationUri = `${options.baseUrl}/oauth/authorize`
    }
    this.OAuth = new ClientOAuth2(fullOauthOptions);
    this.apiOptions = options.apiOptions
    this.token = options.token
    this.createLogger = options.createLogger
  }

  async fetch(url: string, options?: IFotchInit) {
    const requestInit = {
        ...options,
      },
      logger = this.createLogger()
    if (requestInit.body) {
      requestInit.body = JSON.stringify(requestInit.body)
    }
    if (requestInit.method && requestInit.method.toUpperCase() !== 'GET') {
      requestInit.headers = {
        'Content-Type': 'application/json',
        ...requestInit.headers
      }
    }

    // получаем токен из ОП
    if (!this.token || this.token.expired()) {
      // authorization code flow
      if (this.OAuth.options.authorizationUri && this.OAuth.options.redirectUri) {
        if (!window.location.href.match(/code/)) {
          // let uri = await
          window.location.href = this.OAuth.code.getUri()
        } else {
          this.token = await this.OAuth.code.getToken(window.location.search)
          localStorage.setItem('accessToken', this.token.accessToken)
          localStorage.setItem('refreshToken', this.token.refreshToken)

          // const url = new URL (window.location.href)
          // url.searchParams.delete('code');
          // history.pushState(null, null, url.href)
        }
      }
      // credential flow
      else {
        this.token = await this.OAuth.credentials.getToken()
      }
    }

    // собираем url
    url = this.baseUrl + (url.startsWith('/') ? '' : '/') + url

    // подписываем опции запроса заголовком Authorization
    const signedOptions = this.token.sign({
      url,
      ...requestInit
    } as any)
    delete signedOptions.url;
    logger.debug((requestInit.method || 'GET').toUpperCase(), url, signedOptions)


    // выполняем запрос
    const response = await fetch(url, signedOptions);
    let resultAsText = await response.text()
    let result
    // распарсиваем ответ
    if (response.headers.get('content-type') === 'application/hal+json; charset=utf-8') {
      try {
        result = JSON.parse(resultAsText)
      } catch (err) {
        throw new Error(resultAsText)
      }
      if (result._type === `Error`) {
        let message = `${response.status} [${result.errorIdentifier}] ${result.message}`
        if (result?._embedded?.errors?.length) {
          message += ' ' + Object.values(result._embedded.errors).map((eachError: any) => eachError._embedded.details.attribute + ': ' + eachError.message).join(' ')
        }
        const error = new Error(message)
        throw error
      }
    }
    return result;
  }

  async get<T extends Abstract>(T, id: number | IEndpoint, notify?: boolean): Promise<T> {
    const result = new T(id);
    return this.reload(result)
  }

  async reload<T extends Abstract>(entity: T, notify?: boolean): Promise<T> {
    const body = await this.fetch(`${entity.self.href}${notify ? '?notify' : ''}`)
    entity.merge(body)
    entity._links={}
    return entity;
  }

  async getMany<T extends Abstract>(T, options: { all?: boolean, notify?: boolean, offset?: number, pageSize?: number, filters?: Object[], sortBy?: string, groupBy?: string, showSums?: boolean } = {}): Promise<Array<T>> {

    const result = [];
    let total;
    for (let startOffset = options.offset || 1, offset = startOffset; offset === startOffset || options.all && (result.length < total); offset++) {
      const query = Object.entries({...options, offset,})
        .map(([key, value]) => {
          if (key === 'filters') {
            value = JSON.stringify(value)
          }
          return key + '=' + value
        })
        .join('&')
      const fetchResult = await this.fetch(`${T.url}?${query}`);
      result.push(...fetchResult._embedded.elements.map(eachElement => new T(eachElement)));
      total = fetchResult.total;
    }
    return result
  }

  async patch<T extends WP>(entity: T, notify?: boolean, fieldPaths?: Array<keyof T['body'] | string>): Promise<T> {
    const patch = JSON.parse(JSON.stringify(fieldPaths ? entity.bodyScope([...fieldPaths, 'lockVersion']) : entity.body))
    delete patch.createdAt
    delete patch.updatedAt
    if (patch.lockVersion === undefined || patch.lockVersion === null) {
      const actualCopy = await this.get<T>(entity.constructor, entity.id)
      patch.lockVersion = actualCopy.body.lockVersion
    }

    const patchedBody = await this.fetch(`${entity.self.href}${notify !== undefined ? `?notify=${JSON.stringify(notify)}` : ''}`, {
      method: "PATCH",
      body: patch,
    })
    if (!fieldPaths || fieldPaths.length == 0) {
      entity.body = patchedBody
    } else {
      entity.body.lockVersion = patchedBody.lockVersion
      entity.body.updatedAt = patchedBody.updatedAt;
        // updating embedded
        (fieldPaths as string[]|| [])
        .filter(fieldPath => fieldPath.startsWith('_links.'))
        .map(fieldPaths=>fieldPaths.substr(7,))
        .forEach(fieldName=>entity.body._embedded[fieldName]= patchedBody._embedded[fieldName])
    }
    return entity;
  }

  async create<T extends WP>(entity: T): Promise<T> {
    const createdBody = await this.fetch(entity.constructor.url, {
      method: "POST",
      body: entity.body,
    })
    entity.body = createdBody
    return entity;
  }

  /**
   * validate data
   */
  async validate<T extends WP>(entity: T): Promise<T> {
    const url = entity.id ? entity.constructor.url + `/${entity.id}/form` : entity.constructor.url + `/form`
    const form = await this.fetch(url, {
      method: "POST",
      body: entity.body,
    })
    const result = form._embedded.validationErrors
    console.log(result)
    return result;
  }


}
