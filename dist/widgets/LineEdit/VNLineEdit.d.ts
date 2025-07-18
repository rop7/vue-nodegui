import { QLineEdit, EchoMode, NodeWidget } from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';
import { PropSetters, Prop } from '../../renderer/patchProp';
import { ViewProps } from '../View/VNView';
/**
 * The lineedit widget allows users to create and render native input box elements in the app.
 * It is based on [NodeGui's QLineEdit](https://docs.nodegui.org/docs/api/generated/classes/qlineedit)
 *
 * ## Usage
 *
 * ```html
 * <template>
 *  <vn-view>
 *    <vn-line-edit v-model="message" placeholderText="Type message..." />
 *    <vn-text>{{message}}</vn-text>
 *  </vn-view>
 * </template>
 *
 * <script>
 *  import { ref } from 'vue';
 *
 *  export default {
 *    setup() {
 *      const message = ref(null)
 *
 *      return {
 *        message
 *      }
 *    }
 *  }
 * </script>
 * ```
 *
 * ## What it looks like?
 *
 * ![line-edit-demo](/img/vn-line-edit.gif)
 *
 * > You can use the `v-model` directive along with `vn-line-edit` widgets as shown in the example.
 * Users also have the choice to use events and handle data updates on their own.
 *
 * ## Props and styling
 *
 * You can find all the props `vn-line-edit` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */
export interface LineEditProps extends ViewProps {
    text?: string;
    placeholderText?: string;
    readOnly?: boolean;
    echoMode?: EchoMode;
}
export declare const lineEditPropsSetters: PropSetters<VNLineEdit, LineEditProps>;
/** @internal */
export declare class VNLineEdit extends QLineEdit implements VNWidget<LineEditProps> {
    insertChild(): void;
    patchProp(key: keyof LineEditProps, prevValue: Prop<LineEditProps, typeof key>, nextValue: Prop<LineEditProps, typeof key>): void;
    removeChild(): void;
    insertBefore(): void;
    getNextSibling(): NodeWidget<any> | null;
}
