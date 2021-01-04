'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\forge\\Desktop\\Ethereum and Solidity - The Complete Developer\'s Guide\\kickstart\\components\\Layout.js';

exports.default = function (props) {
  return _react2.default.createElement(_semanticUiReact.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('link', {
    rel: 'stylesheet',
    href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), props.children);
};

/*
import React from 'react';

export default props => {
  return (
    <div>
      <h1>Im a header</h1>
        {props.children}
      <h1>Im a footer</h1>
    </div>
  );
};
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyZWwiLCJocmVmIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkEsSUFBSUEsZUFBZSxzSEFBbkI7O2tCQU1nQixVQUFVQyxLQUFWLEVBQWlCO0FBQy9CLFNBQU8sZ0JBQU1DLGFBQU4sNkJBRUw7QUFDRUMsY0FBVTtBQUNSQyxnQkFBVUosWUFERjtBQUVSSyxrQkFBWTtBQUZKO0FBRFosR0FGSyxFQVFMLGdCQUFNSCxhQUFOLGlCQUVFO0FBQ0VDLGNBQVU7QUFDUkMsZ0JBQVVKLFlBREY7QUFFUkssa0JBQVk7QUFGSjtBQURaLEdBRkYsRUFRRSxnQkFBTUgsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUMxQkksU0FBSyxZQURxQjtBQUUxQkMsVUFBTSxzRUFGb0I7QUFHMUJKLGNBQVU7QUFDUkMsZ0JBQVVKLFlBREY7QUFFUkssa0JBQVk7QUFGSjtBQUhnQixHQUE1QixDQVJGLENBUkssRUF5QkwsZ0JBQU1ILGFBQU4sbUJBQTRCO0FBQzFCQyxjQUFVO0FBQ1JDLGdCQUFVSixZQURGO0FBRVJLLGtCQUFZO0FBRko7QUFEZ0IsR0FBNUIsQ0F6QkssRUErQkxKLE1BQU1PLFFBL0JELENBQVA7QUFpQ0QsQzs7QUFFRCIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9qc3hGaWxlTmFtZSA9ICdDOlxcXFxVc2Vyc1xcXFxmb3JnZVxcXFxEZXNrdG9wXFxcXEV0aGVyZXVtIGFuZCBTb2xpZGl0eSAtIFRoZSBDb21wbGV0ZSBEZXZlbG9wZXJcXCdzIEd1aWRlXFxcXGtpY2tzdGFydFxcXFxjb21wb25lbnRzXFxcXExheW91dC5qcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dFxcXFxkaXN0XFxcXGxpYlxcXFxoZWFkLmpzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIENvbnRhaW5lcixcbiAgICB7XG4gICAgICBfX3NvdXJjZToge1xuICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICBsaW5lTnVtYmVyOiA4XG4gICAgICB9XG4gICAgfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgSGVhZCxcbiAgICAgIHtcbiAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgIGxpbmVOdW1iZXI6IDlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnLCB7XG4gICAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgICBocmVmOiAnLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjEyL3NlbWFudGljLm1pbi5jc3MnLFxuICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgbGluZU51bWJlcjogMTBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCB7XG4gICAgICBfX3NvdXJjZToge1xuICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICBsaW5lTnVtYmVyOiAxNlxuICAgICAgfVxuICAgIH0pLFxuICAgIHByb3BzLmNoaWxkcmVuXG4gICk7XG59KTtcblxuLypcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkltIGEgaGVhZGVyPC9oMT5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDxoMT5JbSBhIGZvb3RlcjwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4qLyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyZWwiLCJocmVmIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkEsSUFBSUEsZUFBZSxzSEFBbkI7O2tCQU1nQixVQUFVQyxLQUFWLEVBQWlCO0FBQy9CLFNBQU8sZ0JBQU1DLGFBQU4sNkJBRUw7QUFDRUMsY0FBVTtBQUNSQyxnQkFBVUosWUFERjtBQUVSSyxrQkFBWTtBQUZKO0FBRFosR0FGSyxFQVFMLGdCQUFNSCxhQUFOLGlCQUVFO0FBQ0VDLGNBQVU7QUFDUkMsZ0JBQVVKLFlBREY7QUFFUkssa0JBQVk7QUFGSjtBQURaLEdBRkYsRUFRRSxnQkFBTUgsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUMxQkksU0FBSyxZQURxQjtBQUUxQkMsVUFBTSxzRUFGb0I7QUFHMUJKLGNBQVU7QUFDUkMsZ0JBQVVKLFlBREY7QUFFUkssa0JBQVk7QUFGSjtBQUhnQixHQUE1QixDQVJGLENBUkssRUF5QkwsZ0JBQU1ILGFBQU4sbUJBQTRCO0FBQzFCQyxjQUFVO0FBQ1JDLGdCQUFVSixZQURGO0FBRVJLLGtCQUFZO0FBRko7QUFEZ0IsR0FBNUIsQ0F6QkssRUErQkxKLE1BQU1PLFFBL0JELENBQVA7QUFpQ0QsQzs7QUFFRCIsImZpbGUiOiJ1bmtub3duIn0=