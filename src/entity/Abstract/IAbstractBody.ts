import {IEndpoint} from "./IEndpoint";

export default interface IAbstractBody {
  _type?: string,
  "id": number,
  "_links": {
    "self": IEndpoint,
  }
  "_embedded"?: {
  }
}
