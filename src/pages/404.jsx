import * as React from "react";
import { ModeContext } from "../components/plasmic/36_dot_22/PlasmicGlobalVariant__Mode";
import { Plasmic_404 } from "../components/plasmic/36_dot_22/Plasmic_404";
import letterA from "../sketches/letterA"

function _404() {
  return (
    <ModeContext.Provider value={undefined}>
      <Plasmic_404
        p5Sketch={{
          props: {
            sketch: letterA,
            name: "letter-a",
          }
        }
    }
      />
    </ModeContext.Provider>
  );
}

export default _404;
