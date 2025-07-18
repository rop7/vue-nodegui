import { WidgetConfig } from '../config';
import { VNImage, ImageProps } from './VNImage';
declare class ImageConfig implements WidgetConfig<ImageProps> {
    parentNode: any;
    createElement(): VNImage;
}
export default ImageConfig;
