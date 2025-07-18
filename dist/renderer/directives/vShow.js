"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vShow = void 0;
const setDisplay = (el, value) => {
    if (value)
        return el.show();
    return el.hide();
};
exports.vShow = {
    beforeMount(el, { value }) {
        setDisplay(el, value);
    },
    updated(el, { value, oldValue }) {
        if (value === oldValue)
            return;
        setDisplay(el, value);
    },
    beforeUnmount(el) {
        setDisplay(el, true);
    },
};
//# sourceMappingURL=vShow.js.map