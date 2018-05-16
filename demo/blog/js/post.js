moment.locale('zh-cn');
//計算相對時間
function calculateTime(millSec) {
    var date = new Date(millSec * 1000);
    console.log(moment(date).fromNow());
    console.log(date);
    return moment(date).fromNow();
}

const title = document.getElementById('title');
const author = document.getElementById('author');
const timestamp = document.getElementById('timestamp');
const content = document.getElementById('content');
const views = document.getElementById('views');
const comments = document.getElementById('comments');
var search = window.location.search;
axios.get('http://www.ftusix.com/static/data/content.php' + search).then(response => {
    console.log(response);
    document.getElementById('meta').innerText = `文章 - ${response.data.data.title} `;
    title.innerText = response.data.data.title;
    author.innerText = response.data.data.nick_name;
    views.innerText = "浏览: " + response.data.data.browser_num;
    comments.innerText = "评论: " + response.data.data.comment_num;
    timestamp.innerText = new Date(response.data.data.modify_time * 1000).toLocaleString();
    content.innerHTML = response.data.data.content;
});