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
  const taskText = document.createElement('span');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  
  taskText.innerText = taskInput.value;

  // Append the new item to the tasklist
  newtask.appendChild(checkbox);
  newtask.appendChild(taskText);
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
  // Get the checked task
  const checkedTask = taskList.querySelector("li input[type=checkbox]:checked");

  // Check if there is a task to edit
  if (checkedTask) {
    // Prompt the user to edit the task text
    const newTaskInput = prompt("Edit the task:", checkedTask.nextSibling.innerText);

    // Update the task text if the user entered a new value
    if (newTaskInput) {
      checkedTask.nextSibling.innerText = newTaskInput;
    }
  }
});

