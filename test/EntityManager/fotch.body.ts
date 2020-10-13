const body= {
  "action": "work_package:created",
  "work_package": {
    "_type": "WorkPackage",
    "id": 128,
    "lockVersion": 0,
    "subject": "EE test ",
    "description": {
      "format": "markdown",
      "raw": "",
      "html": ""
    },
    "startDate": null,
    "dueDate": null,
    "estimatedTime": null,
    "derivedEstimatedTime": null,
    "percentageDone": 0,
    "createdAt": "2020-08-26T11:32:44Z",
    "updatedAt": "2020-08-26T11:32:44Z",
    "remainingTime": null,
    "customField10": null,
    "customField9": null,
    "customField11": null,
    "_embedded": {
      "attachments": {
        "_type": "Collection",
        "total": 0,
        "count": 0,
        "_embedded": {
          "elements": []
        },
        "_links": {
          "self": {
            "href": "/api/v3/work_packages/128/attachments"
          }
        }
      },
      "relations": {
        "_type": "Collection",
        "total": 0,
        "count": 0,
        "_embedded": {
          "elements": []
        },
        "_links": {
          "self": {
            "href": "/api/v3/work_packages/128/relations"
          }
        }
      },
      "type": {
        "_type": "Type",
        "id": 10,
        "name": "Подготовка бизнес-требований",
        "color": "#FD7E14",
        "position": 9,
        "isDefault": false,
        "isMilestone": false,
        "createdAt": "2020-07-17T08:45:52Z",
        "updatedAt": "2020-08-26T06:12:42Z",
        "_links": {
          "self": {
            "href": "/api/v3/types/10",
            "title": "Подготовка бизнес-требований"
          }
        }
      },
      "priority": {
        "_type": "Priority",
        "id": 8,
        "name": "Нормальный",
        "position": 2,
        "color": "#74C0FC",
        "isDefault": true,
        "isActive": true,
        "_links": {
          "self": {
            "href": "/api/v3/priorities/8",
            "title": "Нормальный"
          }
        }
      },
      "project": {
        "_type": "Project",
        "id": 14,
        "identifier": "test",
        "name": "test",
        "active": true,
        "public": false,
        "description": {
          "format": "markdown",
          "raw": "",
          "html": ""
        },
        "createdAt": "2020-08-19T12:10:18Z",
        "updatedAt": "2020-08-19T12:10:18Z",
        "status": "on track",
        "statusExplanation": {
          "format": "markdown",
          "raw": "",
          "html": ""
        },
        "_links": {
          "self": {
            "href": "/api/v3/projects/14",
            "title": "test"
          },
          "createWorkPackage": {
            "href": "/api/v3/projects/14/work_packages/form",
            "method": "post"
          },
          "createWorkPackageImmediately": {
            "href": "/api/v3/projects/14/work_packages",
            "method": "post"
          },
          "workPackages": {
            "href": "/api/v3/projects/14/work_packages"
          },
          "categories": {
            "href": "/api/v3/projects/14/categories"
          },
          "versions": {
            "href": "/api/v3/projects/14/versions"
          },
          "memberships": {
            "href": "/api/v3/memberships?filters=%5B%7B%22project%22%3A%7B%22operator%22%3A%22%3D%22%2C%22values%22%3A%5B%2214%22%5D%7D%7D%5D"
          },
          "types": {
            "href": "/api/v3/projects/14/types"
          },
          "update": {
            "href": "/api/v3/projects/14/form",
            "method": "post"
          },
          "updateImmediately": {
            "href": "/api/v3/projects/14",
            "method": "patch"
          },
          "delete": {
            "href": "/api/v3/projects/14",
            "method": "delete"
          },
          "schema": {
            "href": "/api/v3/projects/schema"
          },
          "parent": {
            "href": null,
            "title": null
          }
        }
      },
      "status": {
        "_type": "Status",
        "id": 1,
        "name": "Новая",
        "isClosed": false,
        "color": "#1098AD",
        "isDefault": true,
        "isReadonly": false,
        "defaultDoneRatio": null,
        "position": 1,
        "_links": {
          "self": {
            "href": "/api/v3/statuses/1",
            "title": "Новая"
          }
        }
      },
      "author": {
        "_type": "User",
        "id": 2,
        "name": "OpenProject",
        "createdAt": "2020-07-07T14:34:29Z",
        "updatedAt": "2020-08-25T06:03:10Z",
        "login": "admin",
        "admin": true,
        "firstName": "OpenProject",
        "lastName": "Admin",
        "email": "aleksey.baranov2@open.ruuu",
        "avatar": "https://urz.open.ru:8091/users/2/avatar",
        "status": "active",
        "identityUrl": null,
        "_links": {
          "self": {
            "href": "/api/v3/users/2",
            "title": "OpenProject"
          },
          "memberships": {
            "href": "/api/v3/memberships?filters=%5B%7B%22principal%22%3A%7B%22operator%22%3A%22%3D%22%2C%22values%22%3A%5B%222%22%5D%7D%7D%5D",
            "title": "Members"
          },
          "showUser": {
            "href": "/users/2",
            "type": "text/html"
          },
          "updateImmediately": {
            "href": "/api/v3/users/2",
            "title": "Update admin",
            "method": "patch"
          },
          "lock": {
            "href": "/api/v3/users/2/lock",
            "title": "Set lock on admin",
            "method": "post"
          },
          "delete": {
            "href": "/api/v3/users/2",
            "title": "Delete admin",
            "method": "delete"
          }
        }
      },
      "customActions": []
    },
    "_links": {
      "attachments": {
        "href": "/api/v3/work_packages/128/attachments"
      },
      "addAttachment": {
        "href": "/api/v3/work_packages/128/attachments",
        "method": "post"
      },
      "self": {
        "href": "/api/v3/work_packages/128",
        "title": "EE test "
      },
      "update": {
        "href": "/api/v3/work_packages/128/form",
        "method": "post"
      },
      "schema": {
        "href": "/api/v3/work_packages/schemas/14-10"
      },
      "updateImmediately": {
        "href": "/api/v3/work_packages/128",
        "method": "patch"
      },
      "delete": {
        "href": "/api/v3/work_packages/128",
        "method": "delete"
      },
      "logTime": {
        "href": "/work_packages/128/time_entries/new",
        "type": "text/html",
        "title": "Log time on EE test "
      },
      "move": {
        "href": "/work_packages/128/move/new",
        "type": "text/html",
        "title": "Move EE test "
      },
      "copy": {
        "href": "/work_packages/128/copy",
        "title": "Copy EE test "
      },
      "pdf": {
        "href": "/work_packages/128.pdf",
        "type": "application/pdf",
        "title": "Export as PDF"
      },
      "atom": {
        "href": "/work_packages/128.atom",
        "type": "application/rss+xml",
        "title": "Atom feed"
      },
      "availableRelationCandidates": {
        "href": "/api/v3/work_packages/128/available_relation_candidates",
        "title": "Potential work packages to relate to"
      },
      "customFields": {
        "href": "/projects/test/settings/custom_fields",
        "type": "text/html",
        "title": "Custom fields"
      },
      "configureForm": {
        "href": "/types/10/edit?tab=form_configuration",
        "type": "text/html",
        "title": "Configure form"
      },
      "activities": {
        "href": "/api/v3/work_packages/128/activities"
      },
      "availableWatchers": {
        "href": "/api/v3/work_packages/128/available_watchers"
      },
      "relations": {
        "href": "/api/v3/work_packages/128/relations"
      },
      "revisions": {
        "href": "/api/v3/work_packages/128/revisions"
      },
      "watchers": {
        "href": "/api/v3/work_packages/128/watchers"
      },
      "addWatcher": {
        "href": "/api/v3/work_packages/128/watchers",
        "method": "post",
        "payload": {
          "user": {
            "href": "/api/v3/users/{user_id}"
          }
        },
        "templated": true
      },
      "removeWatcher": {
        "href": "/api/v3/work_packages/128/watchers/{user_id}",
        "method": "delete",
        "templated": true
      },
      "addRelation": {
        "href": "/api/v3/work_packages/128/relations",
        "method": "post",
        "title": "Add relation"
      },
      "addChild": {
        "href": "/api/v3/projects/test/work_packages",
        "method": "post",
        "title": "Add child of EE test "
      },
      "changeParent": {
        "href": "/api/v3/work_packages/128",
        "method": "patch",
        "title": "Change parent of EE test "
      },
      "addComment": {
        "href": "/api/v3/work_packages/128/activities",
        "method": "post",
        "title": "Add comment"
      },
      "previewMarkup": {
        "href": "/api/v3/render/markdown?context=/api/v3/work_packages/128",
        "method": "post"
      },
      "timeEntries": {
        "href": "/work_packages/128/time_entries",
        "type": "text/html",
        "title": "Time entries"
      },
      "ancestors": [],
      "category": {
        "href": null
      },
      "type": {
        "href": "/api/v3/types/10",
        "title": "Подготовка бизнес-требований"
      },
      "priority": {
        "href": "/api/v3/priorities/8",
        "title": "Нормальный"
      },
      "project": {
        "href": "/api/v3/projects/14",
        "title": "test"
      },
      "status": {
        "href": "/api/v3/statuses/1",
        "title": "Новая"
      },
      "author": {
        "href": "/api/v3/users/2",
        "title": "OpenProject"
      },
      "responsible": {
        "href": null
      },
      "assignee": {
        "href": null
      },
      "version": {
        "href": null
      },
      "parent": {
        "href": null,
        "title": null
      },
      "customActions": [],
      "logCosts": {
        "href": "/work_packages/128/cost_entries/new",
        "type": "text/html",
        "title": "Log costs on EE test "
      },
      "showCosts": {
        "href": "/work_packages/128/cost_entries",
        "type": "text/html",
        "title": "Show cost entries"
      },
      "convertBCF": {
        "href": "/api/bcf/2.1/projects/test/topics",
        "title": "Convert to BCF",
        "payload": {
          "reference_links": [
            "/api/v3/work_packages/128"
          ]
        },
        "method": "post"
      },
      "customField1": {
        "title": "МО",
        "href": "/api/v3/custom_options/2"
      },
      "customField8": {
        "title": "Высокая",
        "href": "/api/v3/custom_options/14"
      }
    }
  }
}

export default body;
