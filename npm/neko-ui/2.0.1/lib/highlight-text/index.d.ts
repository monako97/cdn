import { type JSX } from 'solid-js';
import type { CustomElement } from '..';
export type HighlightTextJson = {
    highlight?: boolean;
    text: string;
}[] | null;
export interface HighlightTextProps extends JSX.HTMLAttributes<HTMLDivElement> {
    /** 自定义样式表 */
    css?: string;
    /** 自定义类名 */
    class?: string;
    /** 内容 */
    text?: string;
    /** 需要高亮的内容 */
    highlight?: string | (HighlightRule | string)[];
    /** RegExp flag */
    flag?: HighlightRule['flag'];
    /** 额外需要高亮的内容 */
    extra?: string;
}
interface HighlightRule {
    /** 需要高亮的内容 */
    highlight: string;
    /** RegExp flag */
    flag?: 'g' | 'i' | 'm' | 'u' | 'y';
}
export interface Highlight {
    /** 命中高亮 */
    hit?: boolean;
    /** 内容 */
    text: string;
}
declare function HighlightText(props: HighlightTextProps): JSX.Element;
export type HighlightTextElement = CustomElement<HighlightTextProps>;
export default HighlightText;
