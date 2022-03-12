import * as React from "react";
import { PlasmicHomepage } from "../components/plasmic/36_dot_22/PlasmicHomepage";
import { ModeContext } from "../components/plasmic/36_dot_22/PlasmicGlobalVariant__Mode";
import { useState } from "react";

function Homepage() {
  const [mode, setMode] = useState(undefined);

  return (
    <ModeContext.Provider value={mode}>
      <PlasmicHomepage
        modeToggle={{
          onClick: () => {
            if ( mode === 'dark' ) {
              setMode('light');
            } else {
               setMode('dark');
            }
          }
        }}

      />
    </ModeContext.Provider>
  );
}

export default Homepage;
