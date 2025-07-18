"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VNCheckbox = exports.CheckboxPropsSetters = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const VNAbstractButton_1 = require("../AbstractButton/VNAbstractButton");
exports.CheckboxPropsSetters = Object.assign(Object.assign({}, VNAbstractButton_1.abstractButtonPropSetters), { value: (widget, _, nextValue) => {
        widget.setChecked(nextValue);
    } });
/** @internal */
class VNCheckbox extends nodegui_1.QCheckBox {
    insertChild() {
        throw new Error('Cannot add child to checkboxes');
    }
    patchProp(key, prevValue, nextValue) {
        const propSetter = exports.CheckboxPropsSetters[key];
        if (propSetter !== undefined) {
            propSetter(this, prevValue, nextValue);
        }
    }
    removeChild() {
        throw new Error('Cannot remove/add child to checkboxes');
    }
    insertBefore() {
        throw new Error('Cannot add child to checkboxes');
    }
    getNextSibling() {
        throw new Error('checkboxes cannot have children');
    }
}
exports.VNCheckbox = VNCheckbox;
//# sourceMappingURL=VNCheckbox.js.map