import './style.css';
import tasks from './modules/tasks.js';

function renderTasks() {
  const appElement = document.getElementById('app');
  const ulElement = document.createElement('ul');

  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const liElement = document.createElement('li');

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
    ellipsisElement.innerHTML = '<i class="fas fa-ellipsis-v"></i>'; // Use Font Awesome icon
    liElement.appendChild(ellipsisElement);

    liElement.appendChild(ellipsisElement);

    ulElement.appendChild(liElement);
  });

  appElement.appendChild(ulElement);
}
renderTasks();