"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUsersApi = exports.ObjectInfoApi = exports.ObjectAuthApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectAuthApi = (function () {
    function ObjectAuthApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }
    ObjectAuthApi.prototype.authControllerLogin = function (param, options) {
        return this.api.authControllerLogin(param.loginDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerLogout = function (param, options) {
        return this.api.authControllerLogout(options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerRefreshToken = function (param, options) {
        return this.api.authControllerRefreshToken(param.refreshTokenDto, options).toPromise();
    };
    return ObjectAuthApi;
}());
exports.ObjectAuthApi = ObjectAuthApi;
var ObservableAPI_2 = require("./ObservableAPI");
var ObjectInfoApi = (function () {
    function ObjectInfoApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableInfoApi(configuration, requestFactory, responseProcessor);
    }
    ObjectInfoApi.prototype.appControllerGetInfo = function (param, options) {
        return this.api.appControllerGetInfo(options).toPromise();
    };
    ObjectInfoApi.prototype.appControllerGetRegistration = function (param, options) {
        return this.api.appControllerGetRegistration(options).toPromise();
    };
    ObjectInfoApi.prototype.appControllerHealth = function (param, options) {
        return this.api.appControllerHealth(options).toPromise();
    };
    return ObjectInfoApi;
}());
exports.ObjectInfoApi = ObjectInfoApi;
var ObservableAPI_3 = require("./ObservableAPI");
var ObjectUsersApi = (function () {
    function ObjectUsersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }
    ObjectUsersApi.prototype.userControllerConfirmEmail = function (param, options) {
        return this.api.userControllerConfirmEmail(param.token, options).toPromise();
    };
    ObjectUsersApi.prototype.userControllerDevelopersOnly = function (param, options) {
        return this.api.userControllerDevelopersOnly(options).toPromise();
    };
    ObjectUsersApi.prototype.userControllerRegister = function (param, options) {
        return this.api.userControllerRegister(param.createUserDto, options).toPromise();
    };
    ObjectUsersApi.prototype.userControllerUpdateUser = function (param, options) {
        return this.api.userControllerUpdateUser(param.updateUserDto, options).toPromise();
    };
    return ObjectUsersApi;
}());
exports.ObjectUsersApi = ObjectUsersApi;
//# sourceMappingURL=ObjectParamAPI.js.map