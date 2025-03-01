// complete button task

const completedBtn = document.getElementsByClassName("completed-btn");
let completedBtnCounts = 0;
let allTasks = completedBtn.length;
for (let btn of completedBtn) {
  btn.addEventListener("click", function () {
    alert("Board updated successfully");
    completedBtnCounts++;
    if (completedBtnCounts === allTasks) {
      alert("Congrats!!You have completed all the tasks ");
    }

    btn.disabled = true;
    btn.style.opacity = "0.2";

    const taskAssigned = document.getElementById("task-number");
    const taskNumber = parseInt(taskAssigned.innerText);

    const navCheckBox = document.getElementById("nav-check");
    const navCheckNumber = parseInt(navCheckBox.innerText);

    const updatedTaskNumber = taskNumber - 1;
    taskAssigned.innerText = updatedTaskNumber;

    const updatedNavCheckNumber = navCheckNumber + 1;
    navCheckBox.innerText = updatedNavCheckNumber;

    const historyContainer = document.getElementById("history-container");
    const titleBox = document.querySelector(".title-box");
    console.log(titleBox);

    const div = document.createElement("div");
    div.classList.add(
      "bg-[#F4F7FF]",
      "rounded-xl",
      "mt-8",
      "mx-3",
      "p-4",
      "font-semibold",
      "text-gray"
    );
    div.innerHTML = `
    <h2>"You have Complete The Task" ${titleBox} "at 12:48:15 PM"</h2>
    `;
    historyContainer.appendChild(div);
  });
}

// clear history task
const clearHistoryButton = document
  .getElementById("clear-history")
  .addEventListener("click", function () {
    document.getElementById("history-container").innerHTML = "";
  });
