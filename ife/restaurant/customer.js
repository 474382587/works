// ES6
class Customer {
    constructor() {

    }
    
    order(menu) {
        let ordered = menu[Math.floor(Math.random() * 1456464654%10)].name;
        console.log("I'd like to order: " + ordered)
        return [ordered];
    }

    eat() {
        console.log("Eat");
        console.log("Good meal! Bye!");
        
    }

}



