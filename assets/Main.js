let config = {
	framesPerTube: 150,
	gap: 150,
};

let pipeSpeed = -2;
let bird;
let pipes = [];
let framecount = 0;
const msPerFrame = 1000 / 60;
let timer = 0;
let spacebartimer = 0;
let score = 0;
let HighScore = 0;

let windw = document.getElementById("canvas");
windw.width = 1200;
windw.height = 600;

let canvas = windw.getContext("2d");
canvas.font = "40px Arial";
canvas.fillText("R", windw.width / 2, windw.height / 2);
canvas.imageSmoothingEnabled = false;

let highScoreElement;
let imgcheck = true;
let spacebarTing;
let tubeSprite;

function startGame() {
	if (timer === 0) {
		score = 0;
		bird = new Bird(windw);
		pipes = [];
		framecount = 0;
		tubeSprite = document.getElementById("tubeSprite");

		highScoreElement = document.getElementById("HighScore");

		timer = setInterval(function () {
			RunGame();
		}, msPerFrame);
	}
}

function RunGame() {
	canvas.clearRect(0, 0, windw.width, windw.height);
	if (framecount % config.framesPerTube == 0) {
		pipes.push(new Pipe(config.gap));
	}
	bird.update();
	bird.draw();
	for (let i = 0; i < pipes.length; i++) {
		if (pipes[i].update() === true) pipes.shift();
		pipes[i].draw();
	}
	bird.Collided(pipes[0]);
	canvas.fillStyle = "#000";
	canvas.fillText(score, 10, windw.height - 10);
	framecount++;

	if (bird.d === true) {
		canvas.fillText("R", windw.width / 2, windw.height / 2);
		clearInterval(timer);
		timer = 0;

		if (score > HighScore) {
			HighScore = score;
			highScoreElement.textContent = HighScore;
		}
	}
}

function ChangeDif(n, elem) {
	if (timer === 0) {
		config.gap = 200 - n * 25;
		config.framesPerTube = 200 - n * 25;

		document
			.getElementsByClassName("selected")[0]
			.removeAttribute("class", "selected");
		elem.setAttribute("class", "selected");
	}
}

let muteCheck = false;
ToggleMute();
function ToggleMute() {
	let audios = document.getElementsByTagName("audio");
	if (muteCheck === false) {
		document
			.getElementById("muteImg")
			.setAttribute("src", "assets/imgsou/mute.png");
		for (let i = 0; i < audios.length; i++) audios[i].muted = true;
		muteCheck = true;
	} else {
		document
			.getElementById("muteImg")
			.setAttribute("src", "assets/imgsou/sound.png");
		for (let i = 0; i < audios.length; i++) audios[i].muted = false;
		muteCheck = false;
	}
}
let ready = true;
document.onkeypress = function (event) {
	if (event.key === "r") {
		document.getElementById('heightSlider').value = 50;	
		startGame();
	}
};

document.onkeyup = function () {
	ready = true;
};

function BirdChange(inputElement) {
	if (bird) {
		let amount = inputElement.value;
		bird.move(amount);
	}
}
