function addTask() {
    let taskInput = document.getElementById("task");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Escribe una tarea.");
        return;
    }

    let taskList = document.getElementById("task-list");
    
    let li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button onclick="removeTask(this)">❌</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function toggleTask(element) {
    element.classList.toggle("completed");
}

function removeTask(button) {
    button.parentElement.remove();
}
