export class Todo {
  constructor(tarea) {

    this.tarea = tarea;
    this.id = new Date().getTime();
    this.completado = false;
    this.creado = new Date();
  }

  imprimirTarea () {
    console.log(`Mi tarea es: ${this.tarea}`)
  }
}
