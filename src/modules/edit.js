// edit.js
import { tasks } from './new.js';
import { renderTasks } from './new.js';

function editTaskDescription(index) {
  if (index >= 0 && index < tasks.length) {
    const liElement = document.getElementById(`task-${index}`);
    if (liElement) {
      liElement.contentEditable = true;
      liElement.focus();
    }
  }
}

function saveEditedTaskDescription(index) {
  if (index >= 0 && index < tasks.length) {
    const liElement = document.getElementById(`task-${index}`);
    if (liElement) {
      liElement.contentEditable = false;
      tasks[index].description = liElement.textContent.trim();
      renderTasks(); // Re-render the tasks after editing the description
    }
  }
}

export { editTaskDescription, saveEditedTaskDescription };
