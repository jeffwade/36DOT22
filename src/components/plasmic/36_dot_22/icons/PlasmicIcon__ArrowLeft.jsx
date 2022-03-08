// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ArrowLeftIcon(props) {
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
          "M1.707 8.5l2.147 2.146-.708.708-3-3a.5.5 0 010-.708l3-3 .708.708L1.707 7.5H3c1.134 0 2.11.558 2.95 1.038l.048.028c.899.513 1.657.934 2.502.934.893 0 1.263-.243 1.487-.519a2.51 2.51 0 00.339-.602c.047-.11.093-.225.142-.348l.018-.046c.055-.14.115-.288.182-.438.273-.613.673-1.28 1.516-1.775C13.01 5.287 14.204 5 16 5v1c-1.704 0-2.698.275-3.31.634-.593.35-.88.807-1.108 1.32a11.154 11.154 0 00-.185.447c-.049.122-.1.249-.152.373-.12.278-.267.574-.482.839-.463.568-1.156.887-2.263.887-1.134 0-2.11-.558-2.95-1.038l-.048-.028C4.603 8.921 3.845 8.5 3 8.5H1.707z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowLeftIcon;
/* prettier-ignore-end */
