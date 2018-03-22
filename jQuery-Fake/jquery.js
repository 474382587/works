




window.jQuery = function (selector) {
    //find all elements by selector
    let nodes = document.querySelectorAll(selector);

    //add class
    nodes.addClass = function (className) {
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].classList.add(className);
        }
    }
    //set text content
    nodes.setText = function (text) {
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].textContent = text;
        }
    }
    return nodes;
}
