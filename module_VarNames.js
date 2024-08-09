//share
const name1 = "Susa"
const name2 = "johnny boi"
//dont share
const dontShare = "Super Secrete password, 3463423"


//why does this code run when I run app.js, I am exporting stuff form this file to app.js but the file itself should not run.

//the code would run, as when we require a file. That file is run, so whatever code we have in a require file that code runs. 
// console.log(module);

//so here we are exporting the variables name1 and name2, but because variables can also hold functions, we can do the same thing to share 
//functions? 
module.exports = {name1, name2}


module.exports.exampleVar = 5;
//this is another way to export variables, you are setting up another property within module exports (as that is an object) to be the variable
//we want to export 