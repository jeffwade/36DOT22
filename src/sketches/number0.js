import { initializeCanvas, blurHSB, scaleCanvas, showCursor } from './helpers';
import colors from './colors';
import bg from './images/number0-pad.png';
import fg from './images/number0-paper.png';


const number0 = (p) => {
  class Spiral {
    constructor(_x, _y) {
      this.center = {x: _x, y: _y};
      this.position = {x: _x, y: _y}
      this.ampA = p.random(4, 12);
      this.ampB = this.ampA * 4.75;
      this.v = p.random(15, 21);
      this.rate = p.random(2, 4);
      console.log( "new spiral" );

      this.theta = 0;
      this.c = p.color(p.random(200, 345), 80, 94, 1);
      this.r = p.random(25, 80);
    }

    run() {
      this.update();
      this.display();
    }

    update() {
      this.theta = this.theta + this.v;
      let angle = p.radians(this.theta);

      this.position.x = this.ampA * p.cos(angle);
      this.position.y = this.ampB * p.sin(angle);

      this.ampA = this.ampA + 0.1*this.rate;
      this.ampB = this.ampB + 0.11*this.rate;
    }

    display() {
      p.push();
      p.translate(this.center.x, this.center.y);
      p.fill(this.c);
      p.noStroke();
      p.circle(this.position.x, this.position.y, this.r);
      p.pop();
    }
  }
  initializeCanvas(p);

  // create an array of the color names
  const colorKeys = Object.keys(colors);
  // remove opacity from array
  colorKeys.splice(0, 1);
  // a for alpha
  const a = colors.opacity;

  // named colors
  const { black, white, } = colors;
  let fgColor, bgColor;

  let cnvs;
  let positive, negative;

  // variables for mask
  let spirals = [];

  p.preload = () => {
    positive = p.loadImage(bg);
    negative = p.loadImage(fg);
  };

  p.setup = () => {
    cnvs = initializeCanvas(p);

    p.colorMode(p.HSB, 360, 100, 100, 100);
    fgColor = p.color(white.h, white.s, white.b, white.a);
    bgColor = p.color(black.h, black.s, black.b, black.a);

    p.ellipseMode(p.RADIUS);

    // p.noCursor();
    p.frameRate(30);

    p.background(bgColor);
    p.image(negative, 0, 0, p.width, p.height);
  };

  p.draw = () => {
    // showCursor(p, fgColor);

    for ( let i = 0; i < spirals.length; i++) {
      spirals[i].run();
    }
    p.image(positive, 0, 0, p.width, p.height);

    // blurHSB(p, black.h, black.s, black.b, a.low);
    cnvs.mousePressed(() => {
      spirals.push(new Spiral(p.mouseX, p.mouseY));
      // spirals.push(new Spiral(p.width/2, p.width/2));
    });
  };

  p.windowResized = () => {
    scaleCanvas(p);
  }
};

export default number0;
