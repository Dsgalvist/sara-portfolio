"use client";

import { useEffect, useState } from "react";

type LoaderStage = "solving" | "solved" | "opening" | "done";

const tiles = Array.from({ length: 9 }, (_, index) => index);

export default function PageLoader() {
  const [stage, setStage] = useState<LoaderStage>("solving");

  useEffect(() => {
    const solvedTimer = window.setTimeout(() => {
      setStage("solved");
    }, 900);

    const openingTimer = window.setTimeout(() => {
      setStage("opening");
    }, 1350);

    const doneTimer = window.setTimeout(() => {
      setStage("done");
    }, 2100);

    return () => {
      window.clearTimeout(solvedTimer);
      window.clearTimeout(openingTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (stage !== "done") {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [stage]);

  if (stage === "done") {
    return null;
  }

  const isSolved = stage === "solved" || stage === "opening";
  const isOpening = stage === "opening";

  return (
    <div
      aria-hidden="true"
      className={`
        fixed
        inset-0
        z-[9999]

        flex
        items-center
        justify-center

        overflow-hidden

        ${isOpening ? "pointer-events-none" : ""}
      `}
    >
      {/* =====================================================
          TOP PANEL
      ===================================================== */}

      <div
        className={`
          absolute
          left-0
          top-0
          h-[50.5%]
          w-full

          bg-[var(--wine)]

          will-change-transform
          transform-gpu

          transition-transform
          duration-[750ms]
          ease-[cubic-bezier(0.77,0,0.18,1)]

          ${
            isOpening
              ? "-translate-y-[101%]"
              : "translate-y-0"
          }
        `}
      />

      {/* =====================================================
          BOTTOM PANEL
      ===================================================== */}

      <div
        className={`
          absolute
          bottom-0
          left-0
          h-[50.5%]
          w-full

          bg-[var(--wine)]

          will-change-transform
          transform-gpu

          transition-transform
          duration-[750ms]
          ease-[cubic-bezier(0.77,0,0.18,1)]

          ${
            isOpening
              ? "translate-y-[101%]"
              : "translate-y-0"
          }
        `}
      />

      {/* =====================================================
          TOP NAME
      ===================================================== */}

      <span
        className={`
          pointer-events-none
          absolute
          left-6
          top-6
          z-10

          text-[8px]
          font-semibold
          uppercase
          tracking-[0.26em]
          text-[var(--ivory)]/45

          will-change-[opacity,transform]

          transition-[opacity,transform]
          duration-300

          ${
            isOpening
              ? "-translate-y-2 opacity-0"
              : "translate-y-0 opacity-100"
          }

          sm:left-9
          sm:top-8
        `}
      >
        Sara Acosta
      </span>

      {/* =====================================================
          BOTTOM DETAIL
      ===================================================== */}

      <span
        className={`
          pointer-events-none
          absolute
          bottom-6
          right-6
          z-10

          font-editorial
          text-[12px]
          italic
          tracking-[0.08em]
          text-[var(--ivory)]/40

          will-change-[opacity,transform]

          transition-[opacity,transform]
          duration-300

          ${
            isOpening
              ? "translate-y-2 opacity-0"
              : "translate-y-0 opacity-100"
          }

          sm:bottom-8
          sm:right-9
        `}
      >
        Visual / Motion / Story
      </span>

      {/* =====================================================
          CENTER
      ===================================================== */}

      <div
        className={`
          relative
          z-20

          flex
          flex-col
          items-center

          will-change-[opacity,transform]
          transform-gpu

          transition-[opacity,transform]
          duration-[420ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            isOpening
              ? "scale-[1.04] opacity-0"
              : "scale-100 opacity-100"
          }
        `}
      >
        {/* ===================================================
            CUBE
        =================================================== */}

        <div
          className="
            relative

            h-[220px]
            w-[220px]

            sm:h-[260px]
            sm:w-[260px]

            lg:h-[290px]
            lg:w-[290px]
          "
        >
          {/* GLOW */}

          <div
            aria-hidden="true"
            className={`
              absolute
              left-1/2
              top-1/2

              h-[115%]
              w-[115%]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-[var(--ivory)]/[0.065]
              blur-[55px]

              will-change-[opacity,transform]
              transform-gpu

              transition-[opacity,transform]
              duration-500
              ease-out

              ${
                isSolved
                  ? "scale-100 opacity-100"
                  : "scale-90 opacity-50"
              }
            `}
          />

          {/* SHADOW */}

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-[-26px]
              left-1/2

              h-7
              w-[72%]

              -translate-x-1/2

              rounded-full

              bg-[#210a12]/35
              blur-[16px]
            "
          />

          {/* =================================================
              CUBE BODY
          ================================================= */}

          <div
            className={`
              absolute
              inset-0

              will-change-transform
              transform-gpu

              transition-transform
              duration-[650ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${
                isSolved
                  ? "rotate-0 scale-100"
                  : "-rotate-[3deg] scale-[0.97]"
              }
            `}
          >
            {/* ===============================================
                TOP FACE
            =============================================== */}

            <div
              aria-hidden="true"
              className="
                absolute

                left-[16px]
                right-[16px]
                top-[-22px]

                h-[29px]

                origin-bottom
                skew-x-[-38deg]

                rounded-t-[7px]

                bg-[#8d314a]

                opacity-80
              "
            />

            {/* ===============================================
                RIGHT FACE
            =============================================== */}

            <div
              aria-hidden="true"
              className="
                absolute

                bottom-[14px]
                right-[-21px]
                top-[14px]

                w-[29px]

                origin-left
                skew-y-[-38deg]

                rounded-r-[7px]

                bg-[#421421]

                opacity-85
              "
            />

            {/* ===============================================
                FRONT FACE
            =============================================== */}

            <div
              className="
                absolute
                inset-0

                grid
                grid-cols-3
                grid-rows-3

                gap-[6px]

                rounded-[20px]

                bg-[#35101d]

                p-[8px]

                shadow-[0_30px_70px_rgba(25,5,12,0.34)]
              "
            >
              {tiles.map((tile) => {
                const moving = tile === 5;

                let tileColor = "";

                if (tile === 0) tileColor = "bg-[#8b3049]";
                if (tile === 1) tileColor = "bg-[#a64a62]";
                if (tile === 2) tileColor = "bg-[#7d263e]";
                if (tile === 3) tileColor = "bg-[#b85f75]";
                if (tile === 4) tileColor = "bg-[#f2ece4]";
                if (tile === 6) tileColor = "bg-[#752139]";
                if (tile === 7) tileColor = "bg-[#963951]";
                if (tile === 8) tileColor = "bg-[#c47c8b]";

                return (
                  <span
                    key={tile}
                    className={`
                      relative

                      rounded-[9px]

                      border
                      border-white/[0.07]

                      shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]

                      ${
                        moving
                          ? `
                            z-20
                            bg-[#f2ece4]

                            will-change-transform
                            transform-gpu

                            transition-transform
                            duration-[900ms]
                            ease-[cubic-bezier(0.16,1,0.3,1)]
                          `
                          : tileColor
                      }

                      ${
                        moving && !isSolved
                          ? `
                            translate-x-[48%]
                            -translate-y-[34%]
                            rotate-[18deg]
                            scale-[0.84]
                          `
                          : ""
                      }

                      ${
                        moving && isSolved
                          ? `
                            translate-x-0
                            translate-y-0
                            rotate-0
                            scale-100
                          `
                          : ""
                      }
                    `}
                  >
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        inset-[5px]

                        rounded-[6px]

                        border
                        border-white/[0.045]
                      "
                    />
                  </span>
                );
              })}
            </div>
          </div>

          {/* =================================================
              SOLVED PULSE
          ================================================= */}

          <span
            aria-hidden="true"
            className={`
              pointer-events-none
              absolute
              inset-[-12px]

              rounded-[26px]

              border
              border-[var(--ivory)]/30

              will-change-[opacity,transform]
              transform-gpu

              transition-[opacity,transform]
              duration-500
              ease-out

              ${
                isSolved
                  ? "scale-[1.08] opacity-0"
                  : "scale-[0.96] opacity-0"
              }
            `}
          />
        </div>

        {/* ===================================================
            BRAND
        =================================================== */}

        <div
          className={`
            mt-12
            text-center

            will-change-[opacity,transform]
            transform-gpu

            transition-[opacity,transform]
            duration-500
            ease-out

            ${
              isSolved
                ? "translate-y-0 opacity-100"
                : "translate-y-1 opacity-70"
            }
          `}
        >
          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.36em]
              text-[var(--ivory)]/55

              sm:text-[10px]
            "
          >
            Portfolio
          </p>

          <p
            className="
              mt-2

              text-[clamp(1.8rem,3vw,2.6rem)]
              font-medium
              uppercase
              tracking-[0.14em]
              text-[var(--ivory)]
            "
          >
            Sara Acosta
          </p>
        </div>

        {/* ===================================================
            PROGRESS
        =================================================== */}

        <div
          className="
            relative

            mt-8

            h-px
            w-[190px]

            overflow-hidden

            bg-[var(--ivory)]/15

            sm:w-[230px]
          "
        >
          <span
            className={`
              absolute
              inset-y-0
              left-0

              bg-[var(--ivory)]

              will-change-transform
              origin-left
              transform-gpu

              transition-transform
              ease-[cubic-bezier(0.16,1,0.3,1)]

              ${
                stage === "solving"
                  ? "scale-x-[0.62] duration-[900ms]"
                  : "scale-x-100 duration-[400ms]"
              }
            `}
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}