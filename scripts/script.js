window.onload = function () {
  setupTaskWindow();
  console.log("Loaded!");

}

/**
 * Function that opens and closes the add task window.
 */
function addTaskWindow() {
  const popup = document.getElementById("add_task_window");
  if (popup.style.display === "flex") {
    popup.style.display = "none"; // Hides the popup
  } else {
    popup.style.display = "flex"; // Shows the popup with flexbox for centering
  }
}

/**
 * Function that closes the task window.
 */
function closeTaskWindow() {
  document.getElementById('add_task_window').style.display = 'none';
}

function setupTaskWindow() {
  if (localStorage.getItem("tasks") == null) {
    console.log("It was null");
    var ob = new Array();
    localStorage.setItem("tasks", ob.toString())
  } else {
    console.log(localStorage.getItem("tasks"));
  }
  var tasks = localStorage.getItem("tasks").split(",");

  for (let i = 0; i < tasks.length; i++) {
    addTaskToWindow(tasks[i]);
  }
}

function addTaskToWindow(taskDescription) {
  // create a new task container
  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  // create the checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "check";

  // create the label
  const label = document.createElement("label");
  label.textContent = taskDescription;

  // append the checkbox and label to the task div
  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(label);

  // append the new task to the tasks container
  document.getElementById("myTasks").appendChild(taskDiv);

  // clear the input field for the next task

}

/**
 * Called when the add task popup button is clicked.
 */
document.getElementById("taskForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const taskInput = document.getElementById("taskInput");
  const taskDescription = taskInput.value; // get input
  if (taskDescription) { // if not null
    addTaskToWindow(taskDescription);
    taskInput.value = "";
    var tasks = localStorage.getItem("tasks").split(",");

    tasks.push(taskDescription);
    localStorage.setItem("tasks", tasks.toString());
  } else {
    alert("Please enter a task description."); // error handling
  }
  closeTaskWindow();
});

/**
 * Deletes tasks if they are checked off.
 */
document.addEventListener("DOMContentLoaded", function () { 
  const tasksContainer = document.getElementById("myTasks");

  tasksContainer.addEventListener("change", function (event) {
    if (event.target.type === "checkbox" && event.target.closest(".task")) { // if checkbox
      if (event.target.checked) {
        const taskDiv = event.target.closest(".task"); // find parent

        // get the task description
        const taskDescription = taskDiv.querySelector("label").textContent;

        // remove the task div from the DOM
        taskDiv.remove();

        // remove the task from localStorage
        let tasks = localStorage.getItem("tasks").split(","); // get all of the tasks
        tasks = tasks.filter(task => task !== taskDescription); // remove the checked task
        localStorage.setItem("tasks", tasks.toString());
      }
    }
  });
});
