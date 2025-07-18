import { ScrollAreaProps, VNScrollArea } from './VNScrollArea';
import { WidgetConfig } from '../config';
declare class ScrollAreaConfig implements WidgetConfig<ScrollAreaProps> {
    parentNode: any;
    createElement(): VNScrollArea;
}
export default ScrollAreaConfig;
