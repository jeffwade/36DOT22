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


