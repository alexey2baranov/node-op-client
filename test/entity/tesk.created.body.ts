const task = {
    "_type": "WorkPackage",
    "id": 130,
    "lockVersion": 0,
    "subject": "1",
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
    "createdAt": "2020-08-19T12:39:12Z",
    "updatedAt": "2020-08-19T12:39:12Z",
    "remainingTime": null,
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
            "href": "/api/v3/work_packages/130/attachments"
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
            "href": "/api/v3/work_packages/130/relations"
          }
        }
      },
      "type": {
        "_type": "Type",
        "id": 1,
        "name": "Task",
        "color": "#1A67A3",
        "position": 2,
        "isDefault": true,
        "isMilestone": false,
        "createdAt": "2020-07-07T14:34:21Z",
        "updatedAt": "2020-07-14T14:43:15Z",
        "_links": {
          "self": {
            "href": "/api/v3/types/1",
            "title": "Task"
          }
        }
      },
      "priority": {
        "_type": "Priority",
        "id": 8,
        "name": "Normal",
        "position": 2,
        "color": "#74C0FC",
        "isDefault": true,
        "isActive": true,
        "_links": {
          "self": {
            "href": "/api/v3/priorities/8",
            "title": "Normal"
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
        "name": "New",
        "isClosed": false,
        "color": "#1098AD",
        "isDefault": true,
        "isReadonly": false,
        "defaultDoneRatio": null,
        "position": 1,
        "_links": {
          "self": {
            "href": "/api/v3/statuses/1",
            "title": "New"
          }
        }
      },
      "author": {
        "_type": "User",
        "id": 2,
        "name": "OpenProject",
        "createdAt": "2020-07-07T14:34:29Z",
        "updatedAt": "2020-08-17T12:38:50Z",
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
        "href": "/api/v3/work_packages/130/attachments"
      },
      "addAttachment": {
        "href": "/api/v3/work_packages/130/attachments",
        "method": "post"
      },
      "self": {
        "href": "/api/v3/work_packages/130",
        "title": "1"
      },
      "update": {
        "href": "/api/v3/work_packages/130/form",
        "method": "post"
      },
      "schema": {
        "href": "/api/v3/work_packages/schemas/14-1"
      },
      "updateImmediately": {
        "href": "/api/v3/work_packages/130",
        "method": "patch"
      },
      "delete": {
        "href": "/api/v3/work_packages/130",
        "method": "delete"
      },
      "logTime": {
        "href": "/work_packages/130/time_entries/new",
        "type": "text/html",
        "title": "Log time on 1"
      },
      "move": {
        "href": "/work_packages/130/move/new",
        "type": "text/html",
        "title": "Move 1"
      },
      "copy": {
        "href": "/work_packages/130/copy",
        "title": "Copy 1"
      },
      "pdf": {
        "href": "/work_packages/130.pdf",
        "type": "application/pdf",
        "title": "Export as PDF"
      },
      "atom": {
        "href": "/work_packages/130.atom",
        "type": "application/rss+xml",
        "title": "Atom feed"
      },
      "availableRelationCandidates": {
        "href": "/api/v3/work_packages/130/available_relation_candidates",
        "title": "Potential work packages to relate to"
      },
      "customFields": {
        "href": "/projects/test/settings/custom_fields",
        "type": "text/html",
        "title": "Custom fields"
      },
      "configureForm": {
        "href": "/types/1/edit?tab=form_configuration",
        "type": "text/html",
        "title": "Configure form"
      },
      "activities": {
        "href": "/api/v3/work_packages/130/activities"
      },
      "availableWatchers": {
        "href": "/api/v3/work_packages/130/available_watchers"
      },
      "relations": {
        "href": "/api/v3/work_packages/130/relations"
      },
      "revisions": {
        "href": "/api/v3/work_packages/130/revisions"
      },
      "watchers": {
        "href": "/api/v3/work_packages/130/watchers"
      },
      "addWatcher": {
        "href": "/api/v3/work_packages/130/watchers",
        "method": "post",
        "payload": {
          "user": {
            "href": "/api/v3/users/{user_id}"
          }
        },
        "templated": true
      },
      "removeWatcher": {
        "href": "/api/v3/work_packages/130/watchers/{user_id}",
        "method": "delete",
        "templated": true
      },
      "addRelation": {
        "href": "/api/v3/work_packages/130/relations",
        "method": "post",
        "title": "Add relation"
      },
      "addChild": {
        "href": "/api/v3/projects/test/work_packages",
        "method": "post",
        "title": "Add child of 1"
      },
      "changeParent": {
        "href": "/api/v3/work_packages/130",
        "method": "patch",
        "title": "Change parent of 1"
      },
      "addComment": {
        "href": "/api/v3/work_packages/130/activities",
        "method": "post",
        "title": "Add comment"
      },
      "previewMarkup": {
        "href": "/api/v3/render/markdown?context=/api/v3/work_packages/130",
        "method": "post"
      },
      "timeEntries": {
        "href": "/work_packages/130/time_entries",
        "type": "text/html",
        "title": "Time entries"
      },
      "ancestors": [],
      "category": {
        "href": null
      },
      "type": {
        "href": "/api/v3/types/1",
        "title": "Task"
      },
      "priority": {
        "href": "/api/v3/priorities/8",
        "title": "Normal"
      },
      "project": {
        "href": "/api/v3/projects/14",
        "title": "test"
      },
      "status": {
        "href": "/api/v3/statuses/1",
        "title": "New"
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
        "href": "/work_packages/130/cost_entries/new",
        "type": "text/html",
        "title": "Log costs on 1"
      },
      "showCosts": {
        "href": "/work_packages/130/cost_entries",
        "type": "text/html",
        "title": "Show cost entries"
      },
      "convertBCF": {
        "href": "/api/bcf/2.1/projects/test/topics",
        "title": "Convert to BCF",
        "payload": {
          "reference_links": [
            "/api/v3/work_packages/130"
          ]
        },
        "method": "post"
      }
    }
}
export default task
