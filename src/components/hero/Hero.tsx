"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { MouseEvent, useRef } from "react";
import type { Language } from "@/content";

type HeroProps = {
  lang: Language;
  content: {
    eyebrow: string;
    line1: string;
    line2: string;
    line3: string;
    explore: string;
  };
};

type FrameData = {
  id: string;
  className: string;
  label: string;
  exitX: number;
  exitY: number;
  exitRotate: number;

  media:
    | {
        type: "image";
        src: string;
        position?: string;
      }
    | {
        type: "video";
        src: string;
      };
};

/* ===========================================================
   REAL MEDIA MOSAIC

   foto.jpg is intentionally NOT used here.
   It remains exclusive to Sara's main portrait.
=========================================================== */

const frames: FrameData[] = [
  {
    id: "01",
    className: "left-0 top-0 h-[32%] w-[22%]",
    label: "IMAGE",
    media: {
      type: "image",
      src: "/images/PORTAFOLIO/1.JPG",
      position: "50% 50%",
    },
    exitX: -600,
    exitY: -400,
    exitRotate: -10,
  },
  {
    id: "02",
    className: "left-[22%] top-0 h-[22%] w-[20%]",
    label: "LIGHT",
    media: {
      type: "image",
      src: "/images/PORTAFOLIO/2.png",
      position: "50% 50%",
    },
    exitX: -250,
    exitY: -600,
    exitRotate: 8,
  },
  {
    id: "03",
    className: "left-[42%] top-0 h-[36%] w-[19%]",
    label: "MOTION",
    media: {
      type: "video",
      src: "/images/PORTAFOLIO/10.MP4",
    },
    exitX: 80,
    exitY: -700,
    exitRotate: -6,
  },
  {
    id: "04",
    className: "right-0 top-0 h-[29%] w-[39%]",
    label: "OBSERVE",
    media: {
      type: "image",
      src: "/images/PORTAFOLIO/5.jpeg",
      position: "50% 50%",
    },
    exitX: 700,
    exitY: -420,
    exitRotate: 12,
  },
  {
    id: "05",
    className: "left-0 top-[32%] h-[38%] w-[25%]",
    label: "TEXTURE",
    media: {
      type: "image",
      src: "/images/PORTAFOLIO/6.jpeg",
      position: "50% 50%",
    },
    exitX: -750,
    exitY: 20,
    exitRotate: -14,
  },
  {
    id: "06",
    className: "right-0 top-[29%] h-[41%] w-[26%]",
    label: "DETAIL",
    media: {
      type: "image",
      src: "/images/PORTAFOLIO/7.jpg",
      position: "50% 50%",
    },
    exitX: 800,
    exitY: 40,
    exitRotate: 15,
  },
  {
    id: "07",
    className: "bottom-0 left-0 h-[30%] w-[17%]",
    label: "MEMORY",
    media: {
      type: "image",
      src: "/images/PORTAFOLIO/9.JPG",
      position: "50% 50%",
    },
    exitX: -700,
    exitY: 500,
    exitRotate: 16,
  },
  {
    id: "08",
    className: "bottom-0 left-[17%] h-[30%] w-[25%]",
    label: "STORY",
    media: {
      type: "video",
      src: "/images/PORTAFOLIO/cancion .mp4",
    },
    exitX: -280,
    exitY: 650,
    exitRotate: -12,
  },
  {
    id: "09",
    className: "bottom-0 left-[42%] h-[28%] w-[20%]",
    label: "FRAME",
    media: {
      type: "image",
      src: "/images/PORTAFOLIO/11.JPG",
      position: "50% 50%",
    },
    exitX: 180,
    exitY: 700,
    exitRotate: 9,
  },
  {
    id: "10",
    className: "bottom-0 right-0 h-[30%] w-[38%]",
    label: "WORLD",
    media: {
      type: "image",
      src: "/images/PORTAFOLIO/pajaro.jpg",
      position: "50% 50%",
    },
    exitX: 700,
    exitY: 550,
    exitRotate: -11,
  },
];

