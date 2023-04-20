import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { LoginDto } from '../models/LoginDto';
import { RefreshTokenDto } from '../models/RefreshTokenDto';
export declare class AuthApiRequestFactory extends BaseAPIRequestFactory {
    authControllerLogin(loginDto: LoginDto, options?: Configuration): Promise<RequestContext>;
    authControllerLogout(options?: Configuration): Promise<RequestContext>;
    authControllerRefreshToken(refreshTokenDto: RefreshTokenDto, options?: Configuration): Promise<RequestContext>;
}
export declare class AuthApiResponseProcessor {
    authControllerLogin(response: ResponseContext): Promise<InlineResponse200>;
    authControllerLogout(response: ResponseContext): Promise<InlineResponse2001>;
    authControllerRefreshToken(response: ResponseContext): Promise<void>;
}
