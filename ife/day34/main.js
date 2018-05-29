const display_table = document.getElementById("table-wrapper");
let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}];


let dummy = {
    product: "手机",
    region: "华东",
    sale: [120, 110, 140, 160, 180, 185, 190, 210, 230, 245, 255, 230]
};


function clearCanvas(){
    let c=document.getElementById("canvas");  
    let cxt=c.getContext("2d");  
    c.height=c.height;  
}
function createLineTable(data) {
    clearCanvas();

    

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    let titleData = data[0] + ' - ' + data[1];
    console.dir(data);

    let monthlyResult = data.splice(2)
    console.dir(monthlyResult);
    // console.log("dsads");
    let count = Math.ceil(Math.max(...monthlyResult) / 50);
    console.log(count);
    ctx.beginPath();
    for(let i =0; i<count+1;i++){
        ctx.font = "10px Arial";
        ctx.textAlign = "right";
        ctx.fillText(`${50 * i}`, 60, 500 - 25 * i);
        ctx.strokeStyle = 'gray';
        ctx.moveTo(70,500-25*i);
        ctx.lineTo(660, 500 -25*i);
        ctx.stroke();
    }
    
    monthlyResult.forEach((e,index) => {
        var circle = new Path2D();
        ctx.font = "10px Arial";
        ctx.textAlign = "left";
        ctx.fillText(`${index+1}月`, 60*index+70, 520);
        if (index !== 0) {
            ctx.lineTo(50 * index+80, 500 - e/2);
        }
        else {
            ctx.strokeStyle = 'blue';
            ctx.beginPath();
            ctx.moveTo(50 * index+80, 500 - e/2);
        }
        circle.moveTo(50 * index+80, 500 - e/2);
        circle.arc(50 * index+80, 500 - e/2, 5, 0, 2 * Math.PI);
        ctx.fill(circle);
            ctx.stroke();
    });

}















//chart svg
const chart = document.getElementById("chart");
// var n = 60;
function createBarChart(data) {
    chart.innerHTML = "";
    let titleData = data[0] + ' - ' + data[1];
    let monthlyResult = data.splice(2)
    // console.log(monthlyResult);

    createAxis(monthlyResult);//data
    let n = 60;
    let title = document.createElementNS("http://www.w3.org/2000/svg", "text");
    title.textContent = titleData;
    title.setAttribute("x", "290")
    title.setAttribute("y", "340");
    chart.appendChild(title);

    monthlyResult.forEach((e, index) => {
        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        let label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        label.textContent = index + 1 + " 月";
        label.setAttribute("x", n - 5 + "");
        label.setAttribute("y", "320")

        height = (e - "");
        rect.setAttribute("y", 300 - height / 2);
        rect.setAttribute("width", "20");
        rect.setAttribute("height", height / 2);
        rect.setAttribute("x", n + '');
        n += 50;
        chart.appendChild(rect)
        chart.appendChild(label)
    });



}




function createAxis(data) {
    // every 50 - y-axis
    var y = Math.max(...data);
    let count = Math.ceil(y / 50);

    // 绘制Y轴
    let lineY = document.createElementNS("http://www.w3.org/2000/svg", "line");
    lineY.setAttribute("x1", "30")
    lineY.setAttribute("x2", "30")
    lineY.setAttribute("y1", 350 - 50)
    lineY.setAttribute("y2", 350 - 50 - count * 25)
    lineY.setAttribute("stroke", "#666")
    chart.appendChild(lineY);

    // 绘制 Y轴 上的数据单位 还有标记线
    for (let i = 0; i < count + 1; i++) {
        // 标记线
        let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", "30")
        line.setAttribute("x2", "680")
        line.setAttribute("y1", 350 - i * 25 - 50)
        line.setAttribute("y2", 350 - i * 25 - 50)
        line.setAttribute("stroke", "#b3b3b3")
        chart.appendChild(line);

        // label
        let label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        label.textContent = i * 50;
        label.setAttribute("x", 25);
        label.setAttribute("y", 300 - i * 25 + 5)
        label.setAttribute("text-anchor", "end")
        chart.appendChild(label);
    }
    // xAxis
    let lineX = document.createElementNS("http://www.w3.org/2000/svg", "line");
    lineX.setAttribute("x1", "30")
    lineX.setAttribute("x2", "640")
    lineX.setAttribute("y1", 300)
    lineX.setAttribute("y2", 300)
    lineX.setAttribute("stroke", "#666")
    chart.appendChild(lineX);
}


