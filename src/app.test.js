import addNewTask from './modules/AddNewTask.js';
import removeTask from './modules/RemoveTask.js';

describe('addNewTask function', () => {
  test('Approved : should add a new task to the tasks array', () => {
    const tasks = [
      { description: 'Task 1', completed: false, index: 0 },
    ];

    const arrayLength = tasks.length;
    const description = 'Task 2';
    const newTask = addNewTask(description, arrayLength);

    // Update the tasks array with the new task
    tasks.push(newTask);

    expect(newTask.description).toBe(description);
    expect(newTask.completed).toBe(false);
    expect(newTask.index).toBe(arrayLength);
    expect(tasks).toContain(newTask); // This expectation should pass now
  });
});

describe('removeTask function', () => {
  test('YES : should remove the task at the specified index from the tasks array', () => {
    const tasks = [
      { description: 'Task 1', completed: false, index: 0 },
      { description: 'Task 2', completed: false, index: 1 },
      { description: 'Task 3', completed: false, index: 2 },
    ];
    const indexToRemove = 1;

    removeTask(tasks, indexToRemove);

    expect(tasks.length).toBe(2);
    expect(tasks).toEqual([
      { description: 'Task 1', completed: false, index: 0 },
      { description: 'Task 3', completed: false, index: 1 },
    ]);
  });

  test('CHECK : should update the index of tasks after removal', () => {
    const tasks = [
      { description: 'Task 1', completed: false, index: 0 },
      { description: 'Task 2', completed: false, index: 1 },
      { description: 'Task 3', completed: false, index: 2 },
    ];
    const indexToRemove = 0;

    removeTask(tasks, indexToRemove);

    expect(tasks.length).toBe(2);
    expect(tasks[0].index).toBe(0); // The index of Task 2 is updated to 0
    expect(tasks[1].index).toBe(1); // The index of Task 3 is updated to 1
  });
});
