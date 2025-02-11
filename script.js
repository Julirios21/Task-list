function addTask() {
    let taskInput = document.getElementById("task");
    let taskText = taskInput.value.trim();

    function mostarAlerta(){
        Swal.fire({
            title: "Error",
            text: "Ingrese una Task",
            icon: "Error"
        })
    }

    if (taskText === "") {
        mostarAlerta();
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

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn").addEventListener("click", () => {
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");
    });
});
