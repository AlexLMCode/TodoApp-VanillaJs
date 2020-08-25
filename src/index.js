import './styles.css'
import {TodoList} from "./js/classes/todo-list.class";
import {Todo} from "./js/classes/todo.class";
import {crearTodoHtml} from "./js/componentes";

export const todoList = new TodoList();
const $input = document.querySelector('input');

$input.addEventListener('keyup', (event) => {
    if (event.code === 'Enter' && $input.value.length > 0) {

        const nuevoTodo = new Todo($input.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        $input.value = '';

    }
});