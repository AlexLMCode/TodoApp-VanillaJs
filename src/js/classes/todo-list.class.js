export class TodoList {
    constructor() {
        this.todos = [];
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
    }

    eliminarTodo(id) {
        //va a regresar un nuevo arreglo exluyendo el que tiene el mismo id que le pase
        this.todos = this.todos.filter(todo => todo.id !== id * 1)
    }

    toggleTodo(id) {
        //recorremos el array buscando el id pasado y cambiamos el valor de completado
        for (let todo of this.todos) {
            if (todo.id === id * 1) {
                todo.completado = !todo.completado;
                break;
            }
        }

    }

    eliminarCompletados() {
        //crea un nuevo arreglo con los objetos que su propiedad completado sea falsa
        this.todos = this.todos.filter(todo => todo.completado === false);
    }

}
