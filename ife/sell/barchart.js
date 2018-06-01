// create SVG bar chart
class Barchart {
    constructor(data) {
        this.title = data[0]+' - '+data[1] ; // array contains region, product, sale amount 
        this.data = data.splice(2);
    }

    createStatic(){
        let yAxis = this.createSVG("line", {
            x1: 30,
            x2: 30,
            y1: 215,
            y2: 5,
            stroke: "#666"
        });
        let xAxis = this.createSVG("line", {
            x1: 30,
            x2: 400,
            y1: 215,
            y2: 215,
            stroke: "#666"
        })
        let title = this.createSVG("text", {
            x: 180,
            y: 245,
            "font-size": 12
        });
        title.innerHTML = this.title;
        return {
            x:xAxis,
            y:yAxis,
            title:title
        }
    }


    createChart() {        
        let width = window.innerWidth / 2.5,
            height = window.innerWidth / 4;
        let svg = this.createSVG("svg", {
            width: width,
            height: height,
            viewBox: "0,0,400,250"
        });
        let staticValues = this.createStatic();

        svg.appendChild(staticValues.x);
        svg.appendChild(staticValues.y);
        svg.appendChild(staticValues.title);

        let max = Math.max(...this.data);
        for (let i = 1; i < 7; i++) {
            // y-labels
            let label = this.createSVG("text", {
                x: 25,
                y: 215 - i * 35 + 5,
                "font-size": 10,
                "text-anchor": "end"
            })
            label.textContent = i * Math.round(max / 5);

            // Auxiliary line
            let auxLine = this.createSVG("line", {
                x1: 31,
                x2: 400,
                y1: 215 - i * 35,
                y2: 215 - i * 35,
                stroke: "#a3a3a3"
            });

            svg.appendChild(label);
            svg.appendChild(auxLine);
        }
        let scaleFactor = 175 / max;
        let plotStart = 40;
        this.data.forEach((e,index) => {
            //create x-labels
            let text = this.createSVG("text", {
                x: plotStart+1,
                y: 225,
                "font-size":10,
            });
            text.textContent = `${index+1}月`
            //create bars
            let rect = this.createSVG("rect", {
                x: plotStart,
                y: 215 - (e - "") * scaleFactor,
                width: 20,
                height: (e - "") * scaleFactor
            });
            plotStart += 30;
            svg.appendChild(rect);
            svg.appendChild(text);
        });
        return svg;
    }

    createSVG(name, attributes) {
        let element = document.createElementNS("http://www.w3.org/2000/svg", name)
        for (let attribute in attributes) {
            element.setAttribute(attribute, attributes[attribute]);
        }
        return element;
    }

}