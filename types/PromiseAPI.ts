import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CreateUserDto } from '../models/CreateUserDto';
import { GetAccessDto } from '../models/GetAccessDto';
import { RegisterDto } from '../models/RegisterDto';
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
     * @param token 
     */
    public authControllerConfirmEmail(token: string, options?: Configuration): Promise<void> {
    	const result = this.api.authControllerConfirmEmail(token, options);
        return result.toPromise();
    }
	
    /**
     */
    public authControllerConfirmPostEmail(options?: Configuration): Promise<void> {
    	const result = this.api.authControllerConfirmPostEmail(options);
        return result.toPromise();
    }
	
    /**
     * @param authorization 
     */
    public authControllerGetUserDetails(authorization: string, options?: Configuration): Promise<void> {
    	const result = this.api.authControllerGetUserDetails(authorization, options);
        return result.toPromise();
    }
	
    /**
     * @param body 
     */
    public authControllerLogin(body: any, options?: Configuration): Promise<void> {
    	const result = this.api.authControllerLogin(body, options);
        return result.toPromise();
    }
	
    /**
     */
    public authControllerLoginSocial(options?: Configuration): Promise<void> {
    	const result = this.api.authControllerLoginSocial(options);
        return result.toPromise();
    }
	
    /**
     * @param registerDto 
     */
    public authControllerRegister(registerDto: RegisterDto, options?: Configuration): Promise<void> {
    	const result = this.api.authControllerRegister(registerDto, options);
        return result.toPromise();
    }
	
    /**
     */
    public authControllerValidateToken(options?: Configuration): Promise<void> {
    	const result = this.api.authControllerValidateToken(options);
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
    public appControllerGetInfo(options?: Configuration): Promise<void> {
    	const result = this.api.appControllerGetInfo(options);
        return result.toPromise();
    }
	
    /**
     */
    public appControllerGetRegistration(options?: Configuration): Promise<void> {
    	const result = this.api.appControllerGetRegistration(options);
        return result.toPromise();
    }
	
    /**
     */
    public appControllerHealth(options?: Configuration): Promise<void> {
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
     * @param createUserDto 
     */
    public usersControllerCreateUser(createUserDto: CreateUserDto, options?: Configuration): Promise<void> {
    	const result = this.api.usersControllerCreateUser(createUserDto, options);
        return result.toPromise();
    }
	
    /**
     * @param id 
     */
    public usersControllerDeleteUser(id: string, options?: Configuration): Promise<void> {
    	const result = this.api.usersControllerDeleteUser(id, options);
        return result.toPromise();
    }
	
    /**
     */
    public usersControllerFindAll(options?: Configuration): Promise<void> {
    	const result = this.api.usersControllerFindAll(options);
        return result.toPromise();
    }
	
    /**
     * @param email 
     */
    public usersControllerFindByEmail(email: string, options?: Configuration): Promise<void> {
    	const result = this.api.usersControllerFindByEmail(email, options);
        return result.toPromise();
    }
	
    /**
     * @param id 
     */
    public usersControllerFindById(id: string, options?: Configuration): Promise<void> {
    	const result = this.api.usersControllerFindById(id, options);
        return result.toPromise();
    }
	
    /**
     * @param username 
     */
    public usersControllerFindByUserName(username: string, options?: Configuration): Promise<void> {
    	const result = this.api.usersControllerFindByUserName(username, options);
        return result.toPromise();
    }
	
    /**
     * @param getAccessDto 
     */
    public usersControllerGetAccessUserAccess(getAccessDto: GetAccessDto, options?: Configuration): Promise<void> {
    	const result = this.api.usersControllerGetAccessUserAccess(getAccessDto, options);
        return result.toPromise();
    }
	
    /**
     * @param id 
     * @param createUserDto 
     */
    public usersControllerUpdateUser(id: string, createUserDto: CreateUserDto, options?: Configuration): Promise<void> {
    	const result = this.api.usersControllerUpdateUser(id, createUserDto, options);
        return result.toPromise();
    }
	

}



