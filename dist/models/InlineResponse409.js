"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse409 = void 0;
var InlineResponse409 = (function () {
    function InlineResponse409() {
    }
    InlineResponse409.getAttributeTypeMap = function () {
        return InlineResponse409.attributeTypeMap;
    };
    InlineResponse409.discriminator = undefined;
    InlineResponse409.attributeTypeMap = [
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
    return InlineResponse409;
}());
exports.InlineResponse409 = InlineResponse409;
//# sourceMappingURL=InlineResponse409.js.map