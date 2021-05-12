class Rectangle {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }


    Show() {
        canvas.fillRect(this.x, this.y, this.w, this.h);
    }

    Intersects(other) {
        if (this.x > other.x + other.w)
            return false;
        if (this.x + this.w < other.x)
            return false;
        if (this.y > other.y + other.h)
            return false;
        if (this.y + this.h < other.y)
            return false;
        return true;
    }

}
