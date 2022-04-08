function outer(a,b){
    let outerA = 99;

    return function inner(){
        var c = 99;
        console.log(outerA)
        console.log(a)
        console.log(b)
        function innermost(){
            console.log(outerA)
            console.log(a)
            console.log(b)
            console.log(c)
        }
        innermost()
    }
    // inner()
}
var inner = outer(11,22)
setTimeout(
    ()=>{inner()}, 2000
)