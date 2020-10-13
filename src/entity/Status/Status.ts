import IStatusBody from "./IStatusBody";
import Abstract from "../Abstract/Abstract";

export default class Status extends Abstract {
  ['constructor']: typeof Status

  static url = '/api/v3/statuses'

  body: IStatusBody
}
