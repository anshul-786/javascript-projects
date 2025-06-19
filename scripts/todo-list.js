const todoList = JSON.parse(localStorage.getItem('todoList')) || []; 
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  todoList.forEach((todoObject, index) => {
    const { todo, dueDate } = todoObject;
    const html = `
      <div>
        ${todo}
      </div>
      <div>
        ${dueDate}
      </div>
      <button class="js-delete-todo-button delete-todo-button">
        Delete
      </button>
    `;
    todoListHTML += html;
  });
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  document.querySelectorAll('.js-delete-todo-button').forEach(
    (deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
         todoList.splice(index, 1);
         renderTodoList();
      })
    }
  );
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
})

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