//  Shoppinglist DOM-manipulation
console.log("Shoppinglist");

// Task 1: Funktion til at oprette et nyt <li>-element
function lavLi(klasse, id, tekst) {
// Opret <li>
  const li = document.createElement("li");
  // Tilføj class             
  li.setAttribute("class", klasse);   
  // Tilføj id                 
  li.setAttribute("id", id);  
  // Opret tekstnode                         
  const tekstNode = document.createTextNode(tekst);    
  // Tilføj tekst til <li>
  li.appendChild(tekstNode);
// Returnér <li>                           
  return li;                                       
}

//Task 2: Funktion til at tilføje <li> til en liste
function tilføjTilListe(listeId, liElement) {
// Find liste med id
  const liste = document.getElementById(listeId);      
  if (!liste) {
    console.error(`Liste med id '${listeId}' blev ikke fundet.`);
    return;
  }
  // Tilføj <li> til listen
  liste.appendChild(liElement);                        
}

//Eksempel: Tilføj "Chips" til den usunde liste
const nyUgesynd = lavLi("unhealthy", "5", "Chips");
tilføjTilListe("listUnhealthy", nyUgesynd);




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
