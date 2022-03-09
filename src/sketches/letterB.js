import { initializeCanvas, blurHSB } from './helpers';
import colors from './colors';
import pos from './images/letterB-positive.jpg';
import neg from './images/letterB-negative.jpg';


const letterB = (p) => {
  initializeCanvas(p);

  // vectors
  const center = {x: p.width/2, y: p.height/2};

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
  let clicks = 0;


  p.preload = () => {
    positive = p.loadImage(pos);
    negative = p.loadImage(neg);
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

  p.draw = () => {
    let currentImage = ( clicks%2 )
      ? positive
      : negative
    ;
    p.image(currentImage, 0, 0, p.width, p.height);
    p.push();
    p.translate(p.mouseX, p.mouseY);
    p.fill(fgColor);
    p.noStroke();
    p.circle(0,0,20);
    p.pop();

    blurHSB(p, black.h, black.s, black.b, a.low);
    cnvs.mousePressed(() => {
      clicks++;

    });
  };
};

export default letterB;
