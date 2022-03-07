import { blur } from './helpers';
import colors from './colors';
import p5, { 
  setup, draw,
  createCanvas, windowResized,
  windowWidth, windowHeight, width, height,
  push, pop, translate,
  mouseX, mouseY,
  color, colorMode, HSB,
  fill, noStroke, background,
  circle,
  ellipseMode, RADIUS,
  atan2,
  frameRate,
  cursor,
} from 'p5';


const letterA = () => {

  // vectors
  const center = {x: width/2, y: height/2};

  // colors
  const { black, white, } = colors;
  let fgColor, bgColor;

  let cnvs;

  setup = () => {
    const frameSize = (windowWidth > windowHeight) ? 0.6*windowHeight : 0.6*windowWidth;
    cnvs = createCanvas(frameSize, frameSize);

    colorMode(HSB, 360, 100, 100, 100);
    fgColor = color(black.h, black.s, black.b, black.a);
    bgColor = color(white.h, white.s, white.b, white.a);

    ellipseMode(RADIUS);

    cursor('pointer');
    frameRate(30);

    background(bgColor);
  };

  draw = () => {
    push();
    translate(center.x, center.y);
    fill(fgColor);
    noStroke();
    circle(0,0,20);
    pop();

    blur();
  };
};

export default letterA;
