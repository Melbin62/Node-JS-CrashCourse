//const name = 'Melbin'
//console.log(name,"This is name")
//
////function
//const kalki = (a,b) => {
//    return a+b
//}
//console.log(kalki(5,10),"This is the sum")

//Global object
//const timeoutclear = setTimeout(() => {
//    console.log("This  will run after 2 seconds")
//},2000)
//
//clearTimeout(timeoutclear)

//const b = setInterval(() => {
//    console.log("This will run every 3 seconds")
//},3000)
//
//clearInterval(b)

//console.log(__dirname,"This is the directory name")
//console.log(__filename,"This is the file name")

//const {rocky,bahubali} = require('./rockygold')
//console.log(rocky,bahubali,"This is the exported value from rockygold.js")

const {add,sub} = require('./calc')
console.log(add(5,10),sub(10,5),"This is the exported value from calc.js")