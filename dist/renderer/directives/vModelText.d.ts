import { ObjectDirective } from '@vue/runtime-core';
import { VNLineEdit } from 'widgets/LineEdit/VNLineEdit';
declare type ModelDirective<T> = ObjectDirective<T & {
    _assign: Function;
}>;
export declare const vModelText: ModelDirective<VNLineEdit>;
export {};
