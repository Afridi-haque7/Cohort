const addBtn = document.getElementById('add-btn')
const todoInput = document.getElementById('todo-input')
const todoList = document.getElementById("todo-list");
const allDeleteButton = document.getElementById("delete-btn");

addBtn.addEventListener('click', () => {
    const value = todoInput.value;
    const li = document.createElement('li')
    const delButton = document.createElement('button');
    
    delButton.innerText = 'X'
    li.innerText = value
    li.appendChild(delButton)
    todoList.appendChild(li)
    delButton.addEventListener('click', () => {
        li.remove()
    })
    todoInput.value = ''
})