//create a function that takes a word/string/task input when the 
//button is clicked, and adds that word/string/task to a list of pending tasks first.
//for each list item on pending tasks, there is an option to remove the is an option 
// to remove the item and an option to check the item off and move it to the Completed
// Tasks list. For each list item on complete tasks there is an option to remove the 
// task or uncheck it to move it back to pending tasks list. 


// function addTask(pendingTasks, newTask){
//     newTask = document.getElementById('newTask').value;
//     pendingTasks = document.getElementById('pendingTasks');
//     const newDiv = document.createElement('div');
//     const newTaskButton = document.createElement('input');
//     const taskButtonLabel = document.createElement('label');
//     let removeButton = document.createElement('button');
//     newDiv.id = "taskContainer"
//     newTaskButton.id = "inputTask";
//     newTaskButton.type = "checkbox";
//     taskButtonLabel.id = "inputTask";
//     taskButtonLabel.htmlFor = "inputTask";
//     taskButtonLabel.innerText = newTask;
//     removeButton.innerText = "Remove";
//     removeButton.id = "removeButton";
//     removeButton.addEventListener('click', function(){
//         pendingTasks.removeChild(inputTask);
//         pendingTasks.removeChild(removeButton);
//         completedTasks.removeChild(inputTask);
//         completedTasks.removeChild(removeButton);
//     })
//     pendingTasks.appendChild(newDiv);
//     newDiv.appendChild(newTaskButton);
//     newDiv.appendChild(taskButtonLabel);
//     newDiv.appendChild(removeButton);

// }

//create an event for check input and an event for the remove button - when it is checked the newDiv moves to 
//completed tasks and when it is unchecked it is moved back to pending tasks - when the remove button is clicked 
//an event occurs that removes/deletes the newDiv from its parent element. 

let taskNumber = 0;

function addTask() {
    const newTask = document.getElementById('newTask').value;
    const pendingTasks = document.getElementById('pendingTasks');
    const newDiv = document.createElement('div');
    const completedTasks = document.getElementById('completedTasks');
    const completeTaskCheckBox = document.createElement('input');
    const taskCheckBoxLabel = document.createElement('label');
    let removeButton = document.createElement('button');
    newDiv.id = "taskContainer" + taskNumber++;
    newDiv.className = "divTask";
    completeTaskCheckBox.id = "inputTask";
    completeTaskCheckBox.type = "checkbox";
    taskCheckBoxLabel.id = "inputTask";
    taskCheckBoxLabel.htmlFor = "inputTask";
    taskCheckBoxLabel.className = "taskLabel";
    taskCheckBoxLabel.innerText = "\xa0" + "\xa0" + newTask;
    removeButton.innerText = "\xa0" + "\xa0" + "Remove";
    removeButton.id = "removeButton";
    removeButton.className = "removalButton";
    removeButton.addEventListener('click', function(){ 
        newDiv.remove();
    })
    completeTaskCheckBox.addEventListener('change',function(){
        if(this.checked){
            //move the parent div of the checkbox to the completed tasks section 
           completedTasks.append(newDiv);
        } else {
            pendingTasks.append(newDiv);
        }
    })
    pendingTasks.appendChild(newDiv);
    newDiv.appendChild(completeTaskCheckBox);
    newDiv.appendChild(taskCheckBoxLabel);
    newDiv.appendChild(removeButton);
};



// let deleteButton = document.getElementById("removeButton");
// let newInput = document.getElementById("inputTask")

//  deleteButton.addEventListener('click',function buttonRemove(){
//     newInput.remove();
//     deleteButton.remove();
// });

// function checkTask (){

//  const checkBox = document.querySelectorAll('.inputTask').value;
//  const removeButton = document.querySelectorAll('.removeButton');
//  const completedTasks = document.getElementById('completedTasks');
//  const pendingTasks = document.getElementsById('pendingTasks')



//  if(completedTasks.checkBox == true ){
//     completedTasks.append(checkBox, removeButton);
//  } else if (completedTasks.checkBox == false) {
//     checkBox.remove();
//     removeButton.remove();
//     pendingTasks.append(checkBox, removeButton)
//  } else if ()


// }; 





