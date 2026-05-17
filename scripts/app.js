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
                    <p class="text-xl quot-para w-11/12 m-auto text-[#324157]">"Success is not final, failure is not fatal: it is the courage to continue that counts."</p>
                    <p class="text-[#324157]">-- Winstone Churchill --</p>
                </div>
            </div>
        </div>
    </section>
`;