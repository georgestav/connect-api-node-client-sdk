"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseUsersApi = exports.PromiseInfoApi = exports.PromiseAuthApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseAuthApi = (function () {
    function PromiseAuthApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }
    PromiseAuthApi.prototype.authControllerLogin = function (loginDto, options) {
        var result = this.api.authControllerLogin(loginDto, options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerLogout = function (options) {
        var result = this.api.authControllerLogout(options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerRefreshToken = function (refreshTokenDto, options) {
        var result = this.api.authControllerRefreshToken(refreshTokenDto, options);
        return result.toPromise();
    };
    return PromiseAuthApi;
}());
exports.PromiseAuthApi = PromiseAuthApi;
var ObservableAPI_2 = require("./ObservableAPI");
var PromiseInfoApi = (function () {
    function PromiseInfoApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableInfoApi(configuration, requestFactory, responseProcessor);
    }
    PromiseInfoApi.prototype.appControllerGetInfo = function (options) {
        var result = this.api.appControllerGetInfo(options);
        return result.toPromise();
    };
    PromiseInfoApi.prototype.appControllerGetRegistration = function (options) {
        var result = this.api.appControllerGetRegistration(options);
        return result.toPromise();
    };
    PromiseInfoApi.prototype.appControllerHealth = function (options) {
        var result = this.api.appControllerHealth(options);
        return result.toPromise();
    };
    return PromiseInfoApi;
}());
exports.PromiseInfoApi = PromiseInfoApi;
var ObservableAPI_3 = require("./ObservableAPI");
var PromiseUsersApi = (function () {
    function PromiseUsersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }
    PromiseUsersApi.prototype.userControllerConfirmEmail = function (token, options) {
        var result = this.api.userControllerConfirmEmail(token, options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.userControllerDevelopersOnly = function (options) {
        var result = this.api.userControllerDevelopersOnly(options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.userControllerRegister = function (createUserDto, options) {
        var result = this.api.userControllerRegister(createUserDto, options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.userControllerUpdateUser = function (updateUserDto, options) {
        var result = this.api.userControllerUpdateUser(updateUserDto, options);
        return result.toPromise();
    };
    return PromiseUsersApi;
}());
exports.PromiseUsersApi = PromiseUsersApi;
//# sourceMappingURL=PromiseAPI.js.map