//html refs
import {todoList} from "../index";
import {Todo} from "./classes/todo.class";
import {crearTodoHtml} from "./classes/createHtml";
import {$input, $todoList} from "../index";

//Functions

export const validateInput = (event) => {
    if (event.code === 'Enter' && $input.value.length > 0) {

        const nuevoTodo = new Todo($input.value);

        todoList.nuevoTodo(nuevoTodo);

        const $listItem = document.createElement('div');
        $listItem.innerHTML = crearTodoHtml(nuevoTodo);
        $todoList.append($listItem.firstElementChild);

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

