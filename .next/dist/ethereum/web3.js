'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined') {
    //&& typeof window.web3 !== 'undefined') {
    // we r in the browser and user has a metamask
    window.web3 = new _web2.default(window.ethereum);
    window.ethereum.enable();
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    //we r in server or user has no metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/c2eafcf2115442ab95149de4d940e817');
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQUksWUFBSjs7QUFFQSxJQUFJLE9BQU8sQUFBUCxXQUFpQixBQUFyQixhQUFpQyxBQUFFO0FBQy9CO0FBQ0E7V0FBTyxBQUFQLE9BQWMsQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBaEIsQUFBZCxBQUNBO1dBQU8sQUFBUCxTQUFnQixBQUFoQixBQUNBO1dBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDSDtBQUxELE9BS08sQUFDSDtBQUNBO1FBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ2IsQUFEYSxBQUFqQixBQUdBO1dBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNIO0FBS0Q7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tZW5uYS8zLmNvdXJzZXMvZXRoZXIvcHJvamVjdHMva2lja3N0YXJ0In0=