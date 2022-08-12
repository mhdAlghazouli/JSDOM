// Select the h1 tag and set "Toppings" as the text of the heading.
function theHeading (){
  const theHeading = document.getElementById(`heading`);
  theHeading.textContent = `Toppings`;
};
theHeading()
// Select the list item 'burger'. Add a class of 'list-item'.
function liItemBurger () {
  const liItemBurger = document.getElementById('burger');
  liItemBurger.className = 'list-item';
}
liItemBurger();
// Create a new li element and append it to the list.
function createNewLi () {

  const newLi = document.createElement("li");
  
  const theUl = document.getElementById('list');
  
  theUl.appendChild(newLi);
};
createNewLi();
