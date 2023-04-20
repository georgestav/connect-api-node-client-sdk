// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { CreateUserDto } from '../models/CreateUserDto';
import { InlineResponse400 } from '../models/InlineResponse400';
import { InlineResponse404 } from '../models/InlineResponse404';
import { InlineResponse409 } from '../models/InlineResponse409';
import { InlineResponse500 } from '../models/InlineResponse500';
import { UpdateUserDto } from '../models/UpdateUserDto';
import { User } from '../models/User';

/**
 * no description
 */
export class UsersApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * @param token Email confirmation token
     */
    public async userControllerConfirmEmail(token: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError('Required parameter token was null or undefined when calling userControllerConfirmEmail.');
        }

		
		// Path Params
    	const localVarPath = '/v1/user/confirm-email/{token}'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * Requires DEVELOPER role
     * Endpoint accessible only by developers
     */
    public async userControllerDevelopersOnly(options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		// Path Params
    	const localVarPath = '/v1/user/developers-only';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * @param createUserDto User registration data
     */
    public async userControllerRegister(createUserDto: CreateUserDto, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'createUserDto' is not null or undefined
        if (createUserDto === null || createUserDto === undefined) {
            throw new RequiredError('Required parameter createUserDto was null or undefined when calling userControllerRegister.');
        }

		
		// Path Params
    	const localVarPath = '/v1/user/register';

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
            ObjectSerializer.serialize(createUserDto, "CreateUserDto", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Update user details
     * @param updateUserDto 
     */
    public async userControllerUpdateUser(updateUserDto: UpdateUserDto, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'updateUserDto' is not null or undefined
        if (updateUserDto === null || updateUserDto === undefined) {
            throw new RequiredError('Required parameter updateUserDto was null or undefined when calling userControllerUpdateUser.');
        }

		
		// Path Params
    	const localVarPath = '/v1/user/update';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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
            ObjectSerializer.serialize(updateUserDto, "UpdateUserDto", ""),
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



export class UsersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to userControllerConfirmEmail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async userControllerConfirmEmail(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineResponse404 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse404", ""
            ) as InlineResponse404;
            throw new ApiException<InlineResponse404>(404, body);
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
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to userControllerDevelopersOnly
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async userControllerDevelopersOnly(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to userControllerRegister
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async userControllerRegister(response: ResponseContext): Promise<User > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineResponse400 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse400", ""
            ) as InlineResponse400;
            throw new ApiException<InlineResponse400>(400, body);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: InlineResponse409 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse409", ""
            ) as InlineResponse409;
            throw new ApiException<InlineResponse409>(409, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: InlineResponse500 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse500", ""
            ) as InlineResponse500;
            throw new ApiException<InlineResponse500>(500, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to userControllerUpdateUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async userControllerUpdateUser(response: ResponseContext): Promise<User > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}
