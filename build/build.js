var sketch = function (p) {
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
    };
    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
    p.draw = function () {
        p.clear();
        p.fill(40);
        p.rect(20, 40, 50, 50);
    };
};
new p5(sketch);
var sketch2 = function (p) {
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
    };
    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
    p.draw = function () {
        p.clear();
        p.fill(200, 40, 40);
        p.rect(60, 40, 50, 50);
    };
};
new p5(sketch2);
var sketch = function (p) {
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
    };
    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
    p.draw = function () {
        p.clear();
        p.fill(40);
        p.rect(20, 40, 50, 50);
    };
};
new p5(sketch);
var sketch2 = function (p) {
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
    };
    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
    p.draw = function () {
        p.clear();
        p.fill(200, 40, 40);
        p.rect(60, 40, 50, 50);
    };
};
new p5(sketch2);
//# sourceMappingURL=build.js.map