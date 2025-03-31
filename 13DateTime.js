// Date library methods demonstration

// Creating a new Date object
let date = new Date();
console.log(date); // Logs the full date object

// Converting the date to different string formats
console.log(date.toString()); // Converts date to a readable string format
console.log(date.toDateString()); // Returns only the date part
console.log(date.toTimeString()); // Returns only the time part
console.log(date.toUTCString()); // Converts to UTC format
console.log(date.toISOString()); // Returns ISO standard format (YYYY-MM-DDTHH:mm:ss.sssZ)
console.log(date.toLocaleString()); // Returns date and time in local format
console.log(date.toLocaleDateString()); // Returns date in local format
console.log(date.toLocaleTimeString()); // Returns time in local format

// Extracting specific date components
console.log(date.getFullYear()); // Gets the year
console.log(date.getMonth()); // Gets the month (0-11, where 0 = January)
console.log(date.getDate()); // Gets the day of the month (1-31)
console.log(date.getDay()); // Gets the day of the week (0 = Sunday, 6 = Saturday)
console.log(date.getHours()); // Gets the hour (0-23)
console.log(date.getMinutes()); // Gets the minutes (0-59)
console.log(date.getSeconds()); // Gets the seconds (0-59)
console.log(date.getMilliseconds()); // Gets the milliseconds (0-999)
console.log(date.getTime()); // Gets the timestamp (milliseconds since 1970)

// Setting specific date components
date.setFullYear(2025); // Sets the year to 2025
console.log(date.getFullYear()); // Logs updated year
date.setMonth(11); // Sets the month to December (11)
console.log(date.getMonth()); // Logs updated month
date.setDate(25); // Sets the day to 25
console.log(date.getDate()); // Logs updated day

date.setHours(10);
date.setMinutes(30);
date.setSeconds(45);
console.log(date.toString()); // Logs updated date and time

// Getting time differences
let futureDate = new Date("2025-12-31");
let timeDiff = futureDate.getTime() - date.getTime();
console.log(`Time difference in days: ${Math.floor(timeDiff / (1000 * 60 * 60 * 24))}`);
