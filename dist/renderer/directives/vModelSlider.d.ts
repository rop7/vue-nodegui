import { ObjectDirective } from '@vue/runtime-core';
import { VNDial } from 'widgets/Dial/VNDial';
import { VNSlider } from 'widgets/Slider/VNSlider';
declare type ModelDirective<T> = ObjectDirective<T & {
    _assign: Function;
}>;
export declare const vModelSlider: ModelDirective<VNSlider | VNDial>;
export {};
