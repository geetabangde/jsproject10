const form = document.querySelector(".todo-form");
const allTask = document.querySelector("#alltask");
const input = document.querySelector("#task");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = input.value.trim();

  if (!text) {
    input.focus();
    return;
  }

  const taskRow = document.createElement("div");
  taskRow.className = "task-item";

  const task = document.createElement("span");
  task.textContent = text;

  const doneButton = document.createElement("button");
  doneButton.textContent = "Done";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  taskRow.append(task, doneButton, deleteButton);
  allTask.appendChild(taskRow);

  doneButton.addEventListener("click", () => {
    task.style.textDecoration = "line-through";
    task.style.color = "gray";
    taskRow.style.opacity = "0.8";
  });

  deleteButton.addEventListener("click", () => {
    taskRow.remove();
  });

  form.reset();
  input.focus();
});
