// ES6
class Cook extends Staff {
    constructor(id, name, salary) {
        super(id, name, salary);
    }
    completeTask() {
        console.log("Cooking!");
    }
}

// ES5
// function Cook(id, name, salary) {
//     Staff.apply(this,arguments);
// }
// Cook.prototype.completeTask = function() {
//     console.log("Cooking!!");
// }