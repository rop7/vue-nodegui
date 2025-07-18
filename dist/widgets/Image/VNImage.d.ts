/// <reference types="node" />
import { QLabel, QPixmap, AspectRatioMode, TransformationMode, QSize, NodeWidget } from '@nodegui/nodegui';
import { Prop, PropSetters } from '../../renderer/patchProp';
import { TextProps } from '../Text/VNText';
import { VNWidget } from '../config';
/**
 * The image widget allows users to create and render native image elements in the app.
 * It is based on [NodeGui's QLabel](https://docs.nodegui.org/docs/api/generated/classes/qlabel) along with [NodeGui's QPixmap](https://docs.nodegui.org/docs/api/generated/classes/qpixmap)
 *
 * ## Usage
 *
 * ```html
 * <template>
 *  <vn-view><vn-image :src="'https://via.placeholder.com/150'" /></vn-view>
 * </template>
 *
 * <script>
 *  export default { }
 * </script>
 * ```
 *
 * ## What it looks like?
 *
 * ![image-demo](/img/vn-image.png)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-image` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */
export interface ImageProps extends TextProps {
    src?: string;
    aspectRatioMode?: AspectRatioMode;
    transformationMode?: TransformationMode;
    buffer?: Buffer;
}
export declare const imagePropsSetters: PropSetters<VNImage, ImageProps>;
/** @internal */
export declare class VNImage extends QLabel implements VNWidget<ImageProps> {
    originalPixmap?: QPixmap;
    aspectRatioMode?: AspectRatioMode;
    transformationMode?: TransformationMode;
    setPixmap: (pixmap: QPixmap) => void;
    setAspectRatioMode(mode: AspectRatioMode): void;
    setTransformationMode(mode: TransformationMode): void;
    scalePixmap(size: QSize): void;
    insertChild(): void;
    patchProp(key: keyof ImageProps, prevValue: Prop<ImageProps, typeof key>, nextValue: Prop<ImageProps, typeof key>): void;
    removeChild(): void;
    insertBefore(): void;
    getNextSibling(): NodeWidget<any> | null;
}
