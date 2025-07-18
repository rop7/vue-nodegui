"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vModelSpinBox = void 0;
exports.vModelSpinBox = {
    beforeMount: (el, { value }, vnode) => {
        el.setValue(value);
        // eslint-disable-next-line no-param-reassign, no-underscore-dangle
        el._assign = vnode.props['onUpdate:modelValue'];
        el.addEventListener('valueChanged', (spinBoxValue) => {
            // eslint-disable-next-line no-underscore-dangle
            el._assign(spinBoxValue);
        });
    },
    beforeUpdate: (el, { value, oldValue }) => {
        if (value === oldValue) {
            return;
        }
        el.setValue(value);
    },
};
//# sourceMappingURL=vModelSpinBox.js.map