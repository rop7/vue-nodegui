"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VNScrollArea = exports.scrollAreaPropsSetters = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const VNView_1 = require("../View/VNView");
exports.scrollAreaPropsSetters = Object.assign(Object.assign({}, VNView_1.viewPropsSetters), { widgetResizable(widget, _, nextValue) {
        widget.setWidgetResizable(nextValue);
    } });
/** @internal */
class VNScrollArea extends nodegui_1.QScrollArea {
    insertChild(child) {
        if (this.contentWidget) {
            console.warn('Scroll Area can only have one child');
            return;
        }
        this.setWidget(child);
    }
    patchProp(key, prevValue, nextValue) {
        const propSetter = exports.scrollAreaPropsSetters[key];
        if (propSetter !== undefined) {
            propSetter(this, prevValue, nextValue);
        }
    }
    removeChild(child) {
        const childToRemove = this.takeWidget();
        if (childToRemove) {
            childToRemove.close();
        }
        child.close();
    }
    insertBefore(child) {
        this.insertChild(child);
    }
    getNextSibling() {
        // Scroll Area can only have one child
        return null;
    }
}
exports.VNScrollArea = VNScrollArea;
//# sourceMappingURL=VNScrollArea.js.map