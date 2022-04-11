//everything is an object

//functions are objects
//functions(obs) can be returned from other functions
//functions(obs) can be passed as arguments

let sum = (a, ...args) => {
    let sum = 0
    for(let a of args)
    {
        sum += a
    }
    console.log(args instanceof Array)
    console.log("SUM:"+ sum )
}

//1. Arrow funs doesnt have the this keyword
//borrows the this from parent scope

let group = {
    title: "Our Group",
    students : ["John", "Jill", "Jimmy"],

    showList(){
        console.log(this)
        this.students.forEach(

            // function(student){
            //     // console.log(this)
            //     console.log(this.title+':'+student)
            // }

            (student)=>{
                console.log(this.title+':'+student)
            }
        )
    }
}

group.showList()

//2. cannot use with new (eg with the ctr)
//3. no arguments object
//3. no super