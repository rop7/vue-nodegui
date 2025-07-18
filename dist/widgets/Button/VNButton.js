"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VNButton = exports.buttonPropsSetters = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const VNAbstractButton_1 = require("../AbstractButton/VNAbstractButton");
exports.buttonPropsSetters = Object.assign(Object.assign({}, VNAbstractButton_1.abstractButtonPropSetters), { flat: (widget, _, nextValue) => {
        widget.setFlat(nextValue);
    } });
/** @internal */
class VNButton extends nodegui_1.QPushButton {
    insertChild() {
        throw new Error('Cannot add child to buttons');
    }
    patchProp(key, prevValue, nextValue) {
        const propSetter = exports.buttonPropsSetters[key];
        if (propSetter !== undefined) {
            propSetter(this, prevValue, nextValue);
        }
    }
    removeChild() {
        throw new Error('Cannot remove/add child to buttons');
    }
    insertBefore() {
        throw new Error('Cannot add child to buttons');
    }
    getNextSibling() {
        throw new Error('buttons cannot have children');
    }
}
exports.VNButton = VNButton;
//# sourceMappingURL=VNButton.js.map