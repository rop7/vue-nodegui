"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vModelBoolean = void 0;
// TODO: implement for other inputs as they are added
// Currently only implemented for text input
exports.vModelBoolean = {
    beforeMount: (el, { value }, vnode) => {
        el.setChecked(value);
        // eslint-disable-next-line no-param-reassign, no-underscore-dangle
        el._assign = vnode.props['onUpdate:modelValue'];
        el.addEventListener('clicked', (isChecked) => {
            // eslint-disable-next-line no-underscore-dangle
            el._assign(isChecked);
        });
    },
    beforeUpdate: (el, { value, oldValue }) => {
        if (value === oldValue) {
            return;
        }
        el.setChecked(value);
    },
};
//# sourceMappingURL=vModelBoolean.js.map