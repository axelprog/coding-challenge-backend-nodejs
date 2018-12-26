define({ "api": [
  {
    "type": "post",
    "url": "api/v1/bikes",
    "title": "Create",
    "description": "<p>Create new record about stolen bike</p>",
    "version": "1.0.0",
    "name": "create_bike",
    "group": "Bikes",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "responseCode",
            "description": "<p>HTTP Response Code</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<a href=\"#api-_Custom_types-ObjectBike\">Bike</a>",
            "optional": false,
            "field": "response.bike",
            "description": "<p>Bike</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ]
      }
    },
    "filename": "controllers/bikes.js",
    "groupTitle": "Bikes",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "license",
            "description": "<p>Bike license</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Bike color</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Bike type</p>"
          },
          {
            "group": "Request body",
            "type": "Date",
            "optional": false,
            "field": "stealDate",
            "description": "<p>Date of bike stolen</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "thiefDescription",
            "description": "<p>Description of thief</p>"
          },
          {
            "group": "Request body",
            "type": "Boolean",
            "optional": true,
            "field": "found",
            "description": "<p>Flag of found bike</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "optional": true,
            "field": "owner",
            "description": "<p>Id of owner</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "optional": true,
            "field": "handle",
            "description": "<p>Id of seeker</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "api/v1/bikes/:id",
    "title": "Delete",
    "description": "<p>Delete an exist record about stolen bike by bike id</p>",
    "version": "1.0.0",
    "name": "delete_bike",
    "group": "Bikes",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "responseCode",
            "description": "<p>HTTP Response Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ]
      }
    },
    "filename": "controllers/bikes.js",
    "groupTitle": "Bikes"
  },
  {
    "type": "get",
    "url": "api/v1/bikes/:id",
    "title": "Get",
    "description": "<p>Get an exist record about stolen bike by id</p>",
    "version": "1.0.0",
    "name": "get_bike_data",
    "group": "Bikes",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "responseCode",
            "description": "<p>HTTP Response Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "<a href=\"#api-_Custom_types-ObjectBike\">Bike</a>",
            "optional": false,
            "field": "response.bike",
            "description": "<p>Bike</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ]
      }
    },
    "filename": "controllers/bikes.js",
    "groupTitle": "Bikes"
  },
  {
    "type": "get",
    "url": "api/v1/bikes/list?limit=:limit&page=:page",
    "title": "Get List",
    "description": "<p>Get list of bikes with pagination</p>",
    "version": "1.0.0",
    "name": "get_list_of_bikes",
    "group": "Bikes",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>record count per page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>number of page</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "responseCode",
            "description": "<p>HTTP Response Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "<a href=\"#api-_Custom_types-ObjectBike\">Department[]</a>",
            "optional": false,
            "field": "response.bikes",
            "description": "<p>Response result</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "response.page",
            "description": "<p>Response page</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "response.limit",
            "description": "<p>Used limit</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "response.total",
            "description": "<p>Total users count</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ]
      }
    },
    "filename": "controllers/bikes.js",
    "groupTitle": "Bikes"
  },
  {
    "type": "put",
    "url": "api/v1/bikes/:id",
    "title": "Update",
    "description": "<p>Update an exist record about stolen bike</p>",
    "version": "1.0.0",
    "name": "update_bike",
    "group": "Bikes",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "responseCode",
            "description": "<p>HTTP Response Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "<a href=\"#api-_Custom_types-ObjectBike\">Bike</a>",
            "optional": false,
            "field": "response.bike",
            "description": "<p>Bike</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ]
      }
    },
    "filename": "controllers/bikes.js",
    "groupTitle": "Bikes",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "license",
            "description": "<p>Bike license</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Bike color</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Bike type</p>"
          },
          {
            "group": "Request body",
            "type": "Date",
            "optional": false,
            "field": "stealDate",
            "description": "<p>Date of bike stolen</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": true,
            "field": "thiefDescription",
            "description": "<p>Description of thief</p>"
          },
          {
            "group": "Request body",
            "type": "Boolean",
            "optional": true,
            "field": "found",
            "description": "<p>Flag of found bike</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "optional": true,
            "field": "owner",
            "description": "<p>Id of owner</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "optional": true,
            "field": "handle",
            "description": "<p>Id of seeker</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "api/v1/departments",
    "title": "Create",
    "description": "<p>Create new department</p>",
    "version": "1.0.0",
    "name": "create_department",
    "group": "Departments",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "responseCode",
            "description": "<p>HTTP Response Code</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<a href=\"#api-_Custom_types-ObjectDepartment\">Department</a>",
            "optional": false,
            "field": "response.department",
            "description": "<p>department</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ]
      }
    },
    "filename": "controllers/departments.js",
    "groupTitle": "Departments",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Department name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Department description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "api/v1/departments/:id",
    "title": "Delete",
    "description": "<p>Delete an exist department by id</p>",
    "version": "1.0.0",
    "name": "delete_department",
    "group": "Departments",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "responseCode",
            "description": "<p>HTTP Response Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ]
      }
    },
    "filename": "controllers/departments.js",
    "groupTitle": "Departments"
  },
  {
    "type": "get",
    "url": "api/v1/departments/:id",
    "title": "Get",
    "description": "<p>Get an exist department by id</p>",
    "version": "1.0.0",
    "name": "get_department_data",
    "group": "Departments",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "responseCode",
            "description": "<p>HTTP Response Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "<a href=\"#api-_Custom_types-ObjectDepartment\">Department</a>",
            "optional": false,
            "field": "response.department",
            "description": "<p>department</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ]
      }
    },
    "filename": "controllers/departments.js",
    "groupTitle": "Departments"
  },
  {
    "type": "get",
    "url": "api/v1/departments/list?limit=:limit&page=:page",
    "title": "Get List",
    "description": "<p>Get list of departments with pagination</p>",
    "version": "1.0.0",
    "name": "get_list_of_departments",
    "group": "Departments",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>record count per page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>number of page</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "responseCode",
            "description": "<p>HTTP Response Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "<a href=\"#_api-Custom_types-ObjectDepartment\">Department[]</a>",
            "optional": false,
            "field": "response.departments",
            "description": "<p>Response result</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "response.page",
            "description": "<p>Response page</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "response.limit",
            "description": "<p>Used limit</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "response.total",
            "description": "<p>Total users count</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ]
      }
    },
    "filename": "controllers/departments.js",
    "groupTitle": "Departments"
  },
  {
    "type": "put",
    "url": "api/v1/departments/:id",
    "title": "Update",
    "description": "<p>Update an exist department data</p>",
    "version": "1.0.0",
    "name": "update_department",
    "group": "Departments",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "responseCode",
            "description": "<p>HTTP Response Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "<a href=\"#api-_Custom_types-ObjectDepartment\">Department</a>",
            "optional": false,
            "field": "response.department",
            "description": "<p>department</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ]
      }
    },
    "filename": "controllers/departments.js",
    "groupTitle": "Departments",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Department name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Department description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "api/v1/users",
    "title": "Create",
    "description": "<p>Create new user</p>",
    "version": "1.0.0",
    "name": "create_user",
    "group": "Users",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "responseCode",
            "description": "<p>HTTP Response Code</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 201",
            "type": "<a href=\"#api-_Custom_types-ObjectUser\">User</a>",
            "optional": false,
            "field": "response.user",
            "description": "<p>user</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<a href=\"#api-_Custom_types-ObjectUser\">User</a>",
            "optional": false,
            "field": "response.user",
            "description": "<p>user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ]
      }
    },
    "filename": "controllers/users.js",
    "groupTitle": "Users",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User first name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User last naem</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email for login</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "allowedValues": [
              "\"admin\"",
              "\"manager\"",
              "\"police\"",
              "\"user\""
            ],
            "optional": false,
            "field": "role",
            "description": "<p>Possible user roles</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "department",
            "description": "<p>Id of department where work a policeman</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "api/v1/users/:id",
    "title": "Delete",
    "description": "<p>Delete an exist user by id</p>",
    "version": "1.0.0",
    "name": "delete_user",
    "group": "Users",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "responseCode",
            "description": "<p>HTTP Response Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ]
      }
    },
    "filename": "controllers/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "api/v1/users/list?limit=:limit&page=:page",
    "title": "Get List",
    "description": "<p>Get list of users with pagination</p>",
    "version": "1.0.0",
    "name": "get_list_of_user",
    "group": "Users",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>record count per page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>number of page</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "responseCode",
            "description": "<p>HTTP Response Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "<a href=\"#api-_Custom_types-ObjectUser\">User[]</a>",
            "optional": false,
            "field": "response.users",
            "description": "<p>Response result</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "response.page",
            "description": "<p>Response page</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "response.limit",
            "description": "<p>Used limit</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "response.total",
            "description": "<p>Total users count</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ]
      }
    },
    "filename": "controllers/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "api/v1/users/:id",
    "title": "Get",
    "description": "<p>Get an exist user by id</p>",
    "version": "1.0.0",
    "name": "get_user_data",
    "group": "Users",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "responseCode",
            "description": "<p>HTTP Response Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "<a href=\"#api-_Custom_types-ObjectUser\">User</a>",
            "optional": false,
            "field": "response.user",
            "description": "<p>user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ]
      }
    },
    "filename": "controllers/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "api/v1/users/:id",
    "title": "Update",
    "description": "<p>Update an exist user data</p>",
    "version": "1.0.0",
    "name": "update_user",
    "group": "Users",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "responseCode",
            "description": "<p>HTTP Response Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "<a href=\"#api-_Custom_types-ObjectUser\">User</a>",
            "optional": false,
            "field": "response.user",
            "description": "<p>user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ]
      }
    },
    "filename": "controllers/users.js",
    "groupTitle": "Users",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User first name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User last naem</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email for login</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "allowedValues": [
              "\"admin\"",
              "\"manager\"",
              "\"police\"",
              "\"user\""
            ],
            "optional": false,
            "field": "role",
            "description": "<p>Possible user roles</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "department",
            "description": "<p>Id of department where work a policeman</p>"
          }
        ]
      }
    }
  },
  {
    "type": "OBJECT",
    "url": "Bike",
    "title": "Bike",
    "version": "1.0.0",
    "group": "_Custom_types",
    "filename": "controllers/bikes.js",
    "groupTitle": "_Custom_types",
    "name": "ObjectBike",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Department name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Department description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "OBJECT",
    "url": "Department",
    "title": "Department",
    "version": "1.0.0",
    "group": "_Custom_types",
    "filename": "controllers/departments.js",
    "groupTitle": "_Custom_types",
    "name": "ObjectDepartment",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Department name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Department description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "OBJECT",
    "url": "User",
    "title": "User",
    "version": "1.0.0",
    "group": "_Custom_types",
    "filename": "controllers/users.js",
    "groupTitle": "_Custom_types",
    "name": "ObjectUser",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User first name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User last naem</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email for login</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "allowedValues": [
              "\"admin\"",
              "\"manager\"",
              "\"police\"",
              "\"user\""
            ],
            "optional": false,
            "field": "role",
            "description": "<p>Possible user roles</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "department",
            "description": "<p>Id of department where work a policeman</p>"
          }
        ]
      }
    }
  }
] });
