document.querySelector('#add').onclick = function () {
    if (document.querySelector('#tasks input').value.length == 0) {
        alert("Please enter some task to be done!");
    }
    else {
        document.querySelector('#added-tasks').innerHTML += `
        <div class="added-task"> 
        <span id="task-name">${document.querySelector('#tasks input').value} </span>
        <button class = "delete" target="Remove"> <i class="fa-solid fa-circle-minus"></i>
        </button>
        </div>`;
        var toDeleteTask = document.querySelectorAll(".delete");
        for (var q = 0; q < toDeleteTask.length; q++) {
            toDeleteTask[q].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}