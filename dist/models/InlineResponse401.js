"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse401 = void 0;
var InlineResponse401 = (function () {
    function InlineResponse401() {
    }
    InlineResponse401.getAttributeTypeMap = function () {
        return InlineResponse401.attributeTypeMap;
    };
    InlineResponse401.discriminator = undefined;
    InlineResponse401.attributeTypeMap = [
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        }
    ];
    return InlineResponse401;
}());
exports.InlineResponse401 = InlineResponse401;
//# sourceMappingURL=InlineResponse401.js.map