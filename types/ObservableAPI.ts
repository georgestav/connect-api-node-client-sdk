import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';

import { CreateUserDto } from '../models/CreateUserDto';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse400 } from '../models/InlineResponse400';
import { InlineResponse401 } from '../models/InlineResponse401';
import { InlineResponse404 } from '../models/InlineResponse404';
import { InlineResponse409 } from '../models/InlineResponse409';
import { InlineResponse429 } from '../models/InlineResponse429';
import { InlineResponse500 } from '../models/InlineResponse500';
import { LoginDto } from '../models/LoginDto';
import { RefreshTokenDto } from '../models/RefreshTokenDto';
import { UpdateUserDto } from '../models/UpdateUserDto';
import { User } from '../models/User';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class ObservableAuthApi {
    private requestFactory: AuthApiRequestFactory;
    private responseProcessor: AuthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthApiResponseProcessor();
    }

    /**
     * User login
     * @param loginDto 
     */
    public authControllerLogin(loginDto: LoginDto, options?: Configuration): Observable<InlineResponse200> {
    	const requestContextPromise = this.requestFactory.authControllerLogin(loginDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerLogin(rsp)));
	    	}));
    }
	
    /**
     * Log out a user and revoke their access and refresh tokens
     */
    public authControllerLogout(options?: Configuration): Observable<InlineResponse2001> {
    	const requestContextPromise = this.requestFactory.authControllerLogout(options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerLogout(rsp)));
	    	}));
    }
	
    /**
     * Refresh the access token using a refresh token
     * @param refreshTokenDto 
     */
    public authControllerRefreshToken(refreshTokenDto: RefreshTokenDto, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.authControllerRefreshToken(refreshTokenDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerRefreshToken(rsp)));
	    	}));
    }
	

}




import { InfoApiRequestFactory, InfoApiResponseProcessor} from "../apis/InfoApi";
export class ObservableInfoApi {
    private requestFactory: InfoApiRequestFactory;
    private responseProcessor: InfoApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InfoApiRequestFactory,
        responseProcessor?: InfoApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InfoApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InfoApiResponseProcessor();
    }

    /**
     */
    public appControllerGetInfo(options?: Configuration): Observable<any> {
    	const requestContextPromise = this.requestFactory.appControllerGetInfo(options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appControllerGetInfo(rsp)));
	    	}));
    }
	
    /**
     */
    public appControllerGetRegistration(options?: Configuration): Observable<any> {
    	const requestContextPromise = this.requestFactory.appControllerGetRegistration(options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appControllerGetRegistration(rsp)));
	    	}));
    }
	
    /**
     */
    public appControllerHealth(options?: Configuration): Observable<string> {
    	const requestContextPromise = this.requestFactory.appControllerHealth(options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appControllerHealth(rsp)));
	    	}));
    }
	

}




import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class ObservableUsersApi {
    private requestFactory: UsersApiRequestFactory;
    private responseProcessor: UsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
    }

    /**
     * @param token Email confirmation token
     */
    public userControllerConfirmEmail(token: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.userControllerConfirmEmail(token, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userControllerConfirmEmail(rsp)));
	    	}));
    }
	
    /**
     * Requires DEVELOPER role
     * Endpoint accessible only by developers
     */
    public userControllerDevelopersOnly(options?: Configuration): Observable<string> {
    	const requestContextPromise = this.requestFactory.userControllerDevelopersOnly(options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userControllerDevelopersOnly(rsp)));
	    	}));
    }
	
    /**
     * @param createUserDto User registration data
     */
    public userControllerRegister(createUserDto: CreateUserDto, options?: Configuration): Observable<User> {
    	const requestContextPromise = this.requestFactory.userControllerRegister(createUserDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userControllerRegister(rsp)));
	    	}));
    }
	
    /**
     * Update user details
     * @param updateUserDto 
     */
    public userControllerUpdateUser(updateUserDto: UpdateUserDto, options?: Configuration): Observable<User> {
    	const requestContextPromise = this.requestFactory.userControllerUpdateUser(updateUserDto, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userControllerUpdateUser(rsp)));
	    	}));
    }
	

}



