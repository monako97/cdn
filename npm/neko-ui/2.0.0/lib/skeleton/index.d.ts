import { type JSX } from 'solid-js';
import type { CustomElement } from '..';
export interface SkeletonProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'title'> {
    /** 自定义样式表 */
    css?: string;
    /** 自定义类名 */
    class?: string;
    /** 行
     * @default 3
     */
    rows?: number;
    /** 显示动画
     * @default false
     */
    active?: boolean;
    /** 显示头像
     * @default false
     */
    avatar?: boolean;
    /** 显示标题
     * @default false
     */
    title?: boolean;
}
declare function Skeleton(props: SkeletonProps): JSX.Element;
export type SkeletonElement = CustomElement<SkeletonProps>;
export default Skeleton;
