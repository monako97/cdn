export { toneColor } from '@moneko/common';
/** 颜色方案枚举 */
export declare enum ColorScheme {
    /** 明亮 */
    light = "light",
    /** 暗黑 */
    dark = "dark"
}
/** 共享的颜色方案 */
export declare const theme: {
    scheme: ColorScheme;
    light: {
        primary: string;
        warning: string;
        error: string;
        success: string;
    };
    dark: {
        primary: string;
        warning: string;
        error: string;
        success: string;
    };
    tokens: {};
}, setTheme: import("solid-js/store").SetStoreFunction<{
    scheme: ColorScheme;
    light: {
        primary: string;
        warning: string;
        error: string;
        success: string;
    };
    dark: {
        primary: string;
        warning: string;
        error: string;
        success: string;
    };
    tokens: {};
}>;
export interface ThemeOption {
    /** 是否采用暗色算法
     * @default false
     */
    dark?: boolean;
    /** 颜色名称 */
    name: string;
}
/** 生成主题色调
 * @param {string} base 基础颜色
 * @param {ThemeOption} option 配置项
 * @returns {Record<string, string>} 主题色调
 */
export declare function generateTheme(base: string, option: ThemeOption): Record<string, string>;
export declare const baseStyle: import("solid-js").Accessor<string>;
