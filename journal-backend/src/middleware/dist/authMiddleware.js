"use strict";
exports.__esModule = true;
var jsonwebtoken_1 = require("jsonwebtoken");
var verifyToken = function (req, res, next) {
    var _a;
    var token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        return res.status(403).json({ message: 'Token not provided' });
    }
    jsonwebtoken_1["default"].verify(token, 'your_jwt_secret_here', function (err, decoded) {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = decoded;
        next();
    });
};
exports["default"] = verifyToken;
