"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUsersApi = exports.ObjectInfoApi = exports.ObjectAuthApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectAuthApi = (function () {
    function ObjectAuthApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }
    ObjectAuthApi.prototype.authControllerConfirmEmail = function (param, options) {
        return this.api.authControllerConfirmEmail(param.token, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerConfirmPostEmail = function (param, options) {
        return this.api.authControllerConfirmPostEmail(options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerGetUserDetails = function (param, options) {
        return this.api.authControllerGetUserDetails(param.authorization, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerLogin = function (param, options) {
        return this.api.authControllerLogin(param.body, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerLoginSocial = function (param, options) {
        return this.api.authControllerLoginSocial(options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerRegister = function (param, options) {
        return this.api.authControllerRegister(param.registerDto, options).toPromise();
    };
    ObjectAuthApi.prototype.authControllerValidateToken = function (param, options) {
        return this.api.authControllerValidateToken(options).toPromise();
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
    ObjectUsersApi.prototype.usersControllerCreateUser = function (param, options) {
        return this.api.usersControllerCreateUser(param.createUserDto, options).toPromise();
    };
    ObjectUsersApi.prototype.usersControllerDeleteUser = function (param, options) {
        return this.api.usersControllerDeleteUser(param.id, options).toPromise();
    };
    ObjectUsersApi.prototype.usersControllerFindAll = function (param, options) {
        return this.api.usersControllerFindAll(options).toPromise();
    };
    ObjectUsersApi.prototype.usersControllerFindByEmail = function (param, options) {
        return this.api.usersControllerFindByEmail(param.email, options).toPromise();
    };
    ObjectUsersApi.prototype.usersControllerFindById = function (param, options) {
        return this.api.usersControllerFindById(param.id, options).toPromise();
    };
    ObjectUsersApi.prototype.usersControllerFindByUserName = function (param, options) {
        return this.api.usersControllerFindByUserName(param.username, options).toPromise();
    };
    ObjectUsersApi.prototype.usersControllerGetAccessUserAccess = function (param, options) {
        return this.api.usersControllerGetAccessUserAccess(param.getAccessDto, options).toPromise();
    };
    ObjectUsersApi.prototype.usersControllerUpdateUser = function (param, options) {
        return this.api.usersControllerUpdateUser(param.id, param.createUserDto, options).toPromise();
    };
    return ObjectUsersApi;
}());
exports.ObjectUsersApi = ObjectUsersApi;
//# sourceMappingURL=ObjectParamAPI.js.map