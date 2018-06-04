// ES6
class Waiter extends Staff{
    constructor(id, name, salary){
        super(id, name, salary);
    }
    completeTask(params){
        if (Array.isArray(params)){
            console.log("recording");
        }
        else{
            console.log("Serving");
        }
    }
}

// ES5
// function Waiter(id, name, salary) {
//     Staff.apply(this,arguments);
//     this.id = id;
//     this.name = name;
//     this.salary = salary;
// }
// Waiter.prototype.completeTask = function(params) {
//     if (Array.isArray(params)) {
//         console.log("recording!");
//     }
//     else {
//         console.log("Serving!");
//     }
// }
