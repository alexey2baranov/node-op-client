const task = {
  "id": 477,
  "remainingTime": null,
  "_embedded": {
    "type": {
      "id": 1,
      "name": "Task",
      "color": "#1A67A3",
      "isMilestone": false,
      "isDefault": true,
      "_links": {
        "self": {
          "href": "/api/v3/types/1",
          "title": "Task"
        }
      },
      "createdAt": "2020-07-07T14:34:21Z",
      "_type": "Type",
      "position": 2,
      "updatedAt": "2020-08-24T10:19:10Z"
    },
    "status": {
      "id": 1,
      "name": "Новая",
      "isClosed": false,
      "color": "#1098AD",
      "isDefault": true,
      "_links": {
        "self": {
          "href": "/api/v3/statuses/1",
          "title": "Новая"
        }
      },
      "defaultDoneRatio": null,
      "_type": "Status",
      "isReadonly": false,
      "position": 1
    },
    "customActions": [],
    "author": {
      "id": 2,
      "login": "admin",
      "name": "OpenProject",
      "firstName": "OpenProject",
      "status": "active",
      "_links": {
        "updateImmediately": {
          "href": "/api/v3/users/2",
          "method": "patch",
          "title": "Update admin"
        },
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
        "lock": {
          "href": "/api/v3/users/2/lock",
          "method": "post",
          "title": "Set lock on admin"
        },
        "delete": {
          "href": "/api/v3/users/2",
          "method": "delete",
          "title": "Delete admin"
        }
      },
      "createdAt": "2020-07-07T14:34:29Z",
      "admin": true,
      "identityUrl": null,
      "_type": "User",
      "lastName": "Admin",
      "email": "aleksey.baranov2@open.ruuu",
      "updatedAt": "2020-09-09T11:51:55Z",
      "avatar": "https://dashboard.urz.open.ru/users/2/avatar"
    },
    "priority": {
      "id": 8,
      "name": "Нормальный",
      "color": "#74C0FC",
      "_links": {
        "self": {
          "href": "/api/v3/priorities/8",
          "title": "Нормальный"
        }
      },
      "isDefault": true,
      "_type": "Priority",
      "position": 2,
      "isActive": true
    },
    "project": {
      "id": 14,
      "name": "test",
      "active": true,
      "status": "on track",
      "_links": {
        "updateImmediately": {
          "href": "/api/v3/projects/14",
          "method": "patch"
        },
        "versions": {
          "href": "/api/v3/projects/14/versions"
        },
        "types": {
          "href": "/api/v3/projects/14/types"
        },
        "self": {
          "href": "/api/v3/projects/14",
          "title": "test"
        },
        "memberships": {
          "href": "/api/v3/memberships?filters=%5B%7B%22project%22%3A%7B%22operator%22%3A%22%3D%22%2C%22values%22%3A%5B%2214%22%5D%7D%7D%5D"
        },
        "parent": {
          "href": null,
          "title": null
        },
        "delete": {
          "href": "/api/v3/projects/14",
          "method": "delete"
        },
        "update": {
          "href": "/api/v3/projects/14/form",
          "method": "post"
        },
        "schema": {
          "href": "/api/v3/projects/schema"
        },
        "categories": {
          "href": "/api/v3/projects/14/categories"
        },
        "workPackages": {
          "href": "/api/v3/projects/14/work_packages"
        },
        "createWorkPackage": {
          "href": "/api/v3/projects/14/work_packages/form",
          "method": "post"
        },
        "createWorkPackageImmediately": {
          "href": "/api/v3/projects/14/work_packages",
          "method": "post"
        }
      },
      "createdAt": "2020-08-19T12:10:18Z",
      "public": false,
      "_type": "Project",
      "description": {
        "raw": "",
        "format": "markdown",
        "html": ""
      },
      "identifier": "test",
      "updatedAt": "2020-09-03T07:23:14Z",
      "statusExplanation": {
        "raw": "",
        "format": "markdown",
        "html": ""
      }
    },
    "attachments": {
      "total": 0,
      "_type": "Collection",
      "_embedded": {
        "elements": []
      },
      "_links": {
        "self": {
          "href": "/api/v3/work_packages/477/attachments"
        }
      },
      "count": 0
    },
    "relations": {
      "total": 0,
      "_type": "Collection",
      "_embedded": {
        "elements": []
      },
      "_links": {
        "self": {
          "href": "/api/v3/work_packages/477/relations"
        }
      },
      "count": 0
    }
  },
  "_links": {
    "status": {
      "href": "/api/v3/statuses/1",
      "title": "Новая"
    },
    "customActions": [],
    "delete": {
      "href": "/api/v3/work_packages/477",
      "method": "delete"
    },
    "category": {
      "href": null
    },
    "logTime": {
      "href": "/work_packages/477/time_entries/new",
      "type": "text/html",
      "title": "Log time on parent"
    },
    "removeWatcher": {
      "href": "/api/v3/work_packages/477/watchers/{user_id}",
      "method": "delete",
      "templated": true
    },
    "previewMarkup": {
      "href": "/api/v3/render/markdown?context=/api/v3/work_packages/477",
      "method": "post"
    },
    "updateImmediately": {
      "href": "/api/v3/work_packages/477",
      "method": "patch"
    },
    "showCosts": {
      "href": "/work_packages/477/cost_entries",
      "type": "text/html",
      "title": "Show cost entries"
    },
    "parent": {
      "href": null,
      "title": null
    },
    "update": {
      "href": "/api/v3/work_packages/477/form",
      "method": "post"
    },
    "copy": {
      "href": "/work_packages/477/copy",
      "title": "Copy parent"
    },
    "availableRelationCandidates": {
      "href": "/api/v3/work_packages/477/available_relation_candidates",
      "title": "Potential work packages to relate to"
    },
    "pdf": {
      "href": "/work_packages/477.pdf",
      "type": "application/pdf",
      "title": "Export as PDF"
    },
    "version": {
      "href": null
    },
    "author": {
      "href": "/api/v3/users/2",
      "title": "OpenProject"
    },
    "availableWatchers": {
      "href": "/api/v3/work_packages/477/available_watchers"
    },
    "revisions": {
      "href": "/api/v3/work_packages/477/revisions"
    },
    "changeParent": {
      "href": "/api/v3/work_packages/477",
      "method": "patch",
      "title": "Change parent of parent"
    },
    "responsible": {
      "href": null
    },
    "addAttachment": {
      "href": "/api/v3/work_packages/477/attachments",
      "method": "post"
    },
    "move": {
      "href": "/work_packages/477/move/new",
      "type": "text/html",
      "title": "Move parent"
    },
    "priority": {
      "href": "/api/v3/priorities/8",
      "title": "Нормальный"
    },
    "ancestors": [{
      "href": "/api/v3/work_packages/470",
      "title": "child"
    }],
    "addRelation": {
      "href": "/api/v3/work_packages/477/relations",
      "method": "post",
      "title": "Add relation"
    },
    "activities": {
      "href": "/api/v3/work_packages/477/activities"
    },
    "timeEntries": {
      "href": "/work_packages/477/time_entries",
      "type": "text/html",
      "title": "Time entries"
    },
    "project": {
      "href": "/api/v3/projects/14",
      "title": "test"
    },
    "addWatcher": {
      "href": "/api/v3/work_packages/477/watchers",
      "method": "post",
      "payload": {
        "user": {
          "href": "/api/v3/users/{user_id}"
        }
      },
      "templated": true
    },
    "logCosts": {
      "href": "/work_packages/477/cost_entries/new",
      "type": "text/html",
      "title": "Log costs on parent"
    },
    "self": {
      "href": "/api/v3/work_packages/477",
      "title": "parent"
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
    "addChild": {
      "href": "/api/v3/projects/test/work_packages",
      "method": "post",
      "title": "Add child of parent"
    },
    "addComment": {
      "href": "/api/v3/work_packages/477/activities",
      "method": "post",
      "title": "Add comment"
    },
    "attachments": {
      "href": "/api/v3/work_packages/477/attachments"
    },
    "relations": {
      "href": "/api/v3/work_packages/477/relations"
    },
    "watchers": {
      "href": "/api/v3/work_packages/477/watchers"
    },
    "assignee": {
      "href": null
    },
    "schema": {
      "href": "/api/v3/work_packages/schemas/14-1"
    },
    "type": {
      "href": "/api/v3/types/1",
      "title": "Task"
    },
    "atom": {
      "href": "/work_packages/477.atom",
      "type": "application/rss+xml",
      "title": "Atom feed"
    },
    "convertBCF": {
      "href": "/api/bcf/2.1/projects/test/topics",
      "method": "post",
      "title": "Convert to BCF",
      "payload": {
        "reference_links": [
          "/api/v3/work_packages/477"
        ]
      }
    },
    "children": [
      {
        "href": "/api/v3/work_packages/480",
        "title": "child"
      }
    ],
  },
  "createdAt": "2020-09-10T12:35:54Z",
  "derivedEstimatedTime": null,
  "_type": "WorkPackage",
  "description": {
    "raw": "test task",
    "format": "markdown",
    "html": "<p>test task</p>"
  },
  "percentageDone": 0,
  "dueDate": null,
  "subject": "parent",
  "estimatedTime": null,
  "lockVersion": 2,
  "startDate": null,
  "updatedAt": "2020-09-10T13:06:32Z"
}

export default task;
