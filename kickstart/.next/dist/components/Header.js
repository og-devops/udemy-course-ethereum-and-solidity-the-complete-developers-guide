'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\forge\\Desktop\\Ethereum and Solidity - The Complete Developer\'s Guide\\kickstart\\components\\Header.js';

exports.default = function () {
  return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '10px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'ulogcoin')), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'Campaigns')), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, '+'))));
};
//jsx: manual java injection with "object literal".
/*
import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route='/'>
        <a className="item">
          ulogcoin
        </a>
      </Link>
      //<Menu.Item>ulogcoin</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          Campaigns
        </Menu.Item>

        <Menu.Item>
          +
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    //<Menu.item></Menu.item>
  );
};
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwibWFyZ2luVG9wIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyb3V0ZSIsImNsYXNzTmFtZSIsIk1lbnUiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUhBLElBQUlBLGVBQWUsc0hBQW5COztrQkFLZ0IsWUFBWTtBQUMxQixTQUFPLGdCQUFNQyxhQUFOLHdCQUVMLEVBQUVDLE9BQU8sRUFBRUMsV0FBVyxNQUFiLEVBQVQsRUFBZ0NDLFVBQVU7QUFDdENDLGdCQUFVTCxZQUQ0QjtBQUV0Q00sa0JBQVk7QUFGMEI7QUFBMUMsR0FGSyxFQU9MLGdCQUFNTCxhQUFOLGVBRUUsRUFBRU0sT0FBTyxHQUFULEVBQWNILFVBQVU7QUFDcEJDLGdCQUFVTCxZQURVO0FBRXBCTSxrQkFBWTtBQUZRO0FBQXhCLEdBRkYsRUFPRSxnQkFBTUwsYUFBTixDQUNFLEdBREYsRUFFRSxFQUFFTyxXQUFXLE1BQWIsRUFBcUJKLFVBQVU7QUFDM0JDLGdCQUFVTCxZQURpQjtBQUUzQk0sa0JBQVk7QUFGZTtBQUEvQixHQUZGLEVBT0UsVUFQRixDQVBGLENBUEssRUF3QkwsZ0JBQU1MLGFBQU4sQ0FDRSxzQkFBS1EsSUFEUCxFQUVFLEVBQUVDLFVBQVUsT0FBWixFQUFxQk4sVUFBVTtBQUMzQkMsZ0JBQVVMLFlBRGlCO0FBRTNCTSxrQkFBWTtBQUZlO0FBQS9CLEdBRkYsRUFPRSxnQkFBTUwsYUFBTixlQUVFLEVBQUVNLE9BQU8sR0FBVCxFQUFjSCxVQUFVO0FBQ3BCQyxnQkFBVUwsWUFEVTtBQUVwQk0sa0JBQVk7QUFGUTtBQUF4QixHQUZGLEVBT0UsZ0JBQU1MLGFBQU4sQ0FDRSxHQURGLEVBRUUsRUFBRU8sV0FBVyxNQUFiLEVBQXFCSixVQUFVO0FBQzNCQyxnQkFBVUwsWUFEaUI7QUFFM0JNLGtCQUFZO0FBRmU7QUFBL0IsR0FGRixFQU9FLFdBUEYsQ0FQRixDQVBGLEVBd0JFLGdCQUFNTCxhQUFOLGVBRUUsRUFBRU0sT0FBTyxnQkFBVCxFQUEyQkgsVUFBVTtBQUNqQ0MsZ0JBQVVMLFlBRHVCO0FBRWpDTSxrQkFBWTtBQUZxQjtBQUFyQyxHQUZGLEVBT0UsZ0JBQU1MLGFBQU4sQ0FDRSxHQURGLEVBRUUsRUFBRU8sV0FBVyxNQUFiLEVBQXFCSixVQUFVO0FBQzNCQyxnQkFBVUwsWUFEaUI7QUFFM0JNLGtCQUFZO0FBRmU7QUFBL0IsR0FGRixFQU9FLEdBUEYsQ0FQRixDQXhCRixDQXhCSyxDQUFQO0FBbUVELEM7QUFDRDtBQUNBIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX2pzeEZpbGVOYW1lID0gJ0M6XFxcXFVzZXJzXFxcXGZvcmdlXFxcXERlc2t0b3BcXFxcRXRoZXJldW0gYW5kIFNvbGlkaXR5IC0gVGhlIENvbXBsZXRlIERldmVsb3BlclxcJ3MgR3VpZGVcXFxca2lja3N0YXJ0XFxcXGNvbXBvbmVudHNcXFxcSGVhZGVyLmpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1lbnUsXG4gICAgeyBzdHlsZTogeyBtYXJnaW5Ub3A6ICcxMHB4JyB9LCBfX3NvdXJjZToge1xuICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICBsaW5lTnVtYmVyOiA3XG4gICAgICB9XG4gICAgfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgTGluayxcbiAgICAgIHsgcm91dGU6ICcvJywgX19zb3VyY2U6IHtcbiAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgIGxpbmVOdW1iZXI6IDhcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdhJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdpdGVtJywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiA5XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAndWxvZ2NvaW4nXG4gICAgICApXG4gICAgKSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgTWVudS5NZW51LFxuICAgICAgeyBwb3NpdGlvbjogJ3JpZ2h0JywgX19zb3VyY2U6IHtcbiAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgIGxpbmVOdW1iZXI6IDEyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBMaW5rLFxuICAgICAgICB7IHJvdXRlOiAnLycsIF9fc291cmNlOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgbGluZU51bWJlcjogMTNcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2EnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnaXRlbScsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnQ2FtcGFpZ25zJ1xuICAgICAgICApXG4gICAgICApLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgTGluayxcbiAgICAgICAgeyByb3V0ZTogJy9jYW1wYWlnbnMvbmV3JywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiAxN1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnYScsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdpdGVtJywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogMThcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICcrJ1xuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xufSk7XG4vL2pzeDogbWFudWFsIGphdmEgaW5qZWN0aW9uIHdpdGggXCJvYmplY3QgbGl0ZXJhbFwiLlxuLypcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51IHN0eWxlPXt7IG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICA8TGluayByb3V0ZT0nLyc+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgdWxvZ2NvaW5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgLy88TWVudS5JdGVtPnVsb2djb2luPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cclxuICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgQ2FtcGFpZ25zXHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICArXHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDwvTWVudS5NZW51PlxyXG4gICAgPC9NZW51PlxyXG4gICAgLy88TWVudS5pdGVtPjwvTWVudS5pdGVtPlxyXG4gICk7XHJcbn07XHJcbiovIl19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwibWFyZ2luVG9wIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyb3V0ZSIsImNsYXNzTmFtZSIsIk1lbnUiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUhBLElBQUlBLGVBQWUsc0hBQW5COztrQkFLZ0IsWUFBWTtBQUMxQixTQUFPLGdCQUFNQyxhQUFOLHdCQUVMLEVBQUVDLE9BQU8sRUFBRUMsV0FBVyxNQUFiLEVBQVQsRUFBZ0NDLFVBQVU7QUFDdENDLGdCQUFVTCxZQUQ0QjtBQUV0Q00sa0JBQVk7QUFGMEI7QUFBMUMsR0FGSyxFQU9MLGdCQUFNTCxhQUFOLGVBRUUsRUFBRU0sT0FBTyxHQUFULEVBQWNILFVBQVU7QUFDcEJDLGdCQUFVTCxZQURVO0FBRXBCTSxrQkFBWTtBQUZRO0FBQXhCLEdBRkYsRUFPRSxnQkFBTUwsYUFBTixDQUNFLEdBREYsRUFFRSxFQUFFTyxXQUFXLE1BQWIsRUFBcUJKLFVBQVU7QUFDM0JDLGdCQUFVTCxZQURpQjtBQUUzQk0sa0JBQVk7QUFGZTtBQUEvQixHQUZGLEVBT0UsVUFQRixDQVBGLENBUEssRUF3QkwsZ0JBQU1MLGFBQU4sQ0FDRSxzQkFBS1EsSUFEUCxFQUVFLEVBQUVDLFVBQVUsT0FBWixFQUFxQk4sVUFBVTtBQUMzQkMsZ0JBQVVMLFlBRGlCO0FBRTNCTSxrQkFBWTtBQUZlO0FBQS9CLEdBRkYsRUFPRSxnQkFBTUwsYUFBTixlQUVFLEVBQUVNLE9BQU8sR0FBVCxFQUFjSCxVQUFVO0FBQ3BCQyxnQkFBVUwsWUFEVTtBQUVwQk0sa0JBQVk7QUFGUTtBQUF4QixHQUZGLEVBT0UsZ0JBQU1MLGFBQU4sQ0FDRSxHQURGLEVBRUUsRUFBRU8sV0FBVyxNQUFiLEVBQXFCSixVQUFVO0FBQzNCQyxnQkFBVUwsWUFEaUI7QUFFM0JNLGtCQUFZO0FBRmU7QUFBL0IsR0FGRixFQU9FLFdBUEYsQ0FQRixDQVBGLEVBd0JFLGdCQUFNTCxhQUFOLGVBRUUsRUFBRU0sT0FBTyxnQkFBVCxFQUEyQkgsVUFBVTtBQUNqQ0MsZ0JBQVVMLFlBRHVCO0FBRWpDTSxrQkFBWTtBQUZxQjtBQUFyQyxHQUZGLEVBT0UsZ0JBQU1MLGFBQU4sQ0FDRSxHQURGLEVBRUUsRUFBRU8sV0FBVyxNQUFiLEVBQXFCSixVQUFVO0FBQzNCQyxnQkFBVUwsWUFEaUI7QUFFM0JNLGtCQUFZO0FBRmU7QUFBL0IsR0FGRixFQU9FLEdBUEYsQ0FQRixDQXhCRixDQXhCSyxDQUFQO0FBbUVELEM7QUFDRDtBQUNBIiwiZmlsZSI6InVua25vd24ifQ==