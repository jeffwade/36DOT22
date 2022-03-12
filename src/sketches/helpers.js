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
