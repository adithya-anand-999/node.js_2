//modules allow you to split your code among different files


const a = require('./module_VarNames');

console.log(a.name1);
console.log(a.exampleVar);



const sayHi = require('./modules_function');



sayHi("Adhi")
sayHi(a.name1)
sayHi(a.name2)

//the invokation and the def of function should be in separate files 