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
var redux_form_1 = require("redux-form");
var button_1 = require("../button/button");
var Repeater = (function (_super) {
    __extends(Repeater, _super);
    function Repeater(props) {
        var _this = _super.call(this, props) || this;
        _this.handleRemove = _this.handleRemove.bind(_this);
        _this.handleAdd = _this.handleAdd.bind(_this);
        return _this;
    }
    Repeater.prototype.render = function () {
        var _this = this;
        var _a = this.props, collectionKey = _a.collectionKey, collection = _a.collection;
        var itemKeys = Object.keys(collection);
        var sections = itemKeys.map(function (itemKey) {
            return React.createElement(RepeaterSection, { key: collectionKey + "." + itemKey, itemKey: itemKey, collectionKey: collectionKey, onRemove: _this.handleRemove }, _this.props.children);
        });
        return React.createElement("div", null,
            React.createElement("div", null, sections),
            React.createElement("div", null,
                React.createElement(button_1.Button, { onClick: this.handleAdd }, "Add")));
    };
    Repeater.prototype.handleAdd = function () {
        var _a = this.props, handler = _a.handler, collectionKey = _a.collectionKey;
        if (handler.type === 'custom') {
            handler.onAdd();
        }
        else {
            var dispatch = handler.dispatch, form = handler.form;
            //Sets a new blank object with a random key.
            //all the registering of fields is handled
            //by the redux-form library reducer.
            dispatch(redux_form_1.change(form, collectionKey + "." + generateNewDataKey(), { __REPEATER_NO_DELETE: 'x' }));
        }
    };
    Repeater.prototype.handleRemove = function (itemKey) {
        var _a = this.props, handler = _a.handler, collectionKey = _a.collectionKey;
        if (handler.type === 'custom') {
            handler.onRemove(itemKey);
        }
        else {
            var dispatch = handler.dispatch, formValues = handler.formValues, form = handler.form;
            //We need to dispatch a change to the whole collection here,
            //since redux-forms does not interpret a change action
            //with null or undefined as a intent to delete that key.
            var newDatas = JSON.parse(JSON.stringify(formValues[collectionKey]));
            delete newDatas[itemKey];
            dispatch(redux_form_1.change(form, "" + collectionKey, newDatas));
        }
    };
    return Repeater;
}(React.Component));
exports.Repeater = Repeater;
var RepeaterSection = (function (_super) {
    __extends(RepeaterSection, _super);
    function RepeaterSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RepeaterSection.prototype.render = function () {
        var _a = this.props, itemKey = _a.itemKey, collectionKey = _a.collectionKey, onRemove = _a.onRemove;
        return React.createElement("fieldset", null,
            React.createElement(redux_form_1.FormSection, { name: collectionKey + "." + itemKey },
                this.props.children,
                React.createElement("div", null,
                    React.createElement(button_1.Button, { variant: 'danger', onClick: function () { return onRemove(itemKey); } }, "Remove"))));
    };
    return RepeaterSection;
}(React.Component));
function generateNewDataKey() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}
//# sourceMappingURL=repeater.js.map