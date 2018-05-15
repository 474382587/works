var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})


requestPosts(0, null);

function updatePosts(arr) {
    let posts = document.querySelector('ul.posts');
    posts.innerHTML = '';
    for(let i =0; i<arr.length;i++){
        console.log(i);
        let li = document.createElement('li');
        li.innerHTML = `<div class="left"><p>${arr[i].nick_name} ${arr[i].modify_time}</p>${arr[i].title}</div><div class="right"><span>${arr[i].comment_num}</span><span>${arr[i].like_num}</span></div>`
        posts.appendChild(li);
    }
}
var currentType;
const tabs = document.querySelectorAll('ul.tab>li');
var previous = document.querySelectorAll('ul.tab>li')[0];
console.log(tabs);
tabs.forEach((el,index)=>{
    el.addEventListener('click',(event)=>{
        //加载中
        let posts = document.querySelector('ul.posts');
        posts.innerHTML = '';
        previous.classList.remove('active');
        el.classList.add('active');
        previous = el;
        console.log(index);
        requestPosts(index, null);
    });
});

function requestPosts(type,pageNum){
    let loading = document.querySelector('div.loader');
    loading.classList.remove('hide');
    axios({
        method: 'post',
        url: 'http://www.ftusix.com/static/data/topicList.php',
        params: {
            "type": type,
            "sort": "new",
            "page": pageNum+1,
            "index": true,
        }
    }).then(function (response) {
        console.log(response.data.data);
        let arr = response.data.data;
        let listCount = response.data.listCount[0] - '';
        console.log(listCount);
        let loading = document.querySelector('div.loader');
        loading.classList.add('hide');
        updatePosts(arr);
        updatePagination(listCount,pageNum);
        currentType = type;
    });
}

function updatePagination(total,index) {
    index === null? index = 0:'';
    let count = Math.ceil(total/10);
    
    console.log("count "+count)
    let pagination = document.querySelector('div.pagination');
    pagination.innerHTML = '';
    for(let i =1; i< count+1; i++){
        let span = document.createElement('span');
        span.innerText = i;
        pagination.appendChild(span);
    }
    console.log(index);
    // if(index === 0){
    // console.log(document.querySelector('button.previous'));
    //     document.querySelector('button.previous').setAttribute('disabled',"disabled")
    // }
    //button 还没写好 ^
    document.querySelector('div.pagination').querySelectorAll('span')[index].classList.add('active');
    var numbers = document.querySelectorAll("div.pagination span");
    numbers.forEach((el,index)=>{
        el.addEventListener('click',e=>{
            let posts = document.querySelector('ul.posts');
            posts.innerHTML = '';
            console.log(currentType)
            console.log(index)
            requestPosts(currentType,index);
        })
    })
}