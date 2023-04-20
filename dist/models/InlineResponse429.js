"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse429 = void 0;
var InlineResponse429 = (function () {
    function InlineResponse429() {
    }
    InlineResponse429.getAttributeTypeMap = function () {
        return InlineResponse429.attributeTypeMap;
    };
    InlineResponse429.discriminator = undefined;
    InlineResponse429.attributeTypeMap = [
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
    return InlineResponse429;
}());
exports.InlineResponse429 = InlineResponse429;
//# sourceMappingURL=InlineResponse429.js.map