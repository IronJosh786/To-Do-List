document.addEventListener("DOMContentLoaded", function(){
    const addBtn = document.querySelector("#addBtn");
    const taskField = document.querySelector(".to__do"); 

    function capitalizeFirstLetter(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    function addTask(text) {
        if(text==="") {
            return;
        }
        
        const new_id = Date.now().toString();
        
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task__container");

        const tasks = document.createElement("input");
        tasks.classList.add("tasks");
        tasks.setAttribute("type", "checkbox");
        tasks.id = new_id; 

        const label = document.createElement("label");
        label.setAttribute("for", new_id);
        label.textContent = text;

        const deletebutton = document.createElement("button");
        deletebutton.classList.add("deleteBtn");
        deletebutton.textContent = "x";

        deletebutton.addEventListener("click", function(){
            const toDelete = deletebutton.parentNode;
            toDelete.remove();
        });

        taskContainer.appendChild(tasks);
        taskContainer.appendChild(label);
        taskContainer.appendChild(deletebutton);

        return taskContainer;
    }

    addBtn.addEventListener("click", function() {
        const addedTask = document.querySelector("#add__task");
        const text = capitalizeFirstLetter(addedTask.value);
        const newTask = addTask(text);
        taskField.appendChild(newTask);
        addedTask.value = "";
    });
});
