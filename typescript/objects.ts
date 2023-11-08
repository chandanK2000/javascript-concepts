const person: { name: string; age: number; email: string } = {
  name: "chandan kumar",
  age: 23,
  email: "chandan@gmail.com",
};

const users:objtype= {
  name: "raj kumar",
  age: 27,
  email: "mohit@gmail.com",
  height:"5 feet"

};
// console.log(person.name);
console.log(person.name);
console.log(users.name);


//note:- here we are using lots of objects and same type are repeating again and again so it looking odd so to overcome this problem we can define a type outside of the objects in this file only or some other file and import it in the current file and use where ever it is required that is mentioned below:

type objtype= { name: string; age: number; email: string,height:string } ;

