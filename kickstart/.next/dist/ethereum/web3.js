'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//old code
//const web3 = new Web3(window.web3.currentProvider);
//web3 = new Web3(window.web3.currentProvider.enable());
var web3 = void 0;

//check for meta mask or use server side web3 call
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask.
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/e93e48ecbf2044d38b09dd653cf6a39a');
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsT0FBTyxLQUFLLENBQWhCOztBQUVBO0FBQ0EsSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLE9BQU9BLE9BQU9ELElBQWQsS0FBdUIsV0FBNUQsRUFBeUU7QUFDdkU7QUFDQUEsU0FBTyxrQkFBU0MsT0FBT0QsSUFBUCxDQUFZRSxlQUFyQixDQUFQO0FBQ0QsQ0FIRCxNQUdPO0FBQ0w7QUFDQSxNQUFJQyxXQUFXLElBQUksY0FBS0MsU0FBTCxDQUFlQyxZQUFuQixDQUFnQywrREFBaEMsQ0FBZjtBQUNBTCxTQUFPLGtCQUFTRyxRQUFULENBQVA7QUFDRDs7a0JBRWNILEkiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuLy9vbGQgY29kZVxuLy9jb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcbi8vd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlci5lbmFibGUoKSk7XG52YXIgd2ViMyA9IHZvaWQgMDtcblxuLy9jaGVjayBmb3IgbWV0YSBtYXNrIG9yIHVzZSBzZXJ2ZXIgc2lkZSB3ZWIzIGNhbGxcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LndlYjMgIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIFdlIGFyZSBpbiB0aGUgYnJvd3NlciBhbmQgbWV0YW1hc2sgaXMgcnVubmluZy5cbiAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XG59IGVsc2Uge1xuICAvLyBXZSBhcmUgb24gdGhlIHNlcnZlciAqT1IqIHRoZSB1c2VyIGlzIG5vdCBydW5uaW5nIG1ldGFtYXNrLlxuICB2YXIgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKCdodHRwczovL3JpbmtlYnkuaW5mdXJhLmlvL3YzL2U5M2U0OGVjYmYyMDQ0ZDM4YjA5ZGQ2NTNjZjZhMzlhJyk7XG4gIHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlYjM7Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsT0FBTyxLQUFLLENBQWhCOztBQUVBO0FBQ0EsSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLE9BQU9BLE9BQU9ELElBQWQsS0FBdUIsV0FBNUQsRUFBeUU7QUFDdkU7QUFDQUEsU0FBTyxrQkFBU0MsT0FBT0QsSUFBUCxDQUFZRSxlQUFyQixDQUFQO0FBQ0QsQ0FIRCxNQUdPO0FBQ0w7QUFDQSxNQUFJQyxXQUFXLElBQUksY0FBS0MsU0FBTCxDQUFlQyxZQUFuQixDQUFnQywrREFBaEMsQ0FBZjtBQUNBTCxTQUFPLGtCQUFTRyxRQUFULENBQVA7QUFDRDs7a0JBRWNILEkiLCJmaWxlIjoidW5rbm93biJ9