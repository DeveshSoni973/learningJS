let original = [[1, 2, 3], 4, 5];
let shallowCopy = [...original];  // Spread operator creates a shallow copy

shallowCopy[0][0] = 99;  // Modify nested array

console.log(original);      // [[99, 2, 3], 4, 5] (Original changes!)
console.log(shallowCopy);   // [[99, 2, 3], 4, 5] (Copied version)

//  in shallow copy both original and duplicate get changed


// in deep only one gets changed


let deepCopy = JSON.parse(JSON.stringify(original));

deepCopy[0][0] = 42;  // Modify nested array

console.log(original);   // [[99, 2, 3], 4, 5] (Original stays same)
console.log(deepCopy);   // [[42, 2, 3], 4, 5] (Deep copy modified)



let original1 = [[1, 2, 3], 4, 5];
let shallowCopy1 = [...original1];  // Shallow copy (copies top-level elements)

// Modifying a nested array
original1[0][0] = 99;

console.log(original1);    // [[99, 2, 3], 4, 5]  (Modified)
console.log(shallowCopy1); // [[99, 2, 3], 4, 5]  (Also modified!)


// Modifying a top-level element
original1[1] = 42;  

console.log(original1);    // [[99, 2, 3], 42, 5]  (Modified)
console.log(shallowCopy1); // [[99, 2, 3], 4, 5]  (Remains same!)
