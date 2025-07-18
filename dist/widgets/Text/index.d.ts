import { WidgetConfig } from 'widgets/config';
import { VNText, TextProps } from './VNText';
declare class TextConfig implements WidgetConfig<TextProps> {
    parentNode: any;
    createElement(): VNText;
}
export default TextConfig;
