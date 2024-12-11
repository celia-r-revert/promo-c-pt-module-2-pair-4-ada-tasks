'use strict';

const addTasks = document.querySelector ('js_addtasks');
const addBtn = document.querySelector ('js_addBtn');
const addInput = document.querySelector ('js_addInput');
const inputList = document.querySelector ('js_inputList');
const tasksList = document.querySelector ('js_taskList');
const filterBtn = document.querySelector ('js_filterBtn');

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

addBtn.addEventListener( 'click', (ev) => {
    ev.preventdefault();
    inputList.innerHTML += `
    tasks
    `


})







