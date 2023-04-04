// Get the Elements
const addbtn = document.getElementById('addbtn');
const deletebtn = document.getElementById('deletebtn');
const editbtn = document.getElementById('editbtn');
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// ADD THE EVENT LISTENERS
// Add an event listener to the addbtn
addbtn.addEventListener("click", function() {
  // Create the new item
  const newtask = document.createElement('li');
  newtask.innerText = taskInput.value;

  // Append the new item to the tasklist
  taskList.appendChild(newtask);

  // Clear the taskInput field
  taskInput.value = "";
});

// Add an event listener to the deletebtn
deletebtn.addEventListener("click", function() {
  // Delete the completed task
  const completedTasks = document.querySelectorAll("li input[type=checkbox]:checked");

  // Loop through each completed task and remove it from the task list
  completedTasks.forEach(function(task) {
    task.parentNode.remove();
  });
});

// Add an event listener to the editbtn
editbtn.addEventListener("click", function() {
  // Get the first task in the task list
  const firstTask = taskList.firstElementChild;

  // Check if there is a task to edit
  if (firstTask) {
    // Prompt the user to edit the task text
    const newTaskInput = prompt("Edit the task:", firstTask.innerText);

    // Update the task text if the user entered a new value
    if (newTaskInput) {
      firstTask.innerText = newTaskInput;
    }
  }
});
