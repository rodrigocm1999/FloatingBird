class Pipe {
    constructor(gap) {
        this.posx = windw.width;
        this.width = 50;
        this.gap = gap;
        this.division = windw.height - this.gap - Math.floor(Math.random() * (windw.height - this.gap - 40));
        this.height = windw.height;
        this.aligned = false;
        this.aux = this.height - (this.division + this.gap);
        this.sprite = tubeSprite;
        this.parts = [];
        this.tubeHeadHeight = 30;
        this.tubeHeadExtraHalfWidth = 5;

        this.parts.push(new Rectangle(this.posx, 0, this.width, this.division - this.tubeHeadHeight));
        this.parts.push(new Rectangle(this.posx - this.tubeHeadExtraHalfWidth, this.division - this.tubeHeadHeight, this.width + this.tubeHeadExtraHalfWidth * 2, this.tubeHeadHeight));

        this.parts.push(new Rectangle(this.posx - this.tubeHeadExtraHalfWidth, this.division + this.gap, this.width + this.tubeHeadExtraHalfWidth * 2, this.tubeHeadHeight));
        this.parts.push(new Rectangle(this.posx, this.division + this.gap + this.tubeHeadHeight, this.width, this.height - (this.division + this.gap + this.tubeHeadHeight)));

    }
    update() {
        this.posx += pipeSpeed;
        for (let i = 0; i < this.parts.length; i++) {
            this.parts[i].x += pipeSpeed;
        }
        if (this.posx <= -this.width) {
            return true;
        }
        return false;
    }
    draw() {
        for (let i = 0; i < this.parts.length; i++) {
            canvas.fillStyle = "#0A0";
            this.parts[i].Show();
        }
    }

}
