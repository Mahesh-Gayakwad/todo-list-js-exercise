// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title) {
  taskTitles.push(title);
  taskComplete.push(false);
}

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  const taskInput = document.getElementById('taskInput');
  const taskTitle = taskInput.value.trim(); // Get the trimmed value of the input field
  if (taskTitle !== '') {
    newTask(taskTitle); // Create a new task with the input value
    taskInput.value = ''; // Clear the input field after adding the task
    // You can add additional code here if you want to update the UI or do other tasks after adding a task
  }
}

// Add event listener to the form for form submission
const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', handleFormSubmission);

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskIndex) {
  taskComplete[taskIndex] = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(taskIndex) {
  const title = taskTitles[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
}

// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed
