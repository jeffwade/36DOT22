import colors from "./colors";

export const initializeCanvas = (p) => {
  const frameSize = p.windowWidth > 768
    ? 0.61 * p.windowHeight
    : 0.81 * p.windowWidth;
  let cnvs = p.createCanvas(frameSize, frameSize);
  p.background(p.color(colors.black.h, colors.black.s, colors.black.s));

  return cnvs;
};

export const scaleCanvas = (p) => {
  const frameSize = p.windowWidth > 768
    ? 0.61 * p.windowHeight
    : 0.81 * p.windowWidth;
  p.resizeCanvas(frameSize, frameSize);
};

export const blurHSB = (p, h, s, b, a) => {
  p.push();
  p.fill(p.color(h, s, b, a));
  p.noStroke();
  p.rect(0, 0, p.width, p.height);
  p.pop();
};

export const blurHEX = (p, h, a) => {
  p.push();
  p.fill(p.color(h, a));
  p.noStroke();
  p.rect(0, 0, p.width, p.height);
  p.pop();
};

export const markWIP = (p) => {
  p.push();
  p.colorMode(p.RGB)
  p.fill(255);
  p.noStroke();
  p.rect(5, 5, 70, 30, 2);
  p.fill(0);
  p.text("in progress", 10, 25);
  p.pop();
};


export const showCursor = (p, _fill, _stroke) => {
  p.push();
  p.translate(p.mouseX, p.mouseY);
  if (_fill !== undefined) {
    p.fill(_fill);
  } else if (_fill === 0) {
     p.fill(0);
  } else if ( _fill === 255 ) {
    p.fill(255);
  } else {
     p.fill(128);
  }

  if ( _stroke !== undefined ) {
    p.stroke(_stroke);
    p.strokeWeight(2);
  } else {
    p.noStroke();
  }
  p.noStroke();
  p.rectMode(p.RADIUS);
  p.rect(0, 0, 20, 1);
  p.rect(0, 0, 1, 20);
  p.text(`${ Math.floor(p.mouseX) }, ${ Math.floor(p.mouseY) }`, -25, -30);
  p.pop();
};

 export const drawGuides = (p, vertices) => {
    p.push();
    p.noStroke();
    p.fill(255);
    for (const u in vertices ) {
      p.push();
        p.translate(vertices[u]["x"], vertices[u]["y"]);
        p.circle( 0, 0, 10 );
      p.text(`${u}: (${Math.floor(vertices[u]["x"])}, ${Math.floor(vertices[u]["y"])})`, -20, -10);
      p.pop();
    }
  };
