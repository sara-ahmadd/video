let controlVideo = document.querySelectorAll(".child");
//get an array from the returned nodelist so we can loop on it.
let buttons = Array.from(controlVideo);

let play = document.getElementById("play");
//the play button on click, will play the video.
let active = document.querySelector(".active");
play.addEventListener("click", (e) => {
  active.style.cssText = "animation: left 1s linear forwards";
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  play.classList.add("active");
  document.querySelector("video").play();
});
//the pause button on click, will pause the video.
let pause = document.querySelector("#pause");
pause.addEventListener("click", (e) => {
  active.style.cssText = "animation: right 1s linear forwards";
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  pause.classList.add("active");
  document.querySelector("video").pause();
});

