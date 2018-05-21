const number = document.getElementById("tel");
const password = document.getElementById("password");
const remember = document.getElementById("remember");
//判断用户是否登录
window.onload = function () {
    let cookieArr = document.cookie;
    if (cookieArr !== "") {
        console.log(cookieArr);
        window.location.href = "../../";
    }
}

document.addEventListener("submit", (e) => {
    let loginNumber = number.value;
    let loginPassword = password.value;
    let saveCookie = document.getElementById("remember").checked;
    axios({
        method: 'post',
        url: 'http://www.ftusix.com/static/data/login.php',
        data: {
            mobile: loginNumber,
            pwd: loginPassword,
        }
    }).then(function (response) {
        console.log(response);
        if (response.data.status === 0) {
            alert(response.data.info);
        }
        else {
            let token = response.data.data[0].token;
            let userId = response.data.data[0].user_id;
            console.log(response.data.data[0])
            if (saveCookie) {
                console.log("Use Cookie" + " token = " + token + " userid = " + userId)
                setCookie('user_id', userId);
                setCookie('token', token);
            }
            else {
                console.log("Use localstorage")
                document.cookie = 'user_id' + "=" + encodeURI(userId) + ";path=" + relPathToAbs("../../");
                document.cookie = 'token' + "=" + encodeURI(token) + ";path=" + relPathToAbs("../../");
            }
            window.location.reload();
        }


    }).catch(function (error) {
        console.log(error);
    });
    e.preventDefault();
});

//写入Cookie
function setCookie(name, value) {
    var Days = 7;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + encodeURI(value) + ";expires=" + exp.toGMTString() + ";path=" + relPathToAbs("../../");
}


//relative path
function relPathToAbs(sRelPath) {
    var nUpLn, sDir = "", sPath = location.pathname.replace(/[^\/]*$/, sRelPath.replace(/(\/|^)(?:\.?\/+)+/g, "$1"));
    for (var nEnd, nStart = 0; nEnd = sPath.indexOf("/../", nStart), nEnd > -1; nStart = nEnd + nUpLn) {
        nUpLn = /^\/(?:\.\.\/)*/.exec(sPath.slice(nEnd))[0].length;
        sDir = (sDir + sPath.substring(nStart, nEnd)).replace(new RegExp("(?:\\\/+[^\\\/]*){0," + ((nUpLn - 1) / 3) + "}$"), "/");
    }
    return sDir + sPath.substr(nStart);
}