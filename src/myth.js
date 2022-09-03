"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
/*
 * MyTh Ahmed Faiz Copyright © 2016-2022 All rights reserved.
 * Email: mythpe@gmail.com
 * Mobile: +966590470092
 * Website: https://4myth.com
 */
var Application = require("expo-application");
var Updates = require("expo-updates");
var Network = require("expo-network");
var react_native_1 = require("react-native");
var expo_constants_1 = require("expo-constants");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var myth = {
    UrlGroup: function (group) { return function (segments, parent) { return ((parent !== null && parent !== void 0 ? parent : '') + (parent && group ? '/' : '')) + (group !== null && group !== void 0 ? group : '') + ((group && segments ? '/' : '') + (segments !== null && segments !== void 0 ? segments : '')); }; },
    hasUpdates: function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, isAvailable, update, e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (process.env.NODE_ENV !== 'production') {
                        return [2 /*return*/, !1];
                    }
                    result = !1;
                    isAvailable = !1;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 5, 6, 9]);
                    return [4 /*yield*/, Updates.checkForUpdateAsync()];
                case 2:
                    update = _b.sent();
                    isAvailable = update.isAvailable;
                    if (!isAvailable) return [3 /*break*/, 4];
                    result = !0;
                    return [4 /*yield*/, Updates.fetchUpdateAsync()];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4: return [3 /*break*/, 9];
                case 5:
                    e_1 = _b.sent();
                    console.warn('Check Updates: ', e_1);
                    return [3 /*break*/, 9];
                case 6:
                    _a = isAvailable;
                    if (!_a) return [3 /*break*/, 8];
                    return [4 /*yield*/, Updates.reloadAsync()];
                case 7:
                    _a = (_b.sent());
                    _b.label = 8;
                case 8:
                    _a;
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/, result];
            }
        });
    }); },
    checkNetwork: function () { return __awaiter(void 0, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Network.getNetworkStateAsync()];
            case 1: return [2 /*return*/, ((_a = (_b.sent())) === null || _a === void 0 ? void 0 : _a.isInternetReachable) === !0];
        }
    }); }); },
    StoreUrl: function () {
        var _a, _b;
        return react_native_1.Platform.select({
            ios: (_a = expo_constants_1.default.ios.appStoreUrl) !== null && _a !== void 0 ? _a : null,
            android: (_b = expo_constants_1.default.android.playStoreUrl) !== null && _b !== void 0 ? _b : null,
            default: null
        });
    },
    AppVersion: function () { return Application.nativeApplicationVersion; },
    GetMMSSFromMillis: function (millis) {
        var totalSeconds = millis / 1000;
        var seconds = Math.floor(totalSeconds % 60);
        var minutes = Math.floor(totalSeconds / 60);
        var padWithZero = function (number) {
            var string = number.toString();
            if (number < 10) {
                return '0' + string;
            }
            return string;
        };
        return padWithZero(minutes) + ':' + padWithZero(seconds);
    },
    StyleFromProps: function (props, mergeStyle) {
        if (props === void 0) { props = {}; }
        var style = __assign({}, (mergeStyle || {}));
        var classes = [
            { prop: 'flex', style: 'flex' },
            { prop: 'justifyContent', style: 'justifyContent' },
            { prop: 'alignContent', style: 'alignContent' },
            { prop: 'alignItems', style: 'alignItems' },
            { prop: 'alignSelf', style: 'alignSelf' },
            { prop: 'ms', style: 'marginStart' },
            { prop: 'me', style: 'marginEnd' },
            { prop: 'mt', style: 'marginTop' },
            { prop: 'ml', style: 'marginLeft' },
            { prop: 'mb', style: 'marginBottom' },
            { prop: 'mr', style: 'marginRight' },
            { prop: 'mx', style: 'marginHorizontal' },
            { prop: 'my', style: 'marginVertical' },
            { prop: 'ma', style: 'margin' },
            { prop: 'ps', style: 'paddingStart' },
            { prop: 'pe', style: 'paddingEnd' },
            { prop: 'pt', style: 'paddingTop' },
            { prop: 'pl', style: 'paddingLeft' },
            { prop: 'pb', style: 'paddingBottom' },
            { prop: 'pr', style: 'paddingRight' },
            { prop: 'px', style: 'paddingHorizontal' },
            { prop: 'py', style: 'paddingVertical' },
            { prop: 'pa', style: 'padding' },
            { prop: 'bg', style: 'backgroundColor' },
            { prop: 'height', style: 'height' },
            { prop: 'width', style: 'width' }
        ];
        classes.forEach(function (e) {
            if (props[e.prop]) {
                style[e.style] = props[e.prop];
            }
        });
        return style;
    },
    _errorMessage: function (errors, name) {
        if (errors === void 0) { errors = {}; }
        return errors && name ? (errors[name] ? errors[name][0] : undefined) : undefined;
    },
    storage: {
        set: function (key, value, callback) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, async_storage_1.default.setItem(key, value, callback)];
        }); }); },
        get: function (key, callback) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, async_storage_1.default.getItem(key, callback)];
        }); }); },
        remove: function (key, callback) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, async_storage_1.default.removeItem(key, callback)];
        }); }); }
    }
};
exports.default = myth;
