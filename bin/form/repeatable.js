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
exports.__esModule = true;
var React = require("react");
var RepeatableStateless = (function (_super) {
    __extends(RepeatableStateless, _super);
    function RepeatableStateless() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RepeatableStateless.prototype.render = function () {
        var dataKeys = this.props.dataKeys;
        var titleRepeat = this.props.titleRepeat;
        var repeatedItems = this.props.repeatedItems;
        var addElement = this.getActionElement(this.props.handleAdd, 'Add');
        var removeElement = this.getActionElement(this.props.handleRemove, 'Remove');
        // This is brittle in handling children with nested elements
        return (React.createElement("div", null,
            dataKeys.map(function (dataKey) { return makeDataItemGroups(dataKey, titleRepeat, repeatedItems); }),
            addElement,
            removeElement));
    };
    RepeatableStateless.prototype.getActionElement = function (handleAdd, text) {
        return handleAdd
            ? (React.createElement("a", { onClick: handleAdd }, text))
            : null;
    };
    return RepeatableStateless;
}(React.Component));
exports.RepeatableStateless = RepeatableStateless;
function makeDataItemGroups(dataKey, titleRepeat, repeatedItems) {
    return repeatedItems.map(function (itemGroup) { return makeDataItemGroup(dataKey, titleRepeat, itemGroup); });
}
function makeDataItemGroup(dataKey, titleRepeat, itemGroup) {
    return (React.createElement("fieldset", { key: dataKey + "-fieldset" },
        React.createElement("legend", null, titleRepeat),
        itemGroup.map(function (item) { return makeDataItem(dataKey, item); })));
}
function makeDataItem(dataKey, item) {
    var name = item.props.name;
    var properties = {
        name: dataKey + "." + name,
        key: dataKey + "." + name
    };
    return React.cloneElement(item, properties);
}
var Repeatable = (function (_super) {
    __extends(Repeatable, _super);
    function Repeatable(props) {
        var _this = _super.call(this, props) || this;
        _this.onAdd = _this.onAdd.bind(_this);
        _this.onRemove = _this.onRemove.bind(_this);
        _this.state = {
            dataKeys: _this.props.dataKeys
        };
        return _this;
    }
    Repeatable.prototype.onAdd = function () {
        if (!this.props.additive) {
            return;
        }
        var allowInfinite = !(this.props.additive && this.props.additive.maxRepeat);
        var maxRepeat = (this.props.additive && this.props.additive.maxRepeat) || 0;
        var dataKeys = this.state.dataKeys;
        if (allowInfinite || dataKeys.length < maxRepeat) {
            dataKeys.push(this.props.additive.newDataKey());
        }
        this.setState({
            dataKeys: dataKeys
        });
    };
    Repeatable.prototype.onRemove = function () {
        var allowInfinite = !(this.props.removable && this.props.removable.minRepeat);
        var minRepeat = (this.props.removable && this.props.removable.minRepeat) || 0;
        var dataKeys = this.state.dataKeys;
        if (dataKeys.length > 0 && (allowInfinite || dataKeys.length > minRepeat)) {
            dataKeys.splice(-1, 1);
        }
        this.setState({
            dataKeys: dataKeys
        });
    };
    Repeatable.prototype.render = function () {
        var repeatedItems = [new Array().concat(this.props.children)];
        var handleAdd = this.props.additive
            ? this.onAdd
            : null;
        var handleRemove = this.props.removable
            ? this.onRemove
            : null;
        return React.createElement(RepeatableStateless, { titleRepeat: this.props.titleRepeat, repeatedItems: repeatedItems, dataKeys: this.state.dataKeys, handleAdd: handleAdd, handleRemove: handleRemove });
    };
    return Repeatable;
}(React.Component));
exports.Repeatable = Repeatable;
//# sourceMappingURL=repeatable.js.map