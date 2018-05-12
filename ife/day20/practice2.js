const lists = document.getElementsByTagName('li');
const p = document.querySelector('p');
for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener("click", function (e) {
        console.log(e);
        let color = e.currentTarget.style.backgroundColor;
        p.style.color = color;
        p.innerText = color;
    });
}
