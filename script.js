function addTask() {
  var taskNameInput = document.getElementById("taskName");
  var taskTimeInput = document.getElementById("taskTime");
  var taskList = document.getElementById("taskList");

  if (taskNameInput.value.trim() === "" || taskTimeInput.value === "") {
    alert("Por favor, insira um nome de tarefa e um horário válidos.");
    return;
  }

  var li = document.createElement("li");
  var taskName = taskNameInput.value;
  var taskTime = taskTimeInput.value;
  li.innerHTML =
    '<span class="task-name">' +
    taskName +
    "</span>" +
    '<span class="task-time">' +
    taskTime +
    "</span>" +
    '<button onclick="editTask(this)">Editar</button>' +
    '<button onclick="deleteTask(this)">Excluir</button>';
  taskList.appendChild(li);

  taskNameInput.value = "";
  taskTimeInput.value = "";
}

function editTask(button) {
  var li = button.parentNode;
  var taskNameSpan = li.querySelector(".task-name");
  var taskTimeSpan = li.querySelector(".task-time");
  var newTaskName = prompt("Editar nome da tarefa:", taskNameSpan.textContent);
  if (newTaskName === null || newTaskName.trim() === "") {
    alert("Por favor, insira um nome de tarefa válido.");
    return;
  }
  taskNameSpan.textContent = newTaskName;
}

function deleteTask(button) {
  var li = button.parentNode;
  li.parentNode.removeChild(li);
}

function checkTasks() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours() + ":" + currentTime.getMinutes();

    var tasks = document.querySelectorAll("#taskList li");
    tasks.forEach(function(task) {
        var taskHour = task.querySelector(".task-time").textContent;
        if (taskHour === currentHour) {
            alert("Hora de realizar a tarefa: " + task.querySelector(".task-name").textContent);
            playAlertSound();
        }
    });
}

function playAlertSound() {
    var alertSound = new Audio("alert.mp3");
    alertSound.play();
}
setInterval(checkTasks, 60000); // Verifica a cad
