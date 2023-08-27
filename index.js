"use strict";
class shape {
    info() {
        return "this is a shape";
    }
    draw() {
        return "drawing a shape";
    }
}
class rectangle extends shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
    info() {
        return "this is a rectangle";
    }
    scale() {
        this.height += 10;
        this.width += 10;
        return this;
    }
    static countToRec(rec1, rec2) {
        return new rectangle(rec1.area(), rec2.area());
    }
}
class colorRectangle extends rectangle {
    constructor(color, height, width) {
        super(height, width);
        this.color = color;
    }
    info() {
        return `this is a  ${this.color} rectangle`;
    }
}
class square extends rectangle {
    constructor(heightLength, department) {
        super(heightLength, heightLength);
        this.department = department;
    }
}
let square1 = new square(10, "square 1");
console.log(square1.area());
