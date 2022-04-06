function Student(){
    this.name = "John"
    this.grnder = "Male"
}
Student.prototype.age = 99
Student.prototype.dis = function(){
    console.log(name+" "+gender)
}
//new
//1. allocates the memory
//2. returns the add of the allocated memory

var stdObj1  = new Student()
// stdObj1.age = 20
console.log(stdObj1.age)

var stdObj2  = new Student()
console.log(stdObj2.age)