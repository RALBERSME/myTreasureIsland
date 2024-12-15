const ball = document.getElementById("ball");
const start = document.getElementById("start");
const modal = document.getElementById("modal");
const back = document.getElementById("back");

function startBall() {
  start.classList.add("hide");
  ball.style.display = "block";
  modal.classList.add("hide");
  back.classList.add("hide");
  ball.style.animation = "moveBall1 1.5s 0s linear infinite";
  setTimeout(() => {
    ball.style.animation = "moveBall2 1.5s 0s linear infinite";
    console.log("I am here 0");
  }, 30000);
  setTimeout(() => {
    ball.style.animation = "moveBall3 1.5s 0s linear infinite";
    console.log("I am here 1");
    last();
  }, 60000);
}

function last() {
  setTimeout(() => {
    console.log("I am here 2");
    ball.style.display = "none";
    start.classList.remove("hide");
    back.classList.remove("hide");
  }, 30000);
}
