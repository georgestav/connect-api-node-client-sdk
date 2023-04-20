"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDto = void 0;
var LoginDto = (function () {
    function LoginDto() {
    }
    LoginDto.getAttributeTypeMap = function () {
        return LoginDto.attributeTypeMap;
    };
    LoginDto.discriminator = undefined;
    LoginDto.attributeTypeMap = [
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
    return LoginDto;
}());
exports.LoginDto = LoginDto;
//# sourceMappingURL=LoginDto.js.map