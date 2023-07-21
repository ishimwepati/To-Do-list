import './style.css';
import { addNewTask } from './modules/addRemove.js';
import { renderTasks } from './modules/new.js';
// import { editTaskDescription, saveEditedTaskDescription } from './modules/edit.js';

const newTaskInput = document.getElementById('newTaskInput');

newTaskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const newTaskDescription = newTaskInput.value.trim();
    if (newTaskDescription !== '') {
      addNewTask(newTaskDescription);
      newTaskInput.value = '';
    }
  }
});

renderTasks();
