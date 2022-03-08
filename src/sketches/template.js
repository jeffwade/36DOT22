import { initializeCanvas, blurHSB } from './helpers';
import colors from './colors';


const sketch = (p) => {
  initializeCanvas(p);

  // vectors
  const center = {x: pwidth/2, y: height/2};

  // create an array of the color names
  const colorKeys = Object.keys(colors);
  // remove opacity from array
  colorKeys.splice(0, 1);
  // a for alpha
  const a = colors.opacity;

  // add named colors
  const { black, white, } = colors;
  let fgColor, bgColor;

  let cnvs;

  p.preload = () => {
    topImg = p.loadImage(front);
    bottomImg = p.loadImage(back);
  };

  p.setup = () => {
    initializeCanvas(p);

    p.colorMode(p.HSB, 360, 100, 100, 100);
    fgColor = p.color(black.h, black.s, black.b, black.a);
    bgColor = p.color(white.h, white.s, white.b, white.a);

    p.ellipseMode(p.RADIUS);

    p.noCursor();
    p.frameRate(30);

    p.background(bgColor);
  };

  p.draw = () => {
    p.push();
    p.translate(center.x, center.y);
    p.fill(fgColor);
    p.noStroke();
    p.circle(0,0,20);
    p.pop();

    p.image(positive, 0, 0, p.width, p.height);
    blurHSB(p, black.h, black.s, black.b, a.low);
  };
};

export default sketch;
