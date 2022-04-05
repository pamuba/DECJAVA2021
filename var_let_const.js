//Scoping rule
//var is scoped to the immediate function body - global vars
//let is scoped to the immediate context({}) - local vars

// function run(){
//     var foo = "Foo"
//     let bar = "Bar"
//     console.log(foo+" "+bar) 

//     {
//         moo = "Moo"
//         let baz = "Bazz"
//         console.log(moo+" "+baz+" "+ bar)
//     }

//     console.log(moo)
//     // console.log(baz)
// }
// run()
// console.log(moo)
///////////////////////////////////////////////////
// var funcs = []
// //3 functions
// for (var i=0;i<3;i++) {
//     funcs[i] = function(){
//         console.log("VALUE:"+i)
//     }
// }

// for (let j = 0; j < 3; j++) {
//     funcs[j]();    
// }
/////////////////////////////////////////////////

//every time increment it will store in memory with var, that makes i value stoe out side the for loop which leads to a result that i value will stored the last increment value

////////////////////////////////////////////////////

//HOISTING
// function run(){

//     // var foo;
//     // let foo;

//     console.log(foo)
//     let foo = "FOO"
//     console.log(foo)
// }
// run()

///////////////////////////////////////////////////

//REDECLERATION
var bar = 22
var bar = 99
console.log(bar)

// let foo = 23
// let foo = 98

const pi = 3.14
// pi = 3.1
console.log(pi)