import Abstract from "../Abstract/Abstract";
import str2date from "../utils/str2date";
import date2str from "../utils/date2str";

export default function Link(name: string, type: new (...args: any[]) => Abstract) {
  return function (target: Abstract, propertyKey: string | symbol): void {
    function getter():Abstract {
      if (this.body._links.hasOwnProperty(name)) {
        const self=  this.body._links[name]
        if (self.href) {
          return new type(self);
        }
        else{
          return null;
        }
      }
    }

    function setter(value:Abstract) {
        this.body._links[name] = value.self
    }

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    })
  }
}
