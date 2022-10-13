import {injectXHR} from "./lib/xhr";

function init() {
    injectXHR()
    console.log('init');
    window.addEventListener('unhandledrejection', (e) => {
        console.log(e);
    });
    window.onerror = function (message, source, lineno, colno, error) {
        console.log(222, message, source, lineno, colno, error);
    };
    window.addEventListener(
        'error',
        function (e) {
            const target = e.target;
            if (target instanceof HTMLLinkElement) {
                console.log(`资源加载失败${target.href}`);
            } else if (target instanceof HTMLImageElement) {
                console.log(`图片资源加载失败${target.src}`);
            } else if (target instanceof HTMLScriptElement) {
                console.log(`资源加载失败${target.src}`);
            }
        },
        true,
    );
}
export {init}
