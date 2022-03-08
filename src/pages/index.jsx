import * as React from "react";
import { PlasmicHomepage } from "../components/plasmic/36_dot_22/PlasmicHomepage";
import { ModeContext } from "../components/plasmic/36_dot_22/PlasmicGlobalVariant__Mode";

function Homepage() {
  return (
    <ModeContext.Provider value={"dark"}>
      <PlasmicHomepage

      />
    </ModeContext.Provider>
  );
}

export default Homepage;
