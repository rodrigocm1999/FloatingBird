class Bird {
	constructor(window) {
		this.posx = 80;
		this.vel = 0;
		this.size = 15;
		this.d = false;
		this.jumpSound = document.getElementById("jump");
		this.pointSound = document.getElementById("point");
		this.img = document.getElementById("birdImg");

		this.birdSizeX = this.size * 2.8;
		this.birdSizeY = this.size * 2.1;

		this.bird = new Circle(this.posx, windw.height / 2, this.size);

		this.expectedPos = windw.height / 2;
	}
	update() {
		if (this.d === false) {
			let currentPos = this.bird.y;

			let change = this.expectedPos - currentPos;
			let percentageToChange = 0.05;
			let interpolated = currentPos + change * percentageToChange;

			this.vel = interpolated - currentPos;
			this.bird.y = interpolated;
		}
	}
	draw() {
		canvas.save();
		canvas.translate(this.bird.x, this.bird.y);
		let degrees = this.vel / 18 * 90;
		canvas.rotate((degrees * Math.PI) / 180);
		canvas.drawImage(this.img,
			-this.birdSizeX / 2,-this.birdSizeY / 2,
			this.birdSizeX,	this.birdSizeY
		);
		canvas.restore();
	}
	move(height) {
		height = height * 0.94 + 3;
		this.expectedPos = windw.height - (height * windw.height) / 100;
	}
	Collided(pipe) {
		for (let i = 0; i < pipe.parts.length; i++) {
			if (this.bird.Intersects_Rect(pipe.parts[i])) {
				this.d = true;
				break;
			}
		}
		if (this.d) {
			document.getElementById("hit").play();
			return;
		} else if (this.posx + this.size > pipe.posx
				&&	this.posx < pipe.posx + pipe.width) {
			//Alinhado com o tubo
			pipe.aligned = true;
		} else if (pipe.aligned === true) {
			//Se estava alinhado e agora nao está
			score++;
			this.pointSound.play();
			pipe.aligned = false;
		}
	}
}
