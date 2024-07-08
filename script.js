const btn = document.querySelector("button");
const newtask = document.querySelector('input');
const task = document.querySelector("#task")
        btn.addEventListener('click', e => {
            if (newtask.value.length == 0) {
                alert('please enter the task first.');
            }
            else{
                task.innerHTML += ` 
                                <div class="task">
                <span class="taskname">
                ${newtask.value}
                    </span>
                    <button class="delete"><img src="delete.svg" alt="Delete"></button>
                    </div>`

                    const taskdelete = document.querySelectorAll(".delete")
                    for (let i = 0; i < taskdelete.length; i++) {
                        taskdelete[i].onclick = function(){
                            this.parentNode.remove();
                        } 
                    }

                    const alltasks = document.querySelectorAll(".task");
                      for(let i=0; i<alltasks.length; i++){
                     alltasks[i].onclick = function(){
                      this.classList.toggle('completed');
            }
        }
    }
             newtask.value = ""
        });