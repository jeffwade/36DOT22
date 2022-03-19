import { initializeCanvas, scaleCanvas, blurHSB, showCursor } from './helpers';
import img from './images/dotCalendar.png';
import colors from './colors';
import  characters from './characters';

let calendar;

const Calendar = (p) => {
  initializeCanvas(p);

  // create an array of the color names
  const colorKeys = Object.keys(colors);
  // remove opacity from array
  colorKeys.splice(0, 1);
  // a for alpha
  const a = colors.opacity;

  // add named colors
  const { black, pink, } = colors;
  let fgColor, bgColor;

  p.preload = () => {
    calendar = p.loadImage(img);
  };

  p.setup = () => {
    initializeCanvas(p);

    p.colorMode(p.HSB, 360, 100, 100, 100);
    fgColor = p.color(black.h, black.s, black.b, black.a);
    bgColor = p.color(pink.h, pink.s, pink.b, pink.a);

    p.ellipseMode(p.RADIUS);

    p.noCursor();
    p.frameRate(30);

    p.background(bgColor);
  };

  p.draw = () => {
    p.image(calendar, 0, 0, p.width, p.height);
    blurHSB(p, pink.h, pink.s, pink.b, a.low);
    showCursor(p, fgColor, undefined, true);
    markCalendar();
  };

  p.windowResized = () => {
    scaleCanvas(p);
  }

  const drawX = (_x, _y, _r) => {
    p.push();
    p.translate(_x, _y);
    p.noFill();
    p.stroke(p.hue(fgColor), a.mid);
    p.strokeWeight(4);
    p.line(-_r, -_r, _r, _r);
    p.line(-_r, _r, _r, -_r);
    p.pop();
  };

  const grid = {
    x: 66,
    y: 104,
    w: 75,
  };
  const markCalendar = () => {
    let j = 0;
    for ( let i = 0;  i < characters.length-2; i++ ) {
      j = ( (i>0) && (i%7 === 0) ) ?
        j + 1
        : j;
      drawX(grid.x + ( i%7 )*grid.w, grid.y + j*grid.w, 20);
    }
    p.push();
    p.noFill();
    p.stroke(p.hue(fgColor), a.mid);
    p.strokeWeight(4);
    p.circle(grid.x + ((characters.length-2)%7)*grid.w, grid.y + j*grid.w, 20);
    p.pop();
  };
};

export default Calendar;
