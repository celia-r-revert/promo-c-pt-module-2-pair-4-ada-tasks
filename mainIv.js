'use strict';

// SECCIÓN DE LOS QUERY-SELECTOR

const tasksUl = document.querySelector('.js_tasksUl');
const searchInput = document.querySelector('.js_searchInput');
const addBtn = document.querySelector('.js_addBtn');
const taskInput = document.querySelector('.js_inputText');

// SECCIÓN DE LOS DATOS DE APLICACIÓN

const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: false, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];



// SECCIÓN DE FUNCIONES

/*
  Esta función genera el HTML (li>input) de una tarea
  que recibe como objeto en el parámetro
*/

const renderOneTask = (objTask) => {
  //console.log('objTask', objTask.completed);
  
  if( objTask.completed ) {
    const html = `
    <li class="js_task task completed" id="${objTask.id}">
      <input checked type="checkbox" name="task" id="task">
      ${objTask.name}
    </li>
    `;

    return html;
  }
  else {
    const html = `
    <li class="js_task task" id="${objTask.id}">
      <input type="checkbox" name="task" id="task">
      ${objTask.name}
    </li>
    `;

    return html;
  }

}

/*
  Genera y pone en la página el código HTML de todas las
  taras incluidas en el array de tasks
*/

const renderAllTasks = (tasksToRender) => {
  let html = '';

  for( const  objTask  of tasksToRender ) {
    html += renderOneTask(objTask);
  }
  
  tasksUl.innerHTML = html;

  const taskLis = document.querySelectorAll('.js_task');
  console.log(taskLis);
  
  for( const li of taskLis ) {
    li.addEventListener('click', handleClickTask);
  }
}
const handleClickTask = (ev) => {
  console.log('currentTarget', ev.currentTarget);
  console.log('id', ev.currentTarget.id);
  console.log(tasks);
  
  const clickedId = parseInt(ev.currentTarget.id);

  // Localizar el obj de la tarea que se clicó 
  const obj = tasks.find( oneTask => oneTask.id === clickedId );
  
  console.log(obj)

  // Cambiar el obj.completed de esa tarea
  if( obj.completed ) {
    obj.completed = false;
  }
  else {
    obj.completed = true;
  }

  // Volver a pintar todas
  renderAllTasks(tasks);


  //ev.currentTarget.classList.toggle('completed');
}
const handleInputSearch = (ev) => {
  console.log('Estas escribiendo', searchInput.value);
  
  const filteredTasks = tasks.filter( (taskObj) => taskObj.name.includes(searchInput.value) );

  console.log(filteredTasks);
  
  renderAllTasks(filteredTasks);
};

// SECCIÓN DE EVENTOS

searchInput.addEventListener('input', handleInputSearch);

// CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA

renderAllTasks(tasks);

// CÓDIGO QUE SE EJECUTA AL AÑADIR UNA NUEVA TAREA

const handleAddTask = (ev) => {
    ev.preventDefault(); 
    const taskName = taskInput.value; 
  
    // Crear un nuevo objeto tarea
    const newTask = {
        name: taskName, 
        completed: false, 
        id: tasks.length + 1, 
    };
  
    tasks.push(newTask); // Añadir la nueva tarea al array
  
    renderAllTasks(tasks); // Volver a mostrar todas las tareas en la lista
  
    taskInput.value = ''; // Limpiar el campo de texto
  };
  
  // Añadir el evento al botón "Agregar"
  addBtn.addEventListener('click', handleAddTask);
  
  
  
  