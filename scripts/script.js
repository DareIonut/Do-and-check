// Declaring global variables
const addButton = document.querySelector(".btn-add");
const input = document.querySelector(".input");
const list = document.querySelector(".list");
// Events
addButton.addEventListener("click", createTask);
list.addEventListener("click", deleteTask);

function createTask(event) {
  event.preventDefault();
  // create the task body
  const div = document.createElement("div");
  div.classList.add("task-container");
  // create the task
  const task = document.createElement("li");
  task.innerText = input.value;
  task.classList.add("task");
  div.appendChild(task);
  // clean the input after submit
  input.value = "";
  // create delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fas fa-trash no-collision"></i>`;
  deleteButton.classList.add("delete");
  deleteButton.classList.add("list-button");
  deleteButton.style.background = "#FF6363";
  div.appendChild(deleteButton);
  //create check button
  const checkButton = document.createElement("button");
  checkButton.innerHTML = `<i class="fas fa-check no-collision"></i>`;
  checkButton.classList.add("check");
  checkButton.classList.add("list-button");
  checkButton.style.background = "#63FF97";
  div.appendChild(checkButton);
  //append  the hole thing
  list.appendChild(div);
}
function deleteTask(event) {
  event.preventDefault();
  // selecting the target
  const item = event.target;

  //delete or check the task
  if (item.classList.contains("delete")) {
    const entireDiv = item.parentElement;
    entireDiv.remove();
  }
  if (item.classList.contains("check")) {
    item.parentElement.firstChild.classList.toggle("checked");
    item.parentElement.classList.toggle("checked-all");
  }
}
