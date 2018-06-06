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
