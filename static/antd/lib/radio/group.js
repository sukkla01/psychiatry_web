"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _radio = _interopRequireDefault(require("./radio"));

var _configProvider = require("../config-provider");

var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));

var _context = require("./context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function getCheckedValue(children) {
  var value = null;
  var matched = false;
  React.Children.forEach(children, function (radio) {
    if (radio && radio.props && radio.props.checked) {
      value = radio.props.value;
      matched = true;
    }
  });
  return matched ? {
    value: value
  } : undefined;
}

var RadioGroup = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(RadioGroup, _React$PureComponent);

  function RadioGroup(props) {
    var _this;

    _classCallCheck(this, RadioGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RadioGroup).call(this, props));

    _this.onRadioChange = function (ev) {
      var lastValue = _this.state.value;
      var value = ev.target.value;

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      var onChange = _this.props.onChange;

      if (onChange && value !== lastValue) {
        onChange(ev);
      }
    };

    _this.renderGroup = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls,
          direction = _ref.direction;

      var _assertThisInitialize = _assertThisInitialized(_this),
          props = _assertThisInitialize.props;

      var customizePrefixCls = props.prefixCls,
          _props$className = props.className,
          className = _props$className === void 0 ? '' : _props$className,
          options = props.options,
          buttonStyle = props.buttonStyle,
          customizeSize = props.size;
      var prefixCls = getPrefixCls('radio', customizePrefixCls);
      var groupPrefixCls = "".concat(prefixCls, "-group");
      var children = props.children; // 如果存在 options, 优先使用

      if (options && options.length > 0) {
        children = options.map(function (option) {
          if (typeof option === 'string') {
            // 此处类型自动推导为 string
            return React.createElement(_radio["default"], {
              key: option,
              prefixCls: prefixCls,
              disabled: _this.props.disabled,
              value: option,
              checked: _this.state.value === option
            }, option);
          } // 此处类型自动推导为 { label: string value: string }


          return React.createElement(_radio["default"], {
            key: "radio-group-value-options-".concat(option.value),
            prefixCls: prefixCls,
            disabled: option.disabled || _this.props.disabled,
            value: option.value,
            checked: _this.state.value === option.value,
            style: option.style
          }, option.label);
        });
      }

      return React.createElement(_SizeContext["default"].Consumer, null, function (size) {
        var _classNames;

        var mergedSize = customizeSize || size;
        var classString = (0, _classnames["default"])(groupPrefixCls, "".concat(groupPrefixCls, "-").concat(buttonStyle), (_classNames = {}, _defineProperty(_classNames, "".concat(groupPrefixCls, "-").concat(mergedSize), mergedSize), _defineProperty(_classNames, "".concat(groupPrefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
        return React.createElement("div", {
          className: classString,
          style: props.style,
          onMouseEnter: props.onMouseEnter,
          onMouseLeave: props.onMouseLeave,
          id: props.id
        }, children);
      });
    };

    var value;

    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    } else {
      var checkedValue = getCheckedValue(props.children);
      value = checkedValue && checkedValue.value;
    }

    _this.state = {
      value: value
    };
    return _this;
  }

  _createClass(RadioGroup, [{
    key: "render",
    value: function render() {
      return React.createElement(_context.RadioGroupContextProvider, {
        value: {
          onChange: this.onRadioChange,
          value: this.state.value,
          disabled: this.props.disabled,
          name: this.props.name
        }
      }, React.createElement(_configProvider.ConfigConsumer, null, this.renderGroup));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value
        };
      }

      var checkedValue = getCheckedValue(nextProps.children);

      if (checkedValue) {
        return {
          value: checkedValue.value
        };
      }

      return null;
    }
  }]);

  return RadioGroup;
}(React.PureComponent);

RadioGroup.defaultProps = {
  buttonStyle: 'outline'
};
var _default = RadioGroup;
exports["default"] = _default;
//# sourceMappingURL=group.js.map
