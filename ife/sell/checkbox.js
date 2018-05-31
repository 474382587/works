class Checkbox {
    constructor(parentNode, options, name) {
        this.name = name;
        this.parentNode = parentNode;
        this.options = options;
        this.init();
    }
    //初始化
    init() {
        let container = document.createElement("div");
        this.options.forEach((e, index) => {
            console.log(index);
            let type = index === 0 ? "all" : "single";
            container.innerHTML += this.generateHTML(e.name, e.value, type);
        });
        this.parentNode.appendChild(container);
        this.eventListener();
        this.parentNode.querySelectorAll("input").forEach(e=>e.checked = true);
    }

    generateHTML(label, value, type) {
        return `<label>${label}<input type="checkbox" value=${value} checkbox-type=${type}></label>`
    }

    eventListener() {
        this.parentNode.addEventListener("input", event => {
            let allSingles = this.parentNode.querySelectorAll("input[checkbox-type='single']");
            let all = this.parentNode.querySelector("input[checkbox-type='all']");
            if (event.target === all) {
                allSingles.forEach(e => e.checked = true)
                all.checked = true;
            }
            else {
                if (Array.from(allSingles).every(e => e.checked === false)) {
                    event.target.checked = true;
                }
                if (Array.from(allSingles).every(e => e.checked === true)) {
                    all.checked = true;
                }
                else {
                    all.checked = false;
                }
            }
        })
    }

    getValue(){
        return Array.from(this.parentNode.querySelectorAll("input[checkbox-type='single']:checked")).map(e=>e.value);
    }
}