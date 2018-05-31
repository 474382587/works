class Table {
    constructor(data) {
        this.order = data.order;
        this.data = data.data;
    }


    convertDataToArray() {
        //
        console.dir(this.data);//array of 6
        
        
        


    }

    createTable() {
        let table = document.createElement("table");

    }

    createTableHead() {
        let tr = document.createElement("tr");
        if (this.order.product) {
            tr.innerHTML = `<th></th>`
        }
        else {
            console.log("region");
        }
    }

    createTableRows() {

    }





}