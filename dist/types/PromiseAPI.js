"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseUsersApi = exports.PromiseInfoApi = exports.PromiseAuthApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseAuthApi = (function () {
    function PromiseAuthApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }
    PromiseAuthApi.prototype.authControllerConfirmEmail = function (token, options) {
        var result = this.api.authControllerConfirmEmail(token, options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerConfirmPostEmail = function (options) {
        var result = this.api.authControllerConfirmPostEmail(options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerGetUserDetails = function (authorization, options) {
        var result = this.api.authControllerGetUserDetails(authorization, options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerLogin = function (body, options) {
        var result = this.api.authControllerLogin(body, options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerLoginSocial = function (options) {
        var result = this.api.authControllerLoginSocial(options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerRegister = function (registerDto, options) {
        var result = this.api.authControllerRegister(registerDto, options);
        return result.toPromise();
    };
    PromiseAuthApi.prototype.authControllerValidateToken = function (options) {
        var result = this.api.authControllerValidateToken(options);
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
    PromiseUsersApi.prototype.usersControllerCreateUser = function (createUserDto, options) {
        var result = this.api.usersControllerCreateUser(createUserDto, options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.usersControllerDeleteUser = function (id, options) {
        var result = this.api.usersControllerDeleteUser(id, options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.usersControllerFindAll = function (options) {
        var result = this.api.usersControllerFindAll(options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.usersControllerFindByEmail = function (email, options) {
        var result = this.api.usersControllerFindByEmail(email, options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.usersControllerFindById = function (id, options) {
        var result = this.api.usersControllerFindById(id, options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.usersControllerFindByUserName = function (username, options) {
        var result = this.api.usersControllerFindByUserName(username, options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.usersControllerGetAccessUserAccess = function (getAccessDto, options) {
        var result = this.api.usersControllerGetAccessUserAccess(getAccessDto, options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.usersControllerUpdateUser = function (id, createUserDto, options) {
        var result = this.api.usersControllerUpdateUser(id, createUserDto, options);
        return result.toPromise();
    };
    return PromiseUsersApi;
}());
exports.PromiseUsersApi = PromiseUsersApi;
//# sourceMappingURL=PromiseAPI.js.map