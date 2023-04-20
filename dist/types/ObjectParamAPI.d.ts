import { Configuration } from '../configuration';
import { CreateUserDto } from '../models/CreateUserDto';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { LoginDto } from '../models/LoginDto';
import { RefreshTokenDto } from '../models/RefreshTokenDto';
import { UpdateUserDto } from '../models/UpdateUserDto';
import { User } from '../models/User';
import { AuthApiRequestFactory, AuthApiResponseProcessor } from "../apis/AuthApi";
export interface AuthApiAuthControllerLoginRequest {
    loginDto: LoginDto;
}
export interface AuthApiAuthControllerLogoutRequest {
}
export interface AuthApiAuthControllerRefreshTokenRequest {
    refreshTokenDto: RefreshTokenDto;
}
export declare class ObjectAuthApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor);
    authControllerLogin(param: AuthApiAuthControllerLoginRequest, options?: Configuration): Promise<InlineResponse200>;
    authControllerLogout(param: AuthApiAuthControllerLogoutRequest, options?: Configuration): Promise<InlineResponse2001>;
    authControllerRefreshToken(param: AuthApiAuthControllerRefreshTokenRequest, options?: Configuration): Promise<void>;
}
import { InfoApiRequestFactory, InfoApiResponseProcessor } from "../apis/InfoApi";
export interface InfoApiAppControllerGetInfoRequest {
}
export interface InfoApiAppControllerGetRegistrationRequest {
}
export interface InfoApiAppControllerHealthRequest {
}
export declare class ObjectInfoApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: InfoApiRequestFactory, responseProcessor?: InfoApiResponseProcessor);
    appControllerGetInfo(param: InfoApiAppControllerGetInfoRequest, options?: Configuration): Promise<any>;
    appControllerGetRegistration(param: InfoApiAppControllerGetRegistrationRequest, options?: Configuration): Promise<any>;
    appControllerHealth(param: InfoApiAppControllerHealthRequest, options?: Configuration): Promise<string>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export interface UsersApiUserControllerConfirmEmailRequest {
    token: string;
}
export interface UsersApiUserControllerDevelopersOnlyRequest {
}
export interface UsersApiUserControllerRegisterRequest {
    createUserDto: CreateUserDto;
}
export interface UsersApiUserControllerUpdateUserRequest {
    updateUserDto: UpdateUserDto;
}
export declare class ObjectUsersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    userControllerConfirmEmail(param: UsersApiUserControllerConfirmEmailRequest, options?: Configuration): Promise<void>;
    userControllerDevelopersOnly(param: UsersApiUserControllerDevelopersOnlyRequest, options?: Configuration): Promise<string>;
    userControllerRegister(param: UsersApiUserControllerRegisterRequest, options?: Configuration): Promise<User>;
    userControllerUpdateUser(param: UsersApiUserControllerUpdateUserRequest, options?: Configuration): Promise<User>;
}
