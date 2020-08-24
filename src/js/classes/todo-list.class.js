export class TodoList {
  constructor() {
    this.todos = [];
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter(todo => todo.id != id)
  }

  toggleTodo(id) {

    for (let todo of this.todos) {
      if (todo.id === id * 1) {
        todo.completado = !todo.completado;
        break;
      }
    }

  }

  eliminarCompletados() {
    this.todos = this.todos.filter(todo => !todo.completado)
  }

}
