class Table {
    constructor(data) {
        this.order = data.order;
        this.data = data.data;
    }

    createTable() {
        let table = document.createElement("table");
        table.appendChild(this.createTableHead());
        this.createTableRows().forEach(e=>{
            table.appendChild(e);
        });

        return table;
    }

    createTableHead() {
        let tr = document.createElement("tr");
        if (this.order.product) {
            tr.innerHTML = `<th>产品</th><th>地区</th>`;
        }
        else {
            tr.innerHTML = `<th>地区</th><th>产品</th>`;
        }
        this.data[0].sale.forEach((e, index) => {
            tr.innerHTML += `<th>${index + 1}月</th>`
        });
        // console.log(tr);
        // console.log(this.createTableRows());
        
        return tr;
    }

    createTableRows() {
        let arr = [];
        let length = this.order.region || this.order.product;
        let first, second;
        if (this.order.region) {
            first = "region";
            second = "product";
        }
        else {
            first = "product";
            second = "region";
        }
        this.data.forEach((e, index) => {
            let tr = document.createElement("tr");
            if (index % length === 0) {
                tr.innerHTML = `<td rowspan=${length}>${e[first]}</td>
                                <td>${e[second]}</td>`
            }
            else {
                tr.innerHTML = `<td class="hide">${e[first]}</td>
                                <td>${e[second]}</td>`
            }
            tr.innerHTML += `<td>${e.sale[0]}</td>
                <td>${e.sale[1]}</td>
                <td>${e.sale[2]}</td>
                <td>${e.sale[3]}</td>
                <td>${e.sale[4]}</td>
                <td>${e.sale[5]}</td>
                <td>${e.sale[6]}</td>
                <td>${e.sale[7]}</td>
                <td>${e.sale[8]}</td>
                <td>${e.sale[9]}</td>
                <td>${e.sale[10]}</td>
                <td>${e.sale[11]}</td>`
            arr.push(tr);
        });
        console.log(arr);
        return arr;
    }





}