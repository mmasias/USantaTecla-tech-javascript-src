const { Console } = require("./console");

const console = new Console();
const object = { a: 1, b: 2 };
for(let property in object){
  console.writeln(object[property]); // 1 / 2
}
console.writeln(Object.getOwnPropertyNames(object)); // a,b

Object.assign(object, { b: -2, c: -3 });
for(let property in object){
  console.writeln(object[property]); // 1 / -2 / -3 
}
console.writeln(Object.getOwnPropertyNames(object)); // a,b,c

let copy = {};
Object.assign(copy, object);
for(let property in copy){
  console.writeln(copy[property]); // 1 / -2 / -3 
}
console.writeln(Object.getOwnPropertyNames(copy)); // a,b,c

Object.defineProperty(copy, 'd', {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 'valor'
});
for(let property in copy){
  console.writeln(copy[property]); // 1 / -2 / -3 / valor 
}
console.writeln(Object.getOwnPropertyNames(copy)); // a,b,c,d

console.writeln(copy.toString()); // [object Object]
copy.toString = function() {
  let string = `{\n`;
  for(let property in this){
    string += `${property} = ${this[property]}\n`;
  }
  return `${string}}\n`;
}
console.writeln(copy.toString()); // {
 // d = valor
 // toString = function() {
 //   let string = `{\n`;
 //   for(let property in this){
 //     string += `${property} = ${this[property]}\n`;
 //   }
 //   return `${string}}\n`;
 // }
 // a = 1
 // b = -2
 // c = -3
 // }
