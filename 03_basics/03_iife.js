//Immediately Invoked Function (IIFE)
//Classic Functions
(
    //named IIFE
    function addTwoNumbers(x, y) {
    console.log(x + y);
})(2, 5);

//Arrow Functions

(() => {
    console.log("Database is connected");
})();