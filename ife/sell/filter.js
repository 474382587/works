class Filter {
    constructor(data, params) {
        this.data = data;
        this.params = params;
    }

    filterAll() {
        let data, order;
        if (this.params.product.length < this.params.region.length) {
            order = {
                "product": this.params.region.length
            };
            data = this.filterByProduct(this.filterByRegion(this.data, this.params.region), this.params.product).sort((a, b) => {
                return a.product > b.product;
            });
        }
        else {
            order = {
                "region": this.params.product.length
            };
            data = this.filterByProduct(this.filterByRegion(this.data, this.params.region), this.params.product).sort((a, b) => {
                return a.region > b.region;
            });
        }
        return {
            order: order,
            data: data
        }
    }

    //filter by Product         
    filterByProduct(data, productList) {
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
    filterByRegion(data, regionList) {
        let result = [];
        regionList.forEach(e => {
            result.push(data.filter(el => {
                return el.region === e;
            }));
        });
        result = [].concat(...result)
        return result;
    }
}