const promiseQuery = new Promise(function (resolve, reject) {
  //do async tasks,
  // DB calls ,Cryptography etc
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseQuery.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  //do async tasks,
  // DB calls ,Cryptography etc
  setTimeout(function () {
    console.log("Async task 2 is complete");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise number 2 completed");
});

/* 
//with arrow functions

new Promise((resolve, reject)=>{
    //do async tasks, 
    // DB calls ,Cryptography etc
    setTimeout(()=>{
        console.log("Async task 2 is complete")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Promise number 2 completed")
})



*/

const promise_3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Nemo", nickname: "Pookie" });
  }, 1000);
});

promise_3.then(function (user) {
  console.log(user);
});

const promise_4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Sarah", nickname: "Patootie" });
    } else {
      reject("Error: something went wrong");
    }
  }, 1000);
});

promise_4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() =>
    console.log("the promise is fullfilled aka either Resolved or Fulfilled")
  );

const promise_5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Rust", nickname: "ironEater" });
    } else {
      reject("Error: something went wrong");
    }
  }, 1000);
});

async function consumePromise_5() {
  try {
    const response = await promise_5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise_5(); //calling the function to consume the promise

/*if we do not have any error, this will work fine, 
but unlike then() in the promise, the await does not handle errors naturally, ie
even if I gave the error a separate rejection area, it needs to be handled in the 
catch block
WE NEED TO WRAP IT IN TRY CATCH
*/

console.log("DEVESH HERE");
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json(); //Need to add await here because conversion to Json from string takes lots of time and this means the program does not wait for it.
    // console.log(data);
    console.log("with function call");
  } catch (error) {
    console.log(error);
  }
}
getAllUsers();

/*
async await is just a better syntax for promises, instead of then and chaining

async/await is just syntactic sugar on top of Promises.
It doesn't introduce new functionality — it just makes the code look cleaner, 
more readable, and more like synchronous code, while still being async under the hood.
*/

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data)/
    console.log("with then");
  })
  .catch((error) => console.log(error));

//here it seems then is better than async await coz the implementation is of small logic
//but for longer logics it is harder, so use async await

//we can call the async await with iffe too :))
(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    //   console.log(data);
    console.log("with iffe");
  } catch (error) {
    console.error("Something went wrong:", error);
  }
})();


/*
the with function and with iffe ran coz they are not in an await loop only async, as in console doesnt need time so it executes instantaneously
what takes time is response which is not put in await

secondly
the one with THEN is in resolve aka executed at end of promises once they are completed
so it takes time and is executed last as it waits for response


*/


/*
A benefit of async await over promises and THEN comes from this very fact that if we use
async await we can wrtie both sync and async code in it
but in promises with then, we cannot because even if we do, they will execute at the end, thus taking more time
So one should use promise-then only when we do asynconous coding
*/

