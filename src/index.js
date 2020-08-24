import './styles.css'
import {Todo} from "./js/classes/todo.class";
import {TodoList} from "./js/classes/todo-list.class";
import {crearTodoHtml} from "./js/componentes";

export const todoList = new TodoList();

const tarea = new Todo('Aprender peneds');

todoList.nuevoTodo(tarea);
console.log(todoList)
crearTodoHtml(tarea);
