import { type JSX } from 'solid-js';
import type { CustomElement } from '..';
export interface SpinProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** 自定义样式表 */
    css?: string;
    /** 自定义类名 */
    class?: string;
    /** 加载状态 */
    spin?: boolean;
    /** 内容 */
    children?: JSX.Element | JSX.Element[];
}
declare function Spin(props: SpinProps): JSX.Element;
export type SpinElement = CustomElement<SpinProps>;
export default Spin;
