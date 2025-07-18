import { QMainWindow, NodeWidget } from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';
/**
 * The main QMainWindow that contains the entire application.
 *
 * :::note
 * This widget can have only one child (the central widget)
 * :::
 *
 * Usage:
 *
 * You would not be using this widget in your app.
 * vue-nodegui automatically wraps you central widget into the vn-window widget
 * to allow you to open the app in your browser
 * @internal
 */
export declare class VNWindow extends QMainWindow implements VNWidget<{}> {
    insertChild(child: NodeWidget<any>): void;
    patchProp(): void;
    removeChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>): void;
    getNextSibling(): null;
}
