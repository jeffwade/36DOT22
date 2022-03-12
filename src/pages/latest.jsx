import * as React from "react";
import { useEffect, useState } from 'react';
import { ModeContext } from "../components/plasmic/36_dot_22/PlasmicGlobalVariant__Mode";
import { PlasmicLatest } from "../components/plasmic/36_dot_22/PlasmicLatest";
import characters from '../sketches/characters';

function Latest() {
  const [day, setDay] = useState(characters.length - 1);
  const [mode, setMode] = useState(undefined);
  let character = characters[day - 1];
  const [sketch, setSketch] = useState({props: {sketch: character, name: `day-${day}` }});

  useEffect(() => {
    character = characters[day - 1];
    console.log( character );
    setSketch({props: {sketch: character, name: `day-${day}` }});
  }, [day]);

  const replaceSketch = async () => {
    let sketchCanvas = await document.querySelector(`#day-${day} canvas`);
    await sketchCanvas.remove();
    // await setSketch({props: {sketch: character, name: `day-${day}` }});
  };

  return (
    <ModeContext.Provider value={mode}>
      <PlasmicLatest
        p5Sketch={sketch}

        modeToggle={{
          onClick: () => {
            if ( mode === 'dark' ) {
              setMode('light');
            } else {
               setMode('dark');
            }
          }
        }}

        prev={{
          onClick: async () => {
            await replaceSketch();
            let newDay = (day - 1 > 0)
              ? day - 1
              : characters.length
            ;
            setDay(newDay);
          }
        }}

        next={{
          onClick: async () => {
            await replaceSketch();
            let newDay = (day < characters.length)
              ? day + 1
              : 1
            ;
            setDay(newDay);
          }
        }}
      />
    </ModeContext.Provider>
  );
}

export default Latest;

