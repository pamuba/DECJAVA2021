// var divideSync = function(x,y){
//     if(y===0){
//         //throw an error safely by returning it
//         return new Error("Cant divide by Zero")
//     }
//     else{
//         return x/y
//     }
// }

// console.log(divideSync(33,11))
// console.log(divideSync(33,0))

//in other words, the exception is alreading handle in the function, so you need throw it otherwise it's already handled ( this is my guess)

// try{
//     c = divideSync(33,3)
//     if(c instanceof Error)
//       throw c
//     else
//       console.log(c) 
// }
// catch(e){
//     console.log("Insdie Catch")
//     console.log(e.message)
// }


///////////////////////////////////////////////////////////////////////
//callbacks for async code 
// var divide = function(x,y, next){
//     if(y===0)
//     {
//         next(new Error("Cant divide by zero"), null)
//     }
//     else{
//         next(null, x/y)
//     }
// }


// divide(9,3, function(err, result){
//     if(err){
//         console.log("Error=", err)
//     }
//     else{
//         console.log("Result=", result)
//     }
// })

// divide(9,0, function(err, result){
//     if(err){
//         console.log("Error=", err.message)
//     }
//     else{
//         console.log("Result=", result)
//     }
// })

/////////////////////////////////////////////////////////////////
//events for async code exceptions

var events = require('events')
var util = require('util')

var Divider = function(){
    events.EventEmitter.call(this)
}


util.inherits(Divider, events.EventEmitter)


Divider.prototype.divide = function(x,y){
    if(y===0)
    {
        let err = new Error("Cant divide by zero")
        this.emit("error", err)
    }
    else{
        this.emit("divide", x,y,x/y)
    }

    return this;
}


//create the divider ob and listen for error events
var divider = new Divider()

divider.on("error", function(err){
    console.log(err.message)
})
divider.on('divide', function(x,y,result){
    console.log(x+"/"+y+"="+result)
})

divider.divide(9,3)


//1. try catch(sync)
//2. callbacks
//3. events