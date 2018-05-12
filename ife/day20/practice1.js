const inputs = document.getElementsByTagName('input');
const selects = document.getElementsByTagName('select');
// console.log(selects)
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', function () {
        for (let j = 0; j < selects.length; j++) {
            selects[j].classList.remove('active');
        }
        document.querySelector(`#${inputs[i].id}-select`).classList.add('active');
    });
}