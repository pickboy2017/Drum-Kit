var n = document.querySelectorAll(".drum").length;
var tom3 = new Audio("sounds/tom-3.mp3");

for (i = 0; i < n; i++) {
  document
    .querySelectorAll(".w")
    [i].addEventListener("click", function handleClick() {
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    });
  document
    .querySelectorAll(".a")
    [i].addEventListener("click", function handleClick() {
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    });

  document
    .querySelectorAll(".l")
    [i].addEventListener("click", function handleClick() {
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    });

  document
    .querySelectorAll(".d")
    [i].addEventListener("click", function handleClick() {
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    });

  document
    .querySelectorAll(".j")
    [i].addEventListener("click", function handleClick() {
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    });

  document
    .querySelectorAll(".k")
    [i].addEventListener("click", function handleClick() {
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    });

  document
    .querySelectorAll(".s")
    [i].addEventListener("click", function handleClick() {
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    });
}
