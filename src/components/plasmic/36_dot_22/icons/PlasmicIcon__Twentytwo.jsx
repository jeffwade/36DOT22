// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function TwentytwoIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M1 1.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v8h1a.5.5 0 01.5.5v4.5a.5.5 0 01-1 0v-4H6v4a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5 5.002 5.002 0 014-4.9V2H2v1.5a.5.5 0 01-1 0v-2zm4 9.126A4.004 4.004 0 002.031 14H5v-3.374zM9 1.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v8h1a.5.5 0 01.5.5v4.5a.5.5 0 01-1 0v-4H14v4a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5 5.002 5.002 0 014-4.9V2h-3v1.5a.5.5 0 01-1 0v-2zm4 9.126A4.004 4.004 0 0010.03 14H13v-3.374z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TwentytwoIcon;
/* prettier-ignore-end */
