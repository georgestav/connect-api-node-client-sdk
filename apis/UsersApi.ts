// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { CreateUserDto } from '../models/CreateUserDto';
import { GetAccessDto } from '../models/GetAccessDto';

/**
 * no description
 */
export class UsersApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * @param createUserDto 
     */
    public async usersControllerCreateUser(createUserDto: CreateUserDto, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'createUserDto' is not null or undefined
        if (createUserDto === null || createUserDto === undefined) {
            throw new RequiredError('Required parameter createUserDto was null or undefined when calling usersControllerCreateUser.');
        }

		
		// Path Params
    	const localVarPath = '/v1/users/register';

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

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["bearer"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param id 
     */
    public async usersControllerDeleteUser(id: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling usersControllerDeleteUser.');
        }

		
		// Path Params
    	const localVarPath = '/v1/users/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     */
    public async usersControllerFindAll(options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		// Path Params
    	const localVarPath = '/v1/users';

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
     * @param email 
     */
    public async usersControllerFindByEmail(email: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'email' is not null or undefined
        if (email === null || email === undefined) {
            throw new RequiredError('Required parameter email was null or undefined when calling usersControllerFindByEmail.');
        }

		
		// Path Params
    	const localVarPath = '/v1/users/{email}/email'
            .replace('{' + 'email' + '}', encodeURIComponent(String(email)));

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
     * @param id 
     */
    public async usersControllerFindById(id: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling usersControllerFindById.');
        }

		
		// Path Params
    	const localVarPath = '/v1/users/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * @param username 
     */
    public async usersControllerFindByUserName(username: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new RequiredError('Required parameter username was null or undefined when calling usersControllerFindByUserName.');
        }

		
		// Path Params
    	const localVarPath = '/v1/users/{username}/username'
            .replace('{' + 'username' + '}', encodeURIComponent(String(username)));

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
     * @param getAccessDto 
     */
    public async usersControllerGetAccessUserAccess(getAccessDto: GetAccessDto, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'getAccessDto' is not null or undefined
        if (getAccessDto === null || getAccessDto === undefined) {
            throw new RequiredError('Required parameter getAccessDto was null or undefined when calling usersControllerGetAccessUserAccess.');
        }

		
		// Path Params
    	const localVarPath = '/v1/users/access';

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
            ObjectSerializer.serialize(getAccessDto, "GetAccessDto", ""),
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

    /**
     * @param id 
     * @param createUserDto 
     */
    public async usersControllerUpdateUser(id: string, createUserDto: CreateUserDto, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling usersControllerUpdateUser.');
        }

		
        // verify required parameter 'createUserDto' is not null or undefined
        if (createUserDto === null || createUserDto === undefined) {
            throw new RequiredError('Required parameter createUserDto was null or undefined when calling usersControllerUpdateUser.');
        }

		
		// Path Params
    	const localVarPath = '/v1/users/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
            ObjectSerializer.serialize(createUserDto, "CreateUserDto", ""),
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
     * @params response Response returned by the server for a request to usersControllerCreateUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersControllerCreateUser(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return;
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
     * @params response Response returned by the server for a request to usersControllerDeleteUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersControllerDeleteUser(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
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
     * @params response Response returned by the server for a request to usersControllerFindAll
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersControllerFindAll(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
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
     * @params response Response returned by the server for a request to usersControllerFindByEmail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersControllerFindByEmail(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
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
     * @params response Response returned by the server for a request to usersControllerFindById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersControllerFindById(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
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
     * @params response Response returned by the server for a request to usersControllerFindByUserName
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersControllerFindByUserName(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
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
     * @params response Response returned by the server for a request to usersControllerGetAccessUserAccess
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersControllerGetAccessUserAccess(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return;
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
     * @params response Response returned by the server for a request to usersControllerUpdateUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersControllerUpdateUser(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
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
