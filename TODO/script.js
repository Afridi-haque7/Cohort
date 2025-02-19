const addBtn = document.getElementById('add-btn')
const todoInput = document.getElementById('todo-input')
const todoList = document.getElementById("todo-list");
const allDeleteButton = document.getElementById("delete-btn");

addBtn.addEventListener('click', () => {
    const value = todoInput.value.trim();
    if(!value) return   // Ignore empty string

    const li = document.createElement('li')
    const textSpan = document.createElement('span')
    const delButton = document.createElement('button');
    const editButton = document.createElement('button');

    delButton.innerText = 'Delete'
    delButton.classList.add("bg-red-800", "px-2", "rounded-lg", "cursor-pointer");
    editButton.innerText = 'Edit'
    editButton.classList.add(
      "bg-green-800",
      "px-2",
      "rounded-lg",
      "cursor-pointer"
    );

    textSpan.innerText = value

    li.appendChild(textSpan)
    li.appendChild(editButton)
    li.appendChild(delButton)

    li.classList.add(
      "shadow-lg",
      "border",
      "border-blue-400/10",
      "rounded-xl",
      "justify-between",
      "flex",
      'px-4',
      'py-2'
    );

    todoList.appendChild(li)
    delButton.addEventListener('click', () => {
        li.remove() // Remove li from the list
    })
    editButton.addEventListener('click', () => {
        if (editButton.innerText === "Edit") {
          // Convert text to input field
          const input = document.createElement("input");
          input.type = "text";
          input.value = textSpan.innerText;
          input.classList.add("border", "px-2", "rounded-lg");

          li.replaceChild(input, textSpan); // syntax - replaceChild(newField, oldField)
          editButton.innerText = "Save";
        } else {
          // Save changes
          textSpan.innerText = li.querySelector("input").value;
          li.replaceChild(textSpan, li.querySelector("input"));
          editButton.innerText = "Edit";
        }
    })
    todoInput.value = ''
})

 allDeleteButton.addEventListener('click', () => {
    todoList.innerHTML = "";
 })