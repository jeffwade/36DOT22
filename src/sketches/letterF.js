import { initializeCanvas, markWIP, scaleCanvas, blurHSB } from './helpers';
import img from './images/letterF.png';
import colors from './colors';

let paperH;

const letterF = (p) => {
  initializeCanvas(p);

  // create an array of the color names
  const colorKeys = Object.keys(colors);
  // remove opacity from array
  colorKeys.splice(0, 1);
  // a for alpha
  const a = colors.opacity;

  // add named colors
  const { black, green, } = colors;
  let bgColor;

  const radius = 400;
  const sw = 19;
  const hW = 2*sw;

  p.preload = () => {
    paperH = p.loadImage(img);
  };

  p.setup = () => {
    initializeCanvas(p);

    p.colorMode(p.HSB, 360, 100, 100, 100);
    bgColor = p.color(green.h, green.s, green.b, green.a);

    p.ellipseMode(p.RADIUS);

    p.noCursor();
    p.frameRate(30);

    p.background(bgColor);
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
