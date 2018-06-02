class Linechart {
    constructor(data) {
        this.title = data[0] + ' - ' + data[1]; // array contains region, product, sale amount 
        this.data = data.splice(2);
        // this.data = [120, 110, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270];
        // this.title = "lalala"
    }
    createLineChart() {
        let factor = this.calScaleFactor();
        let canvas = this.createCanvas();
        let context = canvas.getContext("2d");
        let max = Math.max(...this.data);
        let scaleFactor = 175 / max;
        context.scale(factor, factor)
        context.width = 400;
        context.height = 250;
        this.createAxis(context);

        context.beginPath();
        context.font = "12px Arial";
        context.textAlign = "left";
        context.fillText(`${this.title}`, 180, 245);
        context.strokeStyle = 'black';
        context.stroke();


        for (let i = 1; i < 7; i++) {
            // y-labels
            context.beginPath();
            context.font = "10px Arial";
            context.textAlign = "right";
            context.fillText(`${i * Math.round(max / 5)}`, 25, 215 - 35 * i + 5);
            context.strokeStyle = 'black';
            context.stroke();
            // auxiliary line
            context.beginPath();
            context.strokeStyle = '#a3a3a3';
            context.moveTo(31, 215 - 35 * i);
            context.lineTo(400, 215 - 35 * i);
            context.stroke();
        }
        let plotStart = 40;
        // line and x-labels
        this.data.forEach((e, index) => {
            //create lines
            if (index !== 0) {
                context.lineTo(plotStart + 8, 215 - (e - "") * scaleFactor)
            }
            else {
                context.strokeStyle = 'blue';
                context.beginPath();
                context.moveTo(plotStart + 8, 215 - (e - "") * scaleFactor);
            }
            plotStart += 30;
            context.stroke();
        })
        plotStart = 40;
        this.data.forEach((e, index) => {
            //create x-labels
            context.beginPath();
            context.font = "10px Arial";
            context.textAlign = "left";
            context.fillText(`${index + 1}月`, plotStart + 1, 228);
            context.strokeStyle = 'black';
            context.stroke();

            let circle = new Path2D();
            circle.moveTo(plotStart, 215 - (e - "") * scaleFactor);
            circle.arc(plotStart + 8, 215 - (e - "") * scaleFactor, 5, 0, 2 * Math.PI);
            context.fill(circle);
            plotStart += 30;
        });
        return canvas;
    }
    createCanvas() {
        let canvas = document.createElement("canvas")
        canvas.setAttribute("height", window.innerWidth / 4);
        canvas.setAttribute("width", window.innerWidth / 2.5);
        return canvas;
    }

    calScaleFactor() {
        let width = window.innerWidth / 2.5;
        // our canvas W*H is 400*250
        // so the scale factor is real width / W 
        return width / 400;
    }
    createAxis(context) {
        // y-axis
        context.beginPath();
        context.strokeStyle = 'black'
        context.moveTo(30, 215);
        context.lineTo(30, 5);
        context.stroke();
        // x-axis
        context.beginPath();
        context.strokeStyle = 'black'
        context.moveTo(30, 215);
        context.lineTo(600, 215);
        context.stroke();
    }

}