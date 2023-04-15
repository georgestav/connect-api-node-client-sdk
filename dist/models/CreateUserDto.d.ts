export declare class CreateUserDto {
    'id': string;
    'name'?: string;
    'username': string;
    'email': string;
    'password'?: string;
    'emailValidated'?: boolean;
    'accessToken'?: string;
    'isRegisteredWithSocial'?: boolean;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
