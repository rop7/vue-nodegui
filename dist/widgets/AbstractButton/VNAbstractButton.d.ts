import { QIcon, QSize, QAbstractButtonSignals, QAbstractButton } from '@nodegui/nodegui';
import { PropSetters } from 'renderer/patchProp';
import { ViewProps } from '../View/VNView';
/** @internal */
export interface AbstractButtonProps extends ViewProps {
    /**
     * Sets the given text to the button (Used as an alternative to children). [QPushButton: setText](https://docs.nodegui.org/docs/api/QPushButton#buttonsettexttext)
     */
    text?: string;
    /**
     * Sets an icon in the button. [QPushButton: setIcon](https://docs.nodegui.org/docs/api/QPushButton#buttonseticonicon)
     */
    icon?: QIcon;
    /**
     * Sets an icon size in the button. [QPushButton: setIconSize](https://docs.nodegui.org/docs/api/QPushButton#buttonseticonsize)
     */
    iconSize?: QSize;
}
export declare const abstractButtonPropSetters: PropSetters<QAbstractButton<QAbstractButtonSignals>, AbstractButtonProps>;
