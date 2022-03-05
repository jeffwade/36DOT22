import * as React from "react";
import { PlasmicControls } from "./plasmic/36_dot_22/PlasmicControls";

function Controls_(props, ref) {
  return <PlasmicControls root={{ ref }} {...props} />;
}

const Controls = React.forwardRef(Controls_);

export default Controls;
