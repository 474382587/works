var APP_ID = 'XbpmBbqWlM1facxh938Bu6ml-MdYXbMMI'
var APP_KEY = '2eROdo9GLACuxInoNaluVeB1'

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})
// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello World!'
// }).then(function (object) {
//     alert('LeanCloud Rocks!');
// });

var commentsForm = document.getElementById('comments')

commentsForm.addEventListener('submit', function(e) {
  e.preventDefault()
  console.log('Submit')
  var userName = document.getElementById('userName').value
  var comment = document.getElementById('comment').value
  commentUpload(userName, comment)
})

var commentList = document.getElementById('savedComments')
var savedComments = new AV.Query('Comments')
savedComments.find().then(function(comments) {
  comments.forEach(e => {
    var li = document.createElement('li')
    var user = document.createElement('span')
    var comment = document.createElement('span')
    user.innerText = e.attributes.user
    comment.innerText = e.attributes.comment
    li.appendChild(user)
    li.appendChild(comment)
    commentList.appendChild(li)
  })
})

function commentUpload(userName, comment) {
  var CommentsObject = AV.Object.extend('Comments')
  var commentsObject = new CommentsObject()
  commentsObject
    .save({
      user: userName,
      comment: comment
    })
    .then(function() {
      console.log('Succuess')

      var li = document.createElement('li')
      var user = document.createElement('span')
      var comment = document.createElement('span')
      user.innerText = commentsObject.attributes.user
      comment.innerText = commentsObject.attributes.comment
      li.appendChild(user)
      li.appendChild(comment)
      commentList.appendChild(li)
    })
}
