//they say that in js we follow object literal aka {} is LITERALLY an object
const user={
    username:"Nemo",
    loginCount:0,
    signedIn:true,

    getUserDetails: ()=>{
        return `This is information we have on ${this.username}, their login count is ${this.loginCount}`
    }
}

console.log(user.username);
