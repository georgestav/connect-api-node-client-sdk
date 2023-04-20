import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateUserDto } from '../models/CreateUserDto';
import { UpdateUserDto } from '../models/UpdateUserDto';
import { User } from '../models/User';
export declare class UsersApiRequestFactory extends BaseAPIRequestFactory {
    userControllerConfirmEmail(token: string, options?: Configuration): Promise<RequestContext>;
    userControllerDevelopersOnly(options?: Configuration): Promise<RequestContext>;
    userControllerRegister(createUserDto: CreateUserDto, options?: Configuration): Promise<RequestContext>;
    userControllerUpdateUser(updateUserDto: UpdateUserDto, options?: Configuration): Promise<RequestContext>;
}
export declare class UsersApiResponseProcessor {
    userControllerConfirmEmail(response: ResponseContext): Promise<void>;
    userControllerDevelopersOnly(response: ResponseContext): Promise<string>;
    userControllerRegister(response: ResponseContext): Promise<User>;
    userControllerUpdateUser(response: ResponseContext): Promise<User>;
}
