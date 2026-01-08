const API_URL = "http://localhost:8000/api/tasks/";

function loadTasks() {
  fetch(API_URL)
    .then(res => res.json())
    .then(tasks => {
      const ul = document.getElementById("tasks");
      ul.innerHTML = "";
      tasks.forEach(t => {
        const li = document.createElement("li");
        li.textContent = t.title;
        ul.appendChild(li);
      });
    });
}

function addTask() {
  const input = document.getElementById("taskInput");
  fetch(API_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({title: input.value})
  }).then(() => {
    input.value = "";
    loadTasks();
  });
}

loadTasks();
