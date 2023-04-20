"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse400 = void 0;
var InlineResponse400 = (function () {
    function InlineResponse400() {
    }
    InlineResponse400.getAttributeTypeMap = function () {
        return InlineResponse400.attributeTypeMap;
    };
    InlineResponse400.discriminator = undefined;
    InlineResponse400.attributeTypeMap = [
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
    return InlineResponse400;
}());
exports.InlineResponse400 = InlineResponse400;
//# sourceMappingURL=InlineResponse400.js.map