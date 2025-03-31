//two types of memories and Datatypes:
//primitive data type(stack-->copy of variable), non ptimitive data type (heap--->reference of variable)


let var1 ="Devesh"
let var2=var1
var2="Nemo"

console.log(var1, var2);
// Devesh Nemo

let user1={
    name:"Devesh",
    age:21
}

let user2=user1
user2.name="Nemo"

console.log(user1.name, user2.name);
// Nemo Nemo