import * as React from "react";
import { PlasmicGrid } from "./plasmic/36_dot_22/PlasmicGrid";

function Grid_(props, ref) {
  return <PlasmicGrid root={{ ref }} {...props} />;
}

const Grid = React.forwardRef(Grid_);

export default Grid;
