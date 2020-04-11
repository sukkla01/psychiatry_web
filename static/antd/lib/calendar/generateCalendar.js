"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _padStart = _interopRequireDefault(require("lodash/padStart"));

var _rcPicker = require("rc-picker");

var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

var _en_US = _interopRequireDefault(require("./locale/en_US"));

var _configProvider = require("../config-provider");

var _Header = _interopRequireDefault(require("./Header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function generateCalendar(generateConfig) {
  function isSameMonth(date1, date2) {
    return date1 === date2 || date1 && date2 && generateConfig.getYear(date1) === generateConfig.getYear(date2) && generateConfig.getMonth(date1) === generateConfig.getMonth(date2);
  }

  function isSameDate(date1, date2) {
    return isSameMonth(date1, date2) && generateConfig.getDate(date1) === generateConfig.getDate(date2);
  }

  var Calendar = function Calendar(props) {
    var customizePrefixCls = props.prefixCls,
        className = props.className,
        dateFullCellRender = props.dateFullCellRender,
        dateCellRender = props.dateCellRender,
        monthFullCellRender = props.monthFullCellRender,
        monthCellRender = props.monthCellRender,
        headerRender = props.headerRender,
        value = props.value,
        defaultValue = props.defaultValue,
        disabledDate = props.disabledDate,
        mode = props.mode,
        validRange = props.validRange,
        _props$fullscreen = props.fullscreen,
        fullscreen = _props$fullscreen === void 0 ? true : _props$fullscreen,
        onChange = props.onChange,
        onPanelChange = props.onPanelChange,
        onSelect = props.onSelect;

    var _React$useContext = React.useContext(_configProvider.ConfigContext),
        getPrefixCls = _React$useContext.getPrefixCls;

    var prefixCls = getPrefixCls('picker', customizePrefixCls);
    var calendarPrefixCls = "".concat(prefixCls, "-calendar");
    var today = generateConfig.getNow(); // ====================== State =======================
    // Value

    var _React$useState = React.useState(function () {
      return value || defaultValue || generateConfig.getNow();
    }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        innerValue = _React$useState2[0],
        setInnerValue = _React$useState2[1];

    var mergedValue = value || innerValue; // Mode

    var _React$useState3 = React.useState(function () {
      return mode || 'month';
    }),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        innerMode = _React$useState4[0],
        setInnerMode = _React$useState4[1];

    var mergedMode = mode || innerMode;
    var panelMode = React.useMemo(function () {
      return mergedMode === 'year' ? 'month' : 'date';
    }, [mergedMode]); // Disabled Date

    var mergedDisabledDate = React.useMemo(function () {
      if (validRange) {
        return function (date) {
          return generateConfig.isAfter(validRange[0], date) || generateConfig.isAfter(date, validRange[1]);
        };
      }

      return disabledDate;
    }, [disabledDate, validRange]); // ====================== Events ======================

    var triggerPanelChange = function triggerPanelChange(date, newMode) {
      if (onPanelChange) {
        onPanelChange(date, newMode);
      }
    };

    var triggerChange = function triggerChange(date) {
      setInnerValue(date);

      if (!isSameDate(date, mergedValue)) {
        triggerPanelChange(date, mergedMode);

        if (onChange) {
          onChange(date);
        }
      }
    };

    var triggerModeChange = function triggerModeChange(newMode) {
      setInnerMode(newMode);
      triggerPanelChange(mergedValue, newMode);
    };

    var onInternalSelect = function onInternalSelect(date) {
      triggerChange(date);

      if (onSelect) {
        onSelect(date);
      }
    }; // ====================== Locale ======================


    var getDefaultLocale = function getDefaultLocale() {
      var locale = props.locale;

      var result = _extends(_extends({}, _en_US["default"]), locale);

      result.lang = _extends(_extends({}, result.lang), (locale || {}).lang);
      return result;
    }; // ====================== Render ======================


    var dateRender = React.useCallback(function (date) {
      if (dateFullCellRender) {
        return dateFullCellRender(date);
      }

      return React.createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-cell-inner"), "".concat(calendarPrefixCls, "-date"), _defineProperty({}, "".concat(calendarPrefixCls, "-date-today"), isSameDate(today, date)))
      }, React.createElement("div", {
        className: "".concat(calendarPrefixCls, "-date-value")
      }, (0, _padStart["default"])(String(generateConfig.getDate(date)), 2, '0')), React.createElement("div", {
        className: "".concat(calendarPrefixCls, "-date-content")
      }, dateCellRender && dateCellRender(date)));
    }, [dateFullCellRender, dateCellRender]);
    var monthRender = React.useCallback(function (date, locale) {
      if (monthFullCellRender) {
        return monthFullCellRender(date);
      }

      var months = locale.shortMonths || generateConfig.locale.getShortMonths(locale.locale);
      return React.createElement("div", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-cell-inner"), "".concat(calendarPrefixCls, "-date"), _defineProperty({}, "".concat(calendarPrefixCls, "-date-today"), isSameMonth(today, date)))
      }, React.createElement("div", {
        className: "".concat(calendarPrefixCls, "-date-value")
      }, months[generateConfig.getMonth(date)]), React.createElement("div", {
        className: "".concat(calendarPrefixCls, "-date-content")
      }, monthCellRender && monthCellRender(date)));
    }, [monthFullCellRender, monthCellRender]);
    return React.createElement(_LocaleReceiver["default"], {
      componentName: "Calendar",
      defaultLocale: getDefaultLocale
    }, function (mergedLocale) {
      var _classNames3;

      return React.createElement("div", {
        className: (0, _classnames["default"])(calendarPrefixCls, className, (_classNames3 = {}, _defineProperty(_classNames3, "".concat(calendarPrefixCls, "-full"), fullscreen), _defineProperty(_classNames3, "".concat(calendarPrefixCls, "-mini"), !fullscreen), _classNames3))
      }, headerRender ? headerRender({
        value: mergedValue,
        type: mergedMode,
        onChange: onInternalSelect,
        onTypeChange: triggerModeChange
      }) : React.createElement(_Header["default"], {
        prefixCls: calendarPrefixCls,
        value: mergedValue,
        generateConfig: generateConfig,
        mode: mergedMode,
        fullscreen: fullscreen,
        locale: mergedLocale.lang,
        validRange: validRange,
        onChange: onInternalSelect,
        onModeChange: triggerModeChange
      }), React.createElement(_rcPicker.PickerPanel, {
        value: mergedValue,
        prefixCls: prefixCls,
        locale: mergedLocale.lang,
        generateConfig: generateConfig,
        dateRender: dateRender,
        monthCellRender: function monthCellRender(date) {
          return monthRender(date, mergedLocale.lang);
        },
        onSelect: onInternalSelect,
        mode: panelMode,
        picker: panelMode,
        disabledDate: mergedDisabledDate,
        hideHeader: true
      }));
    });
  };

  return Calendar;
}

var _default = generateCalendar;
exports["default"] = _default;
//# sourceMappingURL=generateCalendar.js.map
