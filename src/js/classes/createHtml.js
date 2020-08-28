
export const crearTodoHtml = (todo) => {

    let htmlTemplate =  `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
      <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template">
    </li>
  `;

    const $listItem = document.createElement('div');
    $listItem.innerHTML = htmlTemplate;

    return $listItem.firstElementChild;
};
