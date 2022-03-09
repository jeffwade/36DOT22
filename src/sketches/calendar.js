import { initializeCanvas, blurHSB } from './helpers';
import img from './images/dotCalendar.png';
import colors from './colors';

let calendar;

const Calendar = (p) => {
  initializeCanvas(p);

  // vectors
  const center = {x: p.width/2, y: p.height/2};

  // create an array of the color names
  const colorKeys = Object.keys(colors);
  // remove opacity from array
  colorKeys.splice(0, 1);
  // a for alpha
  const a = colors.opacity;

  // add named colors
  const { black, pink, } = colors;
  let fgColor, bgColor;

  let cnvs;

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
    p.push();
    p.translate(p.mouseX, p.mouseY);
    p.fill(fgColor);
    p.noStroke();
    p.circle(0,0,20);
    p.pop();

    p.image(calendar, 0, 0, p.width, p.height);
    blurHSB(p, pink.h, pink.s, pink.b, a.low);
  };
};

export default Calendar;
