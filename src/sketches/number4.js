import { initializeCanvas, blurHSB, scaleCanvas, markWIP, showCursor} from './helpers';
import colors from './colors';
import _1 from './images/number4-ybgp.png';
import _2 from './images/number4-pgyb.png';
import _3 from './images/number4-bypg.png';
import _4 from './images/number4-gpby.png';


const number4 = (p) => {
  initializeCanvas(p);

  // create an array of the color names
  const colorKeys = Object.keys(colors);
  // remove opacity from array
  colorKeys.splice(0, 1);

  // named colors
  const { black, white, } = colors;
  // a for alpha
  const a = colors.opacity;
  let fgColor, bgColor;

  let cnvs;
  let images = [];
  let overlays = {};

  let r = 12;
  let c = [ 300, 89, 74, 70 ];
  let clicks = 0;
  let index = 0;
  let seed = 0;
  const quad = {}
  p.preload = () => {
    images[0] = p.loadImage(_1);
    images[1] = p.loadImage(_2);
    images[2] = p.loadImage(_3);
    images[3] = p.loadImage(_4);
  };

  p.setup = () => {
    cnvs = initializeCanvas(p);

    p.colorMode(p.HSB, 360, 100, 100, 100);
    fgColor = p.color(white.h, white.s, white.b, white.a);
    bgColor = p.color(black.h, black.s, black.b, black.a);

    p.ellipseMode(p.RADIUS);
    p.rectMode(p.CORNERS);

    p.noCursor();
    p.frameRate(30);

    p.background(bgColor);
  };
;
  p.draw = () => {
    blurHSB(p, black.h, black.s, black.b, a.mid);
    p.image(images[seed], 0, 0, p.width, p.height);
    p.push();
    p.noFill();
    p.stroke(white.h, white.s, white.b, a.highMid);
    p.line(p.mouseX - r, p.mouseY, p.mouseX + r, p.mouseY);
    p.line(p.mouseX, p.mouseY - r, p.mouseX, p.mouseY + r);
    p.pop();
    p.textAlign(p.CENTER, p.CENTER);
    p.push();
    p.pop();
    cnvs.mousePressed( () => {
      quad["start"] = {x: p.mouseX, y: p.mouseY};
    });

    cnvs.mouseReleased(() => {
      quad["end"] = {x: p.mouseX, y: p.mouseY};
      overlays[`overlay${clicks}`] = {
        corners: [quad["start"].x, quad["start"].y, quad["end"].x, quad["end"].y, ],
        imageIndex: index,
      }
      index = ( index + 1 ) % images.length;
      index = ( index === seed ) ? (index + 1)%images.length : index;

      clicks++;
    });

    drawOverlays();
    ( p.mouseIsPressed && drawFrame() );

  };

  const drawOverlays = () => {
    for ( const o in overlays ) {
      let ov = overlays[o];
      let img = images[ ov.imageIndex ];
      img.loadPixels();
      ov["mask"] = p.createGraphics(p.width, p.height);
      ov.mask.rect(ov.corners[0], ov.corners[1], ov.corners[2], ov.corners[3]);
      img.mask(ov.mask.get());
      p.image(img, 0, 0, p.width, p.height);
      img.updatePixels();
    }
  };

  const drawFrame = () => {
    p.push();
      p.stroke(white.h, white.s, white.b, a.highMid);
      p.fill(white.h, white.s, white.b, a.low);
      p.rect(quad["start"].x, quad["start"].y, p.mouseX, p.mouseY);
    p.pop();
  };


  p.windowResized = () => {
    scaleCanvas(p);
  }

  const reset = () => {
    seed = Math.floor(p.random(images.length));
    clicks = 0;
    index = 0;
    for ( const o in overlays ) {
      delete overlays[o];
    }
    p.background(bgColor);
  };

  const print = () => {
    console.log( overlays );
  };

  p.keyPressed = () => {
    // spacebar to reset the sketch
    (( p.keyCode === 32 ) && ( reset() ));
    // P to print info to concole
    (( p.keyCode === 80 ) && ( print() ));
  };
};

export default number4;
