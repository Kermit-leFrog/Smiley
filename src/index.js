//

// var face = document.querySelector(".face");
var mouth = document.getElementById("mouth");
var eyeleft = document.getElementById("eyeleft");
var eyeright = document.getElementById("eyeright");

function control(e) {
  switch (e.key) {
    case "ArrowUp":
      console.log("up pressed");
      mouth.className = "smile";
      break;
    case "ArrowDown":
      console.log("down pressed");
      mouth.classList.remove("smile");
      mouth.classList.add("frown");
      break;
    default:
      console.log("key not recognised.");
  }
}

var blink = function () {
  eyeleft.className = "eyeclosed";
  eyeright.className = "eyeclosed";
  setTimeout(function () {
    eyeleft.className = "eyeopen";
    eyeright.className = "eyeopen";
  }, 200);
};

setInterval(blink, 5000);
document.addEventListener("keydown", control);
