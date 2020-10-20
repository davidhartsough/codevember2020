const logo = document.getElementById("logo");
const audio = new Audio("sound.mp3");

const getRandomNumber = (min, max) => Math.floor(Math.random() * max + min);

function doThing() {
  console.log("NOICE");
  audio.play();
  const backgroundColor = `hsl(${getRandomNumber(1, 359)}, 100%, 50%)`;
  document.body.style.backgroundColor = backgroundColor;
}

logo.addEventListener("click", doThing);
