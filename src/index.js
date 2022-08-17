// import './style.css';
import './style.css';

// creating tasks
const tasks = [{
  description: 'Gym',
  completed: true,
  index: 0,
}, {
  description: 'Code',
  completed: true,
  index: 2,
},
{
  description: 'Sleep',
  completed: false,
  index: 1,
}, {
  description: 'Eat',
  completed: true,
  index: 3,
}];

// select the container
const todos = document.querySelector('.tasks');
// sort tasks by index
tasks.sort((a, b) => a.index - b.index);

// populate todos
tasks.forEach((task) => {
  const taskElement = document.createElement('div');
  taskElement.classList.add('tskelement');
  taskElement.innerHTML = `
     <div class="task task-complete check ${task.completed ? 'hide' : ''}" name="${task.description} ">
     <input type="checkbox" id="${task.index}" value="">
           ${task.description}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"> <path d="M0 0h18v18h-18z" fill="none"/> <path d="M9 5.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm0 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/></svg>
  `;
  todos.appendChild(taskElement);
});
