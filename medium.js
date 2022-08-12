createContainerDiv();

// create main function 
function createContainerDiv () { 
  var containerDiv = document.getElementById('container');
  containerDiv.className = 'container-div';
  containerDiv.appendChild(createHeaderDiv());
  containerDiv.appendChild(createFirstSection());
  containerDiv.appendChild(createSecondSection());
  containerDiv.appendChild(createThirdSection());
};

// create header function
function createHeaderDiv() {
  var headerDiv = document.createElement("div");
  headerDiv.className = 'header-div-container';
  headerDiv.appendChild(createMainH1());
  headerDiv.appendChild(createMainH2());
  headerDiv.appendChild(createMainH3());
  return headerDiv
  };

  function createMainH1 () {
    var mainH1 = document.createElement("h1");
    mainH1.className = 'main-h1'
    mainH1.textContent = 'HighOnCoding';
    return mainH1;
  };

  function createMainH2 () {
    var mainH2 = document.createElement("h2");
    mainH2.className = "main-h2";
    mainH2.textContent = 'Home';
    return mainH2
  };

  function createMainH3 () {
    var mainH3 = document.createElement("h3");
    mainH3.className = "main-h3";
    mainH3.textContent = 'category';
    return mainH3;
  };

// create first section 
  function createFirstSection () {
    var firstSectionDiv = document.createElement("div");
    firstSectionDiv.className = 'first-section';
    firstSectionDiv.appendChild(createFirstSectionH1());
    firstSectionDiv.appendChild(createFirstSectionPara());
    return firstSectionDiv;
  };
  
  function createFirstSectionH1 () {
    var firstSectionDivH1 = document.createElement('h1');
    firstSectionDivH1.className = 'first-section-h1';
    firstSectionDivH1.textContent = 'Curse of the Current Reviews';
    return firstSectionDivH1;
  };
  
  function createFirstSectionPara() {
    var firstSectionDivPara = document.createElement("p");
    firstSectionDivPara.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quas deleniti ad. Sunt soluta unde a ratione. Perferendis deleniti ipsam recusandae, debitis consequuntur dicta suscipit aliquid voluptatibus unde, minima a?';
    return firstSectionDivPara;
  };

  // making second section function
  function createSecondSection () {
    var secondSectionDiv = document.createElement("div");
    secondSectionDiv.className = 'second-section-div';
    secondSectionDiv.appendChild(createSecondSectionH2());
    secondSectionDiv.appendChild(createSecondSectionP());
    secondSectionDiv.appendChild(createSecondSectionUl());
    return secondSectionDiv;
  };
  
  function createSecondSectionH2 () {
    var secondSectionDivH2 = document.createElement("h2");
    secondSectionDivH2.className = 'second-section-h2';
    secondSectionDivH2.textContent = 'Hello WatchKit';
    return secondSectionDivH2 
  };
  
  function createSecondSectionP () {
    var secondSectionDivPara = document.createElement("p");
    secondSectionDivPara.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quas deleniti ad. Sunt soluta unde a ratione. Perferendis deleniti ipsam recusandae, debitis consequuntur dicta suscipit aliquid voluptatibus unde, minima a?debitis consequuntur dicta suscipit aliquid voluptatibus unde, minima a?debitis consequuntur dicta suscipit aliquid voluptatibus unde, minima a?debitis consequuntur dicta suscipit aliquid voluptatibus unde, minima a?';
    return secondSectionDivPara;
  };

  function createSecondSectionUl () {
    var firstUl = document.createElement("ul");
    firstUl.className = 'first-ul';
    firstUl.appendChild(createSecondSectionUlLi1());
    firstUl.appendChild(createSecondSectionUlLi2());
    return firstUl;
  };
  
  function createSecondSectionUlLi1 () {
    var ulLi1 = document.createElement("li");
    ulLi1.className = 'ul-li-1';
    ulLi1.textContent = '12 comments';
    return ulLi1;
  };

  function createSecondSectionUlLi2 () {
    var ulLi2 = document.createElement("li");
    ulLi2.className = 'ul-li-2';
    ulLi2.textContent = '124 likes';
    return ulLi2;
  };
  
  // create third section 
  function createThirdSection () {
    var thirdSectionDiv = document.createElement("div");
    thirdSectionDiv.className = 'second-section-div';
    thirdSectionDiv.appendChild(createThirdSectionH2());
    thirdSectionDiv.appendChild(createThirdSectionP());
    thirdSectionDiv.appendChild(createThirdSectionUl());
    return thirdSectionDiv;
  };
  
  function createThirdSectionH2 () {
    var thirdSectionDivH2 = document.createElement("h2");
    thirdSectionDivH2.className = 'second-section-h2';
    thirdSectionDivH2.textContent = 'Introduction to Swift';
    return thirdSectionDivH2;
  };

  function createThirdSectionP () {
    var thirdSectionDivPara = document.createElement("p");
    thirdSectionDivPara.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quas deleniti ad. Sunt soluta unde a ratione. Perferendis deleniti ipsam recusandae, debitis consequuntur dicta suscipit aliquid voluptatibus unde, minima a?debitis consequuntur dicta suscipit aliquid voluptatibus unde, minima a?debitis consequuntur dicta suscipit aliquid voluptatibus unde, minima a?debitis consequuntur dicta suscipit aliquid voluptatibus unde, minima a?';
    return thirdSectionDivPara;
  };

  function createThirdSectionUl () {
    var secondUl = document.createElement("ul");
    secondUl.className = 'first-ul';
    secondUl.appendChild(createThirdSectionUlLi1());
    secondUl.appendChild(createThirdSectionIlLi2());
    return secondUl;
  };

  function createThirdSectionUlLi1 () {
    var ulLi3 = document.createElement("li");
    ulLi3.className = 'ul-li-1';
    ulLi3.textContent = '15 comments';
    return ulLi3;
  };

  function createThirdSectionIlLi2() {
    var ulLi4 = document.createElement("li");
    ulLi4.className = 'ul-li-2';
    ulLi4.textContent = '45 likes';
    return ulLi4; 
  };