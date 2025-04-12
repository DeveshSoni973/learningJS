//they say that in js we follow object literal aka {} is LITERALLY an object
const user = {
  username: "Nemo",
  loginCount: 0,
  signedIn: true,
  //tried arrow function and failed. Arrow function does not have their own 'this' so we cannot use it here.
  //if we use arrow function, we will get UNDEFINED as the values :(
  getUserDetails: function () {
    return `This is information we have on ${this.username}, their login count is ${this.loginCount}`;
  },

  getCurrentContext: function () {
    // console.log(this);
    return this;
  },
};

console.log(user.username);
console.log(user.getUserDetails());
console.log(
  "This is the current user context of the user object\n\n\n",
  user.getCurrentContext()
);


function userGenerator(username, id){
    this.username=username
    this.id=id
    return this 
}


user1=userGenerator("nemo", 21)
console.log(user1)
/* this gives us username nemo and id 21 */
user2=userGenerator("Sarah", 22)

console.log(user1)
//even if we are doing consolelog of user1, we will get user2's credentials always
//this is because js did not make new context, both user1 and user2 made changes to the same context

//to resolve this, use new keyword, it gives new context


user1=new userGenerator("nemo", 21) //no need to add new here but good practive :))
console.log(user1)
/* this gives us username nemo and id 21 */
user2=new userGenerator("Sarah", 22)

console.log(user1)
