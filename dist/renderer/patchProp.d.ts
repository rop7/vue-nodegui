import { RendererOptions } from '@vue/runtime-core';
import { NodeWidget, NativeElement } from '@nodegui/nodegui';
import { VNWidget, VNNode } from 'widgets/config';
export declare type Prop<T, key extends keyof T> = Required<T>[key];
export declare type PropSetters<W extends NodeWidget<any>, T extends {}> = {
    [key in keyof Required<T>]: (widget: W, prevValue: Prop<T, key>, nextValue: Prop<T, key>) => void;
};
export declare type EventHandler = (native?: NativeElement) => void;
export declare const patchEvent: (eventType: string, widget: NodeWidget<any>, prevValue: EventHandler, nextValue: EventHandler) => void;
declare const patchProp: RendererOptions<VNWidget<any> | void, VNNode<any>>['patchProp'];
export default patchProp;
