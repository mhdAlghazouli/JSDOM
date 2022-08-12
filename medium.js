

const containerDiv = document.getElementById('container');
containerDiv.style.margin = 'auto';


// create a header div
const headerDiv = document.createElement("div");
headerDiv.style.backgroundColor = '#1E847C';
headerDiv.style.display = 'flex';
headerDiv.style.marginBottom = '25px';
headerDiv.style.flexDirection = 'col';
headerDiv.style.justifyContent = "space-around";
headerDiv.style.alignItems = 'center';
containerDiv.appendChild(headerDiv);
// add a h1 to the container
const mainH1 = document.createElement("h1");
mainH1.textContent = 'HighOnCoding';
mainH1.style.color = 'white';
headerDiv.appendChild(mainH1);
// add h2 to the container
const mainH2 = document.createElement("h2");
mainH2.textContent = 'Home';
mainH2.style.color = 'white';
headerDiv.appendChild(mainH2);
// add h3 to the container
const mainH3 = document.createElement("h3");
mainH3.textContent = 'category';
mainH3.style.color = 'white';
headerDiv.appendChild(mainH3);



// making first section
const firstSectionDiv = document.createElement("div");
containerDiv.appendChild(firstSectionDiv);
firstSectionDiv.style.backgroundColor = "gray";
firstSectionDiv.style.padding = '25px';
firstSectionDiv.style.margin = "auto";
firstSectionDiv.style.width = '90%';
// making h1 and add it to the first section div
const firstSectionDivH1 = document.createElement('h1');
firstSectionDivH1.textContent = 'Curse of the Current Reviews';
firstSectionDivH1.style.color = "#333";
firstSectionDiv.appendChild(firstSectionDivH1);
// making p and add it to the first section div
const firstSectionDivPara = document.createElement("p");
firstSectionDivPara.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quas deleniti ad. Sunt soluta unde a ratione. Perferendis deleniti ipsam recusandae, debitis consequuntur dicta suscipit aliquid voluptatibus unde, minima a?';
firstSectionDiv.appendChild(firstSectionDivPara);




// making second section div
const secondSectionDiv = document.createElement("div");
containerDiv.appendChild(secondSectionDiv);
secondSectionDiv.style.backgroundColor = "white";
secondSectionDiv.style.padding = '25px';
secondSectionDiv.style.margin = "auto";
secondSectionDiv.style.width = '90%';
// making h2 and add it to the second section
const secondSectionDivH2 = document.createElement("h2");
secondSectionDivH2.textContent = 'Hello WatchKit';
secondSectionDivH2.style.color = 'blue';
secondSectionDiv.appendChild(secondSectionDivH2);
// making p and add it to the second section
const secondSectionDivPara = document.createElement("p");
secondSectionDivPara.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quas deleniti ad. Sunt soluta unde a ratione. Perferendis deleniti ipsam recusandae, debitis consequuntur dicta suscipit aliquid voluptatibus unde, minima a?debitis consequuntur dicta suscipit aliquid voluptatibus unde, minima a?debitis consequuntur dicta suscipit aliquid voluptatibus unde, minima a?debitis consequuntur dicta suscipit aliquid voluptatibus unde, minima a?';
secondSectionDiv.appendChild(secondSectionDivPara);
// create ul and add it to the second section
const firstUl = document.createElement("ul");
firstUl.style.backgroundColor = 'orange';
firstUl.style.listStyle = 'none';
firstUl.style.display = 'flex';
firstUl.style.alignItems = "center";
firstUl.style.marginLeft = '0'
firstUl.style.height = '35px';
secondSectionDiv.appendChild(firstUl);
// created 2 li and add them to ul
const ulLi1 = document.createElement("li");
ulLi1.textContent = '12 comments';
ulLi1.style.color = 'white';
ulLi1.style.marginRight = '45px';
ulLi1.style.fontSize = '19px';
firstUl.appendChild(ulLi1);

const ulLi2 = document.createElement("li");
ulLi2.textContent = '124 likes';
ulLi2.style.color = 'white';
ulLi2.style.fontSize = '19px';
firstUl.appendChild(ulLi2);







//make third section div
const thirdSectionDiv = document.createElement("div");
containerDiv.appendChild(thirdSectionDiv);
thirdSectionDiv.style.backgroundColor = "white";
thirdSectionDiv.style.padding = '25px';
thirdSectionDiv.style.margin = "auto";
thirdSectionDiv.style.width = '90%';
// making h2 and add it to the second section
const thirdSectionDivH2 = document.createElement("h2");
thirdSectionDivH2.textContent = 'Introduction to Swift';
thirdSectionDivH2.style.color = 'blue';
thirdSectionDiv.appendChild(thirdSectionDivH2);
// making p and add it to the second section
const thirdSectionDivPara = document.createElement("p");
thirdSectionDivPara.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quas deleniti ad. Sunt soluta unde a ratione. Perferendis deleniti ipsam recusandae, debitis consequuntur dicta suscipit aliquid voluptatibus unde, minima a?debitis consequuntur dicta suscipit aliquid voluptatibus unde, minima a?debitis consequuntur dicta suscipit aliquid voluptatibus unde, minima a?debitis consequuntur dicta suscipit aliquid voluptatibus unde, minima a?';
thirdSectionDiv.appendChild(thirdSectionDivPara);
// create ul and add it to the second section
const secondUl = document.createElement("ul");
secondUl.style.backgroundColor = 'orange';
secondUl.style.listStyle = 'none';
secondUl.style.display = 'flex';
secondUl.style.alignItems = "center";
secondUl.style.marginLeft = '0'
secondUl.style.height = '35px';
thirdSectionDiv.appendChild(secondUl);
// created 2 li and add them to ul
const ulLi3 = document.createElement("li");
ulLi3.textContent = '15 comments';
ulLi3.style.color = 'white';
ulLi3.style.marginRight = '45px';
ulLi3.style.fontSize = '19px';
secondUl.appendChild(ulLi3);

const ulLi4 = document.createElement("li");
ulLi4.textContent = '45 likes';
ulLi4.style.color = 'white';
ulLi4.style.fontSize = '19px';
secondUl.appendChild(ulLi4); 





