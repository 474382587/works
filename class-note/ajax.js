 window.jQuery.ajax = function(options) {
    let url = options.url;
    let method = options.method;
    let body = options.body;
    let success = options.success;
    let fail = options.fail;
    //创建一个 XMLHttpRequest Object
    let request = new XMLHttpRequest();
    //request
    request.open(method, url);
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                success.call(undefined,request.responseText);
            }
            else if(request.status >= 400){
                fail.call(undefined,request)
            }
        }
    };
    request.send();
}