// ------------------------------------------------------------------


const checkall = document.querySelectorAll("input[value='全部']");
// console.log(checkall);

checkall.forEach(e => {
    e.addEventListener("change", e => {
        let checked = e.target.checked;
        if (checked) {
            document.querySelectorAll(`input[name="${e.target.name}"]`).forEach(e => {
                e.checked = true;
            });
        }
        e.target.checked = true;
        renderTable();
        let rows = document.querySelectorAll(".rows");
        if (rows.length !== 0) {
            // console.log(rows);
            rows.forEach(e => {
                console.log(rows);

                e.addEventListener("mouseover", e => {
                    console.log(e.currentTarget);
                    let arr = Array.from(e.currentTarget.children).map(e => e.innerText);
                    let arr2 = Array.from(e.currentTarget.children).map(e => e.innerText);
                    console.log("This is arr");
                    console.dir(arr);
                    createBarChart(arr);
                    createLineTable(arr2);
                });
            });
        }
    })
});

const checkboxes = document.querySelectorAll("input.single");
checkboxes.forEach(e => {
    e.addEventListener("change", el => {
        //判断是否全部已经被选中
        if ([...document.querySelectorAll(`input.single[name="${el.target.name}"]`)].every(e => {
            return e.checked === true;
        })) {
            document.querySelector(`input[name="${el.target.name}"]`).checked = true;
        }
        else {
            document.querySelector(`input[name="${el.target.name}"]`).checked = false;
        }
        //判断是否全部都没被选中
        if ([...document.querySelectorAll(`input.single[name="${el.target.name}"]`)].every(e => {
            return !e.checked === true;
        })) {
            el.target.checked = true;
        }
        renderTable();
        let rows = document.querySelectorAll(".rows");
        if (rows.length !== 0) {
            // console.log(rows);
            rows.forEach(e => {
                console.log(rows);

                e.addEventListener("mouseover", e => {
                    console.log(e.currentTarget);
                    let arr = Array.from(e.currentTarget.children).map(e => e.innerText);
                    let arr2 = Array.from(e.currentTarget.children).map(e => e.innerText);
                    console.log("This is arr");
                    console.dir(arr);
                    createBarChart(arr);
                    createLineTable(arr2);
                });
            });
        }
    });
});






function renderTable() {
    let region = [...document.querySelectorAll(`input[name="region"]`)].map(e => {
        return e.checked === true ? e.value : '';
    });
    let product = [...document.querySelectorAll(`input[name="product"]`)].map(e => {
        return e.checked === true ? e.value : '';
    });

    let { result, colspan, merge } = sortBy(filterData(sourceData, product, region));
    console.log(result);
    console.log(colspan);
    console.log(merge);
    document.getElementById("table-wrapper").innerHTML = "";
    document.getElementById("table-wrapper").appendChild(createTable(result, colspan, merge));


}

function filterData(data, product, region) {
    if (product.join("") === "") {
        return filterByRegion(data, region);
    }
    if (region.join("") === "") {
        return filterByProduct(data, product)
    }
    return filterByProduct(filterByRegion(data, region), product);
}

//filter by Product         
function filterByProduct(data, productList) {
    let result = [];
    productList.forEach(e => {
        result.push(data.filter(el => {
            return el.product === e;
        }));
    });
    result = [].concat(...result)
    return result;
}
// filter by region
function filterByRegion(data, regionList) {
    let result = [];
    regionList.forEach(e => {
        result.push(data.filter(el => {
            return el.region === e;
        }));
    });
    result = [].concat(...result)
    return result;
}

