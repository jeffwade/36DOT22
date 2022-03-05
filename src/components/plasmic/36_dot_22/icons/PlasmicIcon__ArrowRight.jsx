// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ArrowRightIcon(props) {
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
          "M15.5 8l.354.354a.5.5 0 000-.708L15.5 8zM0 10.5c.841 0 1.495-.212 2.03-.544.523-.325.91-.752 1.23-1.136.337-.405.576-.726.862-.972.26-.223.524-.348.878-.348v-1c-.646 0-1.132.25-1.529.59-.37.316-.693.745-.98 1.09-.305.366-.607.69-.99.926C1.13 9.337.66 9.5 0 9.5v1zm5-3a.61.61 0 01.348.09.823.823 0 01.251.287c.176.3.286.723.416 1.244.12.48.26 1.057.522 1.506.136.234.318.457.57.62.255.167.554.253.893.253v-1a.61.61 0 01-.348-.09.823.823 0 01-.251-.287c-.176-.3-.286-.723-.416-1.244-.12-.48-.26-1.057-.522-1.506a1.813 1.813 0 00-.57-.62A1.607 1.607 0 005 6.5v1zm3 4c.634 0 1.17-.24 1.628-.558.45-.311.858-.72 1.226-1.088.382-.383.725-.723 1.087-.974.354-.245.693-.38 1.059-.38v-1c-.634 0-1.17.24-1.628.558-.45.311-.858.72-1.226 1.088-.382.383-.724.723-1.087.974-.354.245-.693.38-1.059.38v1zm5-3h2.5v-1H13v1zm2.146-.854l-3 3 .708.708 3-3-.708-.708zm.708 0l-3-3-.708.708 3 3 .708-.708z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowRightIcon;
/* prettier-ignore-end */
