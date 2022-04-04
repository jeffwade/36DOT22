import { initializeCanvas, drawGuides, showCursor, scaleCanvas, blurHSB } from './helpers';
import img from './images/number3.png';
import colors from './colors';


const number3 = (p) => {
  let cnvs;
  let paper3;

  const vertices = {};
  let movers = [];
  let click = 0;

  class Mover {
    constructor(_id, _start, _end, _offset, _vertical) {
      this.id = _id;
      this.start = _start;
      this.end = _end;
      this.position = { x: this.start["x"],  y: this.start["y"],};
      this.offset = _offset;
      this.vertical = _vertical;
      this.w = p.dist(this.end["x"], this.end["y"], this.start["x"], this.start["y"], )
      this.h = 15;
    }

    run() {
      this.update();
      this.display();
    }

    update() {
      let rate = 9;
      let t = rate*p.frameCount%Math.floor(this.w);
      let s1 = 1-t/Math.floor(this.w);
      let s2 = t/Math.floor(this.w);

      this.position.x = s1*this.start.x + s2*this.end.x;
      this.position.y = s1*this.start.y + s2*this.end.y;
    }

    display() {
      p.push();
      p.translate(this.position.x, this.position.y);
      // p.fill(fgColor);
      // p.noStroke();
      // p.circle(0, 0, 4);
      p.stroke(white.h, white.s, white.b, 4);
      p.line(0, 0, this.start.x - this.position.x, this.start.y - this.position.y);
      p.pop();
    }
  }


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
    paper3 = p.loadImage(img);
  };

  p.setup = () => {
    cnvs = initializeCanvas(p);

    p.colorMode(p.HSB, 360, 100, 100, 100);
    bgColor = p.color(black.h, black.s, black.b, black.a);
    fgColor = p.color(white.h, white.s, white.b, white.a);

    p.ellipseMode(p.RADIUS);

    // p.noCursor();
    p.frameRate(30);

    p.background(bgColor);
  };

  const n = 1;
  p.draw = () => {

    // on click
    cnvs.mousePressed( () => {
      // Add a vertex at the mouse position
      vertices[`u${click}`] = {x: p.mouseX, y: p.mouseY}
      // for each vertex pair, add `n` movers
      if ( Object.keys(vertices).length > 1 ) {
        for ( let i = 0; i < click; i++ ) {
          movers.push( new Mover(`u${click}u${i}`, vertices[`u${click}`], vertices[`u${i}`], 0) );
        }
      }
      // increment click value
      click++;
    });

    // draw the background image
    p.image(paper3, 0, 0, p.width, p.height)
    blurHSB(p, black.h, black.s, black.b, a.low);
    drawVertices(p, vertices);

    // run the movers
    for ( let i = 0;  i < movers.length; i++ ) {
      movers[i].run();
    }
  };

  const drawVertices = (_vertices) => {
    p.push();
    p.noStroke();
    p.fill(255);
    for (const u in vertices ) {
      p.push();
        p.translate(vertices[u]["x"], vertices[u]["y"]);
        p.circle( 0, 0, 1 );
      // p.text(`${u}: (${Math.floor(vertices[u]["x"])}, ${Math.floor(vertices[u]["y"])})`, -20, -10);
      p.pop();
    }
  };

  p.windowResized = () => {
    scaleCanvas(p);
  }

  const reset = () => {
    p.background(bgColor);
    for ( const u in vertices ) {
      delete vertices[u];
    }
    movers.length = 0;
    click = 0;
  };

  p.keyPressed = () => {
    (( p.keyCode === 32 ) && (reset()));
  };
};

export default number3;
