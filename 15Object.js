const obj1={
    name: "Nemo",
    age:19,
    email: "devthenemo760@hotmail.com",
    'full name': "Nemo Ei Shogun",
    'clan': 'Waifu'
}

console.log(obj1);
console.log(obj1.age);
console.log(obj1['age']); //this is useful when the key has blank spaces aka it cannot be variable name but string
console.log(obj1["full name"])
//basically when we do assignment without '', it is still string
console.log(obj1.clan);


obj1.age=20
console.log(obj1.age);

Object.freeze(obj1) //this means no changes allowed in object, it will remain as it is

obj1.age=22
console.log(obj1.age);



user1={
    name:"Nemo",
    age:"14",
    email:"devthenemo760@hotmail.com"
}


user1.greeting=function(){
    console.log(`Greetings ${this.name}`)
}

user1.greeting()
console.log(user1.greeting)
console.log(user1.greeting())
