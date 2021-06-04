//selectors
const addButton = document.querySelector(".btn-add");
const input = document.querySelector(".input");
const list = document.querySelector(".list");

//events
addButton.addEventListener("click", createTask);
list.addEventListener("click", deleteTask);
document.addEventListener("DOMContentLoaded", takeJobs);

//functionality
function createTask(event) {
  let inputValue = input.value;
  event.preventDefault();
  // create the task body
  const div = document.createElement("div");
  div.classList.add("task-container");
  // create the task
  const task = document.createElement("li");
  task.innerText = inputValue;
  task.classList.add("task");
  div.appendChild(task);
  //adding the inputValue to the localStorage
  saveTask(inputValue);
  // clear the input after submit
  inputValue = "";
  // create delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fas fa-trash no-collision"></i>`;
  deleteButton.classList.add("delete");
  deleteButton.classList.add("list-button");
  div.appendChild(deleteButton);
  //create check button
  const checkButton = document.createElement("button");
  checkButton.innerHTML = `<i class="fas fa-check no-collision"></i>`;
  checkButton.classList.add("check");
  checkButton.classList.add("list-button");
  div.appendChild(checkButton);
  //append to the list
  list.appendChild(div);
}

//delete and check fuctions
function deleteTask(event) {
  event.preventDefault();
  // selecting the target
  const item = event.target;
  //delete or check the task
  if (item.classList.contains("delete")) {
    const entireDiv = item.parentElement;
    removeJobsSaved(item);
    entireDiv.remove();
  }
  if (item.classList.contains("check")) {
    item.parentElement.firstChild.classList.toggle("checked");
    item.parentElement.classList.toggle("checked-all");
  }
}

//saving feature
function saveTask(taskValue) {
  let jobs;
  if (localStorage.getItem("jobs") === null) {
    jobs = [];
  } else {
    jobs = JSON.parse(localStorage.getItem("jobs"));
  }
  jobs.push(taskValue);
  localStorage.setItem("jobs", JSON.stringify(jobs));
}

//remove jobs from local
function removeJobsSaved(job) {
  let jobs;
  if (localStorage.getItem("jobs") === null) {
    jobs = [];
  } else {
    jobs = JSON.parse(localStorage.getItem("jobs"));
  }
  const todoIndex = job.children[0].innerText;
  jobs.splice(jobs.indexOf(todoIndex), 1);
  localStorage.setItem("jobs", JSON.stringify(jobs));
}

//onload display the jobs
function takeJobs() {
  let jobs;
  if (localStorage.getItem("jobs") === null) {
    jobs = [];
  } else {
    jobs = JSON.parse(localStorage.getItem("jobs"));
  }

  jobs.forEach((element) => {
    let inputValue = element;
    const div = document.createElement("div");
    div.classList.add("task-container");
    const task = document.createElement("li");
    task.innerText = inputValue;
    task.classList.add("task");
    div.appendChild(task);
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fas fa-trash no-collision"></i>`;
    deleteButton.classList.add("delete");
    deleteButton.classList.add("list-button");
    div.appendChild(deleteButton);
    const checkButton = document.createElement("button");
    checkButton.innerHTML = `<i class="fas fa-check no-collision"></i>`;
    checkButton.classList.add("check");
    checkButton.classList.add("list-button");
    div.appendChild(checkButton);
    list.appendChild(div);
  });
}
