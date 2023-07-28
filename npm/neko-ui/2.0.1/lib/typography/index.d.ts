import { type JSX } from 'solid-js';
import type { CustomElement } from '..';
export interface TypographyProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** 自定义类名 */
    class?: string;
    /** 自定义样式表 */
    css?: string;
    /** 文本格式
     * @default 'text'
     */
    type?: 'primary' | 'warning' | 'success' | 'error' | 'text' | 'secondary';
    /** 启用超出隐藏
     * @default false
     */
    truncated?: boolean | number;
    /** 自定义标签名
     * @default 'span'
     */
    tag?: string;
    /** 禁用 */
    disabled?: boolean;
}
declare function Typography(props: TypographyProps): JSX.Element;
export type TypographyElement = CustomElement<TypographyProps>;
export default Typography;
