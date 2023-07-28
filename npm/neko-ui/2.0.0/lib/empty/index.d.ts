import { type JSX } from 'solid-js';
import type { CustomElement } from '..';
export interface EmptyProps extends JSX.HTMLAttributes<HTMLDivElement> {
    /** 自定义样式表 */
    css?: string;
    /** 自定义类名 */
    class?: string;
    /** 描述 */
    label?: JSX.Element;
}
export type EmptyElement = CustomElement<EmptyProps>;
declare function Empty(props: EmptyProps): JSX.Element;
export default Empty;
