import { initializeCanvas, blurHSB, scaleCanvas, markWIP, showCursor} from './helpers';
import colors from './colors';
import omPapercut from './images/letterO.png';


const letterO = (p) => {
  // 'variables
  let fillColor, strokeColor, scrimColor, bgColor, breathColor;
  let _primary = {h: 47, s: 99, b: 82, a: 90};
  let _stroke = {h: 162, s: 4, b: 6, a: 20, w: 2};
  let _secondary = {h: 235, s: 58, b: 58, a: 1};
  let _breath = {h: _primary.h, s: 2, b: _primary.b, a: 20, r: 1/60, w: 1};
  let breaths = ["center", "corners", "all", "none"];
  let breathCount = 2;
  let inspiration = breaths[breathCount];

  let radius = 3;
  let margin = 20;

  const hasFill = true;
  const hasStroke = false;
  let colorsAreInverted = false;
  let colorVelocity = 0;
  const hueStep = 1;
  let isStraight = false;
  let secondaryToggle = false;

  let points = 7;
  let complications = 4;
  let reflections = 1;
  const initRotation = 0;
  let rotation;

  const randomize = () => {
    points = Math.floor(p.random(1, 13));
    complications = Math.floor(p.random(1, 7));
    reflections = Math.floor(p.random(3));
    radius = Math.floor(p.random(1, 20));
  };

  let frequency = 20;
  let amplitude = 100;
  const offset = { x: 24, y: 5 }

  // margins inversely related to scalar
  let marginScalar = 5;
  let frameCount = 0;
  const FR = 38;

  //key controls
  let isPlaying = true;

  const initializeCanvas = () => {
    const frameSize = (p.windowWidth > p.windowHeight) ? 0.6*p.windowHeight : 0.8*p.windowWidth;
    let cnvs = p.createCanvas(frameSize, frameSize);

    // 'initializations
    margin = p.width/marginScalar;
    amplitude = p.width/2 - margin;
  };

  let om;
  // 'preload
  p.preload = () => {
    om = p.loadImage(omPapercut);
  };

  // 'setup
  p.setup = () => {
    initializeCanvas();

    // initialize colors
    p.colorMode(p.HSB, 360, 100, 100, 100);
    fillColor = p.color(_primary.h, _primary.s, _primary.b, _primary.a);
    strokeColor= p.color(_stroke.h, _stroke.s, _stroke.b, _stroke.a);
    bgColor = p.color(_secondary.h, _secondary.s, _secondary.b, 100);

    rotation = initRotation;
    reset();

    p.frameRate(FR);
    p.cursor('pointer');
  }

  // 'draw
  p.draw = () => {

    p.push();
    // p.colorMode(p.RGB);
    // p.tint(255, 10);
    p.pop();
    if (isPlaying) {
      if ( colorVelocity !== 0 ) {
        _primary.h += colorVelocity;
        _primary.h = _primary.h%360;
      }
      (secondaryToggle && showToggleIndicator());
      scrimColor = colorsAreInverted
        ? p.color(_primary.h, _primary.s, _primary.b, _secondary.a)
        : p.color(_secondary.h, _secondary.s, _secondary.b, _secondary.a);
      fillColor = colorsAreInverted
        ? p.color(_secondary.h, _secondary.s, _secondary.b, _primary.a)
        : p.color(_primary.h, _primary.s, _primary.b, _primary.a);
      weave(p.width/2, p.height/2, rotation);
      blur();
      p.push();
      p.rectMode(p.RADIUS);
      p.image(om, p.width/2 - p.width/4, p.height/2 - p.width/4, p.width/2, p.height/2);
      p.pop();
    }
    breathe(inspiration, margin/4, p.width*_breath.r*Math.cos( p.radians(frameCount*0.8) ));
  }

  // 'weave
  const weave = (_x, _y, _theta) => {
    frameCount++;
    p.push();
      p.translate(_x, _y);
      p.rotate( _theta );
      // blendMode(SCREEN);
      if ( hasFill ) {
        p.fill(fillColor);
      } else {
         p.noFill();
      }
      if ( hasStroke ) {
        p.stroke(strokeColor);
        p.strokeWeight(_stroke.w);
      } else {
         p.noStroke();
      }

      for ( let i = 0;  i <= complications; i++ ) {
        let theta = p.radians(frameCount * frequency)/offset.x;
        let phi = i*Math.PI/offset.y;

        //displacement
        let x = amplitude*Math.cos(i*theta);
        let y = isStraight
          ? amplitude*Math.sin(i*phi)
          : amplitude*Math.sin(theta+i*phi);

        //complications
        for ( let j = 0;  j < points; j++ ) {
          p.push();
          p.rotate(j*(2*Math.PI)/points);
          switch(reflections) {
            case 2:
              p.circle(x/i, y, radius);
              p.circle(-x/i, y, radius);
              p.circle(x/i, -y, radius);
              p.circle(-x/i, -y, radius);
              break;
            case 1:
              p.circle(x/i, y, radius);
              p.circle(-x/i, y, radius);
              break;
            default:
              p.circle(x/i, y, radius);
          }
          p.pop();
        }
      }
    p.pop();
  };

  // 'breathe
  const breathe = (_set, _margin, _breathRate) => {
    // breathColor = p.color(_primary.h, _breath.s, _primary.b, _breath.a);
    p.push();
      // p.noStroke();
      p.stroke(fillColor);
      p.strokeWeight(_breath.w);
      p.noFill();
      // p.fill(breathColor);
      switch (_set) {
        case "center":
          p.circle(p.width/2, p.height/2, _breathRate);
          break;
        case "corners":
          p.circle(_margin, _margin, _breathRate);
          p.circle(p.width-_margin, _margin, _breathRate);
          p.circle(p.width-_margin, p.height-_margin, _breathRate);
          p.circle(_margin, p.height-_margin, _breathRate);
          break;
        case "all":
          p.circle(p.width/2, p.height/2, _breathRate);
          p.circle(_margin, _margin, _breathRate);
          p.circle(p.width-_margin, _margin, _breathRate);
          p.circle(p.width-_margin, p.height-_margin, _breathRate);
          p.circle(_margin, p.height-_margin, _breathRate);
          break;
      }
    p.pop();
  };

  // blur ('x)
  const blur = () => {
    p.push();
      p.fill(scrimColor);
      p.noStroke();
    p.rect(0, 0, p.width, p.height);
    p.pop();
  };

  p.mouseClicked = () => {
    if ((p.mouseX < p.width && p.mouseX > 0) && (p.mouseY < p.height && p.mouseY > 0)) {
      // colorsAreInverted = !colorsAreInverted;
      randomize();
      reset();
    }
  }

  p.keyPressed = () => {
    // Toggle between straight and curved paths
    isStraight = ( p.keyCode === (p.ALT || p.OPTION) ) ? !isStraight : isStraight;
    secondaryToggle = ( p.keyCode === p.SHIFT ) ? !secondaryToggle : secondaryToggle;

    // ( p.key === 'p' ) ? isPlaying ? pause() : play() : null;
     isPlaying = ( p.key === 'p' ) ? !isPlaying : isPlaying;

    // up and down arrows to change the number of movers
    (( p.keyCode === 38 ) && changePoints(1) );
    (( p.keyCode === 40 ) && changePoints(-1) );

    // + (=) and - to change complications
    (( p.keyCode === 187 ) && changeComplications(1) );
    (( p.keyCode === 189 ) && changeComplications(-1) );

    // < (,) and > (.) to change complications
    (( p.keyCode === 188 ) && changeReflections(-1) );
    (( p.keyCode === 190 ) && changeReflections(1) );

    // left and right arrows to change the size of the movers
    (( p.keyCode === p.LEFT_ARROW ) && changeRadius(-1) );
    (( p.keyCode === p.RIGHT_ARROW ) && changeRadius(1) );

    // [ and ] to change the rotation
    (( p.keyCode === 221 ) && changeRotation(Math.PI/60) );
    (( p.keyCode === 219 ) && changeRotation(-Math.PI/60) );

    // enter/return to invert the colors
    colorsAreInverted = ( p.keyCode === (p.RETURN || p.ENTER) && isPlaying) ? !colorsAreInverted : colorsAreInverted;

    // space to "refresh"
    (( p.keyCode === 32 ) && reset() );

    // change primary hue (u-j), saturation (i-k), brightness (o-l)
    if ( !secondaryToggle ) {
      (( p.key === 'u'  ) && changePrimaryHue(hueStep) );
      (( p.key === 'j'  ) && changePrimaryHue(-hueStep) );
      (( p.key === 'i'  ) && changePrimarySaturation(1) );
      (( p.key === 'k'  ) && changePrimarySaturation(-1) );
      (( p.key === 'o'  ) && changePrimaryBrightness(1) );
      (( p.key === 'l'  ) && changePrimaryBrightness(-1) );
    } else {
      (( p.key === 'u'  ) && changeSecondaryHue(hueStep) );
      (( p.key === 'j'  ) && changeSecondaryHue(-hueStep) );
      (( p.key === 'i'  ) && changeSecondarySaturation(1) );
      (( p.key === 'k'  ) && changeSecondarySaturation(-1) );
      (( p.key === 'o'  ) && changeSecondaryBrightness(1) );
      (( p.key === 'l'  ) && changeSecondaryBrightness(-1) );
    }

    (( p.key === 'b' ) && changeBreathing() );

    // s to save the current frameCount as a PNG
    (( p.key === 's' ) && p.saveCanvas(filename(), 'png') );
  }

  const changeBreathing = () => {
    breathCount++;
    breathCount = breathCount%4;
    inspiration = breaths[breathCount];
    p.background(bgColor);
  };

  const showToggleIndicator = () => {
    p.push();
      p.translate(p.width/2, 10);
      p.noStroke();
      p.fill(fillColor);
      p.triangle(0, 0, -3, 5, 3, 5);
    p.pop();
  };

  const changePrimaryHue = (delta) => {
    _primary.h += delta;
    _primary.h = (_primary.h < 0) ? _primary.h + 360 : _primary.h%360;
  };

  const changePrimaryBrightness = (delta) => {
    _primary.b += delta;
    _primary.b = p.map(_primary.b, 0, 100, 0, 100, true);
  };

  const changePrimarySaturation = (delta) => {
    _primary.s += delta;
    _primary.s = p.map(_primary.s, 0, 100, 0, 100, true);
  };

  const changeSecondaryHue = (delta) => {
    _secondary.h += delta;
    _secondary.h = (_secondary.h < 0) ? _secondary.h + 360 : _secondary.h%360;
  };

  const changeSecondaryBrightness = (delta) => {
    _secondary.b += delta;
    _secondary.b = p.map(_secondary.b, 0, 100, 0, 100, true);
  };

  const changeSecondarySaturation = (delta) => {
    _secondary.s += delta;
    _secondary.s = p.map(_secondary.s, 0, 100, 0, 100, true);
  };

  const reset = () => {
    colorsAreInverted
      ? bgColor = p.color(_primary.h, _primary.s, _primary.b, 100)
      : bgColor = p.color(_secondary.h, _secondary.s, _secondary.b, 100);
    p.background(bgColor);
  };

  const changeRotation = (delta) => {
    if ( rotation + delta > (2*Math.PI)) {
      rotation = (rotation - (2*Math.PI)) + delta;
    } else if (rotation + delta < 0) {
      rotation = ((2*Math.PI) + rotation) + delta;
    } else {
      rotation = rotation + delta;
    }
  };

  const changeComplications = (delta) => {
    let newComplications = complications + delta;
    complications = p.map(newComplications, 1, 50, 1, 50, true);
  };

  const changeReflections = (delta) => {
    let newReflections = reflections + delta;
    reflections = p.map(newReflections, 0, 2, 0, 2, true);
  };

  const changePoints = (delta) => {
    let newPoints = points + delta;
    points = p.map(newPoints, 1, 50, 1, 50, true);
  };

  const changeRadius = (delta) => {
    const newRadius = radius + delta;
    radius = p.map(newRadius, 1, Math.floor(p.width/6), 1, Math.floor(p.width/6), true);
  };

  const play = () => {
    p.loop();
  };

  const pause = () => {
    p.noLoop();
    isPlaying = false;
  };

  const filename = () => {
    return `mandigidala-${points}-${complications}-${reflections}-${initRotation}-${frameCount}`;
  }

  p.windowResized = () => {
    initializeCanvas();
    reset();
  }

};

export default letterO;
