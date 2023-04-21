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

/**
* Login Tokens
*/
export class InlineResponse200 {
    'accessToken'?: string;
    'refreshToken'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse200.attributeTypeMap;
    }
    
    public constructor() {
    }
}

