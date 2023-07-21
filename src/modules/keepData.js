
function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  function loadTasksFromLocalStorage() {
    const tasksString = localStorage.getItem('tasks');
    return tasksString ? JSON.parse(tasksString) : [];
  }
  
  export { saveTasksToLocalStorage, loadTasksFromLocalStorage };
  