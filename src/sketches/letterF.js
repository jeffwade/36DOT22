import { initializeCanvas, markWIP, scaleCanvas, blurHSB } from './helpers';
import img from './images/letterF.png';
import colors from './colors';

let paperH;

const letterF = (p) => {
  class Haitch {
    constructor(_id, _x, _y, _w, _h, _color) {
      this.id = _id;
      this.x = _x;
      this.y = _y;
      this.w = _w;
      this.h = _h;
      this.color = _color;
    }

    display() {
      p.push();
      p.translate(this.x, this.y);
      p.blendMode( p.EXCLUSION );
      p.stroke(this.color);
      p.strokeWeight(this.w/3);
      p.line(-this.w/2, -this.h/2, -this.w/2, this.h/2);
      p.line(this.w/2, -this.h/2, this.w/2, this.h/2);
      p.push();
      p.strokeCap(p.SQUARE);
      p.line(-this.w/2 + this.w/6, 0, this.w/2 - this.w/6, 0);
      p.pop();
      p.pop();
    }

    isInRange(_x, _y, _range) {
      return (p.dist(this.x, this.y, _x, _y) <= _range);
    }
  }

  initializeCanvas(p);

  // create an array of the color names
  const colorKeys = Object.keys(colors);
  // remove opacity from array
  colorKeys.splice(0, 1);
  // a for alpha
  const a = colors.opacity;

  const center = { x: p.width/2, y: p.height/2 };

  // add named colors
  const { black, green, } = colors;
  let fgColor, bgColor;

  let cnvs;

  let haitches = [];
  const radius = 400;
  const sw = 19;
  const hW = 2*sw;
  const hH = 5*sw;

  p.preload = () => {
    paperH = p.loadImage(img);
  };

  let row = 0;
  let col = 0;
  p.setup = () => {
    cnvs = initializeCanvas(p);

    p.colorMode(p.HSB, 360, 100, 100, 100);
    fgColor = p.color(black.h, black.s, black.b, black.a);
    bgColor = p.color(green.h, green.s, green.b, green.a);

    p.ellipseMode(p.RADIUS);

    p.noCursor();
    p.frameRate(30);

    p.background(bgColor);

    // haitches.push(new Haitch(0, 200, 200, hW, hH, fgColor));
    let x = 0;
    let c = bgColor;
    for ( let i = 0; i < p.width; i += 2*hW ) {
      for ( let j = 0;  j < p.height + hH; j += hH/2 + sw ) {
        if ( row%2 === 1 ) {
          x = i + hW/2;
          // c = fgColor;
        } else {
           x = i;
          // c = bgColor;
        }
        haitches.push(new Haitch(`${i}:${j}`, x, j, hW, hH, c));
        row++;
      }
      col++;
      row = 0;
    }

  };

  p.draw = () => {
    blurHSB(p, black.h, black.s, black.b, a.high);
    p.image(paperH, 0, 0, p.width, p.height);
    showCursor(radius/4);
    markWIP(p)
  };

  const showCursor = (_radius) => {
    p.push();
    let r = radius/(1 + 0.2*p.dist(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY));
    p.translate(p.mouseX, p.mouseY);
    p.stroke(black.h, 20);
    p.strokeWeight(2);
    // p.noStroke();
    // p.noFill();
    p.fill( black.h, 1 );
    p.circle(0, 0, r + hW);
    p.pop();
  };

  p.windowResized = () => {
    scaleCanvas(p);
  }
};

export default letterF;
