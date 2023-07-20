import './style.css';
import { addNewTask, deleteTask, editTaskDescription, renderTasks } from './modules/new.js';


const newTaskInput = document.getElementById('newTaskInput');

newTaskInput.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    const newTaskDescription = newTaskInput.value.trim();
    if (newTaskDescription !== '') {
      addNewTask(newTaskDescription);
      newTaskInput.value = '';
    }
  }
});

// Initial rendering of tasks
renderTasks();
