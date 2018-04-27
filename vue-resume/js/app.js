var app = new Vue({
    el: '#app',
    data: {
        editing: false,
        loginVisible: false,
        resume: {
            name: '姓名',
            gender: '性别',
            birthday: "出生日期",
            position: '求职岗位',
            email: '电子邮箱',
            phone: '电话'
        }
    },
    methods: {
        sync: function (value, event) {
            this.resume[value] = event;
        },
        saveClick: function () {
            let currentUser = AV.User.current();
            // console.log(currentUser);
            !currentUser ? this.showLogin() : this.showResume();
        },
        showLogin: function () {
            this.loginVisible = true;
        },
        showResume: function () {
            // this.loginVisible = true;
        },
        onCloseLogin: function () {
            this.loginVisible = false;
        }
    }
});