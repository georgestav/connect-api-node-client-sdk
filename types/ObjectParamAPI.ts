import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CreateUserDto } from '../models/CreateUserDto';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse400 } from '../models/InlineResponse400';
import { InlineResponse401 } from '../models/InlineResponse401';
import { InlineResponse404 } from '../models/InlineResponse404';
import { InlineResponse409 } from '../models/InlineResponse409';
import { InlineResponse429 } from '../models/InlineResponse429';
import { InlineResponse500 } from '../models/InlineResponse500';
import { LoginDto } from '../models/LoginDto';
import { RefreshTokenDto } from '../models/RefreshTokenDto';
import { UpdateUserDto } from '../models/UpdateUserDto';
import { User } from '../models/User';

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiAuthControllerLoginRequest {
    /**
     * 
     * @type LoginDto
     * @memberof AuthApiauthControllerLogin
     */
    loginDto: LoginDto
}

export interface AuthApiAuthControllerLogoutRequest {
}

export interface AuthApiAuthControllerRefreshTokenRequest {
    /**
     * 
     * @type RefreshTokenDto
     * @memberof AuthApiauthControllerRefreshToken
     */
    refreshTokenDto: RefreshTokenDto
}


export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * User login
     * @param param the request object
     */
    public authControllerLogin(param: AuthApiAuthControllerLoginRequest, options?: Configuration): Promise<InlineResponse200> {
        return this.api.authControllerLogin(param.loginDto,  options).toPromise();
    }
	
    /**
     * Log out a user and revoke their access and refresh tokens
     * @param param the request object
     */
    public authControllerLogout(param: AuthApiAuthControllerLogoutRequest, options?: Configuration): Promise<InlineResponse2001> {
        return this.api.authControllerLogout( options).toPromise();
    }
	
    /**
     * Refresh the access token using a refresh token
     * @param param the request object
     */
    public authControllerRefreshToken(param: AuthApiAuthControllerRefreshTokenRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerRefreshToken(param.refreshTokenDto,  options).toPromise();
    }
	

}




import { ObservableInfoApi } from "./ObservableAPI";
import { InfoApiRequestFactory, InfoApiResponseProcessor} from "../apis/InfoApi";

export interface InfoApiAppControllerGetInfoRequest {
}

export interface InfoApiAppControllerGetRegistrationRequest {
}

export interface InfoApiAppControllerHealthRequest {
}


export class ObjectInfoApi {
    private api: ObservableInfoApi

    public constructor(configuration: Configuration, requestFactory?: InfoApiRequestFactory, responseProcessor?: InfoApiResponseProcessor) {
        this.api = new ObservableInfoApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public appControllerGetInfo(param: InfoApiAppControllerGetInfoRequest, options?: Configuration): Promise<any> {
        return this.api.appControllerGetInfo( options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public appControllerGetRegistration(param: InfoApiAppControllerGetRegistrationRequest, options?: Configuration): Promise<any> {
        return this.api.appControllerGetRegistration( options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public appControllerHealth(param: InfoApiAppControllerHealthRequest, options?: Configuration): Promise<string> {
        return this.api.appControllerHealth( options).toPromise();
    }
	

}




import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiUserControllerConfirmEmailRequest {
    /**
     * Email confirmation token
     * @type string
     * @memberof UsersApiuserControllerConfirmEmail
     */
    token: string
}

export interface UsersApiUserControllerDevelopersOnlyRequest {
}

export interface UsersApiUserControllerRegisterRequest {
    /**
     * User registration data
     * @type CreateUserDto
     * @memberof UsersApiuserControllerRegister
     */
    createUserDto: CreateUserDto
}

export interface UsersApiUserControllerUpdateUserRequest {
    /**
     * 
     * @type UpdateUserDto
     * @memberof UsersApiuserControllerUpdateUser
     */
    updateUserDto: UpdateUserDto
}


export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public userControllerConfirmEmail(param: UsersApiUserControllerConfirmEmailRequest, options?: Configuration): Promise<void> {
        return this.api.userControllerConfirmEmail(param.token,  options).toPromise();
    }
	
    /**
     * Requires DEVELOPER role
     * Endpoint accessible only by developers
     * @param param the request object
     */
    public userControllerDevelopersOnly(param: UsersApiUserControllerDevelopersOnlyRequest, options?: Configuration): Promise<string> {
        return this.api.userControllerDevelopersOnly( options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public userControllerRegister(param: UsersApiUserControllerRegisterRequest, options?: Configuration): Promise<User> {
        return this.api.userControllerRegister(param.createUserDto,  options).toPromise();
    }
	
    /**
     * Update user details
     * @param param the request object
     */
    public userControllerUpdateUser(param: UsersApiUserControllerUpdateUserRequest, options?: Configuration): Promise<User> {
        return this.api.userControllerUpdateUser(param.updateUserDto,  options).toPromise();
    }
	

}



