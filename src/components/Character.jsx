import * as React from "react";
import { PlasmicCharacter } from "./plasmic/36_dot_22/PlasmicCharacter";

function Character_(props, ref) {
  return <PlasmicCharacter root={{ ref }} {...props} />;
}

const Character = React.forwardRef(Character_);

export default Character;
