var siteWelcome = document.getElementById('loading');
siteWelcome.classList.remove('active');

var topNavBar = document.getElementById('topNavBar');
window.onscroll = function(e){
    window.scrollY > 0 ? topNavBar.classList.add('sticky') : topNavBar.classList.remove('sticky');
    var highlights = document.querySelectorAll('[highlight]');
    // console.log(highlights);
    var minIdndex =0;
    for(let i=1; i<highlights.length;i++){
        Math.abs(highlights[i].offsetTop - window.scrollY) < Math.abs(highlights[minIdndex].offsetTop - window.scrollY)? minIdndex = i : minIdndex = minIdndex;   
    }
    for (let i = 0; i < highlights.length; i++) {
        highlights[i].classList.remove('highlight');
        var id = highlights[i].id;
        var a = document.querySelector('a[href="#' + id + '"]').parentNode;
        a.classList.remove("highlighted");
    }
    highlights[minIdndex].classList.add('highlight');
   // console.log(minIdndex);
    var id = highlights[minIdndex].id;
    var a = document.querySelector('a[href="#'+id+'"]').parentNode;
    a.classList.add("highlighted");
};

var liTags = document.querySelectorAll('nav.menu>ul>li');
for(var i=0; i<liTags.length;i++){
    liTags[i].onmouseenter = function(e){
        e.currentTarget.classList.add("active");
    };
    liTags[i].onmouseleave = function (e) {
        e.currentTarget.classList.remove("active");
    };
}

var aTags = document.querySelectorAll('nav.menu>ul>li>a');
for(let i =0; i<aTags.length;i++){
    aTags[i].onclick = function(e) {
        e.preventDefault();
        let a = e.currentTarget;
        let href = a.getAttribute('href');
        let element = document.querySelector(href);
        let top = element.offsetTop;
        console.log(top);
// 用 TWEEN.JS 代替
        // let n = 25;
        // let duration = 500/n;
        let currentTop = window.scrollY;
        let targetTop = top - 65;
        // let distance = (targetTop - currentTop)/n;
        // let i =0;
        // var id = setInterval(()=>{
        //     if(i==25){
        //         clearInterval(id);
        //         return;
        //     }
        //     i++;
        //     window.scrollTo(0, currentTop+distance*i);
        // },duration);

        var distance = targetTop-currentTop;
        var t =Math.abs((distance/100)*300) 
        t > 500 ? t =500 : t = t;

        var coords = { y: currentTop }; // Start at (0, 0)
        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({ y: targetTop }, t) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
            .onUpdate(function () { // Called after tween.js updates 'coords'.
                // Move 'box' to the position described by 'coords' with a CSS translation.
                window.scrollTo(0,coords.y);
            })
            .start(); // Start the tween immediately.
    }
}

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);