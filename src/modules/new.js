import { editTaskDescription, saveEditedTaskDescription } from './edit.js';
import { saveTasksToLocalStorage, loadTasksFromLocalStorage } from './keepData.js';
import { addNewTask, deleteTask } from './addRemove.js';

const tasks = loadTasksFromLocalStorage();

const renderTasks = () => {
  const appElement = document.getElementById('app');
  appElement.innerHTML = '';

  const inputContainer = document.createElement('div');
  inputContainer.classList.add('inputContainer');

  const newTaskInput = document.createElement('input');
  newTaskInput.id = 'newTaskInput';
  newTaskInput.type = 'text';
  newTaskInput.placeholder = 'Add to your To Do List';
  inputContainer.appendChild(newTaskInput);

  const addButton = document.createElement('button');
  addButton.id = 'addButton';
  addButton.innerHTML = '<i class="fas fa-arrow-right"></i>';
  addButton.addEventListener('click', () => {
    const newTaskDescription = newTaskInput.value.trim();
    if (newTaskDescription !== '') {
      addNewTask(newTaskDescription);
      newTaskInput.value = '';
    }
  });
  inputContainer.appendChild(addButton);

  const ulElement = document.createElement('ul');

  tasks.sort((a, b) => a.index - b.index);

  let selectedTaskIndex = -1;

  tasks.forEach((task, index) => {
    const liElement = document.createElement('li');
    liElement.id = `task-${index}`;

    const checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.checked = task.completed;
    liElement.appendChild(checkboxElement);

    const descriptionElement = document.createElement('span');
    descriptionElement.textContent = task.description;
    liElement.appendChild(descriptionElement);

    liElement.classList.add(task.completed ? 'completed' : 'incomplete');

    const ellipsisElement = document.createElement('div');
    ellipsisElement.classList.add('taskOptions');
    ellipsisElement.innerHTML = '<i class="fas fa-ellipsis-v"></i>'; // Use Font Awesome three dots icon
    liElement.appendChild(ellipsisElement);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Use Font Awesome trash icon
    deleteButton.classList.add('deleteButton');
    deleteButton.style.display = 'none';
    deleteButton.addEventListener('click', (event) => {
      event.stopPropagation();
      deleteTask(index);
    });

    liElement.appendChild(deleteButton);

    liElement.addEventListener('click', () => {
      if (selectedTaskIndex !== -1) {
        ulElement.children[selectedTaskIndex].classList.remove('selected');
        ulElement.children[selectedTaskIndex].querySelector('.deleteButton').style.display = 'none';
        ulElement.children[selectedTaskIndex].querySelector('.taskOptions').style.display = 'block';
      }

      if (selectedTaskIndex === index) {
        selectedTaskIndex = -1;
      } else {
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

  saveTasksToLocalStorage(tasks);
};

export {
  renderTasks,
  tasks,
};
