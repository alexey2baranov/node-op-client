import Abstract from "../Abstract/Abstract";
import ITypeBody from "./IUserBody";
import Field from "../decorators/Field";
import IUserBody from "./IUserBody";

export default class User extends Abstract {
  ['constructor']: typeof User

  static url = '/api/v3/users'

  body: IUserBody

  @Field('name', String)
  name: string

  @Field('login', String)
  login: string

  @Field('firstName', String)
  firstName: string

  @Field('lastName', String)
  lastName: string

  @Field('email', String)
  email: string
}
