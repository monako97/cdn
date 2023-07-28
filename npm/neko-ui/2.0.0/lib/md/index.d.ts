import { type JSX } from 'solid-js';
import '../code';
import '../img';
import type { CustomElement } from '..';
declare function MD(_props: MdProps): JSX.Element;
export interface MdProps extends JSX.HTMLAttributes<HTMLDivElement> {
    /** 自定义类名 */
    class?: string;
    /** 自定义样式表 */
    css?: string;
    /** md内容 */
    text?: string;
    /** 开启图片查看器
     * @default true
     */
    pictureViewer?: boolean;
    /** 显示代码块行号
     * @default true
     */
    lineNumber?: boolean;
    /** 开启代码块工具条
     * @default ['copy']
     */
    tools?: ['copy'];
    /** 指定滚动的容器
     * @default () => window
     */
    getAnchorContainer?: () => HTMLElement;
    /** 不进行解析
     * @default false
     */
    notRender?: boolean;
}
export type MdElement = CustomElement<MdProps>;
export default MD;
