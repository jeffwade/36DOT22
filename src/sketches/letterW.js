import { initializeCanvas, blurHSB, scaleCanvas, markWIP, showCursor} from './helpers';
import colors from './colors';
import _1 from './images/letterW1.jpg';
import _2 from './images/letterW2.jpg';
import _3 from './images/letterW3.jpg';
import _4 from './images/letterW4.jpg';
import _5 from './images/letterW5.jpg';
import _6 from './images/letterW6.jpg';


const letterN = (p) => {
  initializeCanvas(p);

  // create an array of the color names
  const colorKeys = Object.keys(colors);
  // remove opacity from array
  colorKeys.splice(0, 1);
  // a for alpha

  // named colors
  const { black, white, } = colors;
  const a = colors.opacity;
  let fgColor, bgColor;

  let cnvs;
  let images = [];

  // variables for mask
  let clicks = 0;

  p.preload = () => {
    images[0] = p.loadImage(_1);
    images[1] = p.loadImage(_2);
    images[2] = p.loadImage(_3);
    images[3] = p.loadImage(_4);
    images[4] = p.loadImage(_5);
    images[5] = p.loadImage(_6);
  };

  p.setup = () => {
    cnvs = initializeCanvas(p);

    p.colorMode(p.HSB, 360, 100, 100, 100);
    fgColor = p.color(white.h, white.s, white.b, white.a);
    bgColor = p.color(black.h, black.s, black.b, black.a);

    p.ellipseMode(p.RADIUS);

    p.noCursor();
    p.frameRate(30);

    p.background(bgColor);
  };

  let r = 12;
  let c = [ 300, 89, 74, 70 ];
  p.draw = () => {
    let index = Math.floor(p.map(p.mouseX, 0, p.width, 0, 5, true));
    p.image(images[index], 0, 0, p.width, p.height);
    p.push();
    p.fill(255, 60);
    p.stroke(c[0], c[1], c[2], c[3]);
    p.line(p.mouseX, 0, p.mouseX, p.mouseY - r);
    p.line(p.mouseX, p.mouseY + r, p.mouseX, p.height);
    p.circle(p.mouseX, p.mouseY, r);
    p.pop();
    p.textAlign(p.CENTER, p.CENTER);
    p.push();
    p.fill(c[0], c[1], c[2], c[3]);
    p.text(index + 1, p.mouseX, p.mouseY);
    p.pop();
    blurHSB(p, black.h, black.s, black.b, a.low);
  };

  p.windowResized = () => {
    scaleCanvas(p);
  }
};

export default letterN;
