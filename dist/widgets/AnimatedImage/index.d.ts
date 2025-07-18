import { VNAnimatedImage, AnimatedImageProps } from './VNAnimatedImage';
import { WidgetConfig } from '../config';
declare class AnimatedImageConfig implements WidgetConfig<AnimatedImageProps> {
    parentNode: any;
    createElement(): VNAnimatedImage;
}
export default AnimatedImageConfig;
