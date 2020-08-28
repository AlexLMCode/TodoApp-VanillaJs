//html refs
import {todoList} from "../index";
import {$input, $todoList} from "../index";
import {crearTodoHtml} from "./classes/createHtml";
import {Todo} from "./classes/todo.class";

//Functions

export const validateInput = (event) => {
    if (event.code === 'Enter' && $input.value.length > 0) {
        console.log($input.value)
        const nuevoTodo = new Todo($input.value);

        todoList.nuevoTodo(nuevoTodo);

        const $listItem = crearTodoHtml(nuevoTodo);

        $todoList.append($listItem);
        $input.value = '';
    }
};

export const todoClick = (event) => {

    const nombreElemento = event.target.localName; //input,label,button
    const todoElement = event.target.parentElement.parentElement; //li
    const todoId = todoElement.getAttribute('data-id');

    if (nombreElemento.includes('input')) {//click en check

        todoList.toggleTodo(todoId);
        todoElement.classList.toggle('completed')

    } else if (nombreElemento.includes('button')) {//click en la x
        todoList.eliminarTodo(todoId);
        $todoList.removeChild(todoElement)
    }

};

export const eliminarSeleccionados = () => {
    todoList.eliminarCompletados();
    let items = $todoList.children;

    for (let item of items) {
        if (item.classList.contains('completed')) {
            //borrar en el html
            $todoList.removeChild(item)
        }
    }
}

