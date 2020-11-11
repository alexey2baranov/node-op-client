import {IEndpoint} from "../Abstract/IEndpoint";
import {IPayloadEndpoint} from "../Abstract/IPayloadEndpoint";
import IAbstractBody from "../Abstract/IAbstractBody";

export default interface IWPBody extends IAbstractBody{
  "_type"?: "WorkPackage",
  "lockVersion"?: number,
  "subject"?: string,
  "description"?: {
    "format": "markdown",
    "raw": string,
    "html": string
  },
  "startDate"?: string,
  "dueDate"?: string,
  "scheduleManually?": boolean,
  "estimatedTime"?: string,
  "derivedEstimatedTime"?: string,
  "percentageDone"?: number,
  "createdAt"?: string,
  "updatedAt"?: string,
  "remainingTime"?: string,
  "_embedded"?: {
    "attachments"?: {
      "_type": "Collection",
      "total": number,
      "count": number,
      "_embedded": {
        "elements": Array<any>
      },
      "_links"?: {
        "self": IEndpoint
      }
    },
    // "relations": {
    //   "_type": "Collection",
    //   "total": number,
    //   "count": number,
    //   "_embedded": {
    //     "elements": Array
    //   },
    //   "_links": {
    //     "self": {
    //       "href": "/opi/v3/work_packages/116/relations"
    //     }
    //   }
    // },
    "type"?: {
      "_type": "Type",
      "id": number,
      "name": string,
      "color": string,
      "position": number,
      "isDefault": boolean,
      "isMilestone": boolean,
      "createdAt": string,
      "updatedAt": string,
      "_links": {
        "self": IEndpoint
      }
    },
    "priority"?: {
      "_type": "Priority",
      "id": number,
      "name": string,
      "position": number,
      "color": string,
      "isDefault": boolean,
      "isActive": boolean,
      "_links": {
        "self": IEndpoint
      }
    },
    "project"?: {
      "_type": "Project",
      "id": number,
      "identifier": string,
      "name": string,
      "active": boolean,
      "public": boolean,
      "description": {
        "format": string,
        "raw": string,
        "html": string
      },
      // "createdAt": "2020-07-15T07:12:46Z",
      // "updatedAt": "2020-08-06T09:47:48Z",
      // "status": "on track",
      // "statusExplanation": {
      //   "format": "markdown",
      //   "raw": "",
      //   "html": ""
      // },
      "_links"?: {
        "self"?: IEndpoint,
        "createWorkPackage"?: IEndpoint,
        "createWorkPackageImmediately"?: IEndpoint,
        "workPackages"?: IEndpoint,
        "categories"?: IEndpoint,
        "versions"?: IEndpoint,
        "memberships"?: IEndpoint,
        "types"?: IEndpoint,
        "update"?: IEndpoint,
        "updateImmediately"?: IEndpoint,
        "delete"?: IEndpoint,
        "schema"?: IEndpoint,
        "parent"?: IEndpoint
      }
    },
    "status"?: {
      "_type": "Status",
      "id": number,
      "name": string,
      "isClosed": boolean,
      "color": string,
      "isDefault": boolean,
      "isReadonly": boolean,
      "defaultDoneRatio": number,
      "position": number,
      "_links": {
        "self": IEndpoint
      }
    },
    "author"?: {
      "_type": "User",
      "id": number,
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
      "identityUrl": string,
      "_links": {
        "self": IEndpoint,
        "memberships": IEndpoint,
        "showUser": IEndpoint,
        "updateImmediately": IEndpoint,
        "lock": IEndpoint,
        "delete": IEndpoint
      }
    },
    // "customActions": []
  },
  "_links"?: IAbstractBody['_links'] & {
    "children"?:IEndpoint[]
    "attachments"?: IEndpoint,
    "addAttachment"?: IEndpoint,
    "update"?: IEndpoint,
    "schema"?: IEndpoint,
    "updateImmediately"?: IEndpoint,
    "delete"?: IEndpoint,
    "logTime"?: IEndpoint,
    "move"?: IEndpoint,
    "copy"?: IEndpoint,
    "pdf"?: IEndpoint,
    "atom"?: IEndpoint,
    "availableRelationCandidates"?: IEndpoint,
    "customFields"?: IEndpoint,
    "configureForm"?: IEndpoint,
    "activities"?: IEndpoint,
    "availableWatchers"?: IEndpoint,
    "relations"?: IEndpoint,
    "revisions"?: IEndpoint,
    "watchers"?: IEndpoint,
    "addWatcher"?: IPayloadEndpoint<{ user?: IEndpoint }>,
    "removeWatcher"?: IEndpoint,
    "addRelation"?: IEndpoint,
    "addChild"?: IEndpoint,
    "changeParent"?: IEndpoint,
    "addComment"?: IEndpoint,
    "previewMarkup"?: IEndpoint,
    "timeEntries"?: IEndpoint,
    "ancestors"?: Array<IEndpoint>,
    "category"?: IEndpoint,
    "type"?: IEndpoint,
    "priority"?: IEndpoint,
    "project"?: IEndpoint,
    "status"?: IEndpoint,
    "author"?: IEndpoint,
    "responsible"?: IEndpoint,
    "assignee"?: IEndpoint,
    "version"?: IEndpoint,
    "parent"?: IEndpoint,
    "customActions"?: Array<any>,
    "logCosts"?: IEndpoint,
    "showCosts"?: IEndpoint,
    // "convertBCF": {
    //   "href": "/opi/bcf/2.1/projects/gzt/topics",
    //   "title": "Convert to BCF",
    //   "payload": {
    //     "reference_links": [
    //       "/opi/v3/work_packages/116"
    //     ]
    //   },
    //   "method": "post"
    // },
    // "customField8": {
    //   "title": "Средняя",
    //   "href": "/opi/v3/custom_options/13"
    // }
  }
}
