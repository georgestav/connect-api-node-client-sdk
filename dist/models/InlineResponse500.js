"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse500 = void 0;
var InlineResponse500 = (function () {
    function InlineResponse500() {
    }
    InlineResponse500.getAttributeTypeMap = function () {
        return InlineResponse500.attributeTypeMap;
    };
    InlineResponse500.discriminator = undefined;
    InlineResponse500.attributeTypeMap = [
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
    return InlineResponse500;
}());
exports.InlineResponse500 = InlineResponse500;
//# sourceMappingURL=InlineResponse500.js.map