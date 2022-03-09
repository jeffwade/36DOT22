// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: byT51ah2LGWp7TY4NhRWN5
// Component: 0ttrvnk3PBsW
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ControlButton from "../../ControlButton"; // plasmic-import: MeM-3KPeHe/component
import Logo from "../../Logo"; // plasmic-import: Ez2OM_1IjG/component
import Button from "../../Button"; // plasmic-import: RXJa6ld21ci/component
import { useScreenVariants as useScreenVariantszHblDRlCkyA0O } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ZHblDRlCkyA0O/globalVariant
import { useMode } from "./PlasmicGlobalVariant__Mode"; // plasmic-import: 9hwEG37kNX/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_36_dot_22.module.css"; // plasmic-import: byT51ah2LGWp7TY4NhRWN5/projectcss
import * as sty from "./PlasmicHomepage.module.css"; // plasmic-import: 0ttrvnk3PBsW/css
import InfoIcon from "./icons/PlasmicIcon__Info"; // plasmic-import: rh7Opgr7v/icon
import DarkmodeIcon from "./icons/PlasmicIcon__Darkmode"; // plasmic-import: GFhQaEFLo/icon

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

function PlasmicHomepage__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantszHblDRlCkyA0O(),
    mode: useMode()
  });

  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"root"}
            data-plasmic-override={overrides.root}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_tokens,
              sty.root,
              {
                [projectcss.global_mode_dark]: hasVariant(
                  globalVariants,
                  "mode",
                  "dark"
                ),

                [sty.rootglobal_mode_dark]: hasVariant(
                  globalVariants,
                  "mode",
                  "dark"
                )
              }
            )}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              hasGap={true}
              className={classNames(projectcss.all, sty.header)}
            >
              {(
                hasVariant(globalVariants, "screen", "desktopOnly")
                  ? true
                  : true
              ) ? (
                <div
                  className={classNames(projectcss.all, sty.freeBox__qSoMw, {
                    [sty.freeBoxglobal_mode_dark__qSoMWcm4Qj]: hasVariant(
                      globalVariants,
                      "mode",
                      "dark"
                    )
                  })}
                >
                  <ControlButton
                    data-plasmic-name={"info"}
                    data-plasmic-override={overrides.info}
                    className={classNames("__wab_instance", sty.info)}
                    icon={
                      <InfoIcon
                        data-plasmic-name={"infoicon"}
                        data-plasmic-override={overrides.infoicon}
                        className={classNames(projectcss.all, sty.infoicon)}
                        role={"img"}
                      />
                    }
                  />

                  <ControlButton
                    data-plasmic-name={"modeToggle"}
                    data-plasmic-override={overrides.modeToggle}
                    className={classNames("__wab_instance", sty.modeToggle)}
                    icon={
                      <DarkmodeIcon
                        data-plasmic-name={"darkmodeIcon"}
                        data-plasmic-override={overrides.darkmodeIcon}
                        className={classNames(projectcss.all, sty.darkmodeIcon)}
                        role={"img"}
                      />
                    }
                  />
                </div>
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "desktopOnly")
                  ? true
                  : true
              ) ? (
                <Logo
                  data-plasmic-name={"logo"}
                  data-plasmic-override={overrides.logo}
                  className={classNames("__wab_instance", sty.logo)}
                />
              ) : null}

              <div className={classNames(projectcss.all, sty.freeBox__sPasa)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___70UnO
                  )}
                >
                  {"days"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bbuH
                  )}
                >
                  {"of"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__evUhE
                  )}
                >
                  {"type"}
                </div>
              </div>
            </p.Stack>

            <p.Stack
              as={"nav"}
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              hasGap={true}
              className={classNames(projectcss.all, sty.footer, {
                [sty.footerglobal_mode_dark]: hasVariant(
                  globalVariants,
                  "mode",
                  "dark"
                )
              })}
            >
              <Button
                className={classNames("__wab_instance", sty.button__g6Wpw)}
                color={"secondary"}
              >
                {"List"}
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button__waSwW)}
                link={
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? "/latest"
                    : undefined
                }
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__sxMwY
                  )}
                >
                  {"Latest"}
                </div>
              </Button>
            </p.Stack>

            {true ? (
              <div
                data-plasmic-name={"infoModal"}
                data-plasmic-override={overrides.infoModal}
                className={classNames(projectcss.all, sty.infoModal)}
              >
                <h1
                  data-plasmic-name={"h1"}
                  data-plasmic-override={overrides.h1}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1
                  )}
                >
                  {"36 Days of Type"}
                </h1>

                {(
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? true
                    : true
                ) ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__gQtHi)}
                  >
                    <h2
                      data-plasmic-name={"h2"}
                      data-plasmic-override={overrides.h2}
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2
                      )}
                    >
                      {"2022 Edition"}
                    </h2>

                    <h3
                      data-plasmic-name={"byline"}
                      data-plasmic-override={overrides.byline}
                      className={classNames(
                        projectcss.all,
                        projectcss.h3,
                        projectcss.__wab_text,
                        sty.byline
                      )}
                    >
                      {"by jeff wade"}
                    </h3>
                  </p.Stack>
                ) : null}
              </div>
            ) : null}
          </p.Stack>
        ) : null}
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "info",
    "infoicon",
    "modeToggle",
    "darkmodeIcon",
    "logo",
    "footer",
    "infoModal",
    "h1",
    "h2",
    "byline"
  ],

  header: ["header", "info", "infoicon", "modeToggle", "darkmodeIcon", "logo"],
  info: ["info", "infoicon"],
  infoicon: ["infoicon"],
  modeToggle: ["modeToggle", "darkmodeIcon"],
  darkmodeIcon: ["darkmodeIcon"],
  logo: ["logo"],
  footer: ["footer"],
  infoModal: ["infoModal", "h1", "h2", "byline"],
  h1: ["h1"],
  h2: ["h2"],
  byline: ["byline"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    info: makeNodeComponent("info"),
    infoicon: makeNodeComponent("infoicon"),
    modeToggle: makeNodeComponent("modeToggle"),
    darkmodeIcon: makeNodeComponent("darkmodeIcon"),
    logo: makeNodeComponent("logo"),
    footer: makeNodeComponent("footer"),
    infoModal: makeNodeComponent("infoModal"),
    h1: makeNodeComponent("h1"),
    h2: makeNodeComponent("h2"),
    byline: makeNodeComponent("byline"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
