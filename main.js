const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

// Loop function for capital worlds
function wordsLoop(array) {
    let container = []
    for (let i = 0; i < array.length; i++) {
        const capitalCase = array[i].slice(0,1).toUpperCase() + array[i].slice(1);
        container.push(capitalCase);
    }
    return(container.join(" "));
}

addTask.addEventListener("click", () => {
    let task = document.createElement("div");
    task.classList.add("task");

    // Capital Case Algorithm
    const text = inputTask.value;
    const myArray = text.split(" ");

    console.log(wordsLoop(myArray));

    let li = document.createElement("li");
    li.innerText = `${wordsLoop(myArray)}`;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add("checkTask");
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add("deleteTask");
    task.appendChild(deleteButton);

    if (inputTask.value === "") {
        alert("Please input a task!!");
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

    checkButton.addEventListener('click', () => {
        checkButton.parentElement.style.textDecoration = 'line-through';
    })

    deleteButton.addEventListener('click', (e) => {
        let target = e.target
        console.log(target.parentElement.remove());
    })
});
