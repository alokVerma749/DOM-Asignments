const container = document.querySelector(".container");
const inputArea = document.querySelector(".inputArea");
const addButton = document.querySelector(".add-btn");
let listItems = document.querySelector(".list-items");
const generatedTodoList = [];
// let todoItem = document.querySelector(".todo-item");
// let userData = document.querySelector(".userData");
// let checkBoxes = document.querySelectorAll(".check");

// let deleteButtons = document.querySelectorAll(".delete-btn");

// making button active/inactive if value is null.
inputArea.addEventListener("keyup", function () {
    if (inputArea.value.trim() !== 0) {
        addButton.classList.add("active");
    }
})

addButton.addEventListener("click", function addTodoItem() {
    generatedTodoList.push({
        time: new Date().toUTCString(),
        task: inputArea.value,
        isDone: false
    });
    generateTodoItem(generatedTodoList.length - 1);
    inputArea.value = "";
    addButton.classList.remove("active");
});

function generateTodoItem(todoLocation) {
    let task = generatedTodoList[todoLocation].task;
    let time = generatedTodoList[todoLocation].time;
    let isDone = generatedTodoList[todoLocation].isDone;
    const newTodo = document.createElement("DIV");
    // create all elements
    // const todo = document.createElement("#");
    // const editButton = document.createElement("BUTTON");
    // const editButton = document.createElement("BUTTON");
    const editButton = document.createElement("BUTTON");
    editButton.classList.add("edit-btn");
    newTodo.classList.add("todo-item");
    newTodo.innerHTML = `
            <div class="upper">
                <input type="checkbox" name="" id="#check">
                <h3 class="todo">${task}</h3>
                ${appendChild(editButton)}
            </div >
    <p class="time">${time}</p>
`
    listItems.appendChild(newTodo);

    // can use destructuring(spread and rest)
    addListners(editButton, deleteButton);


    function addListners(element1, element2) {
        element1.addEventListener("click", function () {
            console.log(`${task} done`);
        })
    }
}