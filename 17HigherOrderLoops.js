const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

const objArr = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
];

for (const obj of objArr) {
  // console.log(obj.name);
}

//more like python lmao
for (const { name, age } of objArr) {
  // console.log(name, age);
}

// Create a new map
const myMap = new Map();

// Add key-value pairs
myMap.set("name", "Alice");
myMap.set(42, "The Answer");
myMap.set({ key: "obj" }, "Object Value");

// Get a value
// console.log(myMap.get('name')); // Alice

// Check if a key exists
// console.log(myMap.has(42)); // true

// Get size
// console.log(myMap.size); // 3

// Delete a key
myMap.delete(42);

// Iterate through the map
for (const [key, value] of myMap) {
  //   console.log(key, value);
}

trial = {
  1: "one",
  2: "two",
};

console.log(trial);

// IN PLAIN OBJECTS in js the keys are all converted to strings. So basically 1 and "1" are same
//to avoid this, use map



//in similar fashion, we cannot directly do the key, item iteration in objects, BUT WE CAN DO IT IN MAPS

forObject={
    js:"javascript",
    py:"python",
    cpp:"C++"
}

// for (const object of forObject) {
//     console.log(object);
    
// } THROWS ERROR


// we wil use for in

for (const object in forObject) {
    console.log(object);
    //object here is actually KEYS
} 

// for...in → use for objects (keys), for...of → use for arrays, maps, sets (values or [key, value])







const arr1 = [1, 2, 3];
// foreach is used when we need to make a new function call on each element 
arr1.forEach(function(item){
    console.log(item*2)
})

//now didn't we learn to shorten the function call? Lets do that
//using arrow function
arr1.forEach((item)=>{
    console.log(item*2)
})


//using inline
arr1.forEach((item)=>console.log(item*2))



//another benefit is that using foreach we can use function on elements even if function is defined beforehand

const newFun=(item)=>console.log(item**3) //defining function
arr1.forEach(newFun) //I am not calling the funciton, rather passing function reference


arr1.forEach((item, index, arr)=>console.log(item*2, index, arr)) //item, index, arr is standard, u can name them anything, but they are always element, element_index, complete_array


const coding=[
    {
        name:'javascript',
        filetype:'js',
    },
    {
        name:'java',
        filetype:'java',
    },
    {
        name:'python',
        filetype:'py',
    },
]

coding.forEach((item)=>{
    console.log(item.name, item.filetype)
})


// now if i want to return it/
hyphonCoding=coding.forEach((item)=>{
    return `${item.name}-${item.filetype}`
})

console.log(hyphonCoding); //this will not work because forEach never returns values



const nums=[1,2,3,4,5,6,7]

console.log(nums.filter((num)=> num>4))