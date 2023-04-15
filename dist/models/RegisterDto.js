"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterDto = void 0;
var RegisterDto = (function () {
    function RegisterDto() {
    }
    RegisterDto.getAttributeTypeMap = function () {
        return RegisterDto.attributeTypeMap;
    };
    RegisterDto.discriminator = undefined;
    RegisterDto.attributeTypeMap = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        }
    ];
    return RegisterDto;
}());
exports.RegisterDto = RegisterDto;
//# sourceMappingURL=RegisterDto.js.map