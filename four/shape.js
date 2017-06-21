exports.Shape = class {
    constructor(sideLengthStr){
        this.sideLength = parseInt(sideLengthStr);
    }

    // stub
    get name() {throw new Error('Illegal Operation');}

    // stub
    get perimeter() {throw new Error('Illegal Operation');}

    // stub
    get area() {throw new Error('Illegal Operation');}

    // stub
    toString() {
        return `a ${this.name}, with a side length of ${this.sideLength}, having a perimeter of ${this.perimeter} and an area of ${this.area} units square`;
    }
};
