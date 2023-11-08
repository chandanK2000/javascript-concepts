"use strict";
// let data:number| string =10; this is the union
// but the actual use is in the below example
// function combine(a:number,b:number){
//     return a+b;
// }
// console.log(combine(40,20));
function combine(a, b) {
    if (typeof a === "number" && typeof b === "string") {
        return a + b;
    }
    else {
        return a.toString() + " " + b.toString();
    }
}
console.log(combine(10, "mohan"));
console.log(combine("rohan", "mohan"));
console.log(combine("anwar", "mohan"));
