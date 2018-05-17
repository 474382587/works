//初始化SWIPER插件
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    autoHeight: true, //enable auto height
    spaceBetween: 20,    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

moment.locale('zh-cn');
//計算相對時間
function calculateTime(millSec) {
    var date = new Date(millSec * 1000);
    return moment(date).fromNow();
}

requestPosts(0, null);
//更新文章
function updatePosts(arr) {
    let posts = document.querySelector('ul.posts');
    posts.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        // ${arr[i].user_id}
        li.innerHTML = `<a href='./src/blog/post.html?topic_id=${arr[i].topic_id}&user_id=${arr[i].user_id}'><div class="left"><p>${arr[i].nick_name} <span>${calculateTime(arr[i].modify_time)}</span></p>${arr[i].title}</div><div class="right"><span><img src="./static/img/comment-alt.svg" alt="" height="20px">${arr[i].comment_num}</span><span><img src="./static/img/thumbs-up.svg" alt="" height="20px">${arr[i].like_num}</span></div></a>`
        posts.appendChild(li);
    }
}
var currentType;
const tabs = document.querySelectorAll('ul.tab>li');
var previousNode = document.querySelectorAll('ul.tab>li')[0];
var currentPageNumber = 0;
const previous = document.querySelector('button.previous');
const next = document.querySelector('button.next');

//監聽前後頁腳點擊
previous.addEventListener('click', e => {
    let posts = document.querySelector('ul.posts');
    posts.innerHTML = '';
    requestPosts(currentType, currentPageNumber - 1);
});
next.addEventListener('click', e => {
    let posts = document.querySelector('ul.posts');
    posts.innerHTML = '';
    requestPosts(currentType, currentPageNumber + 1);
});
//文章分類
tabs.forEach((el, index) => {
    el.addEventListener('click', (event) => {
        //加载中
        let posts = document.querySelector('ul.posts');
        posts.innerHTML = '';
        previousNode.classList.remove('active');
        el.classList.add('active');
        previousNode = el;
        requestPosts(index, null);
    });
});

//獲取文章
function requestPosts(type, pageNum) {
    let loading = document.querySelector('div.loader');
    loading.classList.remove('hide');
    let paginationContainer = document.querySelector('div.pagination-container');

    paginationContainer.classList.add('hide');
    axios({
        method: 'post',
        url: 'http://www.ftusix.com/static/data/topicList.php',
        params: {
            "type": type,
            "sort": "new",
            "page": pageNum + 1,
            "index": true,
        }
    }).then(function (response) {
        let arr = response.data.data;
        let listCount = response.data.listCount[0] - '';

        let loading = document.querySelector('div.loader');
        loading.classList.add('hide');
        updatePosts(arr);
        updatePagination(listCount, pageNum);
        paginationContainer.classList.remove('hide');
        currentType = type;
    });
}
//更新頁腳
function updatePagination(total, index) {
    index === null ? index = 0 : '';
    let count = Math.ceil(total / 10);
    currentPageNumber = index;

    if (currentPageNumber === 0) {
        previous.classList.add('hide');
        next.classList.remove('hide');

    } else if (currentPageNumber === count - 1) {
        next.classList.add('hide');
        previous.classList.remove('hide');

    } else {
        previous.classList.remove('hide');
        next.classList.remove('hide');
    }
    if (count === 1) {
        previous.classList.add('hide');
        next.classList.add('hide');
    }
    let pagination = document.querySelector('div.pagination');
    pagination.innerHTML = '';
    for (let i = 1; i < count + 1; i++) {
        let span = document.createElement('span');
        span.innerText = i;
        pagination.appendChild(span);
    }

    document.querySelector('div.pagination').querySelectorAll('span')[index].classList.add('active');
    var numbers = document.querySelectorAll("div.pagination span");
    numbers.forEach((el, index) => {
        el.addEventListener('click', e => {
            let posts = document.querySelector('ul.posts');
            posts.innerHTML = '';
            requestPosts(currentType, index);
        })
    })
}