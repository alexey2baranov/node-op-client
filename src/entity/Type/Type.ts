import Abstract from "../Abstract/Abstract";
import ITypeBody from "./ITypeBody";

export default class Type extends Abstract {
  ['constructor']: typeof Type

  static url = '/api/v3/types'

  body: ITypeBody
}
