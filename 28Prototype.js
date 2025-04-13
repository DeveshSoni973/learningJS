/* 
in js everything is object, and js does prototypical inheritance as in
if js does not find the thing in current object, it looks for parent's

*/


function multiplyBy5(num){
return num*5
}

multiplyBy5.power=2

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)




function createUser(username, score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`username:${this.username} score: ${this.score}:`);
    
}


const chai=new createUser('chai', 25) 
/* 
if we not use new here we will get error, this is because the new prototypical
properties we added, js does not know that we gotta add those too to the 
new object chai.
new keyword is responsible for doing that 
*/
const tea=createUser('tea', 250)

chai.printMe()



/*------------the real prototyping starts here------------------------- */


let myName='nemoTheCutie   '

console.log(myName.length); //15

console.log(myName.trim().length); // 12  trueLength


let hero=['batman', 'flash']

let heroPower={
    batman:'batman',
    flash:'superSpeed',

    getFlashPower: function(){
        console.log(`Flash power is ${this.flash}`)
    }
}

Object.prototype.devBhaiOP=function(){
    console.log('devesh is present in all objects');
    
}

heroPower.devBhaiOP()

hero.devBhaiOP()

Array.prototype.hello=function(){
    console.log('nemo loves raiden 💓');
    
}

hero.hello() //this is only shared by array and ones below it, not by the Object class itself. 


const User={
    name:'nemo',
    email:'waifu@raiden.inazuma'
}

const Teacher ={
    makeVideo:true,
}

const TeachingSupp={
    isAvailable:false,
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime:false,
    __proto__:TeachingSupp
}

Teacher.__proto__=User


//modern syntax
Object.setPrototypeOf(TeachingSupp, Teacher) //prototypical Inheritance :))


let anotherUsername='nemo   '
String.prototype.trueLength=function(){
    console.log(`${this}`) //this here is the current context, ie (here) the string

    console.log(`True length is: ${this.trim().length}`)
}


anotherUsername.trueLength()


'sarah    '.trueLength()