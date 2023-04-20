"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableUsersApi = exports.ObservableInfoApi = exports.ObservableAuthApi = void 0;
var rxjsStub_1 = require("../rxjsStub");
var rxjsStub_2 = require("../rxjsStub");
var AuthApi_1 = require("../apis/AuthApi");
var ObservableAuthApi = (function () {
    function ObservableAuthApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthApi_1.AuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthApi_1.AuthApiResponseProcessor();
    }
    ObservableAuthApi.prototype.authControllerLogin = function (loginDto, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.authControllerLogin(loginDto, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_1 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_1(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_2 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_2(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.authControllerLogin(rsp); }));
        }));
    };
    ObservableAuthApi.prototype.authControllerLogout = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.authControllerLogout(options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_3 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_3(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_4 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_4(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.authControllerLogout(rsp); }));
        }));
    };
    ObservableAuthApi.prototype.authControllerRefreshToken = function (refreshTokenDto, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.authControllerRefreshToken(refreshTokenDto, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_5 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_5(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_6 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_6(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.authControllerRefreshToken(rsp); }));
        }));
    };
    return ObservableAuthApi;
}());
exports.ObservableAuthApi = ObservableAuthApi;
var InfoApi_1 = require("../apis/InfoApi");
var ObservableInfoApi = (function () {
    function ObservableInfoApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InfoApi_1.InfoApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InfoApi_1.InfoApiResponseProcessor();
    }
    ObservableInfoApi.prototype.appControllerGetInfo = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.appControllerGetInfo(options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_7 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_7(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_8 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_8(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.appControllerGetInfo(rsp); }));
        }));
    };
    ObservableInfoApi.prototype.appControllerGetRegistration = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.appControllerGetRegistration(options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_9 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_9(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_10 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_10(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.appControllerGetRegistration(rsp); }));
        }));
    };
    ObservableInfoApi.prototype.appControllerHealth = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.appControllerHealth(options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_11 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_11(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_12 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_12(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.appControllerHealth(rsp); }));
        }));
    };
    return ObservableInfoApi;
}());
exports.ObservableInfoApi = ObservableInfoApi;
var UsersApi_1 = require("../apis/UsersApi");
var ObservableUsersApi = (function () {
    function ObservableUsersApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApi_1.UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApi_1.UsersApiResponseProcessor();
    }
    ObservableUsersApi.prototype.userControllerConfirmEmail = function (token, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.userControllerConfirmEmail(token, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_13 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_13(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_14 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_14(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.userControllerConfirmEmail(rsp); }));
        }));
    };
    ObservableUsersApi.prototype.userControllerDevelopersOnly = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.userControllerDevelopersOnly(options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_15 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_15(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_16 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_16(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.userControllerDevelopersOnly(rsp); }));
        }));
    };
    ObservableUsersApi.prototype.userControllerRegister = function (createUserDto, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.userControllerRegister(createUserDto, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_17 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_17(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_18 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_18(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.userControllerRegister(rsp); }));
        }));
    };
    ObservableUsersApi.prototype.userControllerUpdateUser = function (updateUserDto, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.userControllerUpdateUser(updateUserDto, options);
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_19 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_19(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_20 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_20(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.userControllerUpdateUser(rsp); }));
        }));
    };
    return ObservableUsersApi;
}());
exports.ObservableUsersApi = ObservableUsersApi;
//# sourceMappingURL=ObservableAPI.js.map