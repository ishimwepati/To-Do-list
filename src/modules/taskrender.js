function renderTasks() {
    const appElement = document.getElementById('app');
    appElement.innerHTML = ''; // Clear the app container
  
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('inputContainer');
  
    // Create the input field for new task entry
    const newTaskInput = document.createElement('input');
    newTaskInput.id = 'newTaskInput';
    newTaskInput.type = 'text';
    newTaskInput.placeholder = 'Type a new task and press Enter to add...';
    inputContainer.appendChild(newTaskInput);
  
    // Create the "Add Task" button
    const addButton = document.createElement('button');
    addButton.innerText = 'Add Task';
    addButton.addEventListener('click', () => {
      const newTaskDescription = newTaskInput.value.trim();
      if (newTaskDescription !== '') {
        addNewTask(newTaskDescription);
        newTaskInput.value = '';
      }
    });
    inputContainer.appendChild(addButton);
  
    const ulElement = document.createElement('ul');
  
    tasks.sort((a, b) => a.index - b.index); // Sort tasks based on index
  
    let selectedTaskIndex = -1; // Initialize with no selected task
  
    tasks.forEach((task, index) => {
      const liElement = document.createElement('li');
      liElement.id = `task-${index}`; // Add an ID to the task element for easy access
  
      // Create a checkbox input element for task completion
      const checkboxElement = document.createElement('input');
      checkboxElement.type = 'checkbox';
      checkboxElement.checked = task.completed;
      liElement.appendChild(checkboxElement);
  
      // Create a span element to display the task description
      const descriptionElement = document.createElement('span');
      descriptionElement.textContent = task.description;
      liElement.appendChild(descriptionElement);
  
      // Apply appropriate CSS class based on task completion status
      liElement.classList.add(task.completed ? 'completed' : 'incomplete');
  
      // Create a div for the ellipsis (three dots) and delete button
      const ellipsisElement = document.createElement('div');
      ellipsisElement.classList.add('taskOptions');
      ellipsisElement.innerHTML = '<i class="fas fa-ellipsis-v"></i>'; // Use Font Awesome three dots icon
      liElement.appendChild(ellipsisElement);
  
      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Use Font Awesome trash icon
      deleteButton.classList.add('deleteButton');
      deleteButton.style.display = 'none';
      deleteButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click event from propagating to the task element
        deleteTask(index);
      });
  
      liElement.appendChild(deleteButton);
  
      liElement.addEventListener('click', () => {
        if (selectedTaskIndex !== -1) {
          // If there's a previously selected task, deselect it
          ulElement.children[selectedTaskIndex].classList.remove('selected');
          ulElement.children[selectedTaskIndex].querySelector('.deleteButton').style.display = 'none';
          ulElement.children[selectedTaskIndex].querySelector('.taskOptions').style.display = 'block';
        }
  
        if (selectedTaskIndex === index) {
          // If the same task is clicked again, deselect it
          selectedTaskIndex = -1;
        } else {
          // Toggle the 'selected' class for the clicked task
          liElement.classList.toggle('selected');
          selectedTaskIndex = liElement.classList.contains('selected') ? index : -1;
          liElement.querySelector('.deleteButton').style.display = 'block';
          liElement.querySelector('.taskOptions').style.display = 'none';
        }
      });
  
      liElement.addEventListener('dblclick', () => {
        editTaskDescription(index);
      });
  
      liElement.addEventListener('blur', () => {
        saveEditedTaskDescription(index);
      });
  
      ulElement.appendChild(liElement);
    });
  
    appElement.appendChild(inputContainer);
    appElement.appendChild(ulElement);
  }

  export { renderTasks };