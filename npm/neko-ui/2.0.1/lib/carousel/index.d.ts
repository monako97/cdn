import { type JSXElement } from 'solid-js';
import type { CustomElement } from '../index';
export interface CarouselProps {
    /** 自定义类名 */
    class?: string;
    /** 自定义样式表 */
    css?: string;
    /** 轮播的内容 */
    children?: JSXElement[];
    /** 当前内容的位置
     * @default 0
     */
    offset?: number;
    /** 开启指示器 */
    dots?: boolean;
    /** 设置自动播放时长, 不设置时不自动播放 */
    autoplay?: number;
    /** 自定义头部 */
    header?: (current: number) => JSXElement | ((current: number) => JSXElement);
    /** 切换显示的位置时的回调方法 */
    onChange?: (e: number) => void;
}
export type CarouselElement = CustomElement<CarouselProps>;
declare function Carousel(_props: CarouselProps): import("solid-js").JSX.Element;
export default Carousel;
