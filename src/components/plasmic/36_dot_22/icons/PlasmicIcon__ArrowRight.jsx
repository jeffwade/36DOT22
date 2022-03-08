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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12.854 4.646l3 3a.5.5 0 010 .708l-3 3-.708-.707L14.293 8.5H13c-.366 0-.705.135-1.06.38-.361.25-.704.591-1.086.974l-.017.016c-.363.363-.765.765-1.209 1.072-.458.318-.994.558-1.628.558-.339 0-.638-.086-.894-.253a1.813 1.813 0 01-.57-.62c-.254-.437-.394-.996-.511-1.467l-.01-.039c-.13-.52-.24-.943-.416-1.244a.823.823 0 00-.25-.286A.61.61 0 005 7.5c-.354 0-.618.125-.878.348-.225.193-.42.433-.658.723l-.205.25c-.32.383-.706.81-1.23 1.135-.534.332-1.188.544-2.029.544v-1c.659 0 1.13-.163 1.502-.394.382-.237.684-.56.989-.926l.169-.206c.244-.299.512-.628.811-.885C3.868 6.75 4.354 6.5 5 6.5c.339 0 .638.086.894.253.25.163.433.386.57.62.254.437.394.996.511 1.467l.01.039c.13.52.24.943.416 1.244.082.141.166.23.25.286A.61.61 0 008 10.5c.366 0 .705-.135 1.06-.38.362-.25.704-.591 1.086-.974l.017-.016c.363-.363.765-.765 1.209-1.072.458-.318.994-.558 1.628-.558h1.293l-2.147-2.146.708-.708z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowRightIcon;
/* prettier-ignore-end */
