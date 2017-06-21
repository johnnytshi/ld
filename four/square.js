var { Shape } = require('./shape');

class Square extends Shape {
    get name() {
        return 'square';
    }

    get perimeter() {
        return (this.sideLength * 4).toFixed(2);
    }

    get area() {
        return  (this.sideLength * this.sideLength).toFixed(2);
    }
}

exports.Square = Square;
