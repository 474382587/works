// 判断用户是否登录
window.onload = function() {
  let cookieArr = document.cookie
  if (cookieArr !== '') {
    console.log(cookieArr)
    window.location.href = '../../'
  }
}
const celNum = document.getElementById('tel')
const password = document.getElementById('password')
const rePassword = document.getElementById('re-password')
const msgCode = document.getElementById('msg-code')
const getMsg = document.getElementById('get-msg')

document.addEventListener('submit', e => {
  // if(!validateMsg(msgCode, msgVeri)) {
  //     msgCode.classList.add("alert");
  //     e.preventDefault();
  // }
  let number = celNum.value || '!'
  let passcode = password.value || '!'
  let passcode2 = rePassword.value || '!'
  let smsCode = msgCode.value || '123456'
  console.log(number + passcode + passcode2 + smsCode)

  axios
    .post(
      'https://cors-anywhere.herokuapp.com/http://www.ftusix.com/static/data/reset.php',
      {
        mobile: number, //  注册手机号
        pwd: passcode, //  注册密码
        pwd2: passcode2, //  确认密码，如果两次不统一会返回失败
        sms_code: smsCode
      }
    )
    .then(function(response) {
      console.log(response)
      if (response.data.status === 0) {
        alert(response.data.info)
        document.querySelector('.registerBox').reset()
      } else {
        alert(response.data.info)
        window.location.href = '../login'
      }
    })

  e.preventDefault()
})
