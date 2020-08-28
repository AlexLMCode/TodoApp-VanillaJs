import './styles.css'
import {TodoList} from "./js/classes/todo-list.class";
import {eliminarSeleccionados, todoClick, validateInput} from "./js/main";
import {crearTodoHtml} from "./js/classes/createHtml";

export const $input = document.querySelector('input');
export const $todoList = document.querySelector('ul');
export const $btnBorrar = document.querySelector('.clear-completed');
export const $filtros = document.querySelector('.filters');
export const $anchorFiltros = document.querySelectorAll('.filtro');

export const todoList = new TodoList();

todoList.cargarLocalStorage();

//Imprimir los elementos del local storage
for (let i = 0; i < todoList.todos.length - 1; i++) {
    $todoList.append(crearTodoHtml(todoList.todos[i]))
}

//Eventos
$input.addEventListener('keyup', (event) => {
    validateInput(event);
});

$todoList.addEventListener('click', (event) => {
    todoClick(event)
})

$btnBorrar.addEventListener('click', () => {
    eliminarSeleccionados();
})

$filtros.addEventListener('click', event => {
    const filtro = event.target.text;

    if (!filtro) {
        return
    }
    $anchorFiltros.forEach(element => element.classList.remove('selected'));
    event.target.classList.add('selected')

    for (let elemento of $todoList.children) {
        elemento.classList.remove('hidden');

        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break
            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden')
                }
                break
        }
    }
})