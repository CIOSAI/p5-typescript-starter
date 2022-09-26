var sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.clear();
    p.fill(40);
    p.rect(20, 40, 50, 50);
  };
};
new p5(sketch);

var sketch2 = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.clear();
    p.fill(200, 40, 40);
    p.rect(60, 40, 50, 50);
  };
};
new p5(sketch2);