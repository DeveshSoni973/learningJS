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

console.log(addtwo(5))

const add2=function(num){
    return num+2
}

console.log(add2(5))