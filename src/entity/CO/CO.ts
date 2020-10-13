import Abstract from "../Abstract/Abstract";
import ITypeBody from "../Type/ITypeBody";

/**
 * Custom option
 */
export default class CO extends Abstract {
  ['constructor']: typeof CO

  static url = '/api/v3/custom_options'
}
