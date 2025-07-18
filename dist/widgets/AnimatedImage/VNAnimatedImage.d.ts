/// <reference types="node" />
import { QLabel, NodeWidget } from '@nodegui/nodegui';
import { Prop, PropSetters } from '../../renderer/patchProp';
import { TextProps } from '../Text/VNText';
import { VNWidget } from '../config';
/**
 * The animated image widget allows users to create and render native GIFs, video (without controls)
 * elements in the app.
 * It is based on [NodeGui's QLabel](https://docs.nodegui.org/docs/api/generated/classes/qlabel) along with [NodeGui's QMovie](https://docs.nodegui.org/docs/api/generated/classes/qmovie)
 *
 * ## Usage
 *
 * ```html
 * <template>
 *  <vn-view>
 *   <vn-animated-image :src="'https://i.giphy.com/media/oYtVHSxngR3lC/giphy.gif'" />
 *  </vn-view>
 * </template>
 *
 * <script>
 *  export default { }
 * </script>
 * ```
 *
 * ## What it looks like?
 *
 * ![animated-image-demo](/img/vn-animated-image.gif)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-animated-image` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */
export interface AnimatedImageProps extends TextProps {
    src?: string;
    buffer?: Buffer;
}
export declare const animatedImagePropsSetters: PropSetters<VNAnimatedImage, AnimatedImageProps>;
/** @internal */
export declare class VNAnimatedImage extends QLabel implements VNWidget<AnimatedImageProps> {
    insertChild(): void;
    patchProp(key: keyof AnimatedImageProps, prevValue: Prop<AnimatedImageProps, typeof key>, nextValue: Prop<AnimatedImageProps, typeof key>): void;
    removeChild(): void;
    insertBefore(): void;
    getNextSibling(): NodeWidget<any> | null;
}
