import { initializeCanvas, blurHSB, scaleCanvas, markWIP, showCursor} from './helpers';
import colors from './colors';
import fg from './images/letterT.png';


const letterT = (p) => {
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
  let figure;


  p.preload = () => {
    figure = p.loadImage(fg);
  };

  p.setup = () => {
    cnvs = initializeCanvas(p);

    p.colorMode(p.HSB, 360, 100, 100, 100);
    fgColor = p.color(white.h, white.s, white.b, white.a);
    bgColor = p.color(black.h, black.s, black.b, black.a);

    p.ellipseMode(p.RADIUS);

    p.frameRate(120);

    p.background(bgColor);
  };

  let x = Math.random() * p.width;
  let y = 0;
  let w = 5;

  p.draw = () => {

    cnvs.mousePressed(() => {
      x = p.mouseX;
      y = 0;
      let kcP = kc;
      let kc = p.random(colorKeys);
      console.log( kc );
      fgColor = p.color(colors[kc].h, colors[kc].s, colors[kc].b, 100);
    });
    if ( isTearing() ) {
      tearPage(x, w, fgColor);
    }

    p.image(figure, 0, 0, p.width, p.height);
    // blurHSB(p, black.h, black.s, black.b, a.low);
    // markWIP(p);
    // showCursor(p, fgColor, bgColor);
  };

  const isTearing = () => {
    return y < p.height;
  };

  let xOff = 0.0;
  const tearPage = (_x, _h, _c) => {
    let tearX = _x + 5*p.noise(xOff) * _h;
    p.push();
    p.noStroke();
    p.fill(_c);
    p.rect(tearX, y, p.width - tearX, _h);
    p.pop();

    xOff = xOff + 0.3;
    y = y + _h;
  };

  p.windowResized = () => {
    scaleCanvas(p);
  }

};

export default letterT;
