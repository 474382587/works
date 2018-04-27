
var app = new Vue({
    el: '#app',
    data: {
        currentUser:{
            id:'',
            email:'',
        },
        editing: false,
        loginVisible: false,
        registerVisible:false,
        resume: {
            name: 'Name',
            gender: 'Gender',
            birthday: "Birthday",
            position: 'Postion',
            email: 'Email',
            phone: 'Tel'
        },
        signUp:{
            email:"",
            password:'',
        },
        login:{
            email:'',
            password:''
        }
    },
    methods: {
        sync: function (value, event) {
            this.resume[value] = event;
        },
        saveClick: function () {
            let currentUser =  AV.User.current();
            console.log(currentUser);
            !currentUser ? this.showLogin() : this.showResume();
        },
        showLogin: function () {
            this.loginVisible = true;
            this.registerVisible = false;
        },
        showResume: function () {
            // this.loginVisible = true;
            this.saveResume();
        },
        onCloseLogin: function () {
            this.loginVisible = false;
        },
        registerClick:function() {
            this.registerVisible = true;
            this.loginVisible = false;
        },
        onCloseRegister:function() {
            this.registerVisible = false;
        },
        onRegister:function(event) {
            // event.preventDefault();
            console.log(this.signUp);

            // 新建 AVUser 对象实例
            const user = new AV.User();
            // 设置用户名
            user.setUsername(this.signUp.email);
            // 设置密码
            user.setPassword(this.signUp.password);
            // 设置邮箱
            user.setEmail(this.signUp.email);
            user.signUp().then(function (user) {
                console.log(user);
            }, function (error) {
                alert(error);
            });
        },
        onLogin(){
            AV.User.logIn(this.login.email, this.login.password).then((loginedUser)=> {
                console.log(loginedUser.attributes.email);
                this.currentUser.id = loginedUser.id;
                this.currentUser.email = loginedUser.attributes.email;
                console.log('user email: ' + this.currentUser.email)
            },(error)=> {
                error.code === 211? alert('User does not exist.'):error.code === 210? alert('Username/Password does not match our records'):'';
            });
        },
        saveResume:function() {
            // 第一个参数是 className，第二个参数是 objectId
            var user = AV.Object.createWithoutData('User', AV.User.current().id);
            console.log(AV.User.current().id);
            // 修改属性
            user.set('resume', this.resume);
            // 保存到云端
            user.save();
        },
        onLogout:function(params) {
            AV.User.logOut();   
            alert('Lougout!');
            window.location.reload();
        }
    }
});

if (AV.User.current()){
    app.currentUser.email = AV.User.current().attributes.email;
    app.currentUser.id = AV.User.current().id;
    
}
else{
    
}
