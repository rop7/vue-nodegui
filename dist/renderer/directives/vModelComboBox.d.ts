import { ObjectDirective } from '@vue/runtime-core';
import { VNComboBox } from '../../widgets/ComboBox/VNComboBox';
declare type ModelDirective<T> = ObjectDirective<T & {
    _assign: Function;
}>;
export declare const vModelComboBox: ModelDirective<VNComboBox>;
export {};
