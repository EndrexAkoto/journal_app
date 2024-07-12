"use strict";
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
exports.__esModule = true;
exports.login = exports.register = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("../models/User");
var bcryptjs_1 = require("bcryptjs");
var jsonwebtoken_1 = require("jsonwebtoken");
exports.register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userRepository, _a, username, password, existingUser, hashedPassword, newUser, token, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                userRepository = typeorm_1.getRepository(User_1.User);
                _a = req.body, username = _a.username, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                return [4 /*yield*/, userRepository.findOne({ where: { username: username } })];
            case 2:
                existingUser = _b.sent();
                if (existingUser) {
                    return [2 /*return*/, res.status(409).json({ message: 'Username already exists' })];
                }
                return [4 /*yield*/, bcryptjs_1["default"].hash(password, 10)];
            case 3:
                hashedPassword = _b.sent();
                newUser = userRepository.create({
                    username: username,
                    password: hashedPassword
                });
                return [4 /*yield*/, userRepository.save(newUser)];
            case 4:
                _b.sent();
                token = jsonwebtoken_1["default"].sign({ userId: newUser.id, username: newUser.username }, 'your_jwt_secret_here');
                res.status(201).json({ userId: newUser.id, username: newUser.username, token: token });
                return [3 /*break*/, 6];
            case 5:
                error_1 = _b.sent();
                console.error('Error during user registration:', error_1);
                res.status(500).json({ message: 'Internal server error' });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userRepository, _a, username, password, user, isPasswordValid, token, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                userRepository = typeorm_1.getRepository(User_1.User);
                _a = req.body, username = _a.username, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, userRepository.findOne({ where: { username: username } })];
            case 2:
                user = _b.sent();
                if (!user) {
                    return [2 /*return*/, res.status(404).json({ message: 'User not found' })];
                }
                return [4 /*yield*/, bcryptjs_1["default"].compare(password, user.password)];
            case 3:
                isPasswordValid = _b.sent();
                if (!isPasswordValid) {
                    return [2 /*return*/, res.status(401).json({ message: 'Invalid credentials' })];
                }
                token = jsonwebtoken_1["default"].sign({ userId: user.id, username: user.username }, 'your_jwt_secret_here');
                res.json({ userId: user.id, username: user.username, token: token });
                return [3 /*break*/, 5];
            case 4:
                error_2 = _b.sent();
                console.error('Error during user login:', error_2);
                res.status(500).json({ message: 'Internal server error' });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
