import { type JSX, type JSXElement } from 'solid-js';
import { type CustomElement } from '..';
export interface TagProps extends Omit<JSX.HTMLAttributes<HTMLSpanElement>, 'onChange'> {
    /** 自定义样式表 */
    css?: string;
    /** 自定义类名 */
    class?: string;
    /** 自定义颜色 */
    color?: string;
    /** 图标 */
    icon?: JSXElement;
    /** 内置类型(状态) */
    type?: 'primary' | 'success' | 'error' | 'warning';
    /** 自定义关闭图标 */
    closeIcon?: JSXElement | boolean;
    /** 显示边框
     * @default true
     */
    bordered?: boolean;
    /** 禁用 */
    disabled?: boolean;
    /** 关闭时的回调方法 */
    onClose?: (e: MouseEvent) => void;
}
declare function Tag(props: TagProps): JSX.Element;
export type TagElement = CustomElement<TagProps>;
export default Tag;
