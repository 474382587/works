const veriCode = document.getElementById("veri-code");
const verification = document.getElementById("verification");
const celNum = document.getElementById("tel");
const username = document.getElementById("username");
const password = document.getElementById("password");
const rePassword = document.getElementById("re-password");
const msgCode = document.getElementById("msg-code");
const getMsg = document.getElementById("get-msg");

var verificationCode = codeGenerator();
var msgVeri = "123456";
verification.innerText = `${verificationCode}`;


//判断用户是否登录
window.onload = function () {
    let cookieArr = document.cookie;
    if (cookieArr !== "") {
        console.log(cookieArr);
        window.location.href = "../../";
    }
}

//四位随机数生成
function codeGenerator() {
    let result = " ";
    for (let i = 0; i < 4; i++) {
        result += (parseInt(Math.random() * (new Date().getTime()) % 10)) + " ";
    }
    return result;
}
document.addEventListener("submit", e => {
    if (!validatePhone(celNum.value)) {
        celNum.classList.add("alert");
        e.preventDefault();
    }
    else if (!validateName(username.value)) {
        username.classList.add("alert");
        e.preventDefault();
    }
    else if (!validatePassword(password.value, rePassword.value)) {
        password.classList.add("alert");
        rePassword.classList.add("alert");
        e.preventDefault();
    }
    else if (!validateVeriCode(veriCode.value, verificationCode.replace(/\s/, ""))) {
        veriCode.classList.add("alert");
        e.preventDefault();
    }
    // else if (!validateMsg(msgCode, msgVeri)) {
    //     msgCode.classList.add("alert");
    //     e.preventDefault();
    // }
    else {
        register(celNum.value, password.value, msgVeri);
        e.preventDefault();
    }
});

function register(number, passcode, smsCode) {
    axios.post("http://www.ftusix.com/static/data/register.php", {
        mobile: number,
        pwd: passcode,
        sms_code: smsCode
    })
        .then(function (response) {
            if (response.data.status === 0) {
                alert('该手机号已经被注册过了');
                document.querySelector(".registerBox").reset();
            }
            else if (response.data.status === 1) {
                alert('注册成功！即将为您跳转至登录页~ ');
                window.location.href = '../../';
            }
            // if(response.data.token){
            //     console.log(response.data.token);
            // }
        })
        .catch(function (error) {
            console.log(error);
        });

}

const inputsList = document.querySelectorAll("input");
console.log(inputsList);

inputsList.forEach(el => {
    el.addEventListener("focus", (e) => {
        removeAlertClass(e.target);
    });
});
function removeAlertClass(e) {

    e.classList.remove("alert");
}

// getMsgCode("123");
function getMsgCode(number) {
    axios.post('http://www.ftusix.com/static/data/sendsms.php', {
        mobile: number
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function validatePhone(number) {
    return (number.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/));
}
function validateName(name) {
    //不包括空格
    return !name.match(/\s/) && name.length > 2 && name.length < 21;
}
function validatePassword(first, second) {
    return first.match(/^[0-9A-Za-z]{6,10}$/) ? first === second ? true : false : false;
}
function validateVeriCode(code, veri) {
    return code === veri.split(" ").join("");
}
        //没验证 暂时不需要
        // function validateMsg(msg, msgVeri) {
        //     return msg === msgVeri;
        // }