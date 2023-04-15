"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
var CreateUserDto = (function () {
    function CreateUserDto() {
    }
    CreateUserDto.getAttributeTypeMap = function () {
        return CreateUserDto.attributeTypeMap;
    };
    CreateUserDto.discriminator = undefined;
    CreateUserDto.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "username",
            "baseName": "username",
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
            "name": "emailValidated",
            "baseName": "emailValidated",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "accessToken",
            "baseName": "accessToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "isRegisteredWithSocial",
            "baseName": "isRegisteredWithSocial",
            "type": "boolean",
            "format": ""
        }
    ];
    return CreateUserDto;
}());
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=CreateUserDto.js.map