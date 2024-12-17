let audio = new Audio("pirates.mp3");
const startBtn = document.getElementById("startBtn");
let videoElem = document.getElementById("video");

function playSong() {
  audio.play();
  videoElem.style.animation = "showVideo 1s 0s linear forwards";
  videoElem.play();
  setTimeout(() => {
    startBtn.classList.remove("hide");
  }, 12000);
}
