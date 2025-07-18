"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abstractButtonPropSetters = void 0;
const VNView_1 = require("../View/VNView");
exports.abstractButtonPropSetters = Object.assign(Object.assign({}, VNView_1.viewPropsSetters), { text: (widget, _, nextValue) => {
        widget.setText(nextValue);
    }, icon: (widget, _, nextValue) => {
        widget.setIcon(nextValue);
    }, iconSize: (widget, _, nextValue) => {
        widget.setIconSize(nextValue);
    } });
//# sourceMappingURL=VNAbstractButton.js.map