"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VNRadioButton = exports.RadioButtonPropsSetters = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const VNAbstractButton_1 = require("../AbstractButton/VNAbstractButton");
exports.RadioButtonPropsSetters = Object.assign({}, VNAbstractButton_1.abstractButtonPropSetters);
/** @internal */
class VNRadioButton extends nodegui_1.QRadioButton {
    insertChild() {
        throw new Error('Cannot add child to RadioButtons');
    }
    patchProp(key, prevValue, nextValue) {
        const propSetter = exports.RadioButtonPropsSetters[key];
        if (propSetter !== undefined) {
            propSetter(this, prevValue, nextValue);
        }
    }
    removeChild() {
        throw new Error('Cannot remove/add child to RadioButtons');
    }
    insertBefore() {
        throw new Error('Cannot add child to RadioButtons');
    }
    getNextSibling() {
        throw new Error('RadioButtons cannot have children');
    }
}
exports.VNRadioButton = VNRadioButton;
//# sourceMappingURL=VNRadioButton.js.map