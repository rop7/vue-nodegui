import { DirectiveTransform } from '@vue/compiler-core';
declare type CompilerOptions = {
    isNativeTag: Function;
    directiveTransforms: {
        [key in string]: DirectiveTransform;
    };
};
export declare const compilerOptions: CompilerOptions;
export {};
