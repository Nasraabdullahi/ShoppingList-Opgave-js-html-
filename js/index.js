//Write your Javascript code here
console.log("Shoppinglist")

//Write your Javascript code here
console.log("Shoppinglist")
// Funktion til at oprette et nyt <li>-element
function lavLi(klasse, id, tekst) {
  const li = document.createElement("li");             
  li.setAttribute("class", klasse);                     
  li.setAttribute("id", id);                           
  const tekstNode = document.createTextNode(tekst);    
  li.appendChild(tekstNode);                            
  return li;                                           
}

// Tilføjer et nyt element til listen
const liste = document.getElementById("listUnhealthy");
const nyUgesynd = lavLi("unhealthy", "5", "Chips");
liste.appendChild(nyUgesynd);








//vælg original liste
//const originalList = document.getElementById("list");
//vælg den tomme liste under usunde varer
//const unhealthyList = document.getElementById("unhealthy-list");
//vælg loop gennem alle li og kopier de usunde varer til den nye liste
//const items = originalList.getElementsByTagName("li");

//for (let i = 0; i < items.length;i++){
  //  const item = items[i];
   // if(item.classList.contains("unhealthy")){
       // const clone = item.cloneNode(true);
       // unhealthyList.appendChild(clone);
 //   }
//}
//opret et nyt li element
//const li = document.createElement("li");
//li.textContent = "Mælk";
//li.setAttribute("id","item1");
//li.setAttribute("class","list-item");

//tilføj li elementet til ul
//ul.appendChild(li);
