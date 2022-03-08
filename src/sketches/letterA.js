import colors from './colors';
import front from './images/letterA.png';
import back from './images/letterA-back-75.png';
import { initializeCanvas } from './helpers';

const sketch = (p) => {
  class Shot {
    constructor(_id, _x, _y, _radius, _speed, _color) {
      this.id = _id;
      this.x = _x;
      this.y = _y;
      this.speed = _speed;
      this.color = _color;
      this.radius = _radius;
      this.angle = 0;
      this.dead = false;
    }

    run() {
      this.update();
      this.display();
    }

    update() {
      if ( this.x > p.width ) {
        this.dead = true;
      }
      if (!this.dead) {
        this.x += this.speed;
      }
    }

    display() {
      p.push();
      p.translate(this.x, this.y);
      p.rotate(this.angle);
      p.fill(this.color);
      p.noStroke();
      p.triangle(-this.radius, -this.radius, -this.radius, this.radius, this.radius*1.5, 0 );
      // p.circle(0, 0, this.radius);
      p.pop();
    }

    setAngle(_theta) {
      this.angle = _theta;
    }

    isDead() {
      return this.dead;
    }
  }
  let shots = [];
  let center;

  // create an array of the color names
  const colorKeys = Object.keys(colors);
  // remove opacity and black
  colorKeys.splice(0, 2);

  const a = colors.opacity;

  let topImg, bottomImg;

  p.preload = () => {
    topImg = p.loadImage(front);
    bottomImg = p.loadImage(back);
  };

  p.setup = () => {
    initializeCanvas(p);

    center = {x: p.width/2, y: p.height/2};

    p.ellipseMode(p.RADIUS);
    p.colorMode(p.HSB, 360, 100, 100, 100);

    p.frameRate(33);
  };

  p.draw = () => {
    p.image(bottomImg, 0, 0, p.width, p.height);
    // let c = colorKeys[Math.floor(p.random(colorKeys.length))];
    let c = colorKeys[Math.floor(p.random(5, 8))];

    let theta = p.atan2( p.mouseY - center.x, p.mouseX - center.x);
    shoot(colors[c]);
    for ( let i = shots.length - 1; i > 0; i-- ) {
      if ( shots[i] !== undefined ) {
        // shots[i].setAngle(theta);
        p.push();
        p.translate(center.x, center.y);
        p.rotate(theta);
        shots[i].run();
        p.pop();
        if ( shots[i].isDead() ) {
          shots.splice(i, 1);
        }
      }
    }
    p.image(topImg, 0, 0, p.width, p.height);
  };

  const shoot = (color) => {
    let id = shots.length;
    let x = -center.x;
    let y = p.random(-center.y, center.y);
    let r = p.random(1, 8);
    let v = p.random(1, 20);
    let c= p.color(color.h, color.s, color.b, a.full);
    shots.push( new Shot(id, x, y, r, v, c) );
  };

  p.windowResized = () => {
    initializeCanvas(p);
  }
};

export default sketch;
