import Abstract from "../Abstract/Abstract";
import ITypeBody from "../Type/ITypeBody";
import IProjectBody from "./IProjectBody";

export default class Project extends Abstract {
  ['constructor']: typeof Project

  static url = '/api/v3/projects'

  body: IProjectBody
}
