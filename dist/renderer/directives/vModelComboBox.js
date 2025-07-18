"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vModelComboBox = void 0;
exports.vModelComboBox = {
    beforeMount: (el, { value }, vnode) => {
        el.setCurrentIndex(value);
        // eslint-disable-next-line no-param-reassign, no-underscore-dangle
        el._assign = vnode.props['onUpdate:modelValue'];
        el.addEventListener('currentIndexChanged', (indexValue) => {
            // eslint-disable-next-line no-underscore-dangle
            el._assign(indexValue);
        });
    },
    beforeUpdate: (el, { value, oldValue }) => {
        if (value === oldValue) {
            return;
        }
        el.setCurrentIndex(value);
    },
};
//# sourceMappingURL=vModelComboBox.js.map