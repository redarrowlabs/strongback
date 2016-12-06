"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var button_1 = require("../button/button");
/**
 * A simple form wrapper, which tracks async status and validation.
 * Expected use case is a simple, one page, no-nonsense form. If
 * your form is more complicated than that, implement it yourself!
 */
var Form = (function (_super) {
    __extends(Form, _super);
    function Form() {
        _super.apply(this, arguments);
    }
    Form.prototype.render = function () {
        var _a = this.props, handleSubmit = _a.handleSubmit, submitting = _a.submitting, pristine = _a.pristine, reset = _a.reset, valid = _a.valid;
        var onSubmit = this.props.onSubmit;
        var showError = !pristine && !valid;
        var err = showError
            ? React.createElement("div", null, "The form could not be completed")
            : null;
        return React.createElement("div", null,
            err,
            React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
                React.createElement("div", null, this.props.children),
                React.createElement("div", null,
                    React.createElement(button_1.Button, { type: 'submit', loading: submitting }, "Submit"),
                    React.createElement(button_1.Button, { type: 'button', variant: 'secondary', disabled: pristine || submitting, onClick: reset }, "Reset"))));
    };
    return Form;
}(React.Component));
exports.Form = Form;
//# sourceMappingURL=form.js.map