function sortBy(data) {
    let regionChecked = [...document.querySelectorAll("input[name='region']")].filter(e => e.checked === true).length === 0 ? 3 : [...document.querySelectorAll("input.single[name='region']")].filter(e => e.checked === true).length;
    let productChecked = [...document.querySelectorAll("input[name='product']")].filter(e => e.checked === true).length === 0 ? 3 : [...document.querySelectorAll("input.single[name='product']")].filter(e => e.checked === true).length;
    let merge;
    if (regionChecked > productChecked) {
        data.sort((a, b) => {
            return a.product > b.product;
        });
        merge = "product";
    }
    else {
        data.sort((a, b) => {
            return a.region > b.region;
        });
        merge = "region";
    }
    let colspan = regionChecked > productChecked ? regionChecked : productChecked;
    return {
        result: data,
        colspan: colspan,
        merge: merge
    }
}





//create table 
function createTable(result, colspan, merge) {
    let newTable = document.createElement('table');
    let htmls = "";
    if (merge === "region") {
        newTable.innerHTML = `
        <tr>
            <th>地区</th>
            <th>商品</th>
            <th>1月</th>
            <th>2月</th>
            <th>3月</th>
            <th>4月</th>
            <th>5月</th>
            <th>6月</th>
            <th>7月</th>
            <th>8月</th>
            <th>9月</th>
            <th>10月</th>
            <th>11月</th>
            <th>12月</th>
        </tr>`;
        result.forEach((e, index) => {
            let sale = e.sale;
            let rowContent = index % colspan === 0 ? `
        <tr class="rows">
            <td rowspan=${colspan}>${e.region}</td>
            <td>${e.product}</td>
            <td>${sale[0]}</td>
            <td>${sale[1]}</td>
            <td>${sale[2]}</td>
            <td>${sale[3]}</td>
            <td>${sale[4]}</td>
            <td>${sale[5]}</td>
            <td>${sale[6]}</td>
            <td>${sale[7]}</td>
            <td>${sale[8]}</td>
            <td>${sale[9]}</td>
            <td>${sale[10]}</td>
            <td>${sale[11]}</td>
        </tr>`: `
        <tr class="rows">
            <td style="display:none">${e.region}</td>
            <td>${e.product}</td>
            <td>${sale[0]}</td>
            <td>${sale[1]}</td>
            <td>${sale[2]}</td>
            <td>${sale[3]}</td>
            <td>${sale[4]}</td>
            <td>${sale[5]}</td>
            <td>${sale[6]}</td>
            <td>${sale[7]}</td>
            <td>${sale[8]}</td>
            <td>${sale[9]}</td>
            <td>${sale[10]}</td>
            <td>${sale[11]}</td>
        </tr>`;
            htmls += rowContent;
        });
    }
    else {
        newTable.innerHTML = `
        <tr>
            <th>商品</th>
            <th>地区</th>
            <th>1月</th>
            <th>2月</th>
            <th>3月</th>
            <th>4月</th>
            <th>5月</th>
            <th>6月</th>
            <th>7月</th>
            <th>8月</th>
            <th>9月</th>
            <th>10月</th>
            <th>11月</th>
            <th>12月</th>
        </tr>`;
        result.forEach((e, index) => {
            let sale = e.sale;
            let rowContent = index % colspan === 0 ? `
        <tr class="rows">
            <td rowspan=${colspan}>${e.product}</td>
            <td>${e.region}</td>
            <td>${sale[0]}</td>
            <td>${sale[1]}</td>
            <td>${sale[2]}</td>
            <td>${sale[3]}</td>
            <td>${sale[4]}</td>
            <td>${sale[5]}</td>
            <td>${sale[6]}</td>
            <td>${sale[7]}</td>
            <td>${sale[8]}</td>
            <td>${sale[9]}</td>
            <td>${sale[10]}</td>
            <td>${sale[11]}</td>
        </tr>`: `
        <tr class="rows">
            <td style="display:none">${e.product}</td>
            <td>${e.region}</td>
            <td>${sale[0]}</td>
            <td>${sale[1]}</td>
            <td>${sale[2]}</td>
            <td>${sale[3]}</td>
            <td>${sale[4]}</td>
            <td>${sale[5]}</td>
            <td>${sale[6]}</td>
            <td>${sale[7]}</td>
            <td>${sale[8]}</td>
            <td>${sale[9]}</td>
            <td>${sale[10]}</td>
            <td>${sale[11]}</td>
        </tr>`;
            htmls += rowContent;
            console.log(newTable);

        });
    }
    newTable.innerHTML = newTable.innerHTML + htmls;
    return newTable;
}