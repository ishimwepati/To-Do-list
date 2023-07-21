import { tasks, renderTasks } from './new.js'; 

const editTaskDescription = (index) => {
  if (index >= 0 && index < tasks.length) {
    const liElement = document.getElementById(`task-${index}`);
    if (liElement) {
      liElement.contentEditable = true;
      liElement.focus();
    }
  }
};

const saveEditedTaskDescription = (index) => {
  if (index >= 0 && index < tasks.length) {
    const liElement = document.getElementById(`task-${index}`);
    if (liElement) {
      liElement.contentEditable = false;
      tasks[index].description = liElement.textContent.trim();
      renderTasks();
    }
  }
};

export {
  editTaskDescription,
  saveEditedTaskDescription,
};
