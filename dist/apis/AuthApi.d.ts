import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { RegisterDto } from '../models/RegisterDto';
export declare class AuthApiRequestFactory extends BaseAPIRequestFactory {
    authControllerConfirmEmail(token: string, options?: Configuration): Promise<RequestContext>;
    authControllerConfirmPostEmail(options?: Configuration): Promise<RequestContext>;
    authControllerGetUserDetails(authorization: string, options?: Configuration): Promise<RequestContext>;
    authControllerLogin(body: any, options?: Configuration): Promise<RequestContext>;
    authControllerLoginSocial(options?: Configuration): Promise<RequestContext>;
    authControllerRegister(registerDto: RegisterDto, options?: Configuration): Promise<RequestContext>;
    authControllerValidateToken(options?: Configuration): Promise<RequestContext>;
}
export declare class AuthApiResponseProcessor {
    authControllerConfirmEmail(response: ResponseContext): Promise<void>;
    authControllerConfirmPostEmail(response: ResponseContext): Promise<void>;
    authControllerGetUserDetails(response: ResponseContext): Promise<void>;
    authControllerLogin(response: ResponseContext): Promise<void>;
    authControllerLoginSocial(response: ResponseContext): Promise<void>;
    authControllerRegister(response: ResponseContext): Promise<void>;
    authControllerValidateToken(response: ResponseContext): Promise<void>;
}
