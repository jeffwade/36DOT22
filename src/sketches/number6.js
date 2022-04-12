import { initializeCanvas, blurHSB, scaleCanvas, showCursor } from './helpers';
import colors from './colors';
import bg from './images/number6-bg.png';
import fg from './images/number6.png';


const number6 = (p) => {
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
  let ground, figure;

  p.preload = () => {
    ground = p.loadImage(bg);
    figure = p.loadImage(fg);
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
    p.image(ground, 0, 0, p.width, p.height);
  };

  let noiseSeed = 0;
  const hexes = {};
  let hexIndex = 0;
  const r = 5;

  p.draw = () => {
    p.image(ground, 0, 0, p.width, p.height);
    for ( const h in hexes ) {
      let c = p.color(hexes[h].hue, 13, 94, 95);
      p.stroke(c);
      drawHex(
        hexes[h].x,
        hexes[h].y,
        (p.width/2)*p.noise(noiseSeed*hexes[h].s),
      );
    }
    p.image(figure, 0, 0, p.width, p.height);
    p.push();
    p.noFill();
    p.stroke(white.h, white.s, white.b, a.highMid);
    p.line(p.mouseX - r, p.mouseY, p.mouseX + r, p.mouseY);
    p.line(p.mouseX, p.mouseY - r, p.mouseX, p.mouseY + r);
    p.pop();

    // blurHSB(p, black.h, black.s, black.b, a.low);
    cnvs.mousePressed(() => {
      hexes[`${hexIndex}`] = {
        x: p.mouseX,
        y: p.mouseY,
        s: p.random(0.5, 2),
        hue: p.random(360),
      }
      hexIndex++;
    });
    cnvs.mouseReleased(() => {
      hexes[`${hexIndex}`] = {
        x: p.mouseX,
        y: p.mouseY,
        s: p.random(0.5, 2),
        hue: p.random(360),
      }
      hexIndex++;
    });
    noiseSeed += 0.01;
  };

  p.mouseDragged = () => {
    drawHex(p.mouseX, p.mouseY, (p.width/2)*p.noise(noiseSeed));
    noiseSeed += 0.01;
  }

//   const drawHexStar = (_x, _y, _r) => {
//     p.push();
//     p.stroke(255, 80);
//     for ( let i = 0;  i < 6; i++ ) {
//       p.line(
//         getPolyPoint(_x, _y, 6, _r, i)[0], getPolyPoint(_x, _y, 6, _r, i)[1],
//         getPolyPoint(_x, _y, 6, _r + 10, i + 1)[0], getPolyPoint(_x, _y, 6, _r + 10, i + 1)[1],
//       )
//     }
//     p.pop();
//   };


  const getPolyPoint = ( initX, initY, sides, radius, point ) => {
    return [
      initX + radius * p.cos( point * p.TAU/sides ),
      initY + radius * p.sin( point * p.TAU/sides )
    ];
  };

  const drawHex = (_x, _y, _r, _c) => {
    // p.stroke( _c )
    for ( let i = 0;  i < 6; i++ ) {
      p.line(
        getPolyPoint(_x, _y, 6, _r, i)[0], getPolyPoint(_x, _y, 6, _r, i)[1],
        getPolyPoint(_x, _y, 6, _r, i + 1)[0], getPolyPoint(_x, _y, 6, _r, i + 1)[1],
      )
    }
  };

  const reset = () => {
    p.clear();
    for ( const h in hexes ) {
      delete hexes[h];
    }
    p.setup();
  };

  const print = () => {
    console.log( hexes );
  };

  p.keyPressed = () => {
    // spacebar to reset the sketch
    (( p.keyCode === 32 ) && ( reset() ));
    // P to print info to concole
    (( p.keyCode === 80 ) && ( print() ));
  };

  p.windowResized = () => {
    scaleCanvas(p);
  }
};

export default number6;
