import { initializeCanvas, blurHSB, scaleCanvas } from './helpers';
import colors from './colors';
import cFull from './images/letterC/cFull.png';
import cBlue from './images/letterC/cBlue.png';
import cWhite from './images/letterC/cWhite.png';
import cYellow from './images/letterC/cYellow.png';


const letterC = (p) => {
  initializeCanvas(p);

  // create an array of the color names
  const colorKeys = Object.keys(colors);
  // remove opacity from array
  colorKeys.splice(0, 1);
  // a for alpha
  const a = colors.opacity;

  // named colors
  const { mint, white,  } = colors;
  let fgColor, bgColor;

  let cnvs;
  let Full, Blue, White, Yellow;

  // variables for mask
  let clicks = 0;


  p.preload = () => {
    Full = p.loadImage(cFull);
    Blue = p.loadImage(cBlue);
    White = p.loadImage(cWhite);
    Yellow = p.loadImage(cYellow);
  };

  p.setup = () => {
    cnvs = initializeCanvas(p);

    p.colorMode(p.HSB, 360, 100, 100, 100);
    bgColor = p.color(white.h, white.s, white.b, a.low);
    fgColor = p.color(mint.h, mint.s, mint.b, a.low);

    p.ellipseMode(p.RADIUS);

    p.noCursor();
    p.frameRate(30);

    p.background(bgColor);
    p.noStroke();
  };

  let currentImage;
  let xPos, yPos;
  let t;
  let rate = 3;
  let r = 0.19*p.height; // radius of curve
  let radius = 150; //radius of circles
  let yInit = 0.35*p.height;
  let xInit = 0.8*p.width;
  let xLen = 0.4*p.width;

  p.draw = () => {
    switch ( clicks%4 ) {
      default:
      case 3:
        currentImage = Blue;
        break;
      case 2:
        currentImage = Yellow;
        break;
      case 1:
        currentImage = Full;
        break;
      case 0:
        currentImage = White;
        break;
    }

    t = rate*p.frameCount%540;
    fgColor = p.color((mint.h + 1.5*p.frameCount)%360, mint.s, mint.b, a.low);
    if ( t < 90 ) {
      xPos = xInit - t/90 * (xLen);
      yPos = yInit;
    } else if ( t < 180 ) {
      xPos = xInit - xLen + r*Math.cos(-2*(t - 90)*Math.PI/180 - Math.PI/2);
      yPos = yInit + r + r*Math.sin(2*t*Math.PI/180 + Math.PI/2);
    } else if ( t < 270 ) {
      xPos = xInit - xLen + (t-180)/90 * (xLen);
      yPos = yInit + 2*r;
    } else if ( t < 360 ) {
      xPos = xInit - (t-270)/90 * (xLen);
      yPos = yInit + 2*r;
    } else if ( t < 450 ) {
      xPos = xInit - xLen + r*Math.cos(-2*(t - 90)*Math.PI/180 + Math.PI/2);
      yPos = yInit + r + r*Math.sin(2*t*Math.PI/180 + Math.PI/2);
    } else {
      xPos = xInit - xLen + (t - 450)/90 * (xLen);
      yPos = yInit;
    }

    p.push();
      p.fill(fgColor);
      p.push();
        p.translate(xPos, yPos);
        p.circle(0,0,radius);
      p.pop();
      p.push();
        p.translate(xPos, 1.05*p.height-yPos);
        p.circle(0,0,radius);
      p.pop();
    p.pop();

    p.image(currentImage, 0, 0, p.width, p.height);
    p.image(Blue, 0, 0, p.width, p.height);

    blurHSB(p, white.h, white.s, white.b, a.low);
    cnvs.mousePressed(() => {
      clicks++;

    });
  };

  p.windowResized = () => {
    scaleCanvas(p);
  }
};

export default letterC;
