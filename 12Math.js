// Creating a Number object
let num1 = new Number(300);
console.log(num1); // Logs the Number object

// Converting the number to a string
let strNum = num1.toString();
console.log(strNum); // "300"

// String properties and methods
console.log(strNum.length); // Length of the string "300" (3)
console.log(strNum.toUpperCase()); // Not applicable, remains "300"
console.log(strNum.toLowerCase()); // Not applicable, remains "300"

// Finding character positions
console.log(strNum.indexOf('0')); // First occurrence of '0' (index 1)
console.log(strNum.lastIndexOf('0')); // Last occurrence of '0' (index 2)
console.log(strNum.charAt(2)); // Character at index 2 ('0')
console.log(strNum.charCodeAt(2)); // ASCII code of '0' (48)

// String manipulation methods
console.log(strNum.split('0')); // Splitting at '0' -> [ '3', '', '' ]
console.log(strNum.replace('0','9')); // Replaces first '0' -> "390"
console.log(strNum.includes('0')); // Checks if '0' exists (true)
console.log(strNum.startsWith('3')); // Checks if starts with '3' (true)
console.log(strNum.endsWith('0')); // Checks if ends with '0' (true)

// Searching methods
console.log(strNum.search('0')); // Finds first '0' at index 1
console.log(strNum.match(/0/g)); // Matches all '0's -> [ '0', '0' ]

// String repetition
console.log(strNum.repeat(3)); // "300300300"

// Concatenation
console.log(strNum.concat('0')); // "3000"

// Extracting substrings
console.log(strNum.slice(0,3)); // "300"
console.log(strNum.substring(0,3)); // "300"
console.log(strNum.substr(0,3)); // "300" (deprecated but works)

// Trimming spaces (no spaces here, but works generally)
console.log(strNum.trim()); // "300"
console.log(strNum.trimStart()); // "300"
console.log(strNum.trimEnd()); // "300"

// Padding methods
console.log(strNum.padStart(10,'0')); // "0000000300"
console.log(strNum.padEnd(10,'0')); // "3000000000"




//-------MATH LIBRARY IN JAVASCRIPT----------------

// Math library methods demonstration

// Basic math functions
console.log(Math.abs(-10)); // Absolute value (10)
console.log(Math.ceil(4.3)); // Round up (5)
console.log(Math.floor(4.9)); // Round down (4)
console.log(Math.round(4.5)); // Round to nearest integer (5)
console.log(Math.trunc(4.9)); // Remove decimal part (4)

// Power and roots
console.log(Math.pow(2, 3)); // 2^3 = 8
console.log(Math.sqrt(16)); // Square root of 16 (4)
console.log(Math.cbrt(27)); // Cube root of 27 (3)
console.log(Math.exp(1)); // e^1 (Euler's number ~2.718)
console.log(Math.log(10)); // Natural logarithm of 10
console.log(Math.log10(100)); // Base-10 logarithm of 100 (2)
console.log(Math.log2(8)); // Base-2 logarithm of 8 (3)

// Trigonometric functions (radians)
console.log(Math.sin(Math.PI / 2)); // sin(90 degrees) (1)
console.log(Math.cos(Math.PI)); // cos(180 degrees) (-1)
console.log(Math.tan(Math.PI / 4)); // tan(45 degrees) (1)
console.log(Math.asin(1)); // arcsin(1) (PI/2)
console.log(Math.acos(0)); // arccos(0) (PI/2)
console.log(Math.atan(1)); // arctan(1) (PI/4)

// Random number generation
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.floor(Math.random() * 100) + 1); // Random integer between 1 and 100

// Min and Max functions
console.log(Math.min(3, 5, 1, 8, 2)); // Minimum value (1)
console.log(Math.max(3, 5, 1, 8, 2)); // Maximum value (8)

// Constants
console.log(Math.PI); // π (3.141592653589793)
console.log(Math.E); // Euler's number (2.718)
console.log(Math.LN2); // Natural log of 2
console.log(Math.LN10); // Natural log of 10
console.log(Math.SQRT2); // Square root of 2