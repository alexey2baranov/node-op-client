import {IEndpoint} from "./IEndpoint";
import IAbstractBody from "./IAbstractBody";
import set from "keypather/set";
import get from "keypather/get";


export default class Abstract {
  ['constructor']: typeof Abstract

  static url = '/should_be_defined'

  body: IAbstractBody
  /**
   * Holds linked objects matched the body._links.
   */
  _links: { [key: string]: Abstract }

  constructor(init?: number | IEndpoint | IAbstractBody) {
    this.body = {
      id: undefined,
      _links: {
        self: undefined,
      },
      _embedded: {},
    }
    this._links = {}
    if (init) {
      if (typeof init === 'number') {
        this.id = init
      } else if (typeof init === 'object' && init.hasOwnProperty('href')) {
        this.self = init as IEndpoint;
      } else {
        this.merge(init)
        if (this.id && !this.self) {
          this.id = this.id
        }
        if (this.self && !this.id) {
          this.self = this.self
        }
      }
    }
  }

  get id(): number {
    return this.body.id
  }

  set id(id: number) {
    this.body.id = id;
    this.body._links.self= this.body._links.self || {href:undefined}
    this.body._links.self.href = this.constructor.url + '/' + id
    this.body._links.self.title = undefined
  }

  merge(source) {
    const copy = JSON.parse(JSON.stringify(source)) as IAbstractBody
    Object.assign(this.body, copy)
  }

  get self() {
    return this.body._links.self
  }

  set self(value) {
    this.body._links.self = value;
    this.body.id = Number.parseInt(value.href.match(/\d+$/)[0])
  }


  bodyScope(fieldPaths: Array<string | number | Symbol>): Partial<IAbstractBody> {
    const result: Partial<IAbstractBody> = {}
    fieldPaths.forEach(eachFieldPath => {
      const eachFieldValue = get(this.body, eachFieldPath)
      set(result, eachFieldPath, eachFieldValue)
    })
    return result
  }
}
