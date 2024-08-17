// const myInput = document.querySelector('input');
// const listContainer = document.querySelector('ul')
// function addTask() {
//     if (myInput.value === "") {
//       alert("You must write task!");
//     } else {
//       let li = document.createElement("li");
//       li.innerHTML = myInput.value;
//       listContainer.append(li);
//       let deleteButton = document.createElement("button");
//       deleteButton.textContent = "Delete";
//       listContainer.append(li, deleteButton);
      

//     } myInput.value = " ";
    
// }; myInput.value = '';


const tasks = [];

const ul = document.querySelector("ul");
const input = document.querySelector("input");
const addBtn = document.querySelector("button");
const h1 = document.querySelector("h1");

function checkTasks() {
  if (tasks.length === 0) {
    h1.style.visibility = "visible";
  } else {
    h1.style.visibility = "hidden";
  }
}

function renderTasks() {
  checkTasks();
  ul.innerHTML = "";

  tasks.forEach(({ id, status, title }) => {
    const li = `<li>
  <span> ${id}</span> 
  <span>${title}</span> 
   <span>${status}</span> 
  <button id=${id}>Delete</button>
  </li>`;

    ul.insertAdjacentHTML("beforeend", li);
  });

  document.querySelectorAll("li button").forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      tasks.splice(index, 1);
      renderTasks();
    });
  });
}

renderTasks();

addBtn.addEventListener("click", () => {
  const newTask = {
    id: tasks.length + 1,
    title: input.value,
    status: "In Progress",
  };
  tasks.push(newTask);
  renderTasks();
  input.value = "";
});
