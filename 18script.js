//commenting the whole codebase for this file. NodeJS cannot simulate web browser, as an outcome DOCUMENT remains undefined. Use Liveserver and manually test all code lines in browser console.

//when we use the code in browser, need the code to be commented as a whole else it will run on it's own and we will see only final codefile with the changes.

/*


// === Selecting Elements by ID ===
const title = document.getElementById("title");
console.log(title);

// Access properties
console.log(title.id);
console.log(title.className);

// Get and set attributes
console.log(title.getAttribute("class"));
title.setAttribute("class", "test");
title.setAttribute("class", "test heading");

// === Styling Elements ===
title.style.backgroundColor = "green";
title.style.padding = "15px";
title.style.borderRadius = "5px";

// === Working with Content ===
title.innerHTML += '<span style="display: none;">Hidden Text</span>';
console.log(title.textContent);
console.log(title.innerText);
console.log(title.innerHTML);
title.textContent = "Updated Learning on Chai aur Code";

// === Query Selectors ===
const firstH1 = document.querySelector("h1");
console.log(firstH1);

const titleById = document.querySelector("#title");
const headingByClass = document.querySelector(".heading");

const passwordInput = document.querySelector("input[type='password']");
console.log(passwordInput);

const firstLi = document.querySelector("ul").querySelector("li");
firstLi.style.backgroundColor = "green";
firstLi.innerText = "Five";

// === Selecting Multiple Elements ===
const allListItems = document.querySelectorAll("li");
console.log(allListItems);

allListItems.forEach(item => {
    item.style.backgroundColor = "green";
});

const listItemsByClass = document.getElementsByClassName("list-item");
console.log(listItemsByClass);

const convertedArray = Array.from(listItemsByClass);
convertedArray.forEach(item => {
    item.style.backgroundColor = "orange";
});

// === Practical Example: Manipulating Wikipedia ===
const allH2s = document.querySelectorAll("h2");
allH2s.forEach(h2 => {
    h2.style.backgroundColor = "green";
});

console.log(allH2s[0].innerText);


*/
