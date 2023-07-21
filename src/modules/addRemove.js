import { renderTasks, tasks } from './new.js'; // eslint-disable-line

export const addNewTask = (description) => {
  tasks.push({
    description,
    completed: false,
    index: tasks.length + 1,
  });
  renderTasks();
};

export const deleteTask = (index) => {
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);

    for (let i = index; i < tasks.length; i += 1) {
      tasks[i].index = i + 1;
    }

    renderTasks();
  }
};
