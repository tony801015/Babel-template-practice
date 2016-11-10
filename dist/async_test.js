'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUrl() {
    return new _promise2.default(function (resolve, reject) {
        (0, _request2.default)('https://www.google.com', function (err, res, data) {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

(0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var body;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return getUrl();

                case 2:
                    body = _context.sent;

                    console.log('Body: ' + body);

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, undefined);
}))();
//# sourceMappingURL=async_test.js.map