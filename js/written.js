function swimForth() {
  document.getElementById("canvas").style.backgroundImage = "url('text.png')";
}

setInterval(lament, 55000);
const snd = document.getElementById("cry");
function lament() {
	snd.play();
}