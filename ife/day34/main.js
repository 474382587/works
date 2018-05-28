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
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
};
const chart = document.getElementById("chart");
var n =10;
dummy.sale.forEach(e=>{
    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    height = (e-"")*0.45;
    rect.setAttribute("y", 130 - height);
    rect.setAttribute("width", "10");
    // <rect x="120" y="0" width="100" height="100" rx="15" ry="15" />
    rect.setAttribute("height", height);
    rect.setAttribute("x", n+'');
    
    n += 20; 
    chart.appendChild(rect)
});



let title = document.createElementNS("http://www.w3.org/2000/svg","text");
title.innerHTML = "华东";
title.setAttribute("x","100")
title.setAttribute("y","152");
chart.appendChild(title);
console.dir(title);




function createBarChart(data) {
    
}



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
        <tr>
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
        <tr>
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
        <tr>
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
        <tr>
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