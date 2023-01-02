document.addEventListener("DOMContentLoaded", () => {

    let todos = [];

    class Task {
        constructor(taskName) {
            this.name = taskName;
            this.completed = false;
        }
    }

    document.querySelector("#addBtn").onclick = newElement
    let myNodelist = document.querySelectorAll("#myUL li");
    myNodelist.forEach(item => {
        updateListItem(item);
    });
    function addNewTask(name) {
        let task = new Task(name);
        todos.push(task);
    }
    function  newElement(){
        let task = document.querySelector("#myInput").value;
        if (task.length > 0) {
            createElementLI(task)
            document.querySelector("#myInput").value = "";

            addNewTask(task);
            saveTodos();
        } else {
            alert("Úkol musí mít nějaký text!")
        }
    }
    function createElementLI(name) {
        let li = document.createElement("li");
        li.innerHTML = name;
        updateListItem(li);
        document.querySelector("#myUL").appendChild(li);
        return li
    }

    function updateListItem(item) {
        item.onclick = function(){
            item.classList.toggle("checked")
            let i = todos.find(v => v.name === (this.childNodes[0]))
        }
        let span = document.createElement("span");
        span.innerHTML = "\u00D7"
        span.className = "close";
        span.onclick = function (){
            span.parentElement.style.display="none";
        };
        item.appendChild(span);
    }

    function saveTodos() {
        localStorage.setItem("todolist",JSON.stringify(todos))
    }
    function getTodos() {
        todos = JSON.parse(localStorage.getItem("todolist"));
        if (!todos) todos=[];
        todos.forEach(task =>{
            let name = task.name;
            let completed = task.completed;

            createElementLI(name);

            if (completed) li.className = "ckecked";
            document.querySelector()
        });
    }
    getTodos();
});



