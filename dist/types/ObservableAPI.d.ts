import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { CreateUserDto } from '../models/CreateUserDto';
import { GetAccessDto } from '../models/GetAccessDto';
import { RegisterDto } from '../models/RegisterDto';
import { AuthApiRequestFactory, AuthApiResponseProcessor } from "../apis/AuthApi";
export declare class ObservableAuthApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor);
    authControllerConfirmEmail(token: string, options?: Configuration): Observable<void>;
    authControllerConfirmPostEmail(options?: Configuration): Observable<void>;
    authControllerGetUserDetails(authorization: string, options?: Configuration): Observable<void>;
    authControllerLogin(body: any, options?: Configuration): Observable<void>;
    authControllerLoginSocial(options?: Configuration): Observable<void>;
    authControllerRegister(registerDto: RegisterDto, options?: Configuration): Observable<void>;
    authControllerValidateToken(options?: Configuration): Observable<void>;
}
import { InfoApiRequestFactory, InfoApiResponseProcessor } from "../apis/InfoApi";
export declare class ObservableInfoApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: InfoApiRequestFactory, responseProcessor?: InfoApiResponseProcessor);
    appControllerGetInfo(options?: Configuration): Observable<void>;
    appControllerGetRegistration(options?: Configuration): Observable<void>;
    appControllerHealth(options?: Configuration): Observable<void>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export declare class ObservableUsersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    usersControllerCreateUser(createUserDto: CreateUserDto, options?: Configuration): Observable<void>;
    usersControllerDeleteUser(id: string, options?: Configuration): Observable<void>;
    usersControllerFindAll(options?: Configuration): Observable<void>;
    usersControllerFindByEmail(email: string, options?: Configuration): Observable<void>;
    usersControllerFindById(id: string, options?: Configuration): Observable<void>;
    usersControllerFindByUserName(username: string, options?: Configuration): Observable<void>;
    usersControllerGetAccessUserAccess(getAccessDto: GetAccessDto, options?: Configuration): Observable<void>;
    usersControllerUpdateUser(id: string, createUserDto: CreateUserDto, options?: Configuration): Observable<void>;
}
