// ES6
class Staff{
    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    };

    completeTask(){
        //finish 
        console.log("finish 1 task!");
    }
}
// ES5
// function Staff(id, name, salary) {
//     this.id = id;
//     this.name = name;
//     this.salary = salary;
// }
// Staff.prototype.completeTask = function() {
//     //finish 
//     console.log("finish 1 task!");
// }