const add = function add() {
  console.log(2 + 2);
};

const subtract = function subtract() {
  console.log(4 - 2);
};

//! Step 4 -- First off, you dont need to declare these functions as constants, because you define them with add and subtract. These functions work just fine, however the instructions said to make
//! the functions accept any 2 numbers as paramaters and then return the result of addition or subtraction
//! Here, you made the functions return (2+2) and (4-2) specifically, but we want to be able to pass any numbers when we call the function and then get the result. So when we call the functions
//! as follows: add(4,3) and subtract(6,3) the functions should return 7 and 3 respectively. Here is the correct way to write these functions:

/*

function add(x, y) {
    return (x + y);
}

function subtract(x, y) {
    return (x - y);
}

*/

//! By writing the functions this way, when we call add(4,3), the 4 and 3 are being passed in as paramaters (x, y).

module.exports = { add, subtract, name: "audie" };

console.log(module.exports);

//! Good job on your export object.