export default function Hero({ lang }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  /* =========================================================
     MOUSE PARALLAX
  ========================================================= */

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothX = useSpring(mouseX, {
    stiffness: 55,
    damping: 20,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 55,
    damping: 20,
    mass: 0.4,
  });

  const portraitX = useTransform(smoothX, [0, 1], [-10, 10]);
  const portraitY = useTransform(smoothY, [0, 1], [-5, 5]);

  const nameX = useTransform(smoothX, [0, 1], [6, -6]);
  const nameY = useTransform(smoothY, [0, 1], [2, -2]);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();

    const normalizedX =
      (event.clientX - bounds.left) / bounds.width;

    const normalizedY =
      (event.clientY - bounds.top) / bounds.height;

    mouseX.set(Math.max(0, Math.min(1, normalizedX)));
    mouseY.set(Math.max(0, Math.min(1, normalizedY)));
  }

  /* =========================================================
     SCROLL
  ========================================================= */

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const breakProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0, 0, 1]
  );

  /* =========================================================
     SARA SCROLL
  ========================================================= */

  const saraScale = useTransform(
    breakProgress,
    [0, 0.58, 0.82, 1],
    [1, 1, 1.04, 1.14]
  );

  const saraScrollY = useTransform(
    breakProgress,
    [0, 0.65, 1],
    [0, 0, 120]
  );

  const saraOpacity = useTransform(
    breakProgress,
    [0, 0.76, 0.93, 1],
    [1, 1, 0.7, 0]
  );

  /* =========================================================
     NAME SCROLL
  ========================================================= */

  const nameScrollY = useTransform(
    breakProgress,
    [0, 0.58, 1],
    [0, 0, 105]
  );

  const nameScale = useTransform(
    breakProgress,
    [0, 0.55, 1],
    [1, 1, 1.06]
  );

  const nameOpacity = useTransform(
    breakProgress,
    [0, 0.72, 0.92, 1],
    [1, 1, 0.45, 0]
  );

  /* =========================================================
     UI
  ========================================================= */

  const uiOpacity = useTransform(
    breakProgress,
    [0, 0.4, 0.72],
    [1, 1, 0]
  );

  /* =========================================================
     NEXT SECTION
  ========================================================= */

  const nextOpacity = useTransform(
    breakProgress,
    [0.68, 0.88, 1],
    [0, 0.2, 1]
  );

  const nextScale = useTransform(
    breakProgress,
    [0.68, 1],
    [0.86, 1]
  );

  const nextY = useTransform(
    breakProgress,
    [0.68, 1],
    [90, 0]
  );

  /* =========================================================
     COPY
  ========================================================= */

  const copy =
    lang === "es"
      ? {
          role: "Creativa Audiovisual & Multimedia",
          location: "Calgary · Colombia",
          portfolio: "Portfolio / 2026",
          disciplines: "Imagen · Movimiento · Sonido",
          scroll: "Desliza para descubrir",
          about: "La persona",
          statement: "Todo empieza con una forma de mirar.",
          nameMeta: "Audiovisual · Multimedia · Creative",
        }
      : {
          role: "Audiovisual & Multimedia Creative",
          location: "Calgary · Colombia",
          portfolio: "Portfolio / 2026",
          disciplines: "Image · Motion · Sound",
          scroll: "Scroll to discover",
          about: "The Person",
          statement: "Everything begins with a way of seeing.",
          nameMeta: "Audiovisual · Multimedia · Creative",
        };

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="
        relative
        h-[190vh]
        bg-[var(--charcoal)]
      "
    >
      <div
        className="
          sticky
          top-0
          h-[100svh]
          min-h-[680px]
          overflow-hidden
          bg-[var(--charcoal)]
        "
      >
        {/* ===================================================
            NEXT SECTION REVEAL
        =================================================== */}

        <motion.div
          style={{
            opacity: nextOpacity,
            scale: nextScale,
            y: nextY,
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            flex
            items-center
            justify-center
            bg-[var(--ivory)]
            px-6
          "
        >
          <div className="text-center text-[var(--charcoal)]">
            <p
              className="
                mb-6
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[var(--wine)]
              "
            >
            </p>

            <h2
              className="
                mx-auto
                max-w-[1000px]
                font-editorial
                text-[clamp(3.5rem,8vw,8rem)]
                italic
                leading-[0.85]
                tracking-[-0.06em]
              "
            >
              {copy.statement}
            </h2>
          </div>
        </motion.div>

        {/* ===================================================
            REAL MEDIA MOSAIC
        =================================================== */}

        {frames.map((frame, index) => (
          <MosaicFrame
            key={frame.id}
            frame={frame}
            index={index}
            progress={breakProgress}
          />
        ))}

        {/* ===================================================
            LEFT INFO
        =================================================== */}

        <motion.div
          style={{ opacity: uiOpacity }}
          className="
            absolute
            left-8
            top-[145px]
            z-50

            max-md:left-5
            max-md:top-[120px]

            xl:left-12
            xl:top-[150px]
          "
        >
          <p
            className="
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-white
              drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]
            "
          >
            {copy.role}
          </p>

          <p
            className="
              mt-2
              text-[6px]
              uppercase
              tracking-[0.2em]
              text-white/60
              drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]
            "
          >
            {copy.location}
          </p>
        </motion.div>

        {/* ===================================================
            RIGHT INFO
        =================================================== */}

        <motion.div
          style={{ opacity: uiOpacity }}
          className="
            absolute
            right-8
            top-[155px]
            z-50
            hidden
            text-right

            lg:block
            xl:right-12
          "
        >
          <p
            className="
              text-[6px]
              uppercase
              tracking-[0.22em]
              text-white/60
              drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]
            "
          >
            {copy.portfolio}
          </p>

          <p
            className="
              mt-1
              text-[6px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white/80
              drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]
            "
          >
            {copy.disciplines}
          </p>
        </motion.div>

        {/* ===================================================
            CENTRAL COMPOSITION
        =================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-[49%]
            z-30
            -translate-x-1/2
            -translate-y-1/2

            max-md:top-[46%]
          "
        >
          {/* =================================================
              SARA PORTRAIT
          ================================================= */}

          <motion.div
            style={{
              x: portraitX,
              y: saraScrollY,
              scale: saraScale,
              opacity: saraOpacity,
            }}
            className="
              group
              relative
              z-30

              h-[68vh]
              max-h-[730px]
              min-h-[560px]

              w-[44vw]
              min-w-[580px]
              max-w-[760px]

              overflow-hidden

              max-md:h-[49vh]
              max-md:min-h-[365px]
              max-md:w-[76vw]
              max-md:min-w-0
              max-md:max-w-none
            "
          >
            {/* PHOTO */}

            <motion.div
              style={{ y: portraitY }}
              whileHover={{ scale: 1.018 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                inset-0
              "
            >
              <Image
                src="/images/PORTAFOLIO/foto.jpg"
                alt="Sara Acosta"
                fill
                priority
                sizes="(max-width: 768px) 76vw, 760px"
                className="
                  object-cover
                  object-[50%_42%]

                  max-md:object-[50%_35%]
                "
              />
            </motion.div>

            {/* LIGHT COLOR TREATMENT */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[var(--wine-deep)]/[0.02]
                mix-blend-multiply
              "
            />

            {/* FRAME CORNERS */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-3
                top-3
                h-4
                w-4
                border-l
                border-t
                border-white/55
              "
            />

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-3
                top-3
                h-4
                w-4
                border-r
                border-t
                border-white/55
              "
            />

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                bottom-3
                left-3
                h-4
                w-4
                border-b
                border-l
                border-white/55
              "
            />

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                bottom-3
                right-3
                h-4
                w-4
                border-b
                border-r
                border-white/55
              "
            />

            {/* PHOTO METADATA */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-4
                left-5
                right-5
                z-10
                flex
                items-end
                justify-between
              "
            >
              <p
                className="
                  text-[5px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white/70
                  drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]
                "
              >
                Portrait / 001
              </p>

              <p
                className="
                  text-[5px]
                  uppercase
                  tracking-[0.2em]
                  text-white/70
                  drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]
                "
              >
                2026
              </p>
            </div>
          </motion.div>

          {/* =================================================
              SARA ACOSTA
          ================================================= */}

          <motion.div
            style={{
              x: nameX,
              y: nameScrollY,
              scale: nameScale,
              opacity: nameOpacity,
            }}
            className="
  absolute
  left-1/2
  top-[calc(100%-58px)]
  z-40
  -translate-x-1/2

  max-md:top-[calc(100%-12px)]
"
          >
            <motion.div
              style={{ y: nameY }}
              className="
                flex
                flex-col
                items-center
              "
            >
              <h1
                className="
                  whitespace-nowrap
                  text-[clamp(4rem,5.5vw,6.5rem)]
                  font-semibold
                  uppercase
                  leading-[0.7]
                  tracking-[-0.075em]
                  text-white

                  max-md:text-[clamp(3.4rem,15vw,5rem)]
                "
              >
                Sara
              </h1>

              <h1
                className="
                  ml-[0.55em]
                  whitespace-nowrap
                  text-[clamp(4rem,5.5vw,6.5rem)]
                  font-semibold
                  uppercase
                  leading-[0.8]
                  tracking-[-0.075em]
                  text-white

                  max-md:ml-[0.2em]
                  max-md:text-[clamp(3.4rem,15vw,5rem)]
                "
              >
                Acosta
              </h1>

              <p
                className="
                  mt-3
                  whitespace-nowrap
                  text-[6px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-white/75

                  max-md:text-[5px]
                "
              >
                {copy.nameMeta}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ===================================================
            SCROLL INDICATOR
        =================================================== */}

        <motion.div
          style={{ opacity: uiOpacity }}
          className="
            absolute
            bottom-7
            right-8
            z-50
            flex
            items-center
            gap-4

            max-md:bottom-5
            max-md:left-1/2
            max-md:right-auto
            max-md:-translate-x-1/2
            max-md:flex-col
            max-md:gap-2

            xl:right-12
          "
        >
          <span
            className="
              whitespace-nowrap
              text-[6px]
              uppercase
              tracking-[0.22em]
              text-white/70
              drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]
            "
          >
            {copy.scroll}
          </span>

          <motion.span
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-xs text-white"
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}

/* ===========================================================
   MOSAIC FRAME
=========================================================== */

function MosaicFrame({
  frame,
  index,
  progress,
}: {
  frame: FrameData;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = 0.05 + index * 0.018;

  const x = useTransform(
    progress,
    [0, start, 1],
    [0, 0, frame.exitX]
  );

  const y = useTransform(
    progress,
    [0, start, 1],
    [0, 0, frame.exitY]
  );

  const rotate = useTransform(
    progress,
    [0, start, 1],
    [0, 0, frame.exitRotate]
  );

  const scale = useTransform(
    progress,
    [0, start, 0.75, 1],
    [1, 1, 0.92, 0.75]
  );

  const opacity = useTransform(
    progress,
    [0, 0.72, 1],
    [1, 1, 0]
  );

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        scale,
        opacity,
      }}
      className={`
        group
        absolute
        z-10
        overflow-hidden
        border-[3px]
        border-[var(--charcoal)]
        bg-[var(--charcoal)]
        ${frame.className}
      `}
    >
      {/* =====================================================
          REAL IMAGE / VIDEO
      ===================================================== */}

      <motion.div
        whileHover={{
          scale: 1.055,
        }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          inset-0
        "
      >
        {frame.media.type === "image" ? (
          <Image
            src={frame.media.src}
            alt=""
            fill
            sizes="40vw"
            className="
              object-cover
              transition-[filter]
              duration-700
              group-hover:brightness-110
            "
            style={{
              objectPosition:
                frame.media.position ?? "50% 50%",
            }}
          />
        ) : (
          <video
            src={frame.media.src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="
              h-full
              w-full
              object-cover
            "
          />
        )}

        {/* CINEMATIC OVERLAY */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-black/20
            transition-colors
            duration-700
            group-hover:bg-black/5
          "
        />

        {/* SUBTLE WINE COLOR */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[var(--wine-deep)]/[0.08]
            mix-blend-multiply
          "
        />
      </motion.div>

      {/* =====================================================
          FRAME METADATA
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-3
          left-3
          right-3
          z-10
          flex
          items-end
          justify-between
          text-[5px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-white/80
          drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]
        "
      >
        <span>{frame.id}</span>
        <span>{frame.label}</span>
      </div>
    </motion.div>
  );
}