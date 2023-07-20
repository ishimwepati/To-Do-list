import './style.css';
const tasks = [
    {
      description: 'Buy groceries',
      completed: false,
      index: 1,
    },
    {
      description: 'Clean the house',
      completed: false,
      index: 2,
    },
    {
      description: 'Finish homework',
      completed: false,
      index: 3,
    },
    // Add more tasks here if needed
  ];
  
  function renderTasks() {
    const appElement = document.getElementById('app');
    const ulElement = document.createElement('ul');
  
    tasks.sort((a, b) => a.index - b.index); // Sort tasks based on index
  
    tasks.forEach(task => {
      const liElement = document.createElement('li');
  
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
  
       // Create a div for the ellipsis (three dots)
    const ellipsisElement = document.createElement('div');
    ellipsisElement.classList.add('taskOptions');
    ellipsisElement.innerHTML = '<i class="fas fa-ellipsis-v"></i>'; // Use Font Awesome icon
    liElement.appendChild(ellipsisElement);

      liElement.appendChild(ellipsisElement);
  
      ulElement.appendChild(liElement);
    });
  
    appElement.appendChild(ulElement);
  }
  renderTasks(); // Call the function to render tasks on page load
  