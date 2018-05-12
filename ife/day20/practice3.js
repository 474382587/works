const button = document.getElementById('fade-btn');
const fadeObj = document.getElementById('fade-obj');
var interval1;
var interval2;
var fadeIn = false;
button.addEventListener('click', e => {
    if (!fadeIn) {
        opacity = 1;
        interval1 = setInterval(function () {
            opacity -= 0.1;
            if (opacity < 0) {
                clearInterval(interval1);
                button.innerText = "淡入";
                fadeIn = true;
            } else {
                fadeObj.style.opacity = opacity + '';
            }

        }, 50);
    } else {
        opacity = 0;
        interval2 = setInterval(function () {
            opacity += 0.1;
            if (opacity > 1) {
                clearInterval(interval2);
                button.innerText = "淡出";
                fadeIn = false;
            } else {
                fadeObj.style.opacity = opacity + '';
            }
        }, 50);
    }
})


//setTimeout
const button2 = document.getElementById('fade-btn2');
const fadeObj2 = document.getElementById('fade-obj2');
var fadeOut = true;
var count = 10;
button2.addEventListener('click', function () {
    if (fadeOut) {
        fadeOuts();
    } else {
        fadeIns();
    }
});


function fadeOuts() {
    count--;
    setTimeout(function () {
        fadeObj2.style.opacity = count / 10 + '';
        if (count > 0) {
            fadeOuts();
        } else {
            fadeOut = false;
            console.log('finished')
            button2.innerText = "淡入";
        }
    }, 50);
}

function fadeIns() {
    count++;
    setTimeout(function () {
        fadeObj2.style.opacity = count / 10 + '';
        if (count < 10) {
            fadeIns();
        } else {
            fadeOut = true;
            console.log('finished')
            button2.innerText = "淡出";
        }
    }, 50);
}