"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = (function () {
    function User() {
    }
    User.getAttributeTypeMap = function () {
        return User.attributeTypeMap;
    };
    User.discriminator = undefined;
    User.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<UserRolesEnum>",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "emailVerified",
            "baseName": "emailVerified",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "emailVerificationToken",
            "baseName": "emailVerificationToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "emailVerificationTokenExpiry",
            "baseName": "emailVerificationTokenExpiry",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "refreshToken",
            "baseName": "refreshToken",
            "type": "string",
            "format": ""
        }
    ];
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map