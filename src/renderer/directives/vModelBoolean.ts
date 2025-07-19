import { ObjectDirective } from '@vue/runtime-core';
import { VNCheckbox } from 'widgets/Checkbox/VNCheckbox';

type ModelDirective<T> = ObjectDirective<T & { _assign: Function }>

// TODO: implement for other inputs as they are added
// Currently only implemented for text input
export const vModelBoolean: ModelDirective<VNCheckbox> = {
  beforeMount: (el, { value }, vnode) => {
    el.setChecked(value);
    // eslint-disable-next-line no-param-reassign, no-underscore-dangle
    el._assign = vnode.props!['onUpdate:modelValue'] as Function;
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
