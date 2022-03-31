import { initializeCanvas, blurHSB, scaleCanvas } from './helpers';
import colors from './colors';
import bg from './images/letterX.jpg';
import fg from './images/letterX-bg.jpg';


const letterX = (p) => {
  initializeCanvas(p);

  // create an array of the color names
  const colorKeys = Object.keys(colors);
  // remove opacity from array
  colorKeys.splice(0, 1);
  // a for alpha

  // named colors
  const { pink, white, } = colors;
  const a = colors.opacity;
  let fgColor, bgColor;

  let cnvs;
  let innerWrapper, outerWrapper;
  let cursorPreview, painting, currentBG;

  // variables for mask
  let flipped = false;
  let isPainting = false;

  p.preload = () => {
    innerWrapper = p.loadImage(fg);
    outerWrapper = p.loadImage(bg);
  };

  let paintingMask, cursorMask;
  let cursorRadius = 67;
  p.setup = () => {
    cnvs = initializeCanvas(p);

    p.colorMode(p.HSB, 360, 100, 100, 100);

    p.ellipseMode(p.RADIUS);

    p.noCursor();
    p.frameRate(30);

    currentBG = innerWrapper;
    cursorPreview = outerWrapper;
    painting = outerWrapper;

    paintingMask = p.createGraphics(p.width, p.height);
  };


  p.draw = () => {
    p.image(currentBG, 0, 0, p.width, p.height);

    cursorReveal();

    painting.loadPixels();
    ( isPainting && paint() )
    painting.mask(paintingMask.get());
    p.image(painting, 0, 0, p.width, p.height);
    painting.updatePixels();
  };

  const cursorReveal = () => {
    cursorPreview.loadPixels();
    cursorMask = p.createGraphics(p.width, p.height);
    cursorMask.circle(p.mouseX, p.mouseY, cursorRadius);
    cursorPreview.mask(cursorMask.get());
    p.image(cursorPreview, 0, 0, p.width, p.height);
    cursorPreview.updatePixels();
  };

  const paint = () => {
    paintingMask.strokeWeight(cursorRadius);
    paintingMask.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
  }

  p.mouseDragged = () => {
    isPainting = true;
  }

  p.mouseReleased = () => {
    isPainting = false;
    // paintingMask.clear();
  }

  p.windowResized = () => {
    scaleCanvas(p);
  }

  const flip = () => {
    flipped = !flipped
    if ( !flipped ) {
      currentBG = innerWrapper;
      cursorPreview = outerWrapper;
      painting = outerWrapper;
    } else {
      currentBG = outerWrapper;
      cursorPreview = innerWrapper;
      painting = innerWrapper;
    }
  };

  p.keyPressed = () => {
    (( p.keyCode === 32 ) && (flip()));
    paintingMask.clear();
  };
};

export default letterX;
