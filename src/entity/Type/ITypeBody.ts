import {IEndpoint} from "../Abstract/IEndpoint";
import {IPayloadEndpoint} from "../Abstract/IPayloadEndpoint";
import IAbstractBody from "../Abstract/IAbstractBody";

export default interface ITypeBody extends IAbstractBody{
  "_type"?: "Type",
  "name"?: string,
  "color"?: string,
  "position"?: number,
  "isDefault"?: boolean,
  "isMilestone"?: boolean,
  "createdAt"?: string,
  "updatedAt"?: string
}
