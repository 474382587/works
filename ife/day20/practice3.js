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
                button.disabled = false;
            } else {
                fadeObj.style.opacity = opacity + '';
                button.disabled = true;
            }

        }, 50);
    } else {
        opacity = 0;
        interval2 = setInterval(function () {
            opacity += 0.1;
            if (opacity > 1) {
                clearInterval(interval2);
                button.innerText = "淡出";
                button.disabled = false;
                fadeIn = false;
            } else {
                fadeObj.style.opacity = opacity + '';
                button.disabled = true;
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
            button2.disabled = true;
        } else {
            fadeOut = false;
            console.log('finished')
            button2.innerText = "淡入";
            button2.disabled = false;
        }
    }, 50);
}

function fadeIns() {
    count++;
    setTimeout(function () {
        fadeObj2.style.opacity = count / 10 + '';
        if (count < 10) {
            fadeIns();
            button2.disabled = true;
        } else {
            fadeOut = true;
            console.log('finished')
            button2.innerText = "淡出";
            button2.disabled = false;
        }
    }, 50);
}