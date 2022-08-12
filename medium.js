const containerDiv = document.getElementById('container');
containerDiv.style.backgroundColor = '#1E847C'
containerDiv.style.height = '100px'
containerDiv.style.margin = 'auto'
containerDiv.style.display = 'flex'
containerDiv.style.flexDirection = 'col'
containerDiv.style.justifyContent = "space-around"
containerDiv.style.alignItems = 'center'
// add a h1 to the container
const mainH1 = document.createElement("h1");
mainH1.textContent = 'HighOnCoding';
mainH1.style.color = 'white';
containerDiv.appendChild(mainH1);
// add h2 to the container
const mainH2 = document.createElement("h2");
mainH2.textContent = 'Home';
mainH2.style.color = 'white';
containerDiv.appendChild(mainH2);
// add h3 to the container
const mainH3 = document.createElement("h3");
mainH3.textContent = 'category';
mainH3.style.color = 'white';
containerDiv.appendChild(mainH3);

