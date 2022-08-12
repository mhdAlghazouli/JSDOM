// Select the h1 tag and set "Toppings" as the text of the heading.
const theHeading = document.getElementById(`heading`);
theHeading.textContent = `Toppings`;
// Select the list item 'burger'. Add a class of 'list-item'.
const liItemBurger = document.getElementById('burger');
liItemBurger.className = 'list-item';
// Create a new li element and append it to the list.
const newLi = document.createElement("li");

const theUl = document.getElementById('list');

theUl.appendChild(newLi);
