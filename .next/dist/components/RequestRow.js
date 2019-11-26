'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/meem/ethereum/kickstart-ethereum/components/RequestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.onAprrove = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context.next = 4;
                                return _web2.default.eth.getAccounts();

                            case 4:
                                accounts = _context.sent;
                                _context.next = 7;
                                return campaign.methods.approveRequest(_this.props.id).send({
                                    from: accounts[0]
                                });

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.onFinalize = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                event.preventDefault();

                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context2.next = 4;
                                return _web2.default.eth.getAccounts();

                            case 4:
                                accounts = _context2.sent;
                                _context2.next = 7;
                                return campaign.methods.finalizeRequest(_this.props.id).send({
                                    from: accounts[0]
                                });

                            case 7:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }));

            return function (_x2) {
                return _ref3.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                approversCount = _props.approversCount,
                _props$request = _props.request,
                description = _props$request.description,
                value = _props$request.value,
                recipient = _props$request.recipient,
                approvalCount = _props$request.approvalCount,
                complete = _props$request.complete;

            var readyToFinalize = approvalCount > approversCount / 2;
            return _react2.default.createElement(Row, { disable: complete, positive: readyToFinalize && !complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _web2.default.utils.fromWei(value, 'ether')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
                color: 'green',
                basic: true,
                onClick: this.onAprrove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Aprrove')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
                color: 'teal',
                basic: true,
                onClick: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, 'Finalize')));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiUmVxdWVzdFJvdyIsInN0YXRlIiwib25BcHJyb3ZlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsImFwcHJvdmVyc0NvdW50IiwicmVxdWVzdCIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50IiwiY29tcGxldGUiLCJyZWFkeVRvRmluYWxpemUiLCJ1dGlscyIsImZyb21XZWkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPOztBQUNoQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJQUVqQixBOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFDRixRQUFRLEEsVSxBQUlSO2lHQUFZLGlCQUFBLEFBQU8sT0FBUDs4QkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUjtzQ0FBQSxBQUFNLEFBRUE7O0FBSEUsMkNBR1Msd0JBQVMsTUFBQSxBQUFLLE1BSHZCLEFBR1MsQUFBb0I7Z0RBSDdCO3VDQUtlLGNBQUEsQUFBSyxJQUxwQixBQUtlLEFBQVM7O2lDQUExQjtBQUxFLG9EQUFBO2dEQUFBO2dEQU9GLEFBQVMsUUFBVCxBQUFpQixlQUFlLE1BQUEsQUFBSyxNQUFyQyxBQUEyQyxJQUEzQyxBQUErQzswQ0FDM0MsU0FSRixBQU9GLEFBQW9ELEFBQ2hELEFBQVM7QUFEdUMsQUFDdEQsaUNBREU7O2lDQVBFO2lDQUFBO2dEQUFBOztBQUFBOzRCQUFBO0E7Ozs7O21CQVlaLEE7aUdBQWEsa0JBQUEsQUFBTyxPQUFQOzhCQUFBO2dGQUFBOzhCQUFBOzJEQUFBO2lDQUNUO3NDQUFBLEFBQU0sQUFFQTs7QUFIRywyQ0FHUSx3QkFBUyxNQUFBLEFBQUssTUFIdEIsQUFHUSxBQUFvQjtpREFINUI7dUNBS2MsY0FBQSxBQUFLLElBTG5CLEFBS2MsQUFBUzs7aUNBQTFCO0FBTEcscURBQUE7aURBQUE7Z0RBT0gsQUFBUyxRQUFULEFBQWlCLGdCQUFnQixNQUFBLEFBQUssTUFBdEMsQUFBNEMsSUFBNUMsQUFBZ0Q7MENBQzVDLFNBUkQsQUFPSCxBQUFxRCxBQUNqRCxBQUFTO0FBRHdDLEFBQ3ZELGlDQURFOztpQ0FQRztpQ0FBQTtpREFBQTs7QUFBQTs2QkFBQTtBOzs7Ozs7Ozs7O2lDQVlKO2dCQUFBLEFBQ0csTUFESCxBQUNpQix1QkFEakIsQUFDRztnQkFESCxBQUNRLE9BRFIsQUFDaUIsdUJBRGpCLEFBQ1E7eUJBRytELEtBSnZFLEFBSTRFO2dCQUo1RSxBQUVHLFlBRkgsQUFFRztnQkFGSCxBQUdELHdCQUhDLEFBR0Q7d0NBSEMsQUFJRDtnQkFKQyxBQUlVLDZCQUpWLEFBSVU7Z0JBSlYsQUFJdUIsdUJBSnZCLEFBSXVCO2dCQUp2QixBQUk4QiwyQkFKOUIsQUFJOEI7Z0JBSjlCLEFBSXlDLCtCQUp6QyxBQUl5QztnQkFKekMsQUFJd0QsMEJBSnhELEFBSXdELEFBQzdEOztnQkFBTSxrQkFBa0IsZ0JBQWdCLGlCQUF4QyxBQUF5RCxBQUN6RDttQ0FDSyxjQUFELE9BQUssU0FBTCxBQUFjLFVBQVUsVUFBVSxtQkFBbUIsQ0FBckQsQUFBc0Q7OEJBQXREO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLGVBREosQUFDSSxBQUNBLHFCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLGVBRkosQUFFSSxBQUNBLDhCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLDZCQUFPLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsT0FIOUIsQUFHSSxBQUFPLEFBQTBCLEFBQ2pDLDJCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLGVBSkosQUFJSSxBQUNBLDRCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLGVBQUEsZUFBdUIsS0FMM0IsQUFLSSxBQUNBLGlDQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0s7QUFETDtBQUFBLDBCQUNLLEFBQVcsdUJBQ1IsQUFBQzt1QkFBRCxBQUNVLEFBQ047dUJBRkosQUFHSTt5QkFBUyxLQUhiLEFBR2tCOzhCQUhsQjtnQ0FBQTtBQUFBO0FBQ0ksYUFESixFQVJaLEFBTUksQUFFUSxBQVNSLDZCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0s7QUFETDtBQUFBLDBCQUNLLEFBQVcsdUJBQ1IsQUFBQzt1QkFBRCxBQUNVLEFBQ047dUJBRkosQUFHSTt5QkFBUyxLQUhiLEFBR2tCOzhCQUhsQjtnQ0FBQTtBQUFBO0FBQ0ksYUFESixFQXBCaEIsQUFDSSxBQWlCSSxBQUVRLEFBVW5COzs7OztBQWpFb0IsQSxBQW9FekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tZWVtL2V0aGVyZXVtL2tpY2tzdGFydC1ldGhlcmV1bSJ9