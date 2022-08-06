"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("./db");

var _index = _interopRequireDefault(require("./routes/index"));

var koa = require('koa');

var koaBody = require('koa-body'); // APP


var app = new koa(); // USES

app.use(koaBody()); // ROUTES

app.use(_index["default"].routes());
app.listen(4000, function () {
  return console.log('Server online on: http://localhost:4000');
});