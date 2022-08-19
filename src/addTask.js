// import displayTodo from './displayTasks.js';
import getTasks from './getTasks.js';

const addTask = (task) => {
  const todos = getTasks();
  todos.push(task);
  localStorage.setItem('todos', JSON.stringify(todos));
  // displayTodo();
};

export default addTask;
