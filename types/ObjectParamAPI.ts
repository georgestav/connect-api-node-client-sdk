import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CreateUserDto } from '../models/CreateUserDto';
import { GetAccessDto } from '../models/GetAccessDto';
import { RegisterDto } from '../models/RegisterDto';

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiAuthControllerConfirmEmailRequest {
    /**
     * 
     * @type string
     * @memberof AuthApiauthControllerConfirmEmail
     */
    token: string
}

export interface AuthApiAuthControllerConfirmPostEmailRequest {
}

export interface AuthApiAuthControllerGetUserDetailsRequest {
    /**
     * 
     * @type string
     * @memberof AuthApiauthControllerGetUserDetails
     */
    authorization: string
}

export interface AuthApiAuthControllerLoginRequest {
    /**
     * 
     * @type any
     * @memberof AuthApiauthControllerLogin
     */
    body: any
}

export interface AuthApiAuthControllerLoginSocialRequest {
}

export interface AuthApiAuthControllerRegisterRequest {
    /**
     * 
     * @type RegisterDto
     * @memberof AuthApiauthControllerRegister
     */
    registerDto: RegisterDto
}

export interface AuthApiAuthControllerValidateTokenRequest {
}


export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public authControllerConfirmEmail(param: AuthApiAuthControllerConfirmEmailRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerConfirmEmail(param.token,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public authControllerConfirmPostEmail(param: AuthApiAuthControllerConfirmPostEmailRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerConfirmPostEmail( options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public authControllerGetUserDetails(param: AuthApiAuthControllerGetUserDetailsRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerGetUserDetails(param.authorization,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public authControllerLogin(param: AuthApiAuthControllerLoginRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerLogin(param.body,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public authControllerLoginSocial(param: AuthApiAuthControllerLoginSocialRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerLoginSocial( options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public authControllerRegister(param: AuthApiAuthControllerRegisterRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerRegister(param.registerDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public authControllerValidateToken(param: AuthApiAuthControllerValidateTokenRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerValidateToken( options).toPromise();
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
    public appControllerGetInfo(param: InfoApiAppControllerGetInfoRequest, options?: Configuration): Promise<void> {
        return this.api.appControllerGetInfo( options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public appControllerGetRegistration(param: InfoApiAppControllerGetRegistrationRequest, options?: Configuration): Promise<void> {
        return this.api.appControllerGetRegistration( options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public appControllerHealth(param: InfoApiAppControllerHealthRequest, options?: Configuration): Promise<void> {
        return this.api.appControllerHealth( options).toPromise();
    }
	

}




import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiUsersControllerCreateUserRequest {
    /**
     * 
     * @type CreateUserDto
     * @memberof UsersApiusersControllerCreateUser
     */
    createUserDto: CreateUserDto
}

export interface UsersApiUsersControllerDeleteUserRequest {
    /**
     * 
     * @type string
     * @memberof UsersApiusersControllerDeleteUser
     */
    id: string
}

export interface UsersApiUsersControllerFindAllRequest {
}

export interface UsersApiUsersControllerFindByEmailRequest {
    /**
     * 
     * @type string
     * @memberof UsersApiusersControllerFindByEmail
     */
    email: string
}

export interface UsersApiUsersControllerFindByIdRequest {
    /**
     * 
     * @type string
     * @memberof UsersApiusersControllerFindById
     */
    id: string
}

export interface UsersApiUsersControllerFindByUserNameRequest {
    /**
     * 
     * @type string
     * @memberof UsersApiusersControllerFindByUserName
     */
    username: string
}

export interface UsersApiUsersControllerGetAccessUserAccessRequest {
    /**
     * 
     * @type GetAccessDto
     * @memberof UsersApiusersControllerGetAccessUserAccess
     */
    getAccessDto: GetAccessDto
}

export interface UsersApiUsersControllerUpdateUserRequest {
    /**
     * 
     * @type string
     * @memberof UsersApiusersControllerUpdateUser
     */
    id: string
    /**
     * 
     * @type CreateUserDto
     * @memberof UsersApiusersControllerUpdateUser
     */
    createUserDto: CreateUserDto
}


export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public usersControllerCreateUser(param: UsersApiUsersControllerCreateUserRequest, options?: Configuration): Promise<void> {
        return this.api.usersControllerCreateUser(param.createUserDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public usersControllerDeleteUser(param: UsersApiUsersControllerDeleteUserRequest, options?: Configuration): Promise<void> {
        return this.api.usersControllerDeleteUser(param.id,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public usersControllerFindAll(param: UsersApiUsersControllerFindAllRequest, options?: Configuration): Promise<void> {
        return this.api.usersControllerFindAll( options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public usersControllerFindByEmail(param: UsersApiUsersControllerFindByEmailRequest, options?: Configuration): Promise<void> {
        return this.api.usersControllerFindByEmail(param.email,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public usersControllerFindById(param: UsersApiUsersControllerFindByIdRequest, options?: Configuration): Promise<void> {
        return this.api.usersControllerFindById(param.id,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public usersControllerFindByUserName(param: UsersApiUsersControllerFindByUserNameRequest, options?: Configuration): Promise<void> {
        return this.api.usersControllerFindByUserName(param.username,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public usersControllerGetAccessUserAccess(param: UsersApiUsersControllerGetAccessUserAccessRequest, options?: Configuration): Promise<void> {
        return this.api.usersControllerGetAccessUserAccess(param.getAccessDto,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public usersControllerUpdateUser(param: UsersApiUsersControllerUpdateUserRequest, options?: Configuration): Promise<void> {
        return this.api.usersControllerUpdateUser(param.id, param.createUserDto,  options).toPromise();
    }
	

}



