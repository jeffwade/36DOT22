import { initializeCanvas, blurHSB, scaleCanvas, markWIP, showCursor} from './helpers';
import colors from './colors';
import fg from './images/letterJ.png';
import bg from './images/letterJ-bg.png';


const letterJ = (p) => {
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
  let figure, ground;

  // variables for mask
  let clicks = 0;

  p.preload = () => {
    figure = p.loadImage(fg);
    ground = p.loadImage(bg);
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
      ? ground
      : figure
    ;
    p.image(currentImage, 0, 0, p.width, p.height);

    showCursor(p, fgColor, bgColor);
    blurHSB(p, black.h, black.s, black.b, a.low);
    cnvs.mousePressed(() => {
      clicks++;
    });
    markWIP(p);
  };

  p.windowResized = () => {
    scaleCanvas(p);
  }
};

export default letterJ;
