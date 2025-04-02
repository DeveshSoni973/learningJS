// Starting array
const arr = [1, 2, 3, 4];

// 1. Accessing Elements
console.log("Accessing arr[0]:", arr[0]); // 1

// 2. Length
console.log("Length:", arr.length); // 4

// 3. push()
arr.push(5);
console.log("After push(5):", arr); // [1, 2, 3, 4, 5]

// 4. pop()
console.log("Popped:", arr.pop()); // 5
console.log("After pop():", arr); // [1, 2, 3, 4]

// 5. unshift()
arr.unshift(0);
console.log("After unshift(0):", arr); // [0, 1, 2, 3, 4]

// 6. shift()
console.log("Shifted:", arr.shift()); // 0
console.log("After shift():", arr); // [1, 2, 3, 4]

// 7. concat()
const newArr = arr.concat([5, 6]);
console.log("After concat([5, 6]):", newArr); // [1, 2, 3, 4, 5, 6]

// 8. slice()
console.log("Slice(1, 3):", arr.slice(1, 3)); // [2, 3]

// 9. splice()
arr.splice(1, 1, 9);
console.log("After splice(1, 1, 9):", arr); // [1, 9, 3, 4]

// 10. forEach()
console.log("forEach (x2):");
arr.forEach(num => console.log(num * 2)); // 2, 18, 6, 8

// 11. map()
const doubled = arr.map(num => num * 2); //
console.log("Map (x2):", doubled); // [2, 18, 6, 8]

// 12. filter()
const evens = arr.filter(num => num % 2 === 0);//num is not declared so num=>num%2==0 means checkin for each element num
console.log(arr, "Filter (evens):", evens); // []

// 13. reduce()
const sum = arr.reduce((acc, num) => acc + num, 0);
console.log("Reduce (sum):", sum); // 17

// 14. find()
console.log("Find (> 2):", arr.find(num => num > 2)); // 9

// 15. findIndex()
console.log("FindIndex (> 2):", arr.findIndex(num => num > 2)); // 1

// 16. includes()
console.log("Includes (3):", arr.includes(3)); // true

//not all of these are mandated to learn js, main part is understanding E7
