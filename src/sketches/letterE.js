import { initializeCanvas, scaleCanvas, blurHSB } from './helpers';
import img from './images/letterE.png';
import colors from './colors';

let paperE;

const letterE = (p) => {
  initializeCanvas(p);

  class Mover {
    constructor(_id, _start, _end, _offset, _vertical) {
      this.id = _id;
      this.start = _start;
      this.end = _end;
      this.mid = { x:(this.end["x"] + this.start["x"])/2, y: (this.end["y"] + this.start["y"])/2 }
      this.x = this.mid["x"];
      this.y = this.mid["y"];
      this.offset = _offset;
      this.vertical = _vertical;

      if ( _vertical ) {
        this.w = 25;
        this.h = p.dist(this.end["x"], this.end["y"], this.start["x"], this.start["y"], )
      } else {
        this.w = p.dist(this.end["x"], this.end["y"], this.start["x"], this.start["y"], )
        this.h = 15;
      }
    }

    run() {
      this.update();
      this.display();
    }

    update() {
      let theta = p.frameCount*p.PI / 180;
      if ( this.vertical ) {
        this.x = this.mid["x"] + this.w*Math.sin(10*theta + this.offset);
        this.y = this.mid["y"] + (this.h/2)*Math.cos(theta + this.offset);
      } else {
        this.x = this.mid["x"] + (this.w/2)*Math.cos(theta + this.offset);
        this.y = this.mid["y"] + this.h*Math.sin(10*theta + this.offset);
      }
    }

    display() {
      p.push();
      p.fill(fgColor);
      p.noStroke();
      p.translate(this.x, this.y);
      p.circle(0, 0, 4);
      p.pop();
    }
  }

  const ePoints = {
    eA: {x: p.width/5, y: p.height/9},
    eB: {x: 3.9*p.width/5, y: p.height/9},
    eC: {x: 1.1*p.width/5, y: 1.05*p.height/2},
    eD: {x: 3.75*p.width/5, y: p.height/2},
    eE: {x: p.width/4, y: 6*p.height/7},
    eF: {x: 4*p.width/5, y: 5.9*p.height/7},
  };
  const { eA, eB, eC, eD, eE, eF } = ePoints;

  // create an array of the color names
  const colorKeys = Object.keys(colors);
  // remove opacity from array
  colorKeys.splice(0, 1);
  // a for alpha
  const a = colors.opacity;

  // add named colors
  const { black, white, } = colors;
  let fgColor, bgColor;

  p.preload = () => {
    paperE = p.loadImage(img);
  };

  let movers = [];
  let num = 15;
  p.setup = () => {
    for ( let i = 0;  i < num; i++ ) {
      movers.push(new Mover(`cd${i}`, eC, eD, i*p.TAU/num));
      movers.push(new Mover(`ab${i}`, eA, eB, p.PI/8 + i*p.TAU/num));
      movers.push(new Mover(`ef${i}`, eE, eF, i*p.TAU/num));
      movers.push(new Mover(`ae${i}`, eA, eE, i*p.TAU/num, true));
    }

    initializeCanvas(p);

    p.colorMode(p.HSB, 360, 100, 100, 100);
    bgColor = p.color(black.h, black.s, black.b, black.a);
    fgColor = p.color(white.h, white.s, white.b, white.a);

    p.ellipseMode(p.RADIUS);

    p.noCursor();
    p.frameRate(30);

    p.background(bgColor);
  };

  p.draw = () => {
    blurHSB(p, black.h, black.s, black.b, a.low);
    p.image(paperE, 0, 0, p.width, p.height);
    for ( let i = 0;  i < movers.length; i++ ) {
      movers[i].run();
    }
  };

//   const drawGuides = () => {
//     p.push();
//     p.noStroke();
//     p.fill( fgColor );
//     for (const point in ePoints ) {
//       p.push();
//         p.translate(ePoints[point]["x"], ePoints[point]["y"]);
//         p.circle( 0, 0, 10 );
//       p.text(`${point}: (${Math.floor(ePoints[point]["x"])}, ${Math.floor(ePoints[point]["y"])})`, -20, -10);
//       p.pop();
//     }
//   };

  p.windowResized = () => {
    scaleCanvas(p);
  }
};

export default letterE;
