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
        }
    ];
    return CreateUserDto;
}());
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=CreateUserDto.js.map