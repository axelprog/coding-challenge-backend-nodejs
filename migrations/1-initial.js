'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Departments", deps: []
 * createTable "Users", deps: [Departments]
 * createTable "Bikes", deps: [Users, Users]
 *
 **/

var info = {
    "revision": 1,
    "name": "initial",
    "created": "2018-12-20T12:29:43.157Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Departments",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING
                },
                "description": {
                    "type": Sequelize.TEXT
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Users",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "firstName": {
                    "type": Sequelize.STRING
                },
                "lastName": {
                    "type": Sequelize.STRING
                },
                "email": {
                    "type": Sequelize.STRING
                },
                "password": {
                    "type": Sequelize.STRING
                },
                "role": {
                    "type": Sequelize.ENUM('admin', 'manager', 'police', 'user')
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "department": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "Departments",
                        "key": "id"
                    },
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Bikes",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "license": {
                    "type": Sequelize.STRING
                },
                "color": {
                    "type": Sequelize.STRING
                },
                "type": {
                    "type": Sequelize.STRING
                },
                "stealDate": {
                    "type": Sequelize.DATE
                },
                "thiefDescription": {
                    "type": Sequelize.TEXT
                },
                "found": {
                    "type": Sequelize.BOOLEAN,
                    "allowNull": false,
                    "defaultValue": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "owner": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "Users",
                        "key": "id"
                    },
                    "allowNull": true
                },
                "handle": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "Users",
                        "key": "id"
                    },
                    "allowNull": true
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
