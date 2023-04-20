"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse200 = void 0;
var InlineResponse200 = (function () {
    function InlineResponse200() {
    }
    InlineResponse200.getAttributeTypeMap = function () {
        return InlineResponse200.attributeTypeMap;
    };
    InlineResponse200.discriminator = undefined;
    InlineResponse200.attributeTypeMap = [
        {
            "name": "accessToken",
            "baseName": "access_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "refreshToken",
            "baseName": "refresh_token",
            "type": "string",
            "format": ""
        }
    ];
    return InlineResponse200;
}());
exports.InlineResponse200 = InlineResponse200;
//# sourceMappingURL=InlineResponse200.js.map