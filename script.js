let draggedTask = null;

function addTask(status) {
  const input = document.getElementById(`${status}-input`);
  const text = input.value.trim();
  if (!text) return;

  const task = createTask(text);
  document.querySelector(`[data-status="${status}"]`).appendChild(task);

  input.value = "";
}

function createTask(text) {
  const div = document.createElement("div");
  div.className = "task";
  div.textContent = text;
  div.draggable = true;

  div.addEventListener("dragstart", () => {
    draggedTask = div;
  });

  return div;
}

document.querySelectorAll(".task-list").forEach(list => {
  list.addEventListener("dragover", e => e.preventDefault());

  list.addEventListener("drop", () => {
    if (draggedTask) {
      list.appendChild(draggedTask);
      draggedTask = null;
    }
  });
});
