import {IEndpoint} from "../Abstract/IEndpoint";
import {IPayloadEndpoint} from "../Abstract/IPayloadEndpoint";
import IAbstractBody from "../Abstract/IAbstractBody";

export default interface IProjectBody extends IAbstractBody{
  "_type"?: "Project",
  "identifier": string,
  "name"?: string,
  "active"?: boolean,
  "public"?: boolean,
  "description"?: {
    "format": "markdown",
    "raw": string,
    "html": string,
  },
  "createdAt": string,
  "updatedAt": string,
  "status": string,
  "_links": IAbstractBody['_links'] & {
    // "categories": {
    //   "href": "/api/v3/projects/2/categories"
    // },
    // "delete": {
    //   "href": "/api/v3/projects/2",
    //   "method": "delete"
    // },
    // "schema": {
    //   "href": "/api/v3/projects/schema"
    // },
    "parent": IEndpoint
  }
  "position"?: number,
  "isDefault"?: boolean,
  "isMilestone"?: boolean,
}
