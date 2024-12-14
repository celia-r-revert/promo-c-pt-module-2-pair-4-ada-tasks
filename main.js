'use strict';

//Selección de los query selector de Javascript

const addTasks = document.querySelector('.js_addtasks');
const addBtn = document.querySelector('.js_addBtn');
const addInput = document.querySelector('.js_addInput');
const inputList = document.querySelector('.js_inputList');
const filterBtn = document.querySelector('.js_filterBtn');
const tasksUl = document.querySelector('.js_tasksUl');

// const tasksList = document.querySelector('.js_taskList');

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

//Sección de funciones

const renderOneTask = (objTask) => {
  if (objTask.completed)  {
    const html = `<li class="task completed">
    input checked type="checkbox" name="task" id="task"> ${objTask.name}</li>`;
    return html;
  }

  else {
    const html = `<li class="task">
    input type = "checkbox" name = "task" id = "task"> ${objTask.name}</li>`;
    return html;
  }
}

const renderAllTasks = () => {
  let html = '';
  for (const objTask of tasks) {
    html += renderOneTask (objTask);
  }
  tasksUl.innerHTML = html; 
  console.log ('objTask')
} 


//Eventos de nuestro código 
renderAllTasks ();

// addBtn.addEventListener('click', (ev) => {
//     ev.preventdefault();
//     const newTask = addInput.value;
//     tasksList.innerHTML += `<li>${newTask}</li>`;

//     console.log ('tasksList');
// })


// for (const taskObj of tasks) {
//     tasksList.innerHTML += `<li class="task__list">
//     <p class="each__task></li>;`}






