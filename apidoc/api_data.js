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
          }
        ]
      }
    }
  }
] });
