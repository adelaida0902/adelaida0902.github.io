const myInput = document.querySelector('input');
const listContainer = document.querySelector('ul')
function addTask() {
    if (myInput.value === "") {
      alert("You must write task!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = myInput.value;
      listContainer.append(li);
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      listContainer.append(li);
    } myInput.value = " ";
}; 

const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.className = 'delete-btn';
deleteButton.addEventListener('click', function() {
    taskList.removeChild(listItem);
});