import { type JSX, type JSXElement } from 'solid-js';
import type { BasicConfig, CustomElement } from '..';
export interface PopoverProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** 自定义类名 */
    class?: string;
    /** 自定义样式表 */
    css?: string;
    /** 内容 */
    content: (() => JSXElement) | JSXElement;
    /** 挂载到指定的元素，值为一个返回对应 DOM 元素 默认 document.body */
    getPopupContainer?: (node?: HTMLElement | null) => HTMLElement;
    /** 触发行为
     * @default 'hover'
     */
    trigger?: keyof typeof TriggerOption;
    /** 打开内容气泡 */
    open?: boolean | null;
    /** 内容打开关闭时的回调方法 */
    onOpenChange?: (open: boolean | null) => void;
    /** 气泡的自定义类名 */
    popupClass?: string;
    /** 气泡的自定义样式表 */
    popupCss?: string;
    /** 关闭后是否销毁  */
    destroyInactive?: boolean;
    /** 不可用状态  */
    disabled?: boolean;
    /** 添加一个箭头显示  */
    arrow?: boolean;
    /** 指定气泡显示的方向 */
    placement?: keyof typeof Placement;
    /** 气泡宽度与触发dom一致  */
    dropdownMatchSelectWidth?: boolean;
    /** 尺寸
     * @default 'normal'
     */
    size?: BasicConfig['size'];
}
export declare enum TriggerOption {
    /** 鼠标移入 */
    hover = "hover",
    /** 点击 */
    click = "click",
    /** 右键 */
    contextMenu = "contextMenu",
    /** 无 */
    none = "none"
}
export declare enum Placement {
    /** 左下 */
    bottomLeft = "bottomLeft",
    /** 下 */
    bottom = "bottom",
    /** 右下 */
    bottomRight = "bottomRight",
    /** 左上 */
    topLeft = "topLeft",
    /** 上 */
    top = "top",
    /** 右上 */
    topRight = "topRight",
    /** 左 */
    left = "left",
    /** 右 */
    right = "right"
}
declare function Popover(props: PopoverProps): JSX.Element;
export type PopoverElement = CustomElement<PopoverProps>;
export declare const defaultProps: {
    class: undefined;
    content: undefined;
    getPopupContainer: undefined;
    trigger: undefined;
    open: undefined;
    onOpenChange: undefined;
    popupClass: undefined;
    popupCss: undefined;
    destroyInactive: boolean;
    disabled: undefined;
    arrow: undefined;
    placement: undefined;
    css: undefined;
    dropdownMatchSelectWidth: undefined;
};
export default Popover;
