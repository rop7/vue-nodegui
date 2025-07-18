import { QWidget, NodeWidget } from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';
/** @internal */
export declare class VNMetaWidget extends QWidget implements VNWidget<{}> {
    constructor();
    insertChild(): void;
    patchProp(): void;
    removeChild(): void;
    insertBefore(): void;
    getNextSibling(): NodeWidget<any> | null;
}
