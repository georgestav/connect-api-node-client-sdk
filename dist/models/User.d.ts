export declare class User {
    'id': string;
    'email': string;
    'password': string;
    'roles': Array<UserRolesEnum>;
    'firstName'?: string;
    'lastName'?: string;
    'createdAt': Date;
    'updatedAt': Date;
    'emailVerified': boolean;
    'emailVerificationToken'?: string;
    'emailVerificationTokenExpiry'?: Date;
    'refreshToken'?: string;
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
export declare type UserRolesEnum = "client" | "tester" | "developer";
