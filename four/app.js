/*
    the focus of this question is OO and inheritance
*/
var fs = require('fs');

var { Circle } = require('./circle');
var { Pentagon } = require('./pentagon');
var { Square } = require('./square');
var { Triangle } = require('./triangle');

// process the cvs
fs.readFileSync('./input.csv').toString().trim().split('\n').forEach(function (line, index) {
    var pair = line.split(',');
    var shape;
    switch(pair[0].trim()) {
        case 'circle':
            shape = new Circle(pair[1]);
            break;
        case 'pentagon':
            shape = new Pentagon(pair[1]);
            break;
        case 'square':
            shape = new Square(pair[1]);
            break;
        case 'triangle':
            shape = new Triangle(pair[1]);
            break;
        default:
            throw new Error();
    }

    console.log(`Shape ${index + 1} is ${shape.toString()}`);
});
