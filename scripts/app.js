let header = document.querySelector("#header-container");
header.innerHTML = `
    <section class="header-box w-11/12 xl:w-8/12 rounded-2xl m-auto mt-10 flex items-center">
        <div class="w-full">
            <div id="logo-container" class="flex items-center gap-5 ml-14">
                <div class="logo flex justify-center w-15 h-15 items-center rounded-xl">
                    <i class="fa-solid fa-book-open text-2xl text-white"></i>
                </div>
                <div class="logo-text">
                    <h1 class="logo-heading text-2xl font-bold text-[#7F46FE]">Focus Flow Study Planner</h1>
                    <p class="text-xl text-[#545454]">Organize your academic journey</p>
                </div>
            </div>

            <div class="quot-box h-35 rounded-xl mt-5 w-11/12 bg-[#F8F4FF] text-center flex justify-center items-center m-auto">
                <div class="quot-content flex flex-col gap-2">
                    <p class="text-xl quot-para w-11/12 m-auto text-[#324157]"><i>"Success is not final, failure is not fatal: it is the courage to continue that counts."</i></p>
                    <p class="text-[#324157]">-- Winstone Churchill --</p>
                </div>
            </div>
        </div>
    </section>
`;

let subjectContainer = document.querySelector(".subject-container");
subjectContainer.innerHTML = `
    <div type="button" id="mathematics" class="subject-box bg-[#FFFFFF] rounded-xl flex flex-col items-center gap-2 p-4">
        <img class="w-8" src="./assets/icons/mathematics.png" alt="mathematics">
        <p>Mathematics</p>
    </div>

    <div type="button" id="science" class="subject-box bg-[#FFFFFF] rounded-xl flex flex-col items-center gap-2 p-4">
        <img class="w-8" src="./assets/icons/science.png" alt="science">
        <p>Science</p>
    </div>

    <div type="button" id="english" class="subject-box bg-[#FFFFFF] rounded-xl flex flex-col items-center gap-2 p-4">
        <img class="w-8" src="./assets/icons/english.png" alt="english">
        <p>English</p>
    </div>

    <div type="button" id="history" class="subject-box bg-[#FFFFFF] rounded-xl flex flex-col items-center gap-2 p-4">
        <img class="w-8" src="./assets/icons/history.png" alt="history">
        <p>History</p>
    </div>

    <div type="button" id="computer-science" class="subject-box bg-[#FFFFFF] rounded-xl flex flex-col items-center gap-2 p-4">
        <img class="w-8" src="./assets/icons/computer-science.png" alt="computer-science">
        <p>CSE</p>
    </div>

    <div id="chemistry" class="subject-box bg-[#FFFFFF] rounded-xl flex flex-col items-center gap-2 p-4">
        <img class="w-8" src="./assets/icons/chemistry.png" alt="chemistry">
        <p>Chemistry</p>
    </div>
`;

let subjectBoxes = document.querySelectorAll(".subject-box");

for (subjectBox of subjectBoxes) {
    subjectBox.addEventListener("click", (event) => {
        activeSubject(event);
    });
}


function activeSubject(event) {
    let clickClass = event.target.getAttribute("id");
    event.target.classList.add(clickClass, "clicked");
    for (let i = 0; i < subjectBoxes.length; i++) {
        if (subjectBoxes[i].getAttribute("id") != clickClass) {
            subjectBoxes[i].classList.remove("clicked");
            subjectBoxes[i].classList.remove(
                subjectBoxes[i].getAttribute("id"),
            );
        }
    }
}

let taskInput = document.querySelector(".task-input");
taskInput.innerHTML = `
    <input class="input-task w-full h-15 rounded-xl p-5 sm:w-8/12 md:h-12 md:w-9/12 lg:w-10/12" type="text" name="" id="" placeholder="Enter a new task">
    <button class="add-task-btn">+ Add Task</button>
`;

let noTaskSpace = document.querySelector(".no-task-space");
noTaskSpace.innerHTML = `
    <i class="clock-icon fa-regular fa-clock text-5xl text-[#96A6BC] mt-10"></i>
    <p class="text-[#96A6BC]">No tasks yet. Add your first task to get started!</p>
`;

let taskList = document.querySelector(".task-list");
let num = 0;

function completeCalculation() {
    let clickedSubject = document.querySelector(".clicked");
    let subjectName = clickedSubject.getAttribute("id");
    let completeNum = document.querySelector(".complete-num");
    num++;
    completeNum.innerText = num;
}

function taskValueIdentify() {
    let taskItem = document.querySelector(".input-task");
    let taskValue = taskItem.value;
    return taskValue;
}

function subjectNameIdentify() {
    let subject = document.querySelector(".clicked").getAttribute("id");
    return subject;
}

function taskCreation(event, taskId) {
    let taskValue = taskValueIdentify();
    let subjectName = subjectNameIdentify();
    let taskDiv = document.createElement("div");
    taskDiv.classList.add(
        "task",
        "w-full",
        "h-25",
        "bg-[#F8FAFC]",
        "flex",
        "items-center",
        "justify-between",
        "gap-5",
        "p-5",
        "rounded-xl",
        "mb-5"
    );
    taskDiv.setAttribute("id", taskId);
    taskDiv.innerHTML = `
    <div class="task-left-content flex gap-10 items-center">
        <input class="custom-checkmark rounded-xl" type="checkbox" name="" id="">
        <label for="">
            <p class="label-title text-xl mb-2">${taskValue}</p>
            <span class="tag text-white p-1 rounded-full px-5 text-center text-sm">${subjectName}</span>
        </label>
    </div>
    <div class="delete-icon h-10 w-10 text-white rounded-lg flex items-center justify-center"><i class="fa-regular fa-trash-can text-xl"></i></div>
    `;
    taskList.append(taskDiv);
    document.querySelector(".input-task").value = "";
    let tagTask = document.getElementById(taskId);
    console.log(tagTask);
    switch(subjectName) {
        case "mathematics":
            tagTask.querySelector("span").classList.add("mathTag");
            tagTask.style.border = "2px solid #E2E8F0"
            tagTask.style.borderLeft = "7px solid #2196F3"
            break;
        case "science":
            tagTask.querySelector("span").classList.add("scienceTag");
            tagTask.style.border = "2px solid #E2E8F0"
            tagTask.style.borderLeft = "7px solid #4CAF50"
            break;
        case "english":
            tagTask.querySelector("span").classList.add("engTag");
            tagTask.style.border = "2px solid #E2E8F0"
            tagTask.style.borderLeft = "7px solid #F44336"
            break;
        case "history":
            tagTask.querySelector("span").classList.add("historyTag");
            tagTask.style.border = "2px solid #E2E8F0"
            tagTask.style.borderLeft = "7px solid #795549"
            break;
        case "computer-science":
            tagTask.querySelector("span").classList.add("cseTag");
            tagTask.style.border = "2px solid #E2E8F0"
            tagTask.style.borderLeft = "7px solid #3F51B5"
            break;
        case "chemistry":
            tagTask.querySelector("span").classList.add("chemTag");
            tagTask.style.border = "2px solid #E2E8F0"
            tagTask.style.borderLeft = "7px solid #FF9800"
            break;
    }
}

let taskId = 0;

let addTaskBtn = document.querySelector(".add-task-btn");
addTaskBtn.addEventListener("click", function (event) {
    noTaskSpace.classList.add("hidden");
    completeCalculation(num);
    taskId++;
    taskCreation(event, taskId);
});
