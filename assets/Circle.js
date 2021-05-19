class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    Show() {
        canvas.beginPath();
        canvas.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        canvas.fill();
        canvas.stroke();
    }

    Intersects_Rect(rect) {
        let aux_x, aux_y;

        if (this.x < rect.x)
            aux_x = rect.x;
        else if (this.x > rect.x + rect.w)
            aux_x = rect.x + rect.w;
        else
            aux_x = this.x;
        if (this.y < rect.y)
            aux_y = rect.y;
        else if (this.y > rect.y + rect.h)
            aux_y = rect.y + rect.h;
        else
            aux_y = this.y;

        let a = aux_x - this.x;
        let b = aux_y - this.y;

        let distance = Math.sqrt(a * a + b * b);
        if (distance < this.r) {
            return true;
        }
        return false;
    }
}
