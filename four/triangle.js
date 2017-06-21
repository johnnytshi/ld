var { Shape } = require('./shape');

class Triangle extends Shape {
    get name() {
        return 'square';
    }

    get perimeter() {
        return (this.sideLength * 3).toFixed(2);
    }

    get area() {
        return  (0.433 * this.sideLength * this.sideLength).toFixed(2);
    }
}

exports.Triangle = Triangle;
