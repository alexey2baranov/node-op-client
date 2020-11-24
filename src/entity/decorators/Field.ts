import Abstract from "../Abstract/Abstract";
import str2date from "../utils/str2date";
import date2str from "../utils/date2str";
import Duration from "../Abstract/Duration";

export default function Field(name: string, type?: any) {
  return function (target: Abstract, propertyKey: string | symbol): void {
    let value
    function getter() {
      if (this.body.hasOwnProperty(name)) {
        if (type === Date) {
          return str2date(this.body[name])
        } else if (type === Duration) {
          return this.body[name]?Duration.parse(this.body[name]):null;
        } else {
          return this.body[name]
        }
      }
    }

    function setter(value) {
      if (type === Date) {
        this.body[name] = date2str(value)
      } else if (type === Duration) {
        this.body[name] = value?(value as Duration).toString():null
      } else {
        this.body[name] = value
      }
    }

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    })
  }
}
