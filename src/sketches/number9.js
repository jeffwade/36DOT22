import { initializeCanvas, scaleCanvas } from "./helpers";
import colors from "./colors";
import bg from "./images/number9-bg.png";
import fg from "./images/number9.png";

const number9 = (p) => {
  // create an array of the color names
  const colorKeys = Object.keys(colors);
  // remove opacity from array
  colorKeys.splice(0, 1);
  // a for alpha
  const a = colors.opacity;

  // named colors
  const { white } = colors;

  let cnvs;
  let ground, figure;

  const points = [];
  const wanderers = [];
  let objIndex = 0;
  const r = 5;

  p.preload = () => {
    ground = p.loadImage(bg);
    figure = p.loadImage(fg);
  };

  let iIndex = 0;
  let jIndex = 0;
  p.setup = () => {
    cnvs = initializeCanvas(p);

    p.colorMode(p.HSB, 360, 100, 100, 100);

    p.ellipseMode(p.RADIUS);

    p.noCursor();
    p.frameRate(30);

    p.image(ground, 0, 0, p.width, p.height);
    plotPoints();
    addWanderer(0.3 * p.width, 0.15 * p.height);
  };

  const plotPoints = () => {
    for (let i = 25; i < p.width - 25; i += 25) {
      for (let j = 25; j < p.height - 25; j += 25) {
        j = j > p.height - 25 ? 25 : j;
        points.push({
          i: iIndex,
          j: jIndex,
          x: i,
          y: j,
          hue: p.random(0, 50),
        });
        jIndex++;
      }
      iIndex++;
    }
  }


  p.draw = () => {
    p.image(ground, 0, 0, p.width, p.height);

    p.push();
    p.noFill();
    if (points.length > 0) {
      for (let i = 0; i < points.length; i++) {
        let c = p.color(points[i].hue, 48, 98, 40);
        p.stroke(c);
        p.strokeWeight(5);

        if ((points[i].i + points[i].j) % 2) {
          p.point(points[i].x, points[i].y);
          // draw lines between points and cursor
          for (let j = 0; j < wanderers.length; j++) {
            let d = p.dist(
              wanderers[j].x,
              wanderers[j].y,
              points[i].x,
              points[i].y
            );
            if (d < 100) {
              p.line(wanderers[j].x, wanderers[j].y, points[i].x, points[i].y);
            }
          }
        }
      }
    }
    p.pop();
    p.image(figure, 0, 0, p.width, p.height);

    cnvs.mouseReleased(() => {
      addWanderer(p.mouseX, p.mouseY);
    });

    wander();
    markCursor();
  };

  const addWanderer = (_x, _y) => {
    wanderers.push({
      initX: _x,
      initY: _y,
      x: _x,
      y: _y,
      seed: 0.01 * p.random(1, 3),
      v: p.random(15, 200),
      o: p.random(20, 200),
    });
  };

  const wander = () => {
    for (let i = 0; i < wanderers.length; i++) {
      let w = wanderers[i];
      w.seed += 0.03;
      w["x"] = w.x + 0.1*w.v * p.noise(w.seed);
      w["y"] = w.initY + 2*w.v * p.noise(w.seed + 200);
    }
  };

  const markCursor = () => {
    p.push();
    p.noFill();
    p.stroke(white.h, white.s, white.b, a.highMid);
    p.line(p.mouseX - r, p.mouseY, p.mouseX + r, p.mouseY);
    p.line(p.mouseX, p.mouseY - r, p.mouseX, p.mouseY + r);
    p.pop();
  };

  const reset = () => {
    p.clear();
    points.length = 0;
    wanderers.length = 0;
    objIndex = 0;
    plotPoints();
    addWanderer(0.3 * p.width, 0.15 * p.height);
  };

  const print = () => {
    console.log(points);
  };

  p.keyPressed = () => {
    // spacebar to reset the sketch
    p.keyCode === 32 && reset();
    // P to print info to concole
    p.keyCode === 80 && print();
  };

  p.windowResized = () => {
    scaleCanvas(p);
  };
};

export default number9;
