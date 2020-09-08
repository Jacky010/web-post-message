/**
 * postMessage通信类
 */
declare class PostMessage {
    whiteList: string[];
    event: any;
    listeners: any;
    /**
     * 初始化
     * @param whiteList
     */
    start: (whiteList: string[]) => void;
    /**
     * 事件侦听器
     * @param e
     */
    receiveMessage: (e: any) => void;
    /**
     * 注册接收事件
     * @param e
     */
    on: (listener: any) => void;
    /**
     * 发送消息
     * @param url
     * @param data
     * @param window
     */
    emit: (url: string, data: any, window?: any) => void;
    /**
     * 移除指定监听事件
     */
    remove: (listener: any) => void;
    /**
     * 销毁所有监听事件
     */
    destroy: () => void;
}
declare const postMessage: PostMessage;
export default postMessage;
