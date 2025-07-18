import { QWidget, NodeWidget } from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';
import { PropSetters, Prop } from '../../renderer/patchProp';
/**
 * The view widget can be used to structure other widgets within it.
 * It is mainly used for creating layouts for other widgets.
 * Think of this as analogous to the `div` in the DOM. The `vn-view` widget is based on [NodeGui's QWidget](https://docs.nodegui.org/docs/api/generated/classes/qwidget)
 *
 * ## Usage
 *
 * ```html
 * <template>
 *  <vn-view>
 *    <vn-text>Enjoying vue-nodegui?</vn-text>
 *    <vn-view :style="'flex-direction: row'">
 *      <vn-button>Yes</vn-button>
 *      <vn-button>Yes, again</vn-button>
 *    </vn-view>
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
 * ![view-demo](/img/vn-view.png)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-view` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */
export interface ViewProps {
    /**
     * Shows or hides the widget and its children. [QWidget: show](https://docs.nodegui.org/docs/api/NodeWidget#widgetshow)
     */
    visible?: boolean;
    /**
     * Sets the property that holds the widget's style sheet. [QWidget: setStyleSheet](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetstylesheetstylesheet)
     */
    styleSheet?: string;
    /**
     * Sets the inline stylesheet property. [QWidget: setInlineStyle](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetinlinestylestyle)
     */
    style?: string;
    /**
     * Sets the object name (id) of the widget in Qt. Object name can be analogous to id of an element in the web world. Using the objectName of the widget one can reference it in the Qt's stylesheet much like what we do with id in the web world. [QWidget: setObjectName](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetobjectnameobjectname)
     */
    id?: string;
    /**
     * Sets the property that tells whether mouseTracking is enabled for the widget. [QWidget: setMouseTracking](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetmousetrackingismousetracked)
     */
    mouseTracking?: boolean;
    /**
     * Sets the property that tells whether the widget is enabled. In general an enabled widget handles keyboard and mouse events; a disabled widget does not. [QWidget: setEnabled](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetenabledenabled)
     */
    enabled?: boolean;
    /**
     * This property holds the level of opacity for the window. [QWidget: setWindowOpacity](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowopacityopacity)
     */
    windowOpacity?: number;
    /**
     * Sets the window title property. [QWidget: setWindowTitle](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowtitletitle)
     */
    windowTitle?: string;
}
export declare const viewPropsSetters: PropSetters<NodeWidget<any>, ViewProps>;
/** @internal */
export declare class VNView extends QWidget implements VNWidget<ViewProps> {
    insertChild(child: NodeWidget<any>): void;
    patchProp(key: keyof ViewProps, prevValue: Prop<ViewProps, typeof key>, nextValue: Prop<ViewProps, typeof key>): void;
    removeChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    getNextSibling(child: NodeWidget<any>): NodeWidget<any> | null;
}
