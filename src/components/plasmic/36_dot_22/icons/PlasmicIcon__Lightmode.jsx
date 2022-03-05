// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LightmodeIcon(props) {
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
        d={
          "M8 0l1.026 1.778H6.974L8 0zm0 13.037a4.74 4.74 0 110-9.481 4.74 4.74 0 010 9.481zm5.126-8.711l.53-1.983-1.982.531 1.452 1.452zM16 8l-1.778 1.026V6.974L16 8zm-4.326 5.126l1.983.53-.531-1.982-1.452 1.452zM8 16l1.026-1.778H6.974L8 16zm-3.674-2.874l-1.983.53.531-1.982 1.452 1.452zM0 8l1.778 1.026V6.974L0 8zm2.874-3.674l-.53-1.983 1.982.531-1.452 1.452z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LightmodeIcon;
/* prettier-ignore-end */
