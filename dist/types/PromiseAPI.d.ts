import { Configuration } from '../configuration';
import { CreateUserDto } from '../models/CreateUserDto';
import { GetAccessDto } from '../models/GetAccessDto';
import { RegisterDto } from '../models/RegisterDto';
import { AuthApiRequestFactory, AuthApiResponseProcessor } from "../apis/AuthApi";
export declare class PromiseAuthApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor);
    authControllerConfirmEmail(token: string, options?: Configuration): Promise<void>;
    authControllerConfirmPostEmail(options?: Configuration): Promise<void>;
    authControllerGetUserDetails(authorization: string, options?: Configuration): Promise<void>;
    authControllerLogin(body: any, options?: Configuration): Promise<void>;
    authControllerLoginSocial(options?: Configuration): Promise<void>;
    authControllerRegister(registerDto: RegisterDto, options?: Configuration): Promise<void>;
    authControllerValidateToken(options?: Configuration): Promise<void>;
}
import { InfoApiRequestFactory, InfoApiResponseProcessor } from "../apis/InfoApi";
export declare class PromiseInfoApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: InfoApiRequestFactory, responseProcessor?: InfoApiResponseProcessor);
    appControllerGetInfo(options?: Configuration): Promise<void>;
    appControllerGetRegistration(options?: Configuration): Promise<void>;
    appControllerHealth(options?: Configuration): Promise<void>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export declare class PromiseUsersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    usersControllerCreateUser(createUserDto: CreateUserDto, options?: Configuration): Promise<void>;
    usersControllerDeleteUser(id: string, options?: Configuration): Promise<void>;
    usersControllerFindAll(options?: Configuration): Promise<void>;
    usersControllerFindByEmail(email: string, options?: Configuration): Promise<void>;
    usersControllerFindById(id: string, options?: Configuration): Promise<void>;
    usersControllerFindByUserName(username: string, options?: Configuration): Promise<void>;
    usersControllerGetAccessUserAccess(getAccessDto: GetAccessDto, options?: Configuration): Promise<void>;
    usersControllerUpdateUser(id: string, createUserDto: CreateUserDto, options?: Configuration): Promise<void>;
}
