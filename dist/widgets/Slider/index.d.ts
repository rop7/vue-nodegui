import { VNSlider, SliderProps } from './VNSlider';
import { WidgetConfig } from '../config';
declare class SliderConfig implements WidgetConfig<SliderProps> {
    parentNode: any;
    createElement(): VNSlider;
}
export default SliderConfig;
