const player = document.querySelector('.player');
const video = player.querySelector('.viewer')
const play = document.querySelector("button.toggle");
console.dir(video.paused)
// video.paused = false;



play.addEventListener("click", videoPlay);

function videoPlay() {
    console.log(video.paused)
    video.paused ? video.play() : video.pause();
    toggleButton();
}
function toggleButton() {
    let icon = video.paused ? '►' : '❚ ❚';
    play.textContent = icon;
}

var volume = document.querySelector('input[name="volume"]');
volume.addEventListener('change', handleVolume)
function handleVolume(event) {
    video.volume = event.target.value;
}
var playSpeed = document.querySelector('input[name="playbackRate"]');
playSpeed.addEventListener('change', handleSpeed);
function handleSpeed(event) {
    video.playbackRate = event.target.value;
}

var back = document.querySelector('button[data-skip="-10"]');
back.addEventListener('click', handleBack)
function handleBack() {
    console.log(video.currentTime)
    video.currentTime -= 10;
}

var forward = document.querySelector('button[data-skip="25"]');
forward.addEventListener('click', handleForward)
function handleForward() {
    console.log(video.currentTime)
    video.currentTime += 25;
}

//progress
var progress = document.querySelector('.progress__filled');

video.addEventListener('timeupdate', handleProgress);
function handleProgress(event) {
    let portion = parseFloat(video.currentTime / video.duration) * 100;
    progress.style.flexBasis = `${portion}%`
    console.log(video.ended);
    video.ended ? play.textContent = '►':'';
}

var progressBar = document.querySelector(".progress");
progress.style.flexBasis = `0%`;
progressBar.addEventListener('click', handleProgress1);
function handleProgress1(event) {
    console.log(event.offsetX)
    let pice = (event.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = pice;
}