import { ObjectDirective } from '@vue/runtime-core';
import { VNCheckbox } from 'widgets/Checkbox/VNCheckbox';
declare type ModelDirective<T> = ObjectDirective<T & {
    _assign: Function;
}>;
export declare const vModelBoolean: ModelDirective<VNCheckbox>;
export {};
