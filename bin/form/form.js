"use strict";
const React = require("react");
const button_1 = require("../button/button");
class Form extends React.Component {
    render() {
        const { handleSubmit, submitting, pristine, reset, valid } = this.props;
        const { submitValidation } = this.props;
        const showError = !pristine && !valid;
        let err = showError
            ? React.createElement("div", null, "The form could not be completed")
            : null;
        return React.createElement("div", null,
            err,
            React.createElement("form", { onSubmit: handleSubmit(submitValidation) },
                React.createElement("div", null, this.props.children),
                React.createElement("div", null,
                    React.createElement(button_1.Button, { type: "submit", loading: submitting }, "Submit"),
                    React.createElement(button_1.Button, { type: "button", disabled: pristine || submitting, onClick: reset }, "Reset"))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Form;
//# sourceMappingURL=form.js.map