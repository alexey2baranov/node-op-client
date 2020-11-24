import {IEndpoint} from "../Abstract/IEndpoint";
import {IPayloadEndpoint} from "../Abstract/IPayloadEndpoint";
import IAbstractBody from "../Abstract/IAbstractBody";

export default interface IUserBody extends IAbstractBody{
  "_type"?: "Type",
  "name": string,
  "createdAt": string,
  "updatedAt": string,
  "login": string,
  "admin": boolean,
  "firstName": string,
  "lastName": string,
  "email": string,
  "avatar": string,
  "status": string,
  "identityUrl": any,
}
