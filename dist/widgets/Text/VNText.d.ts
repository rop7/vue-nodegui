import { QLabel, NodeWidget } from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';
import { PropSetters, Prop } from '../../renderer/patchProp';
import { ViewProps } from '../View/VNView';
/**
 * The text widget allows users to create and render native text components in the app.
 * It is based on [NodeGui's QLabel](https://docs.nodegui.org/docs/api/generated/classes/qlabel)
 *
 * > You can also use the QLabel widget to render rich-text HTML (like in emails)
 *
 * ## Usage
 *
 * ```html
 * <template>
 *  <vn-text>Sample text</vn-text>
 * </template>
 *
 * <script>
 *  export default { }
 * </script>
 * ```
 * ## What it looks like?
 *
 * ![text-demo](/img/vn-text.png)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-text` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */
export interface TextProps extends ViewProps {
    wordWrap?: boolean;
    scaledContents?: boolean;
    openExternalLinks?: boolean;
}
export declare const textPropsSetters: PropSetters<VNText, TextProps>;
/** @internal */
export declare class VNText extends QLabel implements VNWidget<TextProps> {
    insertChild(): void;
    patchProp(key: keyof TextProps, prevValue: Prop<TextProps, typeof key>, nextValue: Prop<TextProps, typeof key>): void;
    removeChild(): void;
    insertBefore(): void;
    getNextSibling(): NodeWidget<any> | null;
}
