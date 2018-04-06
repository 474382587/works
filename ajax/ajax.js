// jQuery Ajax like ajax 

window.jQuery.ajax = function (url, method, body, success, fail) {
    let request = new XMLHttpRequest();
    request.open(method, url);
    request.onreadystatechange = () => {
        if (request.readyState === 4) {

            // 成功函数
            if (request.status >= 200 && request.status < 300) {
                success.call(undefined, request.responseText);
            }
            // 失败函数
            else if (request.status >= 400) {
                fail.call(undefined, request);
            }
        }
    }

    // 函数请求体
    request.send(body);
}


let obj = {
    url: "",
    method: "",
    body: "",
    fail: "",
    success: ""
};

window.jQuery.ajax2 = function (options) {
    let url = options.url;
    let method = options.method;
    let body = options.body;
    let fail = options.fail;
    let success = options.success;

    let request = new XMLHttpRequest();
    request.open(method, url);
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            // 成功函数
            if (request.status >= 200 && request.status < 300) {
                success.call(undefined, request.responseText);
            }
            // 失败函数
            else if (request.status >= 400) {
                fail.call(undefined, request);
            }
        }
    }
    // 函数请求体
    request.send(body);
};
