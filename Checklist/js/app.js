var app = new Vue({
  el: '#app',
  data: {
    items: [
      {
        message: '1',
        isChecked: false
      },
      {
        message: '2',
        isChecked: true
      }
    ],
    userRegister: {
      email: '',
      password: ''
    },
    userLogin: {
      email: '',
      password: ''
    },
    registerVisible: false,
    loginVisible: false,
    loginStatus: true
  },
  methods: {
    show: function(index, e) {
      this.items[index].message = e
    },
    display: function(index, e) {
      this.items[index].isChecked = e
    },
    addOne: function() {
      this.items.push({
        message: '',
        isChecked: false
      })
    },
    deleteOne: function(index) {
      this.items.splice(index, 1)
    },
    saveList: function() {
      console.log(this.items)
    },
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.userRegister.email,
          this.userRegister.password
        )
        .then(
          function() {
            alert('Sign Up Successful!')
            this.registerVisible = false
            this.loginStatus = true

            console.log(this)
          }.bind(app)
        )
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // ...
          alert('Error Code: ' + errorCode + 'Error Message: ' + errorMessage)
        })
    },
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.userLogin.email,
          this.userLogin.password
        )
        .then(
          function() {
            alert('Sign In Successful!')
            this.loginVisible = false
            this.loginStatus = true
            console.log(this)
          }.bind(app)
        )
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // ...
          alert('Error Code: ' + errorCode + 'Error Message: ' + errorMessage)
        })
    },
    signOut: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.loginStatus = false
          // Sign-out successful.
        })
        .catch(function(error) {
          // An error happened.
        })
    }
  }
})
