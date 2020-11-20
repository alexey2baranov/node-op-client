import {IEndpoint} from "./IEndpoint";
import {IPayloadEndpoint} from "./IPayloadEndpoint";

export default interface IAbstractBody {
  _type?: string
  "id"?: number,
  "_links"?: {
    "self"?: IEndpoint,
  }
  "_embedded"?: {
  }
}
