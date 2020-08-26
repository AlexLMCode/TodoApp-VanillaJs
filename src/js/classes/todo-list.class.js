import {Todo} from "./todo.class";

export class TodoList {
    constructor() {
        this.todos = [];
        this.cargarLocalStorage()
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStogare()
    }

    eliminarTodo(id) {
        //va a regresar un nuevo arreglo exluyendo el que tiene el mismo id que le pase
        this.todos = this.todos.filter(todo => todo.id !== id * 1)
        this.guardarLocalStogare();
    }

    toggleTodo(id) {

        for (let todo of this.todos) {
            if (todo.id === id * 1) {
                todo.completado = !todo.completado;
                this.guardarLocalStogare()
                break;
            }
        }

    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => todo.completado === false);
        this.guardarLocalStogare();
    }

    guardarLocalStogare() {
        localStorage.setItem('todo', JSON.stringify(this.todos))
    }

    cargarLocalStorage() {

        if (localStorage.getItem('todo')) {

            this.todos = JSON.parse(localStorage.getItem('todo'));
            //making a new instance of a t0do in the object array.
            this.todos.forEach(todo => new Todo(todo));
        } else {

            this.todos = [];

        }
    }

}
