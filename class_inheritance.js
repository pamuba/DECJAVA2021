// class A{
//     constructor(x){
//         this.a = x
//     }
// }
// class B extends A{
//     constructor(x,y){
//         super(x)
//         this.b = y
//     }
// }
// class C extends B{
//     constructor(x,y,z){
//         super(x,y)
//         this.c = z
//     }
//     dis(){
//         console.log(`A:${this.a} B:${this.b} C:${this.c}`)
//     }
// }

// ///Create an object of C
// let objC = new C(11, 22, 33)
// objC.dis()

class God{
    hi(){
        console.log("Hii from God")
    }
}

class Human extends God{
    constructor(name, age){
        super()
        this.name = name
        this.age = age
    }
    hello(){
        console.log(`Hello I am ${this.name} from the Human class`)
    }
}
console.log(Human)
let human = new Human("John", 22)
console.log(human)
human.hi()
human.hello()

class John extends Human{
    constructor(name, age, weight){
        super(name, age)
        this.weight = weight
    }
    hello(){
        super.hello()
        // console.log("Helo from JOHN")
    }
}

let jhn = new John("John Smith", 33, 55)
jhn.hello()