'use strict';

//Sección de los query selector de Javascript

const tasksUl = document.querySelector('.js_tasksUl');
const searchInput = document.querySelector('.js_searchInput');


//Array de objetos con las tareas que queremos que aparezcan

const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];

//Sección de las funciones

const renderOneTask = (objTask) => {
  if (objTask.completed) {
    const html = `<li class="js_task completed" id=${objTask.id}>
    <input checked type="checkbox" name="task" id="task">${objTask.name}</li>`;
    return html;
  }

  else {
    const html = `<li class="js_task" id=${objTask.id}>
    <input type ="checkbox" name ="task" id ="task">${objTask.name}</li>`;
    return html;
  }
}

const renderAllTasks = (tasksToRender) => {
  let html = '';
  for (const objTask of tasksToRender) {
    html += renderOneTask(objTask);
  }
  tasksUl.innerHTML = html;
  
  const taskLis = document.querySelectorAll('.js_task');

  for (const li of taskLis) {
    li.addEventListener('click', handleClickTask);
    console.log(taskLis);
  }
  
}

const handleClickTask = (ev) => {
  const clickedId = parseInt(ev.CurrentTarget.id);

  const obj = tasks.find (oneTask => oneTask.id === clickedId );

  if (obj.completed) {
    obj.completed = false;
  }

  else {
    obj.completed = true;
  }
  
  renderAllTasks();

}


const handleInputSearch = (ev) => {

  const filteredTasks = tasks.filter ((taskObj) => 
  taskObj.name.includes(searchInput.value));

  renderAllTasks(filteredTasks);
};

searchInput.addEventListener('input', handleInputSearch);

renderAllTasks(tasks);

