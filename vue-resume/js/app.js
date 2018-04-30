
var app = new Vue({
    el: '#app',
    data: {
        currentUser:{
            id:'',
            email:'',
        },
        preview:false,
        shareVisible:false,
        shareLink:'',
        editing: false,
        loginVisible: false,
        registerVisible:false,
        themeVisible: true,
        resume: {
            name: 'Name',
            gender: 'Gender',
            birthday: "Birthday",
            position: 'Postion',
            email: 'Email',
            phone: 'Tel',
            skills: [
                {
                    name: 'Skill',
                    description: 'Description',
                },
            ],
            projects: [
                {
                    name: 'project1',
                    link:'Link1',
                    keywords:'keywords',
                    description: 'Description',
                },
                {
                    name: 'project2',
                    link: 'Link',
                    keywords: 'keywords',
                    description: 'Description',
                },
            ]
        },
        signUp:{
            email:"",
            password:'',
        },
        login:{
            email:'',
            password:''
        },
        url:'',
    },
    methods: {
        //Resume DOM functions
        sync: function (value, event) {
            this.resume[value] = event;
        },
        syncSkills:function (index,prop,event) {
            this.resume.skills[index][prop] =event;  
        },
        syncProjects:function (index,prop,event) {
            this.resume.projects[index][prop] = event;  
        },
        addProject:function () {
            this.resume.projects.push({
                name: 'project',
                link: 'Link',
                keywords: 'keywords',
                description: 'Description',
            });
        },
        addSkill:function() {
            this.resume.skills.push({
                name:'Skill',
                description:'Description'
            });
        },
        removeSkill:function (index) {
            this.resume.skills.splice(index,1);
        },
        removeProject: function (index) {
            this.resume.projects.splice(index, 1);
        },

        //Login/Utility DOM functions
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
            user.signUp().then((user)=> {
                console.log(user);
                this.registerVisible = false;
                console.log(this.registerVisible)
                // window.location.reload();
                app.currentUser.email = AV.User.current().attributes.email;
                app.currentUser.id = AV.User.current().id;
                this.saveResume();
            }, function (error) {
                alert("Please enter a valid Email address");
            });
        },
        onLogin(){
            AV.User.logIn(this.login.email, this.login.password).then((loginedUser)=> {
                console.log(loginedUser.attributes.email);
                this.currentUser.id = loginedUser.id;
                this.currentUser.email = loginedUser.attributes.email;
                console.log('user email: ' + this.currentUser.email)
                this.loginVisible = false;
                this.getResume();
            },(error)=> {
                error.code === 211? alert('User does not exist.'):error.code === 210? alert('Username/Password does not match our records'):'';
            });
        },
        onShare:function() {
                this.shareVisible = true;  
                app.shareLink = location.origin + location.pathname + '?user_id=' + app.currentUser.id;
        },
        onPrint:function() {
            window.print();
        },
        onTheme:function() {
            this.themeVisible = true;
        },
        onCloseTheme:function() {
            this.themeVisible = false;
        },
        onDefaultTheme:function () {
            document.body.className = 'default';
        },
        onDarkTheme:function () {
            document.body.className ="dark";
        },
        saveResume:function() {
            // 第一个参数是 className，第二个参数是 objectId
            var user = AV.Object.createWithoutData('User', AV.User.current().id);
            console.log(AV.User.current().id);
            console.log(this.resume);
            // 修改属性
            user.set('resume', this.resume);
            // 保存到云端
            user.save();
        },
        onLogout:function(params) {
            AV.User.logOut();   
            alert('Lougout!');
            window.location.reload();
        },
        getResume:function() {
            var query = new AV.Query('User');
            query.get(this.currentUser.id).then((resume)=> {
                // 成功获得实例
                // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
                console.log(resume.attributes.resume);
                Object.assign(this.resume,resume.attributes.resume);
            }, function (error) {
                // 异常处理
                console.log('error')
            });
        },
        getPreviewResume:function(id) {
            var query = new AV.Query('User');
            query.get(id).then((resume) => {
                // 成功获得实例
                // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
                console.log(resume.attributes.resume);
                Object.assign(this.resume, resume.attributes.resume);
            }, function (error) {
                // 异常处理
                console.log('error')
            });
            this.preview = true;
        },
    }
});
app.url = location.origin + location.pathname;
let userId;
if (AV.User.current()){
    app.currentUser.email = AV.User.current().attributes.email;
    app.currentUser.id = AV.User.current().id;
    app.getResume();
}
else{
    let searchParameter = location.search;
    let regex = /user_id=([^&]+)/;
    let matches = searchParameter.match(regex);
    if(matches){
        userId = matches[1];
        console.log(userId)
        app.getPreviewResume(userId);
    }
}
