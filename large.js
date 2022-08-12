const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ipsam odio dolorem ipsum blanditiis? Saepe laboriosam tempora, a voluptatum repellat dolore. Ut unde dolore laudantium, exercitationem recusandae labore nobis quidem voluptates deserunt";

createContainerDiv();

function createContainerDiv () {
  const containerDiv = document.getElementById("root");
  containerDiv.appendChild(navbarContainer());
  containerDiv.appendChild(mainContent());
  containerDiv.appendChild(lastSectionDiv());
  return containerDiv;
}

// create navbar

function navbarContainer () {
  const navbarDiv = document.createElement("div");
  navbarDiv.className = 'navbar-container';
  navbarDiv.appendChild(navbarLogo());
  navbarDiv.appendChild(navbarLinks());
  navbarDiv.appendChild(navbarLinks2());
  return navbarDiv;
}

function navbarLogo () {
  const logo = document.createElement("h1");
  logo.className = 'logo';
  logo.textContent = 'Moe Alghazouli';
  return logo;
}

function navbarLinks() {
  const navbarLi = document.createElement('a');
  navbarLi.className = "navbar-links";
  navbarLi.href = "#"
  navbarLi.textContent = "Home";
  return navbarLi;
}

function navbarLinks2() {
  const navbarLi2 = document.createElement('a');
  navbarLi2.className = "navbar-links";
  navbarLi2.href = "#"
  navbarLi2.textContent = "about";
  return navbarLi2;
};


// start content
function mainContent () {
  const mainContentDiv = document.createElement("div");
  mainContentDiv.className = 'main-content-div';
  mainContentDiv.appendChild(mainImageDiv());
  mainContentDiv.appendChild(mainParagraphDiv());
  return mainContentDiv;
}

function mainImageDiv () {
  const catImageDiv = document.createElement("div");
  catImageDiv.className = 'cat-image-div';
  catImageDiv.appendChild(catImage());
  return catImageDiv;
}

function catImage () {
  const catImage = document.createElement("img");
  catImage.className = 'cat-image';
  catImage.src = 'https://placekitten.com/400/300'
  return catImage;
};

function mainParagraphDiv () {
  const mainPH1Div = document.createElement('div');
  mainPH1Div.className = 'main-p-h1-div';
  mainPH1Div.appendChild(mainH1());
  mainPH1Div.appendChild(mainP());
  return mainPH1Div;
};

function mainH1 () {
  const mainH1 = document.createElement('h1');
  mainH1.textContent = "About Me";
  return mainH1;
};

function mainP () {
  const mainP = document.createElement("p");
  mainP.textContent = text;
  return mainP
}

// start last section
function lastSectionDiv () {
  const lastBigDiv = document.createElement("div");
  lastBigDiv.className = 'last-big-div';
  lastBigDiv.appendChild(divUl1());
  lastBigDiv.appendChild(divUl2());
  return lastBigDiv;
};

function divUl1 () {
  const ul1 = document.createElement("ul");
  ul1.className = 'ul-1'
  ul1.textContent = 'DisLikes';
  ul1.appendChild(ul1Li1());
  ul1.appendChild(ul1Li2());
  return ul1;
};

function ul1Li1 () {
  const li1 = document.createElement("li");
  li1.textContent = "swimming";
  return li1;
}

function ul1Li2 () {
  const li2 = document.createElement("li");
  li2.textContent = "running";
  return li2;
}

function divUl2 () {
  const ul2 = document.createElement("ul");
  ul2.className = 'ul-2'
  ul2.textContent = 'Likes';
  ul2.appendChild(ul2Li1());
  ul2.appendChild(ul2Li2());
  return ul2;
};

function ul2Li1 () {
  const li3 = document.createElement("li");
  li3.textContent = "soccer";
  return li3;
}

function ul2Li2 () {
  const li4 = document.createElement("li");
  li4.textContent = "tennis";
  return li4;
}