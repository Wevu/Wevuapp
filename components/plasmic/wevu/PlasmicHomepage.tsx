// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kxZDEp9ud2kneLZcoUaMND
// Component: vvpOIbW94OKT

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "../../Button"; // plasmic-import: 9A-3goOcYh2o/component
import { Reveal } from "@plasmicpkgs/react-awesome-reveal";
import { SliderWrapper } from "@plasmicpkgs/react-slick";
import { sliderHelpers as SliderWrapper_Helpers } from "@plasmicpkgs/react-slick";

import { useScreenVariants as useScreenVariantshCEoj3X1Q4V } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: hCEoj3x1-q4v/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: kxZDEp9ud2kneLZcoUaMND/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: vvpOIbW94OKT/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 9LzsvwBWH20z/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: ZJN8G0CX0LQC/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: vt_mfMn2FgTN/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: aRl0cl-68eEz/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  sliderCarousel?: Flex__<typeof SliderWrapper>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "sliderCarousel.currentSlide",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0,

        refName: "sliderCarousel",
        onMutate: generateOnMutateForSpec("currentSlide", SliderWrapper_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantshCEoj3X1Q4V()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <Stack__
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
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__byAa)}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img___0AO49)}
              displayHeight={"102px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: "/plasmic/wevu/images/wevu2Png.png",
                fullWidth: 500,
                fullHeight: 500,
                aspectRatio: undefined
              }}
            />

            <div className={classNames(projectcss.all, sty.freeBox__zozsE)} />

            <Button
              className={classNames("__wab_instance", sty.button__wn8QS)}
              color={"white"}
              link={"https://calendly.com/contact-hbsm/30min"}
              submitsForm={true}
            >
              {"Prendre contact"}
            </Button>
          </Stack__>
          <h1
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1__ioaOs
            )}
          >
            {"Wevu \nL'agence conseil en strat\u00e9gie digitale."}
          </h1>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__wKncX
            )}
          >
            {
              "Aujourd'hui en France, 2/3 des entreprises en p\u00e9ril \nn'ont pas pris le virage du digital. \nNotre volont\u00e9 : vous permettre d'augmenter votre chiffre d'affaires en vous rendant incontournable sur internet.  "
            }
          </div>
          <Icon3Icon
            className={classNames(projectcss.all, sty.svg__rFfV)}
            role={"img"}
          />

          <div className={classNames(projectcss.all, sty.freeBox__rOuec)}>
            <div className={classNames(projectcss.all, sty.freeBox__oApGx)}>
              <div className={classNames(projectcss.all, sty.freeBox__x5UXj)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6EHk5
                  )}
                >
                  {"1"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__gk5Rq)} />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__bTpjW)}>
              <div className={classNames(projectcss.all, sty.freeBox__mwsGh)}>
                <Reveal
                  className={classNames("__wab_instance", sty.reveal___1Du8C)}
                  triggerOnce={true}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__lmAWd
                    )}
                  >
                    {"Qui sommes-nous ? "}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__e75Nq
                    )}
                  >
                    {
                      "D\u00e9couvrez notre agence digitale o\u00f9 l'excellence rencontre l'innovation. D\u00e9termin\u00e9s \u00e0 offrir des r\u00e9sultats exceptionnels dans chaque aspect du marketing. Faites confiance \u00e0 notre expertise pour propulser notre entreprise vers de nouveaux sommets. "
                    }
                  </div>
                </Reveal>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox___6V26P)}>
                <div className={classNames(projectcss.all, sty.freeBox__qpLlA)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__e85BI, "rotate")}
                    displayHeight={"900px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"900px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/wevu/images/image.svg",
                      fullWidth: 150,
                      fullHeight: 150,
                      aspectRatio: 1
                    }}
                  />

                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__iYqtN)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"337px"}
                    loading={"lazy"}
                  />
                </div>
              </div>
            </div>
          </div>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__tbtdo)}
            displayHeight={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? "178px"
                : "421px"
            }
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: "/plasmic/wevu/images/image6.png",
              fullWidth: 1252,
              fullHeight: 690,
              aspectRatio: undefined
            }}
          />

          <div className={classNames(projectcss.all, sty.freeBox__lhtWv)}>
            <div className={classNames(projectcss.all, sty.freeBox___7Z9V1)}>
              <div className={classNames(projectcss.all, sty.freeBox___8EMy)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__lOztl
                  )}
                >
                  {"2"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__sEkIv)} />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__gYxpS)}>
              <div className={classNames(projectcss.all, sty.freeBox___399Ga)}>
                <Reveal
                  className={classNames("__wab_instance", sty.reveal__iqp9D)}
                  triggerOnce={true}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__zTrzc
                    )}
                  >
                    {"Nos clients"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ckndZ
                    )}
                  >
                    {"Ils nous font confiance. "}
                  </div>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__wiLrd)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"175px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/wevu/images/captureDecran20240403A094428Png.png",
                      fullWidth: 654,
                      fullHeight: 208,
                      aspectRatio: undefined
                    }}
                  />
                </Reveal>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox___53Z3M)}>
                <Reveal
                  className={classNames("__wab_instance", sty.reveal___3GoMc)}
                  triggerOnce={true}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__mac52)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ykGhg
                      )}
                    >
                      {"100%"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qmpoQ
                      )}
                    >
                      {"Satisfaction client"}
                    </div>
                  </div>
                </Reveal>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__wzArJ)}>
                <Reveal
                  className={classNames("__wab_instance", sty.reveal__jb5WC)}
                  triggerOnce={true}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__luh2)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ziEgr
                      )}
                    >
                      {"+35 clients"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__dFeGp
                      )}
                    >
                      {"D\u00e9livrer toujours plus, et toujours mieux. "}
                    </div>
                  </Stack__>
                </Reveal>
              </div>
            </div>
          </div>
          {(() => {
            const child$Props = {
              beforeChange: generateStateOnChangePropForCodeComponents(
                $state,
                "currentSlide",
                ["sliderCarousel", "currentSlide"],
                SliderWrapper_Helpers
              ),
              children: null,
              className: classNames("__wab_instance", sty.sliderCarousel),
              initialSlide: generateStateValueProp($state, [
                "sliderCarousel",
                "currentSlide"
              ]),
              ref: ref => {
                $refs["sliderCarousel"] = ref;
              },
              sliderScopeClassName: sty["sliderCarousel__slider"]
            };
            initializeCodeComponentStates(
              $state,
              [
                {
                  name: "currentSlide",
                  plasmicStateName: "sliderCarousel.currentSlide"
                }
              ],
              [],
              SliderWrapper_Helpers ?? {},
              child$Props
            );

            return (
              <SliderWrapper
                data-plasmic-name={"sliderCarousel"}
                data-plasmic-override={overrides.sliderCarousel}
                {...child$Props}
              />
            );
          })()}
          <div className={classNames(projectcss.all, sty.freeBox__xpUlG)}>
            <div className={classNames(projectcss.all, sty.freeBox__ewD9)}>
              <div className={classNames(projectcss.all, sty.freeBox___76ZH)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dlrCh
                  )}
                >
                  {"3"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__jMx9Z)} />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__yyVN)}>
              <div className={classNames(projectcss.all, sty.freeBox__dkYox)}>
                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__sSxMf
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly") ? (
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      {
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3___2A1Z2
                          )}
                        >
                          {hasVariant(
                            globalVariants,
                            "screen",
                            "mobileOnly"
                          ) ? (
                            <React.Fragment>
                              <span
                                className={
                                  "plasmic_default__all plasmic_default__span"
                                }
                                style={{ color: "#FFFFFF" }}
                              >
                                {"Un processus simple"}
                              </span>
                            </React.Fragment>
                          ) : (
                            "Un processus simple"
                          )}
                        </h3>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  ) : (
                    "Un processus simple"
                  )}
                </h2>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__y5Jk2
                  )}
                >
                  {
                    "Nous vous accompagnons de A \u00e0 Z, un r\u00e9f\u00e9rent est d\u00e9di\u00e9 \u00e0 la r\u00e9ussite de votre projet. "
                  }
                </div>
              </div>
            </div>
          </div>
          <h1
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1__s2Wc
            )}
          >
            {
              "Chez Wevu \nNos experts sont reconnus pour vous garantir un haut niveau de performances et dans la dur\u00e9e. "
            }
          </h1>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__bga7X)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__hy4At)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__lorGj)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__iKsCy
                  )}
                >
                  {"SEO/SEA"}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rQo50
                  )}
                >
                  {
                    "Surclassez vos concurrents dans le r\u00e9f\u00e9rencement et sur vos ads. "
                  }
                </div>
                <Button
                  className={classNames("__wab_instance", sty.button__pcTq0)}
                  color={"white"}
                  link={"https://calendly.com/contact-hbsm/30min"}
                  submitsForm={true}
                >
                  {"Prendre contact"}
                </Button>
              </Stack__>
              <Icon5Icon
                className={classNames(projectcss.all, sty.svg___8EoxZ)}
                role={"img"}
              />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__ib6M0)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__j4ZIb)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__lmJgL
                  )}
                >
                  {"UX, UI et webdesign"}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__brfC
                  )}
                >
                  {
                    "Ayez un site qui rayonne et qui transforme les visiteurs en clients. "
                  }
                </div>
                <Button
                  className={classNames("__wab_instance", sty.button__aj8Tn)}
                  color={"white"}
                  link={"https://calendly.com/contact-hbsm/30min"}
                  submitsForm={true}
                >
                  {"Prendre contact"}
                </Button>
              </Stack__>
              <Icon5Icon
                className={classNames(projectcss.all, sty.svg__kuCwk)}
                role={"img"}
              />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__kMyKf)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__gAuY3)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3___5Igdw
                  )}
                >
                  {"Instagram, TikTok, Pinterest, Facebook..."}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__olr7S
                  )}
                >
                  {"Devenez incontournable sur les r\u00e9seaux sociaux. "}
                </div>
                <Button
                  className={classNames("__wab_instance", sty.button___5L00)}
                  color={"white"}
                  link={"https://calendly.com/contact-hbsm/30min"}
                  submitsForm={true}
                >
                  {"Prendre contact"}
                </Button>
              </Stack__>
              <Icon5Icon
                className={classNames(projectcss.all, sty.svg___7EwQg)}
                role={"img"}
              />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__xf6QS)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__nmy3V)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3___4QfxK
                  )}
                >
                  {"Intelligence Artificielle "}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jhl0
                  )}
                >
                  {
                    "Automatisez vos processus, faites gagner du temps \u00e0 votre entreprise, augmentez votre productivit\u00e9... en bref, d\u00e9veloppez un avantage d\u00e9loyale face \u00e0 la concurrence."
                  }
                </div>
                <Button
                  className={classNames("__wab_instance", sty.button__eVKh)}
                  color={"white"}
                  link={"https://calendly.com/contact-hbsm/30min"}
                  submitsForm={true}
                >
                  {"Prendre contact"}
                </Button>
              </Stack__>
              <Icon5Icon
                className={classNames(projectcss.all, sty.svg__rL9Sf)}
                role={"img"}
              />
            </div>
          </Stack__>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__ettG4)}
            displayHeight={"492px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"460px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/wevu/images/image5.svg",
              fullWidth: 156,
              fullHeight: 150,
              aspectRatio: 1.040541
            }}
          />

          <h2
            className={classNames(
              projectcss.all,
              projectcss.h2,
              projectcss.__wab_text,
              sty.h2__tW4Mr
            )}
          >
            {hasVariant(globalVariants, "screen", "mobileOnly")
              ? "D\u00e9veloppez un avantage d\u00e9loyal face \u00e0 la concurrence. \nAdoptez une strat\u00e9gie digitale incroyable. "
              : "D\u00e9veloppez un avantage d\u00e9loyal face \u00e0 la concurrence. \nAdoptez une strat\u00e9gie digitale incroyable. "}
          </h2>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__oBlQ)}
          >
            <Button
              className={classNames("__wab_instance", sty.button__qz9MZ)}
              color={"white"}
              link={"https://calendly.com/contact-hbsm/30min"}
              submitsForm={true}
            >
              {"Prendre contact"}
            </Button>
          </Stack__>
          <div className={classNames(projectcss.all, sty.freeBox__b23Cj)} />
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "sliderCarousel"],
  sliderCarousel: ["sliderCarousel"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sliderCarousel: typeof SliderWrapper;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
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
    sliderCarousel: makeNodeComponent("sliderCarousel"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
