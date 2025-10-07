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


  // Task 3: Skift eller tilføj class-attribut
function skiftKlasse(element, nyKlasse) {
    if (element) {
      element.setAttribute("class", nyKlasse);
    }
  }
  
  // Test Task 3
  const liToUpdate = document.getElementById("2"); // Beer
  skiftKlasse(liToUpdate, "healthy");             // Skifter class til "healthy"
  



