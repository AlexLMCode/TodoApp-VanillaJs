//html refs
import {todoList} from "../index";

const $todoList = document.querySelector('.todo-list');
const $btnBorrar = document.querySelector('.clear-completed');

//create html element
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

    const $listItem = document.createElement('div');
    $listItem.innerHTML = htmlTodo;
    $todoList.append($listItem.firstElementChild);

    return $listItem;
}

//Events
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
    let items = $todoList.children;

    for (let item of items) {
        if (item.classList.contains('completed')) {
            //borrar en el html
            $todoList.removeChild(item)
        }
    }

})
