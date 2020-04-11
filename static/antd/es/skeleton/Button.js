function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import * as React from 'react';
import omit from 'omit.js';
import classNames from 'classnames';
import Element from './Element';
import { ConfigConsumer } from '../config-provider'; // eslint-disable-next-line react/prefer-stateless-function

var SkeletonButton = /*#__PURE__*/function (_React$Component) {
  _inherits(SkeletonButton, _React$Component);

  function SkeletonButton() {
    var _this;

    _classCallCheck(this, SkeletonButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SkeletonButton).apply(this, arguments));

    _this.renderSkeletonButton = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          className = _this$props.className,
          active = _this$props.active;
      var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
      var otherProps = omit(_this.props, ['prefixCls']);
      var cls = classNames(prefixCls, className, "".concat(prefixCls, "-element"), _defineProperty({}, "".concat(prefixCls, "-active"), active));
      return React.createElement("div", {
        className: cls
      }, React.createElement(Element, _extends({
        prefixCls: "".concat(prefixCls, "-button")
      }, otherProps)));
    };

    return _this;
  }

  _createClass(SkeletonButton, [{
    key: "render",
    value: function render() {
      return React.createElement(ConfigConsumer, null, this.renderSkeletonButton);
    }
  }]);

  return SkeletonButton;
}(React.Component);

SkeletonButton.defaultProps = {
  size: 'default'
};
export default SkeletonButton;
//# sourceMappingURL=Button.js.map
