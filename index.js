// MouseClick Sound
var numberOfButton = document.querySelectorAll("button").length;

for (var i = 0; i < numberOfButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
      var buttonInnerhtml = this.innerHTML;
      produceSound(buttonInnerhtml);
      buttonAnimation(buttonInnerhtml);
    });
  }
// Keypress Sound
document.addEventListener("keydown", function(event) {
  produceSound(event.key);
  buttonAnimation(event.key);
});

function produceSound(key) {
  switch (key) {
    case "W":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "A":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "S":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "D":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "J":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "K":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "L":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(buttonInnerhtml);

  }
}
function buttonAnimation(currentKey){
var activeButton = document.querySelector("." + currentKey);

activeButton.classList.add("pressed");




}
