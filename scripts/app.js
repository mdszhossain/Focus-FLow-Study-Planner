let header = document.querySelector("#header-container");
header.innerHTML = `
    <section class="header-box w-8/12 rounded-2xl m-auto mt-10 flex items-center">
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
        <p>Computer Science</p>
    </div>

    <div id="chemistry" class="subject-box bg-[#FFFFFF] rounded-xl flex flex-col items-center gap-2 p-4">
        <img class="w-8" src="./assets/icons/chemistry.png" alt="chemistry">
        <p>Chemistry</p>
    </div>
`;

let subjectBoxes = document.querySelectorAll(".subject-box");
console.log(subjectBoxes);

for(subjectBox of subjectBoxes) {
    subjectBox.addEventListener("click", (event) => {
        let clickClass = event.target.getAttribute("id");
        event.target.classList.add(clickClass, "clicked");
        for(let i = 0; i<subjectBoxes.length; i++) {
            if(subjectBoxes[i].getAttribute("id") != clickClass) {
                subjectBoxes[i].classList.remove("clicked");
                subjectBoxes[i].classList.remove(subjectBoxes[i].getAttribute("id"));
            }
        }
    });
}