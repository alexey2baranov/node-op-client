import {IEndpoint} from "./IEndpoint";
import IAbstractBody from "./IAbstractBody";
import set from "keypather/set";
import get from "keypather/get";


export default class Abstract {
  ['constructor']: typeof Abstract

  static url = '/should_be_defined'

  body: IAbstractBody

  constructor(init?: number | IEndpoint | IAbstractBody) {
    this.body = {
      _links: {},
      _embedded:{},
    }
    if (init) {
      if (typeof init === 'number') {
        this.id = init;
      } else if (typeof init === 'object' && init.hasOwnProperty('href')) {
        this.self = init as IEndpoint;
      } else {
        this.merge(init);
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
    this.body._links.self = {
      href: this.constructor.url + '/' + id,
    }
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


  bodyScope(fieldPaths: Array<string | number | Symbol>): IAbstractBody {
    const result: IAbstractBody = {}
    fieldPaths.forEach(eachFieldPath => {
      const eachFieldValue = get(this.body, eachFieldPath)
      set(result, eachFieldPath, eachFieldValue)
    })
    return result
  }
}
