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
        /*//Tubo de baixo
        this.canvas.drawImage(this.sprite, 0, 0, 138, this.height + (this.division + this.gap), this.posx, this.division + this.gap, 50, this.division);
        //Tubo de cima
        this.canvas.drawImage(this.sprite, 138, 0, 138, 793, this.posx, this.division + this.gap, 50, this.division);*/
        /*
        this.canvas.fillStyle = "#AAA";
        this.canvas.fillRect(this.posx, 0, this.width, this.division);
        //Tubo Acima
        this.canvas.fillRect(this.posx, this.division + this.gap, this.width, this.aux);
        //Tubo Abaixo
        */
        for (let i = 0; i < this.parts.length; i++) {
            canvas.fillStyle = "#0A0";
            this.parts[i].Show();
        }
    }

}
