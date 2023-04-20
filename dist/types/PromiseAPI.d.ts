import { Configuration } from '../configuration';
import { CreateUserDto } from '../models/CreateUserDto';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { LoginDto } from '../models/LoginDto';
import { RefreshTokenDto } from '../models/RefreshTokenDto';
import { UpdateUserDto } from '../models/UpdateUserDto';
import { User } from '../models/User';
import { AuthApiRequestFactory, AuthApiResponseProcessor } from "../apis/AuthApi";
export declare class PromiseAuthApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor);
    authControllerLogin(loginDto: LoginDto, options?: Configuration): Promise<InlineResponse200>;
    authControllerLogout(options?: Configuration): Promise<InlineResponse2001>;
    authControllerRefreshToken(refreshTokenDto: RefreshTokenDto, options?: Configuration): Promise<void>;
}
import { InfoApiRequestFactory, InfoApiResponseProcessor } from "../apis/InfoApi";
export declare class PromiseInfoApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: InfoApiRequestFactory, responseProcessor?: InfoApiResponseProcessor);
    appControllerGetInfo(options?: Configuration): Promise<any>;
    appControllerGetRegistration(options?: Configuration): Promise<any>;
    appControllerHealth(options?: Configuration): Promise<string>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export declare class PromiseUsersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    userControllerConfirmEmail(token: string, options?: Configuration): Promise<void>;
    userControllerDevelopersOnly(options?: Configuration): Promise<string>;
    userControllerRegister(createUserDto: CreateUserDto, options?: Configuration): Promise<User>;
    userControllerUpdateUser(updateUserDto: UpdateUserDto, options?: Configuration): Promise<User>;
}
