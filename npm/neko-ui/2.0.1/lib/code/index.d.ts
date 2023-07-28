import { type JSX } from 'solid-js';
import type { CustomElement } from '..';
export interface CodeProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** 自定义类名 */
    class?: string;
    /** 自定义样式表 */
    css?: string;
    /** 内容 */
    code?: string;
    /** 语言 */
    lang?: string;
    /** 显示代码行号 */
    lineNumber?: boolean;
    /** 支持编辑 */
    edit?: boolean;
    /** 开启代码块工具条 */
    toolbar?: boolean;
    /** 编辑修改时的回调 */
    onChange?: (code: string) => void;
}
export type CodeElement = CustomElement<CodeProps>;
declare function Code(props: CodeProps): JSX.Element;
export default Code;
