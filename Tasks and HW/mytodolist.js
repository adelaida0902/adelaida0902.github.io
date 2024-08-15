
const myBtn = document.getElementById('myBtn');
const myInput = document.getElementById('newTask');

myBtn.addEventListener('click',function() {
 let taskText = myInput.value;
 if (taskText === "") return;

 let taskList = document.getElementById("taskList");

 let taskItem = document.createElement('div');
 taskItem.className = 'to-do item';
 let select = document.createElement('select');
 select.innerHTML = 
 `<option value="todo">To Do</option>
 <option value="in-progress">In Progress</option>
 <option value="complete">Complete</option> `;

 let taskLabel = document.createElement('span');
 taskLabel.innerText = taskText;

 let deleteButton = document.createElement ('button');
 deleteButton.innerText = 'Delete';
 
 deleteButton.addEventListener('click', function() {
    taskList.remove(taskItem);
 });
taskItem.append(select);
taskItem.append(taskLabel);
taskItem.append(deleteButton);

taskList.append(taskItem);

myInput.value = '';
});