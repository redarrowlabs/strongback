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
        //TODO: don't like this cast
        var children = this.props.children;
        //For each of the collection items, show all of the controls provided as children.
        var userControls = dataKeys.map(function (dataKey) { return React.createElement(DataItemGroup, { key: dataKey, dataKey: dataKey, titleRepeat: titleRepeat, items: children }); });
        var addElement = this.getActionElement(this.props.onAdd, 'Add');
        var removeElement = this.getActionElement(this.props.onRemove, 'Remove');
        // This is brittle in handling children with nested elements
        return React.createElement("div", null,
            userControls,
            addElement,
            removeElement);
    };
    RepeatableStateless.prototype.getActionElement = function (handleAdd, text) {
        return handleAdd
            ? (React.createElement("a", { onClick: handleAdd }, text))
            : null;
    };
    return RepeatableStateless;
}(React.Component));
exports.RepeatableStateless = RepeatableStateless;
function DataItemGroup(props) {
    var dataKey = props.dataKey, titleRepeat = props.titleRepeat, items = props.items;
    var fieldsWithKeys = items.map(function (x) { return provideKey(dataKey, x); });
    return React.createElement("fieldset", { key: dataKey + "-fieldset" },
        React.createElement("legend", null, titleRepeat),
        fieldsWithKeys);
}
/**
 * Namespaces the element under a certain data key, by cloning it and applying a new name / key.
 * @param dataKey
 * @param item
 */
function provideKey(dataKey, item) {
    var name = item.props.name;
    var properties = {
        name: dataKey + "." + name,
        key: dataKey + "." + name
    };
    return React.cloneElement(item, properties);
}
//TODO: functional set state
var Repeatable = (function (_super) {
    __extends(Repeatable, _super);
    function Repeatable(props) {
        var _this = _super.call(this, props) || this;
        _this.onAdd = _this.onAdd.bind(_this);
        _this.onRemove = _this.onRemove.bind(_this);
        var keys = Object.keys(_this.props.initialData);
        _this.state = {
            dataKeys: keys
        };
        return _this;
    }
    Repeatable.prototype.onAdd = function () {
        if (!this.props.additive) {
            return;
        }
        var allowInfinite = !this.props.additive.maxRepeat;
        var maxRepeat = this.props.additive.maxRepeat || 0;
        var dataKeys = this.state.dataKeys;
        var canAdd = allowInfinite || (dataKeys.length < maxRepeat);
        if (allowInfinite || canAdd) {
            dataKeys.push(this.props.additive.newDataKey());
        }
        this.setState({
            dataKeys: dataKeys
        });
    };
    Repeatable.prototype.onRemove = function () {
        if (!this.props.removable) {
            return;
        }
        var allowInfinite = !this.props.removable.minRepeat;
        var minRepeat = this.props.removable.minRepeat || 0;
        var dataKeys = this.state.dataKeys;
        var hasKeys = dataKeys.length > 0;
        var hasEnough = dataKeys.length > minRepeat;
        var canRemove = hasKeys && (allowInfinite || hasEnough);
        if (canRemove) {
            dataKeys.splice(-1, 1);
        }
        this.setState({
            dataKeys: dataKeys
        });
    };
    Repeatable.prototype.render = function () {
        var handleAdd = this.props.additive && this.onAdd;
        var handleRemove = this.props.removable && this.onRemove;
        return React.createElement(RepeatableStateless, { titleRepeat: this.props.titleRepeat, dataKeys: this.state.dataKeys, onAdd: handleAdd, onRemove: handleRemove }, this.props.children);
    };
    return Repeatable;
}(React.Component));
exports.Repeatable = Repeatable;
//# sourceMappingURL=repeatable.js.map