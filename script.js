function addTask() {
    let taskInput = document.getElementById('taskInput');
    let deadlineInput = document.getElementById('deadlineInput');
    let priorityInput = document.getElementById('priorityInput');
    let taskText = taskInput.value.trim();
    let deadline = deadlineInput.value;
    let priority = priorityInput.value;

    if (taskText === "") return;

    let taskList = document.getElementById('taskList');
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    taskDiv.innerHTML = `<input type="checkbox"> 
        <span>${taskText} - ${deadline} </span> 
        <button class="priority-btn ${priority}">${priority.charAt(0).toUpperCase() + priority.slice(1)}</button>
        <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>`;

    taskList.appendChild(taskDiv);
    taskInput.value = "";
    deadlineInput.value = "";
}