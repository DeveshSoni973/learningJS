function greetings(){
    console.log("Hello")
}

function specificGreet(name)//paremeters
{ 
    if(!name){
        console.log("Hellowww person, kindly next time tell your name")
        return
    }
    console.log(`Hello ${name}`)
}


specificGreet("limbo")//argument
specificGreet()

//we can also assign default names if no name passed
function newSpecialGreet(name="Socks"){
    console.log(`Hello ${name}`)
}
//however this means the !name if conditional would never work
//lol this is done to remove that tho, lmao

newSpecialGreet()
newSpecialGreet("Nemo")



//OBJETS in function
///normally when we for example pass an array inside a argument, instead of variable, only first element is returned

function getCartItems(cart){
    return cart
}

console.log(getCartItems("apple", "orange")); //apple



function newGetCartItems(...cart){
    return cart
}

console.log(newGetCartItems("apple", "orange")); //apple, orange
/*

// why var is not used
if (true){
    var VarVariable=30
    let letVariable=40
}
console.log(VarVariable, letVariable) //varVariable is accessible letVariable is not

*/

let a=40
console.log(a);//40

if (true){
    let a=60
    console.log(55);
}

console.log(a);//40


if (true){
    const username="nemo"
    if (username=="nemo"){
        const website="utube"
        console.log(username+website);
    }
    //console.log(website); //non accessible
}
//console.log(username);//not accessible

user={
    username:"Nemo"
}

if (user.username=="Nemo"){
    user.website="utube"
}
console.log(user);



// EXPRESSIONS

function addtwo(num){
    return num+2
}

console.log(addtwo(5));

const add2 = function(num){
    return num+2;
}

console.log(add2(5));

// ARROW FUNCTIONS

const addThree = (num) => num + 3;
console.log(addThree(5)); // 8

const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12

const greet = () => console.log("Hello");
greet();

// THIS SCOPE

// 1. Global Scope
console.log(this); 
// Browser: Logs `Window`
// Node.js: Logs `{}` (empty object in ES module, `global` in CommonJS)

// 2. Inside a Regular Function
function regularFunction() {
    console.log(this);
}
regularFunction();
// Browser: Logs `Window` (or `undefined` in strict mode)
// Node.js: Logs `global` (or `undefined` in strict mode)

// 3. Inside an Arrow Function
const arrowFunction = () => {
    console.log(this);
};
arrowFunction();
// Always logs `Window` in browser or `{}` in Node.js (inherits `this` from surrounding scope)

// 4. Inside an Object Method (Regular Function)
const user = {
    name: "Nemo",
    showThis: function() {
        console.log(this);
    }
};
user.showThis(); 
// Logs the `user` object because `this` refers to the object calling the method

// 5. Inside an Object Method (Arrow Function)
const userArrow = {
    name: "Nemo",
    showThis: () => {
        console.log(this);
    }
};
userArrow.showThis(); 
// Logs `Window` (or `{}` in Node.js) because arrow functions don’t have their own `this`, they inherit from the surrounding scope

// 6. Inside a Constructor Function
function Person(name) {
    this.name = name;
    console.log(this);
}
const p = new Person("Xiao");
// Logs the new `Person` object

// 7. Inside an Event Listener
document.body.addEventListener("click", function() {
    console.log(this);
});
// Logs the element that was clicked (because `this` refers to the event target)
