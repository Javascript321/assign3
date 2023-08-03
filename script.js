const taskList = document.getElementById('taskList');
const newTaskInput = document.getElementById('newTask');
const addButton = document.getElementById('addButton');
const dingSound = document.getElementById('dingSound');
const addSound = document.getElementById('addSound');
const deleteSound = document.getElementById('deleteSound');

// Function to create a new task element
function createTaskElement(taskText) {
  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox" class="checkbox">
    <span>${taskText}</span>
    <button class="deleteButton">Delete</button>
  `;
  return li;
}

// Function to add a new task
function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText !== '') {
    const taskElement = createTaskElement(taskText);
    taskList.appendChild(taskElement);
    newTaskInput.value = '';
    // Play 'add' sound when a new task is added
    addSound.currentTime = 0; // Reset the audio to play from the beginning
    addSound.play();
  }
}

// Function to remove a task
function removeTask(event) {
  if (event.target.classList.contains('deleteButton')) {
    const taskElement = event.target.parentElement;
    taskList.removeChild(taskElement);
    // Play 'delete' sound when a task is deleted
    deleteSound.currentTime = 0; // Reset the audio to play from the beginning
    deleteSound.play();
  }
}

// Function to mark a task as completed and play the 'ding' sound
function completeTask(event) {
  if (event.target.classList.contains('checkbox')) {
    const taskElement = event.target.parentElement;
    taskElement.classList.toggle('completed');
    dingSound.currentTime = 0; // Reset the audio to play from the beginning
    dingSound.play();
  }
}

// Event listeners
addButton.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);
taskList.addEventListener('change', completeTask);
