// function sum(a=1,b=2){
//     console.log(a)
//     console.log(b)
//     console.log("SUM:"+(a+b))
// }

// sum(11)
////////////////////////////////////////////////////////////
//args === Array
// function sum(a, ...args){
//     let sum = 0
//     for(let a of args)
//     {
//         sum += a
//     }
//     console.log(args instanceof Array)
//     console.log("SUM:"+ sum )
// }

// sum(1,2,3,4,5,10)
/////////////////////////////////////////////////
//arguments === array like ds
// function sum(){
//     let sum = 0
//     for(let a of arguments)
//     {
//         sum += a
//     }
//     console.log(arguments instanceof Array)
//     console.log("SUM:"+ sum )
// }

// sum(1,2,3,4,5,10)
///////////////////////////////////SPREAD//////////////////////////////////////////////
// arr = [11,2,33]
// arr1 = [1,2,3,44,11,45]

// arr3 = [...arr, ...arr1, 123]

// console.log(arr3)

// console.log(Math.max(...arr))

// let name = "John Wick"
// console.log(...name)

// a = 45;
// b = 99;

// [a,b] = [b,a]

// console.log(`a:${a} b:${b}`)


//Object