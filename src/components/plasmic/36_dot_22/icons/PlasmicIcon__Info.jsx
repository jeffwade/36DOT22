// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function InfoIcon(props) {
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
          "M8 15A7 7 0 108 1a7 7 0 000 14zM9.4 4.5a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0zM6.6 7.3h2.8s.35.7.35 1.4c0 .35-.262.7-.525 1.05-.262.35-.525.7-.525 1.05 0 .7.7 2.1.7 2.1H6.6s-.7-1.4-.7-2.1c0-.35.263-.7.525-1.05.263-.35.525-.7.525-1.05 0-.7-.35-1.4-.35-1.4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InfoIcon;
/* prettier-ignore-end */
