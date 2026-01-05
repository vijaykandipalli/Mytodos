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

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        currentFilter = btn.dataset.filter;
        renderTodos();
    });
});

function updateCount() {
    const remaining = todos.filter(todo => !todo.completed).length;
    taskCount.textContent = `${remaining} task${remaining !== 1 ? "s" : ""} remaining`;
}

function showEmptyState() {
    emptyState.style.display = todos.length === 0 ? "block" : "none";
}