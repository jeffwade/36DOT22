import { initializeCanvas, drawGuides, showCursor, scaleCanvas, blurHSB } from './helpers';
import img from './images/number3.png';
import colors from './colors';


const number3 = (p) => {
  let cnvs;
  let paper3;

  const shapes = {};

  let shapeIndex = 0;
  let vertexIndex = 0;

  class Mover {
    constructor(_id, _start, _end) {
      this.id = _id;
      this.start = _start;
      this.end = _end;
      this.position = { x: this.start["x"],  y: this.start["y"],};
      this.w = p.dist(this.end["x"], this.end["y"], this.start["x"], this.start["y"], )
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

    // start with a shape
    newShape();

    p.background(bgColor);
  };

  const n = 1;
  p.draw = () => {

    // on vertexIndex
    cnvs.mousePressed( () => {
      // Add a vertex at the mouse position
      addVertex(shapeIndex - 1, vertexIndex);
      addMovers(shapeIndex - 1, vertexIndex);

      // increment vertexIndex value
      vertexIndex++;
    });

    // draw the background image
    p.image(paper3, 0, 0, p.width, p.height)
    blurHSB(p, black.h, black.s, black.b, a.low);

    // run each shape
    for ( const s in shapes ) {
      drawVertices(s["vertices"]);
      // drawMovers(s.movers);
    }
  };

  const addVertex = (_shape, _vertex) => {
    let s = shapes[`shape${_shape}`];
    s.vertices[`u${_vertex}`] = {x: p.mouseX, y: p.mouseY}
  };

  const addMovers = (_shape, _vertex) => {
    let s = shapes[`shape${_shape}`];
    // for each vertex pair, add `n` movers
    if ( Object.keys(s.vertices).length > 1 ) {
      for ( let i = 0; i < vertexIndex; i++ ) {
        s.movers.push( new Mover(`u${vertexIndex}u${i}`, s.vertices[`u${vertexIndex}`], s.vertices[`u${i}`], 0) );
      }
    }
  };

  const drawVertices = (_vertices) => {
    p.push();
    p.noStroke();
    p.fill(255);
    for (const u in _vertices ) {
      p.push();
        p.translate(_vertices[u]["x"], _vertices[u]["y"]);
        p.circle( 0, 0, 1 );
      p.pop();
    }
  };

  const drawMovers = (_movers) => {
    // run the movers
    if ( _movers.length > 0 ) {
      for ( let i = 0;  i < _movers.length; i++ ) {
        _movers[i].run();
      }
    }
  };

  p.windowResized = () => {
    scaleCanvas(p);
  }

  const reset = () => {
    p.background(bgColor);
    for ( const s in shapes ) {
      delete shapes[s];
    }
    shapeIndex = 0;
    newShape();
  };

  const newShape = () => {
    vertexIndex = 0;
    shapes[`shape${shapeIndex}`] = {
      vertices: {},
      movers: [],
    }
    shapeIndex++;
  };

  const printShapes = () => {
    console.log( shapes );
  };

  p.keyPressed = () => {
    (( p.keyCode === 32 ) && (reset()));
    (( p.keyCode === 78 ) && (newShape()));
    (( p.keyCode === 80 ) && (printShapes()));
  };
};

export default number3;
