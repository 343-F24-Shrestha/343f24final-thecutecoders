window.onload = function() {
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

/**
 * Called when the add task popup button is clicked.
 */
document.getElementById("taskForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from reloading the page

  const taskInput = document.getElementById("taskInput");
  const taskDescription = taskInput.value; // get input

  if (taskDescription) { // if not null
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
    taskInput.value = "";
  } else {
    alert("Please enter a task description."); // error handling
  }

  closeTaskWindow(); // close window after add is clicked
});
