'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\forge\\Desktop\\Ethereum and Solidity - The Complete Developer\'s Guide\\kickstart\\pages\\campaigns\\requests\\index.js?entry';


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: 'renderRows',
    value: function renderRows() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index,
          id: index,
          request: request,
          address: _this2.props.address,
          approversCount: _this2.props.approversCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Description'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Amount'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Recipient'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Approve'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Finalize'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, this.renderRows())), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Found ', this.props.requestCount, ' requests.'));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, requestCount, approversCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = (0, _campaign2.default)(address);
                _context.next = 4;
                return campaign.methods.getRequestsCount().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return campaign.methods.approversCount().call();

              case 7:
                approversCount = _context.sent;
                _context.next = 10;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 10:
                requests = _context.sent;
                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVxdWVzdEluZGV4IiwiX0NvbXBvbmVudCIsIl9fcHJvdG9fXyIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwidmFsdWUiLCJyZW5kZXJSb3dzIiwiX3RoaXMyIiwicHJvcHMiLCJyZXF1ZXN0cyIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImFkZHJlc3MiLCJhcHByb3ZlcnNDb3VudCIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwicmVuZGVyIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJyb3V0ZSIsInByaW1hcnkiLCJmbG9hdGVkIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJyZXF1ZXN0Q291bnQiLCJfcmVmIiwibWFyayIsIl9jYWxsZWUiLCJjYW1wYWlnbiIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsInNlbnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJhYnJ1cHQiLCJzdG9wIiwiZ2V0SW5pdGlhbFByb3BzIiwiX3giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBTkEsSUFBSUEsZUFBZSwySUFBbkI7OztBQVFBLElBQUlDLGVBQWUsVUFBVUMsVUFBVixFQUFzQjtBQUN2QywwQkFBVUQsWUFBVixFQUF3QkMsVUFBeEI7O0FBRUEsV0FBU0QsWUFBVCxHQUF3QjtBQUN0QixrQ0FBZ0IsSUFBaEIsRUFBc0JBLFlBQXRCOztBQUVBLFdBQU8seUNBQTJCLElBQTNCLEVB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LElBQXBCO0FBQ0EsdUJBQU9QLFNBQVNhLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEIsRUFBRW5DLFNBQVNBLE9BQVgsRUFBb0JOLFVBQVVBLFFBQTlCLEVBQXdDcUIsY0FBY0EsWUFBdEQsRUFBb0VkLGdCQUFnQkEsY0FBcEYsRUFBMUIsQ0FBUDs7QUFFRixtQkFBSyxFQUFMO0FBQ0EsbUJBQUssS0FBTDtBQUNFLHVCQUFPcUIsU0FBU2MsSUFBVCxFQUFQO0FBekJKO0FBMkJEO0FBQ0YsU0E5Qk0sRUE4QkpsQixPQTlCSSxFQThCSyxJQTlCTCxDQUFQO0FBK0JELE9BakMwQyxDQUFoQyxDQUFYOztBQW1DQSxlQUFTbUIsZUFBVCxDQUF5QkMsRUFBekIsRUFBNkI7QUFDM0IsZUFBT3RCLEtBQUs3QixLQUFMLENBQVcsSUFBWCxFQUFpQkMsU0FBakIsQ0FBUDtBQUNEOztBQUVELGFBQU9pRCxlQUFQO0FBQ0QsS0F6Q007QUFGSixHQUFELENBak1KOztBQStPQSxTQUFPckQsWUFBUDtBQUNELENBelBrQixrQkFBbkI7O2tCQTJQZUEsWSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAnYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvcic7XG5pbXBvcnQgX1Byb21pc2UgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UnO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yJztcbmltcG9ydCBfT2JqZWN0JGdldFByb3RvdHlwZU9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9qc3hGaWxlTmFtZSA9ICdDOlxcXFxVc2Vyc1xcXFxmb3JnZVxcXFxEZXNrdG9wXFxcXEV0aGVyZXVtIGFuZCBTb2xpZGl0eSAtIFRoZSBDb21wbGV0ZSBEZXZlbG9wZXJcXCdzIEd1aWRlXFxcXGtpY2tzdGFydFxcXFxwYWdlc1xcXFxjYW1wYWlnbnNcXFxccmVxdWVzdHNcXFxcaW5kZXguanM/ZW50cnknO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcbmltcG9ydCBSZXF1ZXN0Um93IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvUmVxdWVzdFJvdyc7XG5cbnZhciBSZXF1ZXN0SW5kZXggPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUmVxdWVzdEluZGV4LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSZXF1ZXN0SW5kZXgoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlcXVlc3RJbmRleCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJlcXVlc3RJbmRleC5fX3Byb3RvX18gfHwgX09iamVjdCRnZXRQcm90b3R5cGVPZihSZXF1ZXN0SW5kZXgpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZXF1ZXN0SW5kZXgsIFt7XG4gICAga2V5OiAncmVuZGVyUm93cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclJvd3MoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMucmVxdWVzdHMubWFwKGZ1bmN0aW9uIChyZXF1ZXN0LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZXF1ZXN0Um93LCB7XG4gICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICBpZDogaW5kZXgsXG4gICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICAgICAgICBhZGRyZXNzOiBfdGhpczIucHJvcHMuYWRkcmVzcyxcbiAgICAgICAgICBhcHByb3ZlcnNDb3VudDogX3RoaXMyLnByb3BzLmFwcHJvdmVyc0NvdW50LFxuICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgbGluZU51bWJlcjogMjlcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIEhlYWRlciA9IFRhYmxlLkhlYWRlcixcbiAgICAgICAgICBSb3cgPSBUYWJsZS5Sb3csXG4gICAgICAgICAgSGVhZGVyQ2VsbCA9IFRhYmxlLkhlYWRlckNlbGwsXG4gICAgICAgICAgQm9keSA9IFRhYmxlLkJvZHk7XG5cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIExheW91dCxcbiAgICAgICAge1xuICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgbGluZU51bWJlcjogNDRcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2gzJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0NVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ1JlcXVlc3RzJ1xuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIExpbmssXG4gICAgICAgICAgeyByb3V0ZTogJy9jYW1wYWlnbnMvJyArIHRoaXMucHJvcHMuYWRkcmVzcyArICcvcmVxdWVzdHMvbmV3JywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogNDZcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnYScsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0N1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgICB7IHByaW1hcnk6IHRydWUsIGZsb2F0ZWQ6ICdyaWdodCcsIHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMTAgfSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0OFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJ0FkZCBSZXF1ZXN0J1xuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBUYWJsZSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1M1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEhlYWRlcixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBSb3csXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU1XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEhlYWRlckNlbGwsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNTZcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdJRCdcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBIZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU3XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgSGVhZGVyQ2VsbCxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1OFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ0Ftb3VudCdcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBIZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU5XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnUmVjaXBpZW50J1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEhlYWRlckNlbGwsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNjBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdBcHByb3ZhbCBDb3VudCdcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBIZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDYxXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnQXBwcm92ZSdcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBIZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDYyXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnRmluYWxpemUnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBCb2R5LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNjVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUm93cygpXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDY3XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnRm91bmQgJyxcbiAgICAgICAgICB0aGlzLnByb3BzLnJlcXVlc3RDb3VudCxcbiAgICAgICAgICAnIHJlcXVlc3RzLidcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ2dldEluaXRpYWxQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShwcm9wcykge1xuICAgICAgICB2YXIgYWRkcmVzcywgY2FtcGFpZ24sIHJlcXVlc3RDb3VudCwgYXBwcm92ZXJzQ291bnQsIHJlcXVlc3RzO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGFkZHJlc3MgPSBwcm9wcy5xdWVyeS5hZGRyZXNzO1xuICAgICAgICAgICAgICAgIGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMuZ2V0UmVxdWVzdHNDb3VudCgpLmNhbGwoKTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgcmVxdWVzdENvdW50ID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlcnNDb3VudCgpLmNhbGwoKTtcblxuICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgYXBwcm92ZXJzQ291bnQgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gX1Byb21pc2UuYWxsKEFycmF5KHBhcnNlSW50KHJlcXVlc3RDb3VudCkpLmZpbGwoKS5tYXAoZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5yZXF1ZXN0cyhpbmRleCkuY2FsbCgpO1xuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgIHJlcXVlc3RzID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KCdyZXR1cm4nLCB7IGFkZHJlc3M6IGFkZHJlc3MsIHJlcXVlc3RzOiByZXF1ZXN0cywgcmVxdWVzdENvdW50OiByZXF1ZXN0Q291bnQsIGFwcHJvdmVyc0NvdW50OiBhcHByb3ZlcnNDb3VudCB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCB0aGlzKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gZ2V0SW5pdGlhbFByb3BzKF94KSB7XG4gICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRJbml0aWFsUHJvcHM7XG4gICAgfSgpXG4gIH1dKTtcblxuICByZXR1cm4gUmVxdWVzdEluZGV4O1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0SW5kZXg7Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVxdWVzdEluZGV4IiwiX0NvbXBvbmVudCIsIl9fcHJvdG9fXyIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwidmFsdWUiLCJyZW5kZXJSb3dzIiwiX3RoaXMyIiwicHJvcHMiLCJyZXF1ZXN0cyIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImFkZHJlc3MiLCJhcHByb3ZlcnNDb3VudCIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwicmVuZGVyIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJyb3V0ZSIsInByaW1hcnkiLCJmbG9hdGVkIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJyZXF1ZXN0Q291bnQiLCJfcmVmIiwibWFyayIsIl9jYWxsZWUiLCJjYW1wYWlnbiIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsInNlbnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJhYnJ1cHQiLCJzdG9wIiwiZ2V0SW5pdGlhbFByb3BzIiwiX3giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBTkEsSUFBSUEsZUFBZSwySUFBbkI7OztBQVFBLElBQUlDLGVBQWUsVUFBVUMsVUFBVixFQUFzQjtBQUN2QywwQkFBVUQsWUFBVixFQUF3QkMsVUFBeEI7O0FBRUEsV0FBU0QsWUFBVCxHQUF3QjtBQUN0QixrQ0FBZ0IsSUFBaEIsRUFBc0JBLFlBQXRCOztBQUVBLFdBQU8seUNBQTJCLElBQTNCLEVBQWlDLENBQUNBLGFBQWFFLFNBQWIsSUFBMEIsOEJBQXVCRixZQUF2QixDQUEzQixFQUFpRUcsS0FBakUsQ0FBdUUsSUFBdkUsRUFBNkVDLFNBQTdFLENBQWpDLENBQVA7QUFDRDs7QUFFRCw2QkFBYUosWUFBYixFQUEyQixDQUFDO0FBQzFCSyxTQUFLLFlBRHFCO0FBRTFCQyxXQUFPLFNBQVNDLFVBQVQsR0FBc0I7QUFDM0IsVUFBSUMsU0FBUyxJQUFiOztBQUVBLGFBQU8sS0FBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxHQUFwQixDQUF3QixVQUFVQyxPQUFWLEVBQW1CQyxLQUFuQixFQUEwQjtBQUN2RCxlQUFPLGdCQUFNQyxhQUFOLHVCQUFnQztBQUNyQ1QsZUFBS1EsS0FEZ0M7QUFFckNFLGNBQUlGLEtBRmlDO0FBR3JDRCxtQkFBU0EsT0FINEI7QUFJckNJLG1CQUFTUixPQUFPQyxLQUFQLENBQWFPLE9BSmU7QUFLckNDLDBCQUFnQlQsT0FBT0MsS0FBUCxDQUFhUSxjQUxRO0FBTXJDQyxvQkFBVTtBQUNSQyxzQkFBVXBCLFlBREY7QUFFUnFCLHdCQUFZO0FBRko7QUFOMkIsU0FBaEMsQ0FBUDtBQVdELE9BWk0sQ0FBUDtBQWFEO0FBbEJ5QixHQUFELEVBbUJ4QjtBQUNEZixTQUFLLFFBREo7QUFFREMsV0FBTyxTQUFTZSxNQUFULEdBQWtCO0FBQ3ZCLFVBQUlDLFNBQVMsdUJBQU1BLE1BQW5CO0FBQUEsVUFDSUMsTUFBTSx1QkFBTUEsR0FEaEI7QUFBQSxVQUVJQyxhQUFhLHVCQUFNQSxVQUZ2QjtBQUFBLFVBR0lDLE9BQU8sdUJBQU1BLElBSGpCOztBQU1BLGFBQU8sZ0JBQU1YLGFBQU4sbUJBRUw7QUFDRUksa0JBQVU7QUFDUkMsb0JBQVVwQixZQURGO0FBRVJxQixzQkFBWTtBQUZKO0FBRFosT0FGSyxFQVFMLGdCQUFNTixhQUFOLENBQ0UsSUFERixFQUVFO0FBQ0VJLGtCQUFVO0FBQ1JDLG9CQUFVcEIsWUFERjtBQUVScUIsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRSxVQVJGLENBUkssRUFrQkwsZ0JBQU1OLGFBQU4sZUFFRSxFQUFFWSxPQUFPLGdCQUFnQixLQUFLakIsS0FBTCxDQUFXTyxPQUEzQixHQUFxQyxlQUE5QyxFQUErREUsVUFBVTtBQUNyRUMsb0JBQVVwQixZQUQyRDtBQUVyRXFCLHNCQUFZO0FBRnlEO0FBQXpFLE9BRkYsRUFPRSxnQkFBTU4sYUFBTixDQUNFLEdBREYsRUFFRTtBQUNFSSxrQkFBVTtBQUNSQyxvQkFBVXBCLFlBREY7QUFFUnFCLHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUUsZ0JBQU1OLGFBQU4sMEJBRUUsRUFBRWEsU0FBUyxJQUFYLEVBQWlCQyxTQUFTLE9BQTFCLEVBQW1DQyxPQUFPLEVBQUVDLGNBQWMsRUFBaEIsRUFBMUMsRUFBZ0VaLFVBQVU7QUFDdEVDLG9CQUFVcEIsWUFENEQ7QUFFdEVxQixzQkFBWTtBQUYwRDtBQUExRSxPQUZGLEVBT0UsYUFQRixDQVJGLENBUEYsQ0FsQkssRUE0Q0wsZ0JBQU1OLGFBQU4seUJBRUU7QUFDRUksa0JBQVU7QUFDUkMsb0JBQVVwQixZQURGO0FBRVJxQixzQkFBWTtBQUZKO0FBRFosT0FGRixFQVFFLGdCQUFNTixhQUFOLENBQ0VRLE1BREYsRUFFRTtBQUNFSixrQkFBVTtBQUNSQyxvQkFBVXBCLFlBREY7QUFFUnFCLHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUUsZ0JBQU1OLGFBQU4sQ0FDRVMsR0FERixFQUVFO0FBQ0VMLGtCQUFVO0FBQ1JDLG9CQUFVcEIsWUFERjtBQUVScUIsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRSxnQkFBTU4sYUFBTixDQUNFVSxVQURGLEVBRUU7QUFDRU4sa0JBQVU7QUFDUkMsb0JBQVVwQixZQURGO0FBRVJxQixzQkFBWTtBQUZKO0FBRFosT0FGRixFQVFFLElBUkYsQ0FSRixFQWtCRSxnQkFBTU4sYUFBTixDQUNFVSxVQURGLEVBRUU7QUFDRU4sa0JBQVU7QUFDUkMsb0JBQVVwQixZQURGO0FBRVJxQixzQkFBWTtBQUZKO0FBRFosT0FGRixFQVFFLGFBUkYsQ0FsQkYsRUE0QkUsZ0JBQU1OLGFBQU4sQ0FDRVUsVUFERixFQUVFO0FBQ0VOLGtCQUFVO0FBQ1JDLG9CQUFVcEIsWUFERjtBQUVScUIsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRSxRQVJGLENBNUJGLEVBc0NFLGdCQUFNTixhQUFOLENBQ0VVLFVBREYsRUFFRTtBQUNFTixrQkFBVTtBQUNSQyxvQkFBVXBCLFlBREY7QUFFUnFCLHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUUsV0FSRixDQXRDRixFQWdERSxnQkFBTU4sYUFBTixDQUNFVSxVQURGLEVBRUU7QUFDRU4sa0JBQVU7QUFDUkMsb0JBQVVwQixZQURGO0FBRVJxQixzQkFBWTtBQUZKO0FBRFosT0FGRixFQVFFLGdCQVJGLENBaERGLEVBMERFLGdCQUFNTixhQUFOLENBQ0VVLFVBREYsRUFFRTtBQUNFTixrQkFBVTtBQUNSQyxvQkFBVXBCLFlBREY7QUFFUnFCLHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUUsU0FSRixDQTFERixFQW9FRSxnQkFBTU4sYUFBTixDQUNFVSxVQURGLEVBRUU7QUFDRU4sa0JBQVU7QUFDUkMsb0JBQVVwQixZQURGO0FBRVJxQixzQkFBWTtBQUZKO0FBRFosT0FGRixFQVFFLFVBUkYsQ0FwRUYsQ0FSRixDQVJGLEVBZ0dFLGdCQUFNTixhQUFOLENBQ0VXLElBREYsRUFFRTtBQUNFUCxrQkFBVTtBQUNSQyxvQkFBVXBCLFlBREY7QUFFUnFCLHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUUsS0FBS2IsVUFBTCxFQVJGLENBaEdGLENBNUNLLEVBdUpMLGdCQUFNTyxhQUFOLENBQ0UsS0FERixFQUVFO0FBQ0VJLGtCQUFVO0FBQ1JDLG9CQUFVcEIsWUFERjtBQUVScUIsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRSxRQVJGLEVBU0UsS0FBS1gsS0FBTCxDQUFXc0IsWUFUYixFQVVFLFlBVkYsQ0F2SkssQ0FBUDtBQW9LRDtBQTdLQSxHQW5Cd0IsQ0FBM0IsRUFpTUksQ0FBQztBQUNIMUIsU0FBSyxpQkFERjtBQUVIQyxXQUFPLFlBQVk7QUFDakIsVUFBSTBCLE9BQU8saUNBQW1CLGFBQWEsc0JBQW9CQyxJQUFwQixDQUF5QixTQUFTQyxPQUFULENBQWlCekIsS0FBakIsRUFBd0I7QUFDMUYsWUFBSU8sT0FBSixFQUFhbUIsUUFBYixFQUF1QkosWUFBdkIsRUFBcUNkLGNBQXJDLEVBQXFEUCxRQUFyRDtBQUNBLGVBQU8sc0JBQW9CMEIsSUFBcEIsQ0FBeUIsU0FBU0MsUUFBVCxDQUFrQkMsUUFBbEIsRUFBNEI7QUFDMUQsaUJBQU8sQ0FBUCxFQUFVO0FBQ1Isb0JBQVFBLFNBQVNDLElBQVQsR0FBZ0JELFNBQVNFLElBQWpDO0FBQ0UsbUJBQUssQ0FBTDtBQUNFeEIsMEJBQVVQLE1BQU1nQyxLQUFOLENBQVl6QixPQUF0QjtBQUNBbUIsMkJBQVcsd0JBQVNuQixPQUFULENBQVg7QUFDQXNCLHlCQUFTRSxJQUFULEdBQWdCLENBQWhCO0FBQ0EsdUJBQU9MLFNBQVNPLE9BQVQsQ0FBaUJDLGdCQUFqQixHQUFvQ0MsSUFBcEMsRUFBUDs7QUFFRixtQkFBSyxDQUFMO0FBQ0ViLCtCQUFlTyxTQUFTTyxJQUF4QjtBQUNBUCx5QkFBU0UsSUFBVCxHQUFnQixDQUFoQjtBQUNBLHVCQUFPTCxTQUFTTyxPQUFULENBQWlCekIsY0FBakIsR0FBa0MyQixJQUFsQyxFQUFQOztBQUVGLG1CQUFLLENBQUw7QUFDRTNCLGlDQUFpQnFCLFNBQVNPLElBQTFCO0FBQ0FQLHlCQUFTRSxJQUFULEdBQWdCLEVBQWhCO0FBQ0EsdUJBQU8sa0JBQVNNLEdBQVQsQ0FBYUMsTUFBTUMsU0FBU2pCLFlBQVQsQ0FBTixFQUE4QmtCLElBQTlCLEdBQXFDdEMsR0FBckMsQ0FBeUMsVUFBVXVDLE9BQVYsRUFBbUJyQyxLQUFuQixFQUEwQjtBQUNyRix5QkFBT3NCLFNBQVNPLE9BQVQsQ0FBaUJoQyxRQUFqQixDQUEwQkcsS0FBMUIsRUFBaUMrQixJQUFqQyxFQUFQO0FBQ0QsaUJBRm1CLENBQWIsQ0FBUDs7QUFJRixtQkFBSyxFQUFMO0FBQ0VsQywyQkFBVzRCLFNBQVNPLElBQXBCO0FBQ0EsdUJBQU9QLFNBQVNhLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEIsRUFBRW5DLFNBQVNBLE9BQVgsRUFBb0JOLFVBQVVBLFFBQTlCLEVBQXdDcUIsY0FBY0EsWUFBdEQsRUFBb0VkLGdCQUFnQkEsY0FBcEYsRUFBMUIsQ0FBUDs7QUFFRixtQkFBSyxFQUFMO0FBQ0EsbUJBQUssS0FBTDtBQUNFLHVCQUFPcUIsU0FBU2MsSUFBVCxFQUFQO0FBekJKO0FBMkJEO0FBQ0YsU0E5Qk0sRUE4QkpsQixPQTlCSSxFQThCSyxJQTlCTCxDQUFQO0FBK0JELE9BakMwQyxDQUFoQyxDQUFYOztBQW1DQSxlQUFTbUIsZUFBVCxDQUF5QkMsRUFBekIsRUFBNkI7QUFDM0IsZUFBT3RCLEtBQUs3QixLQUFMLENBQVcsSUFBWCxFQUFpQkMsU0FBakIsQ0FBUDtBQUNEOztBQUVELGFBQU9pRCxlQUFQO0FBQ0QsS0F6Q007QUFGSixHQUFELENBak1KOztBQStPQSxTQUFPckQsWUFBUDtBQUNELENBelBrQixrQkFBbkI7O2tCQTJQZUEsWSIsImZpbGUiOiJ1bmtub3duIn0=