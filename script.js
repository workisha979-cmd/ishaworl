let draggedTask = null;

// Add new task
function addTask(status) {
  const text = prompt("Enter task:");
  if (!text) return;

  const task = createTaskElement(text);
  document.querySelector(`[data-status="${status}"]`).appendChild(task);
}

// Create task element
function createTaskElement(text) {
  const div = document.createElement("div");
  div.className = "task";
  div.textContent = text;
  div.draggable = true;

  div.addEventListener("dragstart", () => {
    draggedTask = div;
  });

  return div;
}

// Enable dropping
document.querySelectorAll(".task-list").forEach(list => {
  list.addEventListener("dragover", e => {
    e.preventDefault();
  });

  list.addEventListener("drop", () => {
    if (draggedTask) {
      list.appendChild(draggedTask);
      draggedTask = null;
    }
  });
});
