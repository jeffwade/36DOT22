import { initializeCanvas, blurHSB, scaleCanvas } from './helpers';
import colors from './colors';
import dStaff from './images/letterD/dStaff.png';
import dNote from './images/letterD/dNote.png';

const letterD = (p) => {
  initializeCanvas(p);

  // create an array of the color names
  const colorKeys = Object.keys(colors);
  // remove opacity from array
  colorKeys.splice(0, 1);
  // a for alpha
  const a = colors.opacity;

  // named colors
  const { white, } = colors;
  let bgColor;

  let cnvs;
  let staff, note;

  // variables for mask
  let noteH = 1;
  let noteW = 0.445 * noteH;
  let scale;

  p.preload = () => {
    staff = p.loadImage(dStaff);
    note = p.loadImage(dNote);
  };

  p.setup = () => {
    cnvs = initializeCanvas(p);

    p.colorMode(p.HSB, 360, 100, 100, 100);
    bgColor = p.color(white.h, white.s, white.b, white.a);

    p.ellipseMode(p.RADIUS);

    p.noCursor();
    p.frameRate(30);

    p.background(bgColor);
    scale = 0.4*p.width;
    noteW = scale * noteW;
    noteH = scale * noteH;
  };

  /*
   * ADD
   * SOUND
  */
  p.draw = () => {
    p.image(staff, 0, 0, p.width, p.height);
    p.push();
    p.translate(p.mouseX, p.mouseY);
    p.fill(colors.red.h, colors.red.b, colors.red.b, a.low);
    p.noStroke();
    p.circle(0,0,5);
    p.pop();

    blurHSB(p, white.h, white.s, white.b, a.low);

    cnvs.mousePressed(() => {
      p.image(note, p.mouseX - noteW/2, p.mouseY - 0.85*noteH, noteW, noteH);
    });
  };

  p.windowResized = () => {
    scaleCanvas(p);
    scale = 0.4*p.width;
    noteW = scale * noteW;
    noteH = scale * noteH;
  };
};

export default letterD;
