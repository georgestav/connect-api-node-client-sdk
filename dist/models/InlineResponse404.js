"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse404 = void 0;
var InlineResponse404 = (function () {
    function InlineResponse404() {
    }
    InlineResponse404.getAttributeTypeMap = function () {
        return InlineResponse404.attributeTypeMap;
    };
    InlineResponse404.discriminator = undefined;
    InlineResponse404.attributeTypeMap = [
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
    return InlineResponse404;
}());
exports.InlineResponse404 = InlineResponse404;
//# sourceMappingURL=InlineResponse404.js.map