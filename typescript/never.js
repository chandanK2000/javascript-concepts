"use strict";
// function tryreturn(){
//     // return  true;
// }
// console.log(tryreturn());
function apierror(msg, code) {
    throw { message: msg, apicode: code };
}
console.log(apierror("server side error", 500));
