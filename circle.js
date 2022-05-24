class circle {
    constructor(radius) {
        this.radius = 1.0;
        this.color = 'red';
    }

    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = void 0;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = void 0;
    }   
    toString() {
        return `radius: ${this.radius}, color: ${this.color}`;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }   
}

// class circle extends circle {

// }

const obj  = new circle(2);

const obj1 = new circle(this.radius, this.color);