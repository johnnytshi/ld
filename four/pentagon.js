var { Shape } = require('./shape');

class Pentagon extends Shape {
    get name() {
        return 'pentagon';
    }

    get perimeter() {
        return (this.sideLength * 5).toFixed(2);
    }

    get area() {
        return  (1.72 * this.sideLength * this.sideLength).toFixed(2);
    }
}

exports.Pentagon = Pentagon;
