function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) 

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);


/* 
Basically what we did here is 
our aim is to use this function SetUsername to set the username in the current contenxt

we made another funciton
and since we thought objects inside the object share context, 
the function will be able to set the current context of the function createUser

however 
this is wrong
because 
the function SetUsername itself has a current context and it is not reflected back 
in the context of createUser
so when we called setUsername inside the function createUser, it is not called,even after we use ()

To fix this we use the .call funciton


but this still does not resolve the issue as when we called SetUsername,
it is in the current context stack and so when it gets deleted the username in current context is lost ie, is not reflected as the 
stack containing the setUsername funciton on top is popped(which makes the control go back to createUser)

For this issue we supply the this of createUser as an argument so instead of its own context,
setUsername uses the context provided aka of createUser
*/