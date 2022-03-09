import React, { useRef, useEffect } from "react";
import p5 from 'p5';
import { PlasmicP5Sketch } from "../components/plasmic/36_dot_22/PlasmicP5Sketch";

function P5Sketch({ sketch, name, sketchDiv, ref, ...rest }) {
  const sketchRef = useRef();
  useEffect(() => {
    new p5(sketch, sketchRef.current);
  }, [sketch]);

  return (
    <PlasmicP5Sketch sketchDiv={<div id={name} ref={sketchRef}></div>} {...rest}/>
  );
}

export default P5Sketch
