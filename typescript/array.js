"use strict";
var arr = ["apple", "mango", "litchi", "banana", "orange", "pomegranate"];
//arr[2]=123; //it will throw the error because of we define array in the string format and we are trying to insert number
arr.push("hello"); //it will not throw the error because we took string type
// let random:[string,number,boolean,string]=["chanan",23,true,"mohit"];
// let random:any=["chanan",23,true,"mohit"];
var random = ["chanan", 23, true, "mohit"];
console.warn(arr);
//
//note: in this condition we have to define types may way first of all we can define one by one in the random array.
// or do not declare  type
// or declare type any
