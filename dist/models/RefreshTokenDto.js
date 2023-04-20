"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenDto = void 0;
var RefreshTokenDto = (function () {
    function RefreshTokenDto() {
    }
    RefreshTokenDto.getAttributeTypeMap = function () {
        return RefreshTokenDto.attributeTypeMap;
    };
    RefreshTokenDto.discriminator = undefined;
    RefreshTokenDto.attributeTypeMap = [
        {
            "name": "refreshToken",
            "baseName": "refresh_token",
            "type": "string",
            "format": ""
        }
    ];
    return RefreshTokenDto;
}());
exports.RefreshTokenDto = RefreshTokenDto;
//# sourceMappingURL=RefreshTokenDto.js.map