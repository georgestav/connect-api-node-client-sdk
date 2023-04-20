export * from './CreateUserDto';
export * from './InlineResponse200';
export * from './InlineResponse2001';
export * from './InlineResponse400';
export * from './InlineResponse401';
export * from './InlineResponse404';
export * from './InlineResponse409';
export * from './InlineResponse429';
export * from './InlineResponse500';
export * from './LoginDto';
export * from './RefreshTokenDto';
export * from './UpdateUserDto';
export * from './User';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string, format: string): any;
    static deserialize(data: any, type: string, format: string): any;
    static normalizeMediaType(mediaType: string | undefined): string | undefined;
    static getPreferredMediaType(mediaTypes: Array<string>): string;
    static stringify(data: any, mediaType: string): string;
    static parse(rawData: string, mediaType: string | undefined): any;
}
