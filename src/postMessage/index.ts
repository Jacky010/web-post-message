/**
 * postMessage通信类
 */
class PostMessage {
    whiteList: string[] = [];   // 域名白名单
    event: any = null;
    listeners: any = [];


    /**
     * 初始化
     * @param whiteList
     */
    start = (whiteList: string[]) => {
        this.whiteList = whiteList;
        window.addEventListener('message', this.receiveMessage, false);
    }


    /**
     * 事件侦听器
     * @param e
     */
    receiveMessage = (e: any) => {
        let origin = e.origin || e.originalEvent.origin;
        if (!this.whiteList.includes(origin)) {
            console.error('发送方域名不在白名单之内，禁止接收消息')
            return;
        }
        this.event = e;
        this.listeners.forEach((v: any) => {
            v(e);
        })
    }


    /**
     * 注册接收事件
     * @param e
     */
    on = (listener: any) => {
        this.listeners = [...this.listeners, listener];
    }


    /**
     * 发送消息
     * @param url
     * @param data
     * @param window
     */
    emit = (url: string, data: any, window?: any) => {
        if (!this.event) {
            return;
        }
        if (window) {
            window.postMessage(data, url);
            return;
        }
        this.event.source.postMessage(data, url);
    }


    /**
     * 移除指定监听事件
     */
    remove = (listener: any) => {
        this.listeners = this.listeners.filter((v: any) => v !== listener);
    }


    /**
     * 销毁所有监听事件
     */
    destroy = () => {
        this.listeners = [];
        window.removeEventListener('message', this.receiveMessage, false);
    }
}


const postMessage = new PostMessage();
export default postMessage;
