"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var React = require("react");
var ReactSelect = require("react-select");
var redux_form_1 = require("redux-form");
var lodash_1 = require("lodash");
var field_wrapper_1 = require("./field-wrapper");
var react_select_util_1 = require("./react-select-util");
function SearchNSelectStateless(props) {
    var _a = props.input, value = _a.value, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, options = props.options, onSearch = props.onSearch, isLoading = props.isLoading, tooltipProps = props.tooltipProps, infoIconProps = props.infoIconProps, multi = props.multi;
    return React.createElement(field_wrapper_1.FieldWrapper, { fieldProps: props, tooltipProps: tooltipProps, infoIconProps: infoIconProps },
        React.createElement(ReactSelect, { options: options, value: value, multi: multi, onChange: onChangeUnique(onChange), onBlur: function (e) { return onBlur(e); }, onFocus: onFocus, onInputChange: onSearch, filterOptions: identity, isLoading: isLoading }));
}
exports.SearchNSelectStateless = SearchNSelectStateless;
function onChangeUnique(onChange) {
    return function (x) {
        if (react_select_util_1.isOptArray(x)) {
            //References from different search results can
            //cause duplicates, so filter them out after
            //converting to value types
            var uniq = unique(x.map(function (o) { return JSON.stringify(o); }));
            var asObjects = uniq.map(function (x) { return JSON.parse(x); });
            onChange(asObjects);
            return;
        }
        onChange(x);
    };
}
function unique(arr) {
    return Array.from(new Set(arr));
}
var initialState = {
    options: [],
    isLoading: false
};
/**
 * Search-n-select is used to pick a value from a remote service.
 */
var SearchNSelect = (function (_super) {
    __extends(SearchNSelect, _super);
    function SearchNSelect(props) {
        var _this = _super.call(this, props) || this;
        _this.state = initialState;
        _this.handleSearch = _this.handleSearch.bind(_this);
        _this.debouncedSearch = lodash_1.debounce(_this.handleSearch, 200);
        return _this;
    }
    SearchNSelect.prototype.render = function () {
        var tooltipProps = this.props.tooltip
            ? {
                tooltip: this.props.tooltip,
                tooltipPosition: this.props.tooltipPosition,
                tooltipAlignment: this.props.tooltipAlignment
            }
            : null;
        var infoIconProps = this.props.iconContent
            ? {
                iconContent: this.props.iconContent,
                iconCustomTypeName: this.props.iconCustomTypeName
            }
            : null;
        return React.createElement(redux_form_1.Field, { name: this.props.name, multi: this.props.multi, component: SearchNSelectStateless, label: this.props.label, onSearch: this.debouncedSearch, options: this.state.options, isLoading: this.state.isLoading, onBlur: this.props.onBlur, help: this.props.help, indicator: this.props.indicator, tooltipProps: tooltipProps, infoIconProps: infoIconProps });
    };
    SearchNSelect.prototype.debouncedSearch = function (_) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    SearchNSelect.prototype.handleSearch = function (search) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log(search);
                this.setState({
                    isLoading: true
                }, function () { return __awaiter(_this, void 0, void 0, function () {
                    var results;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.props.onSearch(search)];
                            case 1:
                                results = _a.sent();
                                this.setState({
                                    options: results,
                                    isLoading: false
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    return SearchNSelect;
}(React.Component));
exports.SearchNSelect = SearchNSelect;
function identity(o) {
    return o;
}
//# sourceMappingURL=search-n-select.js.map