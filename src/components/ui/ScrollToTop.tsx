"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      setVisible(window.scrollY > 500);

      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(
        scrollable > 0
          ? Math.min(1, window.scrollY / scrollable)
          : 0
      );
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver arriba / Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`
        group
        fixed

        bottom-[6.6rem]
        right-6

        z-[89]

        grid
        h-[68px]
        w-[68px]
        place-items-center

        rounded-full

        border
        border-[var(--wine)]/20

        bg-[var(--ivory)]/90

        p-[4px]

        text-[var(--wine)]

        shadow-[0_12px_35px_rgba(42,13,21,0.16)]

        backdrop-blur-xl

        transition-[opacity,transform,border-color,box-shadow]
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]

        hover:-translate-y-1
        hover:border-[var(--wine)]/45
        hover:shadow-[0_16px_42px_rgba(42,13,21,0.22)]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--wine)]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[var(--ivory)]

        motion-reduce:transform-none

        sm:bottom-[7.5rem]
        sm:right-8
        sm:h-[72px]
        sm:w-[72px]

        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }
      `}
    >
      {/* ================================================
          SCROLL PROGRESS
      ================================================= */}

      <span
        aria-hidden="true"
        className="
          absolute
          inset-[3px]
          rounded-full
        "
        style={{
          background: `conic-gradient(
            var(--wine) ${progress * 360}deg,
            rgba(109, 31, 51, 0.12) 0deg
          )`,
        }}
      />

      {/* ================================================
          INNER BUTTON
      ================================================= */}

      <span
        aria-hidden="true"
        className="
          relative

          flex
          h-full
          w-full
          flex-col
          items-center
          justify-center

          rounded-full

          bg-[var(--ivory)]

          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:bg-[var(--wine)]
          group-hover:text-[var(--ivory)]
        "
      >
        {/* ARROW */}

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="
            h-[20px]
            w-[20px]

            transition-transform
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]

            group-hover:-translate-y-1

            sm:h-[21px]
            sm:w-[21px]
          "
        >
          <path d="M12 19V5m-6 6 6-6 6 6" />
        </svg>

        {/* TOP */}

        <span
          className="
            mt-1

            text-[7px]
            font-semibold
            uppercase
            tracking-[0.18em]

            sm:text-[8px]
          "
        >
          TOP
        </span>
      </span>
    </button>
  );
}