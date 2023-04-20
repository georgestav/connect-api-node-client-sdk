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
import { ObservableAuthApi } from './ObservableAPI';


import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * User login
     * @param loginDto 
     */
    public authControllerLogin(loginDto: LoginDto, options?: Configuration): Promise<InlineResponse200> {
    	const result = this.api.authControllerLogin(loginDto, options);
        return result.toPromise();
    }
	
    /**
     * Log out a user and revoke their access and refresh tokens
     */
    public authControllerLogout(options?: Configuration): Promise<InlineResponse2001> {
    	const result = this.api.authControllerLogout(options);
        return result.toPromise();
    }
	
    /**
     * Refresh the access token using a refresh token
     * @param refreshTokenDto 
     */
    public authControllerRefreshToken(refreshTokenDto: RefreshTokenDto, options?: Configuration): Promise<void> {
    	const result = this.api.authControllerRefreshToken(refreshTokenDto, options);
        return result.toPromise();
    }
	

}



import { ObservableInfoApi } from './ObservableAPI';


import { InfoApiRequestFactory, InfoApiResponseProcessor} from "../apis/InfoApi";
export class PromiseInfoApi {
    private api: ObservableInfoApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InfoApiRequestFactory,
        responseProcessor?: InfoApiResponseProcessor
    ) {
        this.api = new ObservableInfoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public appControllerGetInfo(options?: Configuration): Promise<any> {
    	const result = this.api.appControllerGetInfo(options);
        return result.toPromise();
    }
	
    /**
     */
    public appControllerGetRegistration(options?: Configuration): Promise<any> {
    	const result = this.api.appControllerGetRegistration(options);
        return result.toPromise();
    }
	
    /**
     */
    public appControllerHealth(options?: Configuration): Promise<string> {
    	const result = this.api.appControllerHealth(options);
        return result.toPromise();
    }
	

}



import { ObservableUsersApi } from './ObservableAPI';


import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param token Email confirmation token
     */
    public userControllerConfirmEmail(token: string, options?: Configuration): Promise<void> {
    	const result = this.api.userControllerConfirmEmail(token, options);
        return result.toPromise();
    }
	
    /**
     * Requires DEVELOPER role
     * Endpoint accessible only by developers
     */
    public userControllerDevelopersOnly(options?: Configuration): Promise<string> {
    	const result = this.api.userControllerDevelopersOnly(options);
        return result.toPromise();
    }
	
    /**
     * @param createUserDto User registration data
     */
    public userControllerRegister(createUserDto: CreateUserDto, options?: Configuration): Promise<User> {
    	const result = this.api.userControllerRegister(createUserDto, options);
        return result.toPromise();
    }
	
    /**
     * Update user details
     * @param updateUserDto 
     */
    public userControllerUpdateUser(updateUserDto: UpdateUserDto, options?: Configuration): Promise<User> {
    	const result = this.api.userControllerUpdateUser(updateUserDto, options);
        return result.toPromise();
    }
	

}



