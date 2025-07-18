"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vModelSlider = void 0;
exports.vModelSlider = {
    beforeMount: (el, { value }, vnode) => {
        el.setValue(value);
        // eslint-disable-next-line no-param-reassign, no-underscore-dangle
        el._assign = vnode.props['onUpdate:modelValue'];
        el.addEventListener('valueChanged', (sliderValue) => {
            // eslint-disable-next-line no-underscore-dangle
            el._assign(sliderValue);
        });
    },
    beforeUpdate: (el, { value, oldValue }) => {
        if (value === oldValue) {
            return;
        }
        el.setValue(value);
    },
};
//# sourceMappingURL=vModelSlider.js.map