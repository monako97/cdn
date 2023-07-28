import { type JSX } from 'solid-js';
import type { BasicConfig, CustomElement } from '../index';
export interface AvatarProps extends Omit<JSX.ButtonHTMLAttributes<HTMLDivElement>, 'onChange' | 'ref' | 'children'> {
    /** 头像 */
    src?: string;
    /** 替代文本 */
    alt?: string;
    /** 尺寸
     * @default 'normal'
     */
    size?: number | BasicConfig['size'];
    /** 用户名 */
    username?: string;
    /** 背景颜色 */
    color?: string;
    /** 自定义类名 */
    class?: string;
    /** 自定义样式表 */
    css?: string;
}
export type AvatarElement = CustomElement<AvatarProps>;
declare function Avatar(_: AvatarProps): JSX.Element;
export default Avatar;
