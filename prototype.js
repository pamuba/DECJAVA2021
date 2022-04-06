// function Student(){
//     this.name = "John"
//     this.grnder = "Male"
// }
// //__proto__
// Student.prototype.age = 99
// Student.prototype.dis = function(){
//     console.log(name+" "+gender)
// }
// //new
// //1. allocates the memory
// //2. returns the add of the allocated memory

// var stdObj1  = new Student()
// // stdObj1.age = 20
// console.log(stdObj1.age)

// var stdObj2  = new Student()
// console.log(stdObj2.age)

let dragon = {
    name : "Tanya", 
    fire : true,
    fight(){
        return 10
    },
    sing(){
        if(this.fire){
            return `I am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name : "Kiki",
    // fire : true,
    fight(){
        return 1
    }
}
//we can borrow the sing fn for the lizard object using bind
// const singLizard = dragon.sing.bind(lizard)
// console.log(singLizard())