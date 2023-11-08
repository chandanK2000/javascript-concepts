"use strict";
// function add() {
//   return "hello";
// }
// function add() {
//   return 10;
// }
// function add():string {
//     return 10;
//   } // this will throw the error because we define function type is string and return is number that's why
function add(a, b) {
    return a + b;
}
add(10, "hello"); // thise will also throw the error because we define function type is number and arguments sending is string
