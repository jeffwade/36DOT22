// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function DarkmodeIcon(props) {
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
          "M12.828 6.705a5 5 0 01-3.537 6.123A5.007 5.007 0 014 11.01c4.031-.795 6.288-4.468 5.29-7.84a5 5 0 013.538 3.535zM2.5 2C3 3 3 3 3.745 3.5 3 4 3 4 2.5 5 2 4 2 4 1.243 3.5 2 3 2 3 2.5 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DarkmodeIcon;
/* prettier-ignore-end */
