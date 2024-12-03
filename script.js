function addTaskWindow() {
    const popup = document.getElementById("add_task_window");
    if (popup.style.display === "flex") {
      popup.style.display = "none"; // Hides the popup
    } else {
      popup.style.display = "flex"; // Shows the popup with flexbox for centering
    }
}

function closeTaskWindow() {
    document.getElementById('add_task_window').style.display = 'none';
}
