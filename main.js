//Selectors
const tedoeninput = document.querySelector(".todo-input");
const tedoenknop = document.querySelector(".todo-button");
const tedoenlijst = document.querySelector(".todo-list");
//Event Listeners
tedoenknop.addEventListener('click', addtodo);
//Functies
function addtodo(event) {
  //Voorkomt de submit
  event.preventDefault();
  //te doen div
  const tododiv = document.createElement("div");
  tododiv.classList.add("todo");
  //Maakt de LI
  const newTodo = document.createElement("li");
  newTodo.innerText = "hey";
  newTodo.classList.add("todo-item");
  tododiv.appendChild(newTodo);
  //Gedaan knop
  const gedaanknop = document.createElement("button");
  gedaanknop.innerHTML = '<i class="fas fa-check"></i>';
  gedaanknop.classList.add("gedaan-btn");
  tododiv.appendChild(gedaanknop);
  //Verwijder knop
  const verwijderknop = document.createElement("button");
  verwijderknop.innerHTML = '<i class="fas fa-trash"></i>';
  verwijderknop.classList.add("verwijder-btn");
  tododiv.appendChild(verwijderknop);
  //Voeg toe aan de lijst
  tedoenlijst.appendChild(tododiv); 
}
