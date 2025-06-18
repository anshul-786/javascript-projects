const todoList = JSON.parse(localStorage.getItem('todoList')) || []; 
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  todoList.forEach(function(todoObject, index) {
    const { todo, dueDate } = todoObject;
    const html = `
      <div>
        ${todo}
      </div>
      <div>
        ${dueDate}
      </div>
      <button onclick="
        todoList.splice(${index}, 1);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        renderTodoList();
      " class="delete-todo-button">
        Delete
      </button>
    `;
    todoListHTML += html;
  });
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-todo-input');
  const dateInputElement = document.querySelector('.js-date-input');
  const todo = inputElement.value
  const dueDate = dateInputElement.value;
  todoList.push({
    todo,
    dueDate
  });
  inputElement.value = '';
  localStorage.setItem('todoList', JSON.stringify(todoList));
  renderTodoList();
}