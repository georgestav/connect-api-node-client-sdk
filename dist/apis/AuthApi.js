"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthApiResponseProcessor = exports.AuthApiRequestFactory = void 0;
var baseapi_1 = require("./baseapi");
var http_1 = require("../http/http");
var ObjectSerializer_1 = require("../models/ObjectSerializer");
var exception_1 = require("./exception");
var util_1 = require("../util");
var AuthApiRequestFactory = (function (_super) {
    __extends(AuthApiRequestFactory, _super);
    function AuthApiRequestFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthApiRequestFactory.prototype.authControllerLogin = function (loginDto, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, contentType, serializedBody;
            return __generator(this, function (_a) {
                config = options || this.configuration;
                if (loginDto === null || loginDto === undefined) {
                    throw new baseapi_1.RequiredError('Required parameter loginDto was null or undefined when calling authControllerLogin.');
                }
                localVarPath = '/auth/login';
                requestContext = config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                    "application/json"
                ]);
                requestContext.setHeaderParam("Content-Type", contentType);
                serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(loginDto, "LoginDto", ""), contentType);
                requestContext.setBody(serializedBody);
                return [2, requestContext];
            });
        });
    };
    AuthApiRequestFactory.prototype.authControllerLogout = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        localVarPath = '/auth/logout';
                        requestContext = config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        authMethod = null;
                        authMethod = config.authMethods["bearer"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    AuthApiRequestFactory.prototype.authControllerRefreshToken = function (refreshTokenDto, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        if (refreshTokenDto === null || refreshTokenDto === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter refreshTokenDto was null or undefined when calling authControllerRefreshToken.');
                        }
                        localVarPath = '/auth/refresh-token';
                        requestContext = config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(refreshTokenDto, "RefreshTokenDto", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = null;
                        authMethod = config.authMethods["bearer"];
                        if (!authMethod) return [3, 2];
                        return [4, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    return AuthApiRequestFactory;
}(baseapi_1.BaseAPIRequestFactory));
exports.AuthApiRequestFactory = AuthApiRequestFactory;
var AuthApiResponseProcessor = (function () {
    function AuthApiResponseProcessor() {
    }
    AuthApiResponseProcessor.prototype.authControllerLogin = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_1, _a, _b, _c, _d, body_2, _e, _f, _g, _h, body_3, _j, _k, _l, _m, body_4, _o, _p, _q, _r, body_5, _s, _t, _u, _v, body;
            return __generator(this, function (_w) {
                switch (_w.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_1 = _b.apply(_a, [_d.apply(_c, [_w.sent(), contentType]), "InlineResponse200", ""]);
                        return [2, body_1];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_2 = _f.apply(_e, [_h.apply(_g, [_w.sent(), contentType]), "InlineResponse400", ""]);
                        throw new exception_1.ApiException(400, body_2);
                    case 4:
                        if (!util_1.isCodeInRange("401", response.httpStatusCode)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body_3 = _k.apply(_j, [_m.apply(_l, [_w.sent(), contentType]), "InlineResponse401", ""]);
                        throw new exception_1.ApiException(401, body_3);
                    case 6:
                        if (!util_1.isCodeInRange("429", response.httpStatusCode)) return [3, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 7:
                        body_4 = _p.apply(_o, [_r.apply(_q, [_w.sent(), contentType]), "InlineResponse429", ""]);
                        throw new exception_1.ApiException(429, body_4);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 9:
                        body_5 = _t.apply(_s, [_v.apply(_u, [_w.sent(), contentType]), "InlineResponse200", ""]);
                        return [2, body_5];
                    case 10:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    AuthApiResponseProcessor.prototype.authControllerLogout = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_6, _a, _b, _c, _d, body_7, _e, _f, _g, _h, body_8, _j, _k, _l, _m, body_9, _o, _p, _q, _r, body;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_6 = _b.apply(_a, [_d.apply(_c, [_s.sent(), contentType]), "InlineResponse2001", ""]);
                        return [2, body_6];
                    case 2:
                        if (!util_1.isCodeInRange("401", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_7 = _f.apply(_e, [_h.apply(_g, [_s.sent(), contentType]), "InlineResponse401", ""]);
                        throw new exception_1.ApiException(401, body_7);
                    case 4:
                        if (!util_1.isCodeInRange("429", response.httpStatusCode)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body_8 = _k.apply(_j, [_m.apply(_l, [_s.sent(), contentType]), "InlineResponse429", ""]);
                        throw new exception_1.ApiException(429, body_8);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 7:
                        body_9 = _p.apply(_o, [_r.apply(_q, [_s.sent(), contentType]), "InlineResponse2001", ""]);
                        return [2, body_9];
                    case 8:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    AuthApiResponseProcessor.prototype.authControllerRefreshToken = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_10, _a, _b, _c, _d, body_11, _e, _f, _g, _h, body_12, _j, _k, _l, _m, body;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                            return [2];
                        }
                        if (!util_1.isCodeInRange("401", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body_10 = _b.apply(_a, [_d.apply(_c, [_o.sent(), contentType]), "InlineResponse401", ""]);
                        throw new exception_1.ApiException(401, body_10);
                    case 2:
                        if (!util_1.isCodeInRange("429", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body_11 = _f.apply(_e, [_h.apply(_g, [_o.sent(), contentType]), "InlineResponse429", ""]);
                        throw new exception_1.ApiException(429, body_11);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body_12 = _k.apply(_j, [_m.apply(_l, [_o.sent(), contentType]), "void", ""]);
                        return [2, body_12];
                    case 6:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    return AuthApiResponseProcessor;
}());
exports.AuthApiResponseProcessor = AuthApiResponseProcessor;
//# sourceMappingURL=AuthApi.js.map