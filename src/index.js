import './styles.css'
import {TodoList} from "./js/classes/todo-list.class";
import {eliminarSeleccionados, todoClick, validateInput} from "./js/main";

export const todoList = new TodoList();

export const $input = document.querySelector('input');
export const $todoList = document.querySelector('ul');
export const $btnBorrar = document.querySelector('.clear-completed');

$input.addEventListener('keyup', (event) => {
    validateInput(event);
});

$todoList.addEventListener('click', (event) => {
    todoClick(event)
})

$btnBorrar.addEventListener('click', () => {
    eliminarSeleccionados();
})