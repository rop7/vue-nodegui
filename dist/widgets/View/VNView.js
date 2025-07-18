"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VNView = exports.viewPropsSetters = void 0;
const nodegui_1 = require("@nodegui/nodegui");
exports.viewPropsSetters = {
    visible: (widget, _, nextValue) => {
        if (nextValue) {
            widget.show();
            return;
        }
        widget.hide();
    },
    styleSheet: (widget, _, nextValue) => {
        widget.setStyleSheet(nextValue);
    },
    style: (widget, _, nextValue) => {
        widget.setInlineStyle(nextValue);
    },
    id(widget, _, nextValue) {
        widget.setObjectName(nextValue);
    },
    mouseTracking(widget, _, nextValue) {
        widget.setMouseTracking(nextValue);
    },
    enabled(widget, _, nextValue) {
        widget.setEnabled(nextValue);
    },
    windowOpacity(widget, _, nextValue) {
        widget.setWindowOpacity(nextValue);
    },
    windowTitle(widget, _, nextValue) {
        widget.setWindowTitle(nextValue);
    },
};
/** @internal */
class VNView extends nodegui_1.QWidget {
    insertChild(child) {
        if (!child) {
            return;
        }
        if (!this.layout) {
            const flexLayout = new nodegui_1.FlexLayout();
            flexLayout.setFlexNode(this.getFlexNode());
            this.setLayout(flexLayout);
            this.layout = flexLayout;
        }
        this.layout.addWidget(child);
    }
    patchProp(key, prevValue, nextValue) {
        const propSetter = exports.viewPropsSetters[key];
        if (propSetter !== undefined) {
            propSetter(this, prevValue, nextValue);
        }
    }
    removeChild(child) {
        if (!this.layout) {
            console.warn('parent has no layout to remove child from');
            return;
        }
        this.layout.removeWidget(child);
        child.close();
    }
    insertBefore(child, beforeChild) {
        if (!this.layout) {
            console.warn('parent has no layout to remove child from');
            return;
        }
        this.layout.insertChildBefore(child, beforeChild);
    }
    getNextSibling(child) {
        return this.layout.getNextSibling(child);
    }
}
exports.VNView = VNView;
//# sourceMappingURL=VNView.js.map