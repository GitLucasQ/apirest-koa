"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Product = _interopRequireDefault(require("./Product.routes"));

var Router = require('koa-router');

var routes = new Router({
  prefix: '/api'
});
routes.use(_Product["default"].routes());
var _default = routes;
exports["default"] = _default;