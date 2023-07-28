import type { CustomElement } from '..';
export interface ImgProps {
    /** 图片地址 */
    src?: string;
    /** 图片 alt */
    alt?: string;
    /** 大图查看 */
    open?: boolean | null;
    /** 开启关闭大图的回调函数 */
    onOpenChange?: (open: boolean | null) => void;
    /** 点击遮罩关闭
     * @default false
     */
    maskClosable?: boolean;
    /** 通过 `esc` 按键关闭
     * @default true
     */
    escClosable?: boolean;
}
export type ImgElement = CustomElement<ImgProps>;
declare function Img(props: ImgProps): import("solid-js").JSX.Element;
export default Img;
