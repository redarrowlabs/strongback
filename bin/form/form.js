"use strict";
const React = require("react");
const redux_form_1 = require("redux-form");
const button_1 = require("../button/button");
class Form extends React.Component {
    render() {
        const { handleSubmit, submitting, pristine, reset, valid } = this.props;
        const { submitValidation } = this.props;
        const err = !pristine && !valid && React.createElement("div", null, "The form could not be completed");
        return React.createElement("div", null,
            err,
            React.createElement("form", { onSubmit: handleSubmit(submitValidation) },
                React.createElement("div", null, this.props.children),
                React.createElement("div", null,
                    React.createElement(button_1.Button, { type: "submit", loading: submitting }, "Submit"),
                    React.createElement(button_1.Button, { type: "button", disabled: pristine || submitting, onClick: reset }, "Clear Values"))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Form;
function makeForm(options, component) {
    return redux_form_1.reduxForm(options)(component);
}
exports.makeForm = makeForm;
//# sourceMappingURL=form.js.map