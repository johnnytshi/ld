var { Shape } = require('./shape');

class Circle extends Shape {
    get name() {
        return 'circle';
    }

    get perimeter() {
        return (Math.PI * (this.sideLength + this.sideLength)).toFixed(2);
    }

    get area() {
        return (Math.PI * (this.sideLength + this.sideLength)).toFixed(2);
    }

    toString() {
        return `a circle, with a radius of ${this.sideLength}, having a perimeter of ${this.perimeter} and an area of ${this.area} units square`;
    }
}

exports.Circle = Circle;
