/**
 * Connect Api
 * Connect API documentation, Global rate limiting is applied: 100 requests per minute.
 *
 * OpenAPI spec version: 1.1.12-0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class InlineResponse2001 {
    'message'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2001.attributeTypeMap;
    }
    
    public constructor() {
    }
}

