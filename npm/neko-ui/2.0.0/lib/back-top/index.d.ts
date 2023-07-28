import { type JSX } from 'solid-js';
import type { CustomElement } from '..';
export interface BackTopProps extends Omit<JSX.ButtonHTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** 设置需要监听其滚动事件的元素
     * @default window
     */
    target?: HTMLElement | (() => HTMLElement);
    /** 挂载到指定的元素
     * @default body
     */
    mount?: HTMLElement;
    /** 滚动高度达到此参数值才出现 BackTop */
    visibilityHeight?: number;
    /** 自定义类名 */
    class?: string;
    /** 自定义样式表 */
    css?: string;
}
declare function BackTop(_: BackTopProps): JSX.Element;
export type BackTopElement = CustomElement<BackTopProps>;
export default BackTop;
