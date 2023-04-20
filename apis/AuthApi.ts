// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse400 } from '../models/InlineResponse400';
import { InlineResponse401 } from '../models/InlineResponse401';
import { InlineResponse429 } from '../models/InlineResponse429';
import { LoginDto } from '../models/LoginDto';
import { RefreshTokenDto } from '../models/RefreshTokenDto';

/**
 * no description
 */
export class AuthApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * User login
     * @param loginDto 
     */
    public async authControllerLogin(loginDto: LoginDto, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'loginDto' is not null or undefined
        if (loginDto === null || loginDto === undefined) {
            throw new RequiredError('Required parameter loginDto was null or undefined when calling authControllerLogin.');
        }

		
		// Path Params
    	const localVarPath = '/auth/login';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(loginDto, "LoginDto", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Log out a user and revoke their access and refresh tokens
     */
    public async authControllerLogout(options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		// Path Params
    	const localVarPath = '/auth/logout';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["bearer"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Refresh the access token using a refresh token
     * @param refreshTokenDto 
     */
    public async authControllerRefreshToken(refreshTokenDto: RefreshTokenDto, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'refreshTokenDto' is not null or undefined
        if (refreshTokenDto === null || refreshTokenDto === undefined) {
            throw new RequiredError('Required parameter refreshTokenDto was null or undefined when calling authControllerRefreshToken.');
        }

		
		// Path Params
    	const localVarPath = '/auth/refresh-token';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(refreshTokenDto, "RefreshTokenDto", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["bearer"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}



export class AuthApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to authControllerLogin
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async authControllerLogin(response: ResponseContext): Promise<InlineResponse200 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineResponse400 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse400", ""
            ) as InlineResponse400;
            throw new ApiException<InlineResponse400>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineResponse401 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse401", ""
            ) as InlineResponse401;
            throw new ApiException<InlineResponse401>(401, body);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: InlineResponse429 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse429", ""
            ) as InlineResponse429;
            throw new ApiException<InlineResponse429>(429, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to authControllerLogout
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async authControllerLogout(response: ResponseContext): Promise<InlineResponse2001 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2001 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2001", ""
            ) as InlineResponse2001;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineResponse401 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse401", ""
            ) as InlineResponse401;
            throw new ApiException<InlineResponse401>(401, body);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: InlineResponse429 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse429", ""
            ) as InlineResponse429;
            throw new ApiException<InlineResponse429>(429, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2001 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2001", ""
            ) as InlineResponse2001;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to authControllerRefreshToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async authControllerRefreshToken(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineResponse401 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse401", ""
            ) as InlineResponse401;
            throw new ApiException<InlineResponse401>(401, body);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: InlineResponse429 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse429", ""
            ) as InlineResponse429;
            throw new ApiException<InlineResponse429>(429, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}
