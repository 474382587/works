// ES6
class Cook extends Staff {
    constructor(id, name, salary) {
        super(id, name, salary);
    }
    completeTask(dish) {
        console.log("Cooking {"+dish.name+"} !");
    }
}
