import { ObjectDirective } from '@vue/runtime-core';
import { VNSpinBox } from 'widgets/SpinBox/VNSpinBox';
declare type ModelDirective<T> = ObjectDirective<T & {
    _assign: Function;
}>;
export declare const vModelSpinBox: ModelDirective<VNSpinBox>;
export {};
