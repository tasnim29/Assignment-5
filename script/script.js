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
    const hour = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();
    div.innerHTML = `
    <h2>"You have Complete The Task" ${titleBox} "at ${hour}:${min}:${sec} "</h2>
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

// click discover something
document
  .getElementById("discover-something")
  .addEventListener("click", function () {
    window.location.href = "./blog.html";
  });

//change background color
document
  .getElementById("background-change-btn")
  .addEventListener("click", function (event) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    event.target.style.transform = "rotate(180deg)";
    document.body.style.backgroundColor = randomColor;
  });

// get the dynamic date
const todayDate = document.getElementById("today-date");
const months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date();
year = today.getFullYear();
date = today.getDate();
day = days[today.getDay()];
month = months[today.getMonth()];
todayDate.innerHTML = `${day}, <br/> <h1 class="font-bold text-lg">${month} ${date} ${year}</h1>`;
