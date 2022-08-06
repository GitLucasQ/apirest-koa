"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = exports.getProductById = exports.getAllProducts = exports.deleteProduct = exports.createNewProduct = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ProductService = require("../services/ProductService");

var _logger = _interopRequireDefault(require("../shared/logger"));

var _Variables = require("../shared/Variables");

var productService = new _ProductService.ProductService();

var getAllProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx) {
    var products;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return productService.getAllProducts();

          case 2:
            products = _context.sent;
            ctx.body = {
              status: _Variables.RESPONSE_OK.message,
              message: products
            };

            _logger["default"].info("".concat(ctx.request.method, " ").concat(ctx.request.url, " - ").concat(new Date().toLocaleString()));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllProducts(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllProducts = getAllProducts;

var getProductById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ctx) {
    var id, foundedProduct;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = ctx.params.id;
            _context2.next = 3;
            return productService.getProductById(id);

          case 3:
            foundedProduct = _context2.sent;

            if (foundedProduct) {
              ctx.body = {
                status: _Variables.RESPONSE_OK.message,
                message: foundedProduct
              };
            } else {
              ctx.response.status = _Variables.RESPONSE_ERROR.code;
              ctx.body = {
                status: _Variables.RESPONSE_ERROR.message,
                message: 'Product not found'
              };
            }

            _logger["default"].info("".concat(ctx.request.method, " ").concat(ctx.request.url, " - ").concat(new Date().toLocaleString()));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getProductById(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProductById = getProductById;

var createNewProduct = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(ctx) {
    var _ctx$request$body, name, price, photo, createdProduct;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ctx$request$body = ctx.request.body, name = _ctx$request$body.name, price = _ctx$request$body.price, photo = _ctx$request$body.photo;
            _context3.next = 3;
            return productService.createNewProduct({
              name: name,
              price: price,
              photo: photo
            });

          case 3:
            createdProduct = _context3.sent;

            if (createdProduct) {
              ctx.body = {
                status: _Variables.RESPONSE_OK.message,
                message: createdProduct
              };
            } else {
              ctx.response.status = _Variables.RESPONSE_ERROR.code;
              ctx.body = {
                status: _Variables.RESPONSE_ERROR.message,
                message: 'Product not created'
              };
            }

            _logger["default"].info("".concat(ctx.request.method, " ").concat(ctx.request.url, " - ").concat(new Date().toLocaleString()));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function createNewProduct(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createNewProduct = createNewProduct;

var updateProduct = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(ctx) {
    var id, _ctx$request$body2, name, price, photo, updatedProduct;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = ctx.params.id;
            _ctx$request$body2 = ctx.request.body, name = _ctx$request$body2.name, price = _ctx$request$body2.price, photo = _ctx$request$body2.photo;
            _context4.next = 4;
            return productService.updateProduct(id, {
              name: name,
              price: price,
              photo: photo
            });

          case 4:
            updatedProduct = _context4.sent;

            if (updatedProduct) {
              ctx.body = {
                status: _Variables.RESPONSE_OK.message,
                message: updatedProduct
              };
            } else {
              ctx.response.status = _Variables.RESPONSE_ERROR.code;
              ctx.body = {
                status: _Variables.RESPONSE_ERROR.message,
                message: 'Product not updated'
              };
            }

            _logger["default"].info("".concat(ctx.request.method, " ").concat(ctx.request.url, " - ").concat(new Date().toLocaleString()));

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateProduct(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateProduct = updateProduct;

var deleteProduct = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(ctx) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = ctx.params.id;
            _context5.next = 3;
            return productService["delete"](id);

          case 3:
            ctx.body = {
              status: _Variables.RESPONSE_OK.message,
              message: 'Product deleted'
            };

            _logger["default"].info("".concat(ctx.request.method, " ").concat(ctx.request.url, " - ").concat(new Date().toLocaleString()));

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteProduct(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteProduct = deleteProduct;