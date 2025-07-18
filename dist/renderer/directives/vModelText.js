"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vModelText = void 0;
// TODO: implement for other inputs as they are added
// Currently only implemented for text input
exports.vModelText = {
    beforeMount: (el, { value }, vnode) => {
        el.setText(value);
        // eslint-disable-next-line no-param-reassign, no-underscore-dangle
        el._assign = vnode.props['onUpdate:modelValue'];
        el.addEventListener('textChanged', (text) => {
            // eslint-disable-next-line no-underscore-dangle
            el._assign(text);
        });
    },
    beforeUpdate: (el, { value, oldValue }) => {
        if (value === oldValue) {
            return;
        }
        el.setText(value);
    },
};
//# sourceMappingURL=vModelText.js.map