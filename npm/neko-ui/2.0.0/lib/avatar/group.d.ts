import { type JSX } from 'solid-js';
import '../popover';
import type { BasicConfig, CustomElement } from '..';
import type { AvatarProps } from '../avatar';
export interface AvatarGroupProps extends Omit<JSX.ButtonHTMLAttributes<HTMLDivElement>, 'onChange' | 'ref'> {
    /** 头像数据 */
    data: Omit<AvatarProps, 'size'>[];
    /** 头像尺寸
     * @default 'normal'
     */
    size?: BasicConfig['size'];
    /** 最多显示个数 */
    maxCount?: number;
    /** 自定义类名 */
    class?: string;
    /** 自定义样式表 */
    css?: string;
}
export type AvatarGroupElement = CustomElement<AvatarGroupProps>;
declare function AvatarGroup(_props: AvatarGroupProps): JSX.Element;
export default AvatarGroup;
