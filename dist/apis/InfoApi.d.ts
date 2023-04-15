import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
export declare class InfoApiRequestFactory extends BaseAPIRequestFactory {
    appControllerGetInfo(options?: Configuration): Promise<RequestContext>;
    appControllerGetRegistration(options?: Configuration): Promise<RequestContext>;
    appControllerHealth(options?: Configuration): Promise<RequestContext>;
}
export declare class InfoApiResponseProcessor {
    appControllerGetInfo(response: ResponseContext): Promise<void>;
    appControllerGetRegistration(response: ResponseContext): Promise<void>;
    appControllerHealth(response: ResponseContext): Promise<void>;
}
