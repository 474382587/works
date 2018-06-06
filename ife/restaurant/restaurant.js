// // ES5
// function Restaurant(cash,seats,staff){
//     this.cash = cash;
//     this.seats = seats;
//     this.staff = staff;
// }

// Restaurant.prototype.hire = function() {
//     // hire someone
//     console.log("Hiring!")
// };

// Restaurant.prototype.fire = function () {
//     // fire someone
//     console.log("Fired!")
// };

// ES6
class Restaurant{
    constructor(cash, seats, staff) {
        this.cash = cash;
        this.seats = seats;
        this.staff = staff;
    };
    hire(){
        // hire someone
        console.log("Hiring!")
    };
    fire() {
        // fire someone
        console.log("Fired!")
    };
}