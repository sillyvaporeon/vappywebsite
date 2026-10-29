function swimForth() {
  document.getElementById("thoughts").src = "imgs/text.png";
}

const snd = document.getElementById("cry");
function lament() {
	cry();
	setInterval(cry, 60000);
}

function cry() {
	snd.play();
}
