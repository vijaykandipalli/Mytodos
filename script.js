const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const taskCount = document.getElementById("task-count");
const emptyState = document.querySelector(".empty-state");
const filterBtns = document.querySelectorAll(".filter");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", e => {
    if (e.key === "Enter") addTask();
});

function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    todos.push({
        text: text,
        completed: false
    });

    taskInput.value = "";
    saveAndRender();
}