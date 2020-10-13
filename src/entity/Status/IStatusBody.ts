import {IEndpoint} from "../Abstract/IEndpoint";
import {IPayloadEndpoint} from "../Abstract/IPayloadEndpoint";
import IAbstractBody from "../Abstract/IAbstractBody";

export default interface IStatusBody extends IAbstractBody {
  _type?: "Status",
  name?: string,
  position?: number,
  isDefault?: boolean,
  isClosed?: boolean,
  defaultDoneRatio?: number,
}
