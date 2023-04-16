/**
 * Connect Api
 * Connect API documentation
 *
 * OpenAPI spec version: 1.1.12-0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class CreateUserDto {
    'id': string;
    'name'?: string;
    'username': string;
    'email': string;
    'password'?: string;
    'emailValidated'?: boolean;
    'accessToken'?: string;
    'isRegisteredWithSocial'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        },
        {
            "name": "emailValidated",
            "baseName": "emailValidated",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "accessToken",
            "baseName": "accessToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "isRegisteredWithSocial",
            "baseName": "isRegisteredWithSocial",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateUserDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}

