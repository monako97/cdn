import { type JSX } from 'solid-js';
import type { CustomElement } from '../index';
declare interface MediaRecorderDataAvailableEvent extends Event {
    /** MediaRecorderDataAvailableEvent */
    data: any;
}
export interface CaptureScreenProps extends JSX.ButtonHTMLAttributes<HTMLDivElement> {
    /** 自定义类名 */
    class?: string;
    /** 自定义样式表 */
    css?: string;
    /** MediaStreamConstraints */
    options?: MediaStreamConstraints;
    /** 是否预览 */
    preview?: boolean;
    /** 预览时是否显示控制器 */
    controls?: boolean;
    /** 录制时配置项 */
    recorder?: boolean;
    /** 录制文件名称 */
    filename?: string;
    /** 捕获屏幕按钮文字 */
    captureScreenText?: string;
    /** 停止捕获按钮文字 */
    stopCaptureText?: string;
    /** 开始录制按钮文字 */
    startRecorderText?: string;
    /** 停止录制按钮文字 */
    stopRecorderText?: string;
    /** 暂停录制按钮文字 */
    pausedRecorderText?: string;
    /** 录制中按钮文字 */
    recorderingText?: string;
    /** 录制错误回调方法 */
    onErrorRecorder?: (e: Event) => void;
    /** 停止录制回调方法 */
    onStopRecorder?: () => void;
    /** 开始录制回调方法 */
    onStartRecorder?: (state: MediaRecorder['state']) => void;
    /** 记录媒体时触发 */
    onRecorderDataAvailable?: (e: MediaRecorderDataAvailableEvent) => void;
    /** 捕获屏幕错误回调方法 */
    onErrorCapture?: (err: unknown) => void;
    /** 停止捕获屏幕回调方法 */
    onStopCapture?: () => void;
    /** 开始捕获屏幕回调方法 */
    onStartCapture?: (stream?: MediaStream) => void;
    /** 自定义保存录制文件方法 */
    onSaveRecorder?: (blob: Blob, fileName: string) => void;
}
export type CaptureScreenElement = CustomElement<CaptureScreenProps>;
declare function CaptureScreen(_: CaptureScreenProps): JSX.Element;
export default CaptureScreen;
