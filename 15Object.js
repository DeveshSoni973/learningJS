const obj1 = {
    name: "Nemo",
    age: 19,
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


obj1.age = 20
console.log(obj1.age);

Object.freeze(obj1) //this means no changes allowed in object, it will remain as it is

obj1.age = 22
console.log(obj1.age);



user1 = {
    name: "Nemo",
    age: "14",
    email: "devthenemo760@hotmail.com"
}


user1.greeting = function () {
    console.log(`Greetings ${this.name}`)
}

user1.greeting()
console.log(user1.greeting)
console.log(user1.greeting())


//nesting in the objects-> ObjectWithInObject

new_user = {
    name: "Sarah",
    email: "navia@4peopledead.protectingher",
    fullname: {
        firstname: "Sarah",
        lastname: "Pookie",
    }
}

// console.log(new_user.fullname.firstname)
console.log(new_user?.fullname?.firstname); //this makes sure if the value does not exist we do not get error
console.log(new_user?.fullname)



//making objects concatinate into one another 
object1={
    1:'a',
    2:'b',
}

object2={
    3:'c',
    4:'d',
}

object3={
    5:'e',
    6:'f'
}

object4=Object.assign({}, object1, object2, object3) //this takes object1,2 and 3 and makes them into one single object {} aka fills the empty one
object5=Object.assign(object1, object2, object3) //fills additional objects in the object1
console.log(object4===object5) //false because object4 is a new reference while object5 is a reference to object1
console.log(object1) //due to object5, object1 is changed too, (SO DO NOT DO THIS, we preder the object4 way)

// best way is spreaing them :))
object6={...object1, ...object2, ...object3}
console.log(object6); //tho here the object1 is already concatinated, it works and will but this is a tutorial error as I would have to reinitialize object1 and me lazy



console.log(Object.keys(new_user))
console.log(Object.values(new_user))
console.log(Object.entries(new_user))

// object destructuring

genshin={
    bestBoi:"xiao",
    mostHandsome:"Ayato",
    mostPowerful:"Neuvillette"
}

const {bestBoi}=genshin //this is general destructure , now the bestBoi can be accessed outside the object
console.log(bestBoi)

const {bestBoi:shortestBoi}=genshin //this syntax means get the bestBoi attribute out of object Genshin, and assign it to shortestBoi variable
console.log(shortestBoi);