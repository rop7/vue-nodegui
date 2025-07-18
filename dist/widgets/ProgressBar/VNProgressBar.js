"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VNProgressBar = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const VNView_1 = require("../View/VNView");
const progressBarPropsSetters = Object.assign(Object.assign({}, VNView_1.viewPropsSetters), { value(widget, _, value) {
        widget.setValue(value);
    },
    minimum(widget, _, minimum) {
        widget.setMinimum(minimum);
    },
    maximum(widget, _, maximum) {
        widget.setMaximum(maximum);
    },
    orientation(widget, _, orientation) {
        widget.setOrientation(orientation);
    } });
/** @internal */
class VNProgressBar extends nodegui_1.QProgressBar {
    patchProp(key, prevValue, nextValue) {
        const propSetter = progressBarPropsSetters[key];
        if (propSetter !== undefined) {
            propSetter(this, prevValue, nextValue);
        }
    }
    insertChild() {
        throw new Error('Cannot add child to ProgressBar elements');
    }
    getNextSibling() {
        throw new Error('ProgressBar elements cannot have children');
    }
    insertBefore() {
        throw new Error('Cannot add child to ProgressBar elements');
    }
    removeChild() {
        throw new Error('Cannot remove/add child to ProgressBar elements');
    }
}
exports.VNProgressBar = VNProgressBar;
//# sourceMappingURL=VNProgressBar.js.map