//html refs
import {Todo} from "./classes/todo.class";
import {todoList} from "../index";

const $todoList = document.querySelector('.todo-list');
const $input = document.querySelector('.new-todo');
const $btnBorrar = document.querySelector('.clear-completed');

export const crearTodoHtml = (todo) => {

  const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
      <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template">
    </li>
  `;

  //create html element
  const $listItem = document.createElement('div');
  $listItem.innerHTML = htmlTodo;
  $todoList.append($listItem.firstElementChild);

  return $listItem;
}

//Events

$input.addEventListener('keyup', (event) => {

  if (event.keyCode === 13 && $input.value.length > 0) {
    const nuevoTodo = new Todo($input.value);
    todoList.nuevoTodo(nuevoTodo);
    crearTodoHtml(nuevoTodo);
    $input.value = '';
  }
});

$todoList.addEventListener('click', (event) => {
  const nombreElemento = event.target.localName; //input, label,button

  const todoElement = event.target.parentElement.parentElement; //li

  const todoId = todoElement.getAttribute('data-id');

  if (nombreElemento.includes('input')) {//click en check

    todoList.toggleTodo(todoId);
    todoElement.classList.toggle('completed')

  } else if (nombreElemento.includes('button')) {

    todoList.eliminarTodo(todoId);
    $todoList.removeChild(todoElement)
  }

})

$btnBorrar.addEventListener('click', () => {

  todoList.eliminarCompletados();

  for (let i = $todoList.children.length - 1; i >= 0; i--) {
    const elemento = $todoList.children[i];

    if (elemento.classList.contains('completed')) {
      $todoList.removeChild(elemento)
    }
  }

})
