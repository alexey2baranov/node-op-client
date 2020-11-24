import {IEndpoint} from "../Abstract/IEndpoint";
import IWPBody from "./IWPBody";
import Abstract from "../Abstract/Abstract";
import Status from "../Status/Status";
import Type from "../Type/Type";
import Link from "../decorators/Link";
import Project from "../Project/Project";
import CO from "../CO/CO";
import Duration from "../Abstract/Duration";
import Field from "../decorators/Field";
import {User} from "../../index";
import Embedded from "../decorators/Embedded";

/**
 * Work package
 */
export default class WP extends Abstract {
  ['constructor']: typeof WP

  static url = '/api/v3/work_packages'

  constructor(init?: number | IEndpoint | Partial<IWPBody>) {
    super(init)
  }

  @Field('subject', String)
  subject: string

  @Field('startDate', Date)
  startDate: Date

  @Field('dueDate', Date)
  dueDate: Date

  @Field('scheduleManually', Boolean)
  scheduleManually: boolean

  @Field('createdAt', Date)
  createdAt: Date

  @Field('estimatedTime', Duration)
  estimatedTime: Duration
  @Field('spentTime', Duration)
  spentTime: Duration

  @Field('derivedEstimatedTime', Duration)
  derivedEstimatedTime: Duration

  @Link('project', Project)
  project: Project
  @Embedded('project', Project)
  embeddedProject: Project

  @Link('status', Status)
  status: Status
  @Embedded('status', Status)
  embeddedStatus: Status

  @Link('type', Type)
  type: Type
  @Embedded('type', Type)
  embeddedType: Type

  @Link('customField1', CO)
  module: CO


  @Link('assignee', User)
  assignee: User

  @Link('author', User)
  author: User

  @Link('parent', WP)
  parent: WP

  body: IWPBody

  get ancestor(): WP {
    if (!this.body._links.ancestors) {
      return undefined
    }
    if (this.body._links.ancestors.length) {
      return new WP(this.body._links.ancestors[this.body._links.ancestors.length - 1])
    }
    return null
  }

  get children(): WP[] {
    if (!this.body._links.children) {
      return undefined
    }
    return this.body._links.children.map(eachChildJson => new WP(eachChildJson))
  }

  toString(){
    return `${this.id} ${this.type.self.title}(${this.type.id}) ${this.self.title}`
  }
}
