"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNativeWidget = void 0;
// Add vue-nodegui widgets here
// whenever new ones are created
const nativeWidgets = {
    'vn-text': true,
    'vn-view': true,
    'vn-button': true,
    'vn-image': true,
    'vn-line-edit': true,
    'vn-checkbox': true,
    'vn-radio-button': true,
    'vn-scroll-area': true,
    'vn-slider': true,
    'vn-spinbox': true,
    'vn-progress-bar': true,
    'vn-combobox': true,
    'vn-dial': true,
    'vn-animated-image': true,
};
exports.isNativeWidget = (type) => !!nativeWidgets[type];
//# sourceMappingURL=nativeWidget.js.map