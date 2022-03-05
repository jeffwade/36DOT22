// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";

export const ModeContext = React.createContext("PLEASE_RENDER_INSIDE_PROVIDER");

export function useMode() {
  return React.useContext(ModeContext);
}

export default ModeContext;
/* prettier-ignore-end */
