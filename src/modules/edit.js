function editTaskDescription(index, newDescription) {
    if (index >= 0 && index < tasks.length) {
      tasks[index].description = newDescription.trim();
      renderTasks(); // Re-render the tasks after updating the description
    }
  }
  
  export { editTaskDescription };
  