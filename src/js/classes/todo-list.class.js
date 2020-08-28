import {Todo} from "./todo.class";

export class TodoList {
    constructor() {
        //this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
        //va a regresar un nuevo arreglo exluyendo el que tiene el mismo id que le pase
        this.todos = this.todos.filter(todo => todo.id !== id * 1);
        this.guardarLocalStorage()
    }

    toggleTodo(id) {
        //recorremos el array buscando el id pasado y cambiamos el valor de completado
        for (let todo of this.todos) {
            if (todo.id === id * 1) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados() {
        //crea un nuevo arreglo con los objetos que su propiedad completado sea falsa
        this.todos = this.todos.filter(todo => todo.completado === false);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {
        //Si hay localstorage:
        if (localStorage.getItem('todos')) {

            this.todos = JSON.parse(localStorage.getItem('todos'));
            this.todos = this.todos.map(todo => Todo.fromJson(todo));

        } else {
            this.todos = [];
        }
    }

}
