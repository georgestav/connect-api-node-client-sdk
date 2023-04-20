import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { CreateUserDto } from '../models/CreateUserDto';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { LoginDto } from '../models/LoginDto';
import { RefreshTokenDto } from '../models/RefreshTokenDto';
import { UpdateUserDto } from '../models/UpdateUserDto';
import { User } from '../models/User';
import { AuthApiRequestFactory, AuthApiResponseProcessor } from "../apis/AuthApi";
export declare class ObservableAuthApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor);
    authControllerLogin(loginDto: LoginDto, options?: Configuration): Observable<InlineResponse200>;
    authControllerLogout(options?: Configuration): Observable<InlineResponse2001>;
    authControllerRefreshToken(refreshTokenDto: RefreshTokenDto, options?: Configuration): Observable<void>;
}
import { InfoApiRequestFactory, InfoApiResponseProcessor } from "../apis/InfoApi";
export declare class ObservableInfoApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: InfoApiRequestFactory, responseProcessor?: InfoApiResponseProcessor);
    appControllerGetInfo(options?: Configuration): Observable<any>;
    appControllerGetRegistration(options?: Configuration): Observable<any>;
    appControllerHealth(options?: Configuration): Observable<string>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export declare class ObservableUsersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    userControllerConfirmEmail(token: string, options?: Configuration): Observable<void>;
    userControllerDevelopersOnly(options?: Configuration): Observable<string>;
    userControllerRegister(createUserDto: CreateUserDto, options?: Configuration): Observable<User>;
    userControllerUpdateUser(updateUserDto: UpdateUserDto, options?: Configuration): Observable<User>;
}
