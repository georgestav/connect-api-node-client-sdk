import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateUserDto } from '../models/CreateUserDto';
import { GetAccessDto } from '../models/GetAccessDto';
export declare class UsersApiRequestFactory extends BaseAPIRequestFactory {
    usersControllerCreateUser(createUserDto: CreateUserDto, options?: Configuration): Promise<RequestContext>;
    usersControllerDeleteUser(id: string, options?: Configuration): Promise<RequestContext>;
    usersControllerFindAll(options?: Configuration): Promise<RequestContext>;
    usersControllerFindByEmail(email: string, options?: Configuration): Promise<RequestContext>;
    usersControllerFindById(id: string, options?: Configuration): Promise<RequestContext>;
    usersControllerFindByUserName(username: string, options?: Configuration): Promise<RequestContext>;
    usersControllerGetAccessUserAccess(getAccessDto: GetAccessDto, options?: Configuration): Promise<RequestContext>;
    usersControllerUpdateUser(id: string, createUserDto: CreateUserDto, options?: Configuration): Promise<RequestContext>;
}
export declare class UsersApiResponseProcessor {
    usersControllerCreateUser(response: ResponseContext): Promise<void>;
    usersControllerDeleteUser(response: ResponseContext): Promise<void>;
    usersControllerFindAll(response: ResponseContext): Promise<void>;
    usersControllerFindByEmail(response: ResponseContext): Promise<void>;
    usersControllerFindById(response: ResponseContext): Promise<void>;
    usersControllerFindByUserName(response: ResponseContext): Promise<void>;
    usersControllerGetAccessUserAccess(response: ResponseContext): Promise<void>;
    usersControllerUpdateUser(response: ResponseContext): Promise<void>;
}
