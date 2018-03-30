window.jQuery.ajax = function (options) {
    return new Promise(function(resolve,reject) {
        let url;
        if (arguments.length === 1) {
            url = options.url;
        }
        else if (arguments.length === 2) {
            url = arguments[0];
            options = arguments[1];
        }

        let method = options.method;
        let body = options.body;
        let headers = options.headers;
        
        //创建一个 XMLHttpRequest Object
        let request = new XMLHttpRequest();
        //request
        request.open(method, url);
        for (let key in headers) {
            let value = headers[key];
            request.setRequestHeader(key, value);
        }
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText);
                }
                else if (request.status >= 400) {
                    reject.call(undefined, request)
                }
            }
        };
        request.send(); 
    });
}