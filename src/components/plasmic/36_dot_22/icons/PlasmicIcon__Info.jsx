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
          "M8 14A6 6 0 108 2a6 6 0 000 12zm1.2-9a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM6.8 7.4h2.4s.3.6.3 1.2c0 .3-.225.6-.45.9-.225.3-.45.6-.45.9 0 .6.6 1.8.6 1.8H6.8s-.6-1.2-.6-1.8c0-.3.225-.6.45-.9.225-.3.45-.6.45-.9 0-.6-.3-1.2-.3-1.2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InfoIcon;
/* prettier-ignore-end */