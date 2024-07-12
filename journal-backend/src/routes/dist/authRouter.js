"use strict";
exports.__esModule = true;
var express_1 = require("express");
var AuthController_1 = require("../controllers/AuthController");
var router = express_1.Router();
router.post('/register', AuthController_1.register);
router.post('/login', AuthController_1.login);
exports["default"] = router;
