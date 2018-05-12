var index = 0;
var back = false;
const pic = document.getElementById('wrapper');
setInterval(function () {
    if (!back) {
        pic.style.backgroundPositionY = 480 * index + 'px';
        console.log(pic.style.backgroundPositionY);
        index++;

    } else {
        pic.style.backgroundPositionY = 480 * index + 'px';
        // console.log('back'+index);
        console.log(pic.style.backgroundPositionY);

        index--;

    }

    if (index === 17) {
        back = true;
    } else if (index === 1) {
        back = false;
    } else {
        // console.log('sadasdadsasdasdasdasdasdasdasdas')
    }
}, 100);