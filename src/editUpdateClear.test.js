
import editTask from './modules/EditTask.js';
import taskStatusUpdate from './modules/TaskStatusUpdate.js';
import clearCompletedTasks from './modules/ClearCompletedTasks.js';

describe('editTask function', () => {
  test('This should update task description verry well', () => {
    const tasks = [
      { description: 'Task 1', completed: false },
      { description: 'Task 2', completed: false },
    ];

    const indexToEdit = 1;
    const newDescription = 'Updated Task Description';
    editTask(tasks, indexToEdit, newDescription);

    expect(tasks[indexToEdit].description).toBe(newDescription);
  });
});

describe('taskStatusUpdate function', () => {
  test('This should tell us task completed status correctly', () => {
    const tasks = [
      { description: 'Task 1', completed: false },
      { description: 'Task 2', completed: false },
    ];

    const indexToUpdate = 1;
    taskStatusUpdate(tasks, indexToUpdate);

    expect(tasks[indexToUpdate].completed).toBe(true);
  });
});

describe('clearCompletedTasks function', () => {
  test('It has to test if it removes completed tasks from the tasks array', () => {
        const tasks = [
            { description: 'Task 1', completed: true },
            { description: 'Task 2', completed: false },
            { description: 'Task 3', completed: true },
          ];
      
          const remainingTasks = clearCompletedTasks(tasks);
      
          expect(remainingTasks).toEqual([
            { description: 'Task 2', completed: false, index: 0 },
          ]);
        });
      });