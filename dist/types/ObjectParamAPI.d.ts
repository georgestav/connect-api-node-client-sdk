import { Configuration } from '../configuration';
import { CreateUserDto } from '../models/CreateUserDto';
import { GetAccessDto } from '../models/GetAccessDto';
import { RegisterDto } from '../models/RegisterDto';
import { AuthApiRequestFactory, AuthApiResponseProcessor } from "../apis/AuthApi";
export interface AuthApiAuthControllerConfirmEmailRequest {
    token: string;
}
export interface AuthApiAuthControllerConfirmPostEmailRequest {
}
export interface AuthApiAuthControllerGetUserDetailsRequest {
    authorization: string;
}
export interface AuthApiAuthControllerLoginRequest {
    body: any;
}
export interface AuthApiAuthControllerLoginSocialRequest {
}
export interface AuthApiAuthControllerRegisterRequest {
    registerDto: RegisterDto;
}
export interface AuthApiAuthControllerValidateTokenRequest {
}
export declare class ObjectAuthApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor);
    authControllerConfirmEmail(param: AuthApiAuthControllerConfirmEmailRequest, options?: Configuration): Promise<void>;
    authControllerConfirmPostEmail(param: AuthApiAuthControllerConfirmPostEmailRequest, options?: Configuration): Promise<void>;
    authControllerGetUserDetails(param: AuthApiAuthControllerGetUserDetailsRequest, options?: Configuration): Promise<void>;
    authControllerLogin(param: AuthApiAuthControllerLoginRequest, options?: Configuration): Promise<void>;
    authControllerLoginSocial(param: AuthApiAuthControllerLoginSocialRequest, options?: Configuration): Promise<void>;
    authControllerRegister(param: AuthApiAuthControllerRegisterRequest, options?: Configuration): Promise<void>;
    authControllerValidateToken(param: AuthApiAuthControllerValidateTokenRequest, options?: Configuration): Promise<void>;
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
    appControllerGetInfo(param: InfoApiAppControllerGetInfoRequest, options?: Configuration): Promise<void>;
    appControllerGetRegistration(param: InfoApiAppControllerGetRegistrationRequest, options?: Configuration): Promise<void>;
    appControllerHealth(param: InfoApiAppControllerHealthRequest, options?: Configuration): Promise<void>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export interface UsersApiUsersControllerCreateUserRequest {
    createUserDto: CreateUserDto;
}
export interface UsersApiUsersControllerDeleteUserRequest {
    id: string;
}
export interface UsersApiUsersControllerFindAllRequest {
}
export interface UsersApiUsersControllerFindByEmailRequest {
    email: string;
}
export interface UsersApiUsersControllerFindByIdRequest {
    id: string;
}
export interface UsersApiUsersControllerFindByUserNameRequest {
    username: string;
}
export interface UsersApiUsersControllerGetAccessUserAccessRequest {
    getAccessDto: GetAccessDto;
}
export interface UsersApiUsersControllerUpdateUserRequest {
    id: string;
    createUserDto: CreateUserDto;
}
export declare class ObjectUsersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    usersControllerCreateUser(param: UsersApiUsersControllerCreateUserRequest, options?: Configuration): Promise<void>;
    usersControllerDeleteUser(param: UsersApiUsersControllerDeleteUserRequest, options?: Configuration): Promise<void>;
    usersControllerFindAll(param: UsersApiUsersControllerFindAllRequest, options?: Configuration): Promise<void>;
    usersControllerFindByEmail(param: UsersApiUsersControllerFindByEmailRequest, options?: Configuration): Promise<void>;
    usersControllerFindById(param: UsersApiUsersControllerFindByIdRequest, options?: Configuration): Promise<void>;
    usersControllerFindByUserName(param: UsersApiUsersControllerFindByUserNameRequest, options?: Configuration): Promise<void>;
    usersControllerGetAccessUserAccess(param: UsersApiUsersControllerGetAccessUserAccessRequest, options?: Configuration): Promise<void>;
    usersControllerUpdateUser(param: UsersApiUsersControllerUpdateUserRequest, options?: Configuration): Promise<void>;
}
