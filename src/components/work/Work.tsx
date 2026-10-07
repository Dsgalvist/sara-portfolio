"use client";

import { useEffect, useState } from "react";

import type { Language } from "@/content";
import { projects } from "@/data/projects";

type WorkProps = {
  lang: Language;
};

const dialacImages = [
  "/images/Dialac/lacteo.png",
  // Publicidad realizada para DIALAC
  "/images/PORTAFOLIO/POSTERS/PUBLICIDAD.jpeg",
  "/images/Dialac/3.png",
  "/images/Dialac/2.png",
  "/images/Dialac/NO-PERROS.png",
  "/images/Dialac/1,2.png",
];

const posterStudies = [
  {
    number: "01",
    title: "Omar Pérez",
    src: "/images/PORTAFOLIO/POSTERS/omar-perez.png",
  },
  {
    number: "02",
    title: "Maradona",
    src: "/images/PORTAFOLIO/POSTERS/maradona.png",
  },
  {
    number: "03",
    title: "Ronaldinho",
    src: "/images/PORTAFOLIO/POSTERS/ronaldinho.png",
  },
];

export default function Work({ lang }: WorkProps) {
  const dialac = projects.find((project) => project.id === "dialac");

  const [activeImage, setActiveImage] = useState(0);
  const [activePoster, setActivePoster] = useState<number | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % dialacImages.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  if (!dialac) {
    return null;
  }

  const es = lang === "es";

  const copy = es
    ? {
        section: "Trabajo",
        sectionMeta: "Selección de trabajo",

        dialacType: "Proyecto comercial",

        dialacDescription:
          "Diseño visual y contenido creado para DIALAC, una empresa colombiana de distribución de productos lácteos y refrigerios.",

        role: "Trabajo realizado",

        roleText:
          "Diseño gráfico, contenido de producto, publicidad y aplicación visual para medios digitales.",

        website: "Visitar DIALAC",

        visualLabel: "DIALAC / IDENTIDAD VISUAL",

        areas: [
          "Diseño gráfico",
          "Contenido",
          "Publicidad",
          "Producto",
        ],

        postersLabel: "Estudios de póster",
        postersMeta: "Diseño editorial",
        poster: "Póster",
      }
    : {
        section: "Work",
        sectionMeta: "Selected work",

        dialacType: "Commercial project",

        dialacDescription:
          "Visual design and content created for DIALAC, a Colombian distributor of dairy products and snacks.",

        role: "Work developed",

        roleText:
          "Graphic design, product content, advertising and visual application for digital media.",

        website: "Visit DIALAC",

        visualLabel: "DIALAC / VISUAL IDENTITY",

        areas: [
          "Graphic design",
          "Content",
          "Advertising",
          "Product",
        ],

        postersLabel: "Poster studies",
        postersMeta: "Editorial design",
        poster: "Poster",
      };

  return (
    <section
      id="work"
      className="
        relative
        overflow-hidden
        bg-[var(--ivory)]
        text-[var(--charcoal)]
      "
    >
      {/* =====================================================
          WORK HEADER
      ===================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          pt-12

          sm:px-8
          sm:pt-14

          lg:px-12
          lg:pt-16
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[var(--charcoal)]/15
            pb-4
          "
        >
          <div className="flex items-center gap-4">
            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.22em]
                text-[var(--wine)]
              "
            >
              03
            </span>

            <span
              aria-hidden="true"
              className="
                h-px
                w-8
                bg-[var(--charcoal)]/25
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[var(--charcoal)]/65
              "
            >
              {copy.section}
            </span>
          </div>

          <span
            className="
              hidden
              text-[8px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[var(--charcoal)]/35

              sm:block
            "
          >
            {copy.sectionMeta}
          </span>
        </div>
      </div>

      {/* =====================================================
          DIALAC
      ===================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          py-9

          sm:px-8
          sm:py-11

          lg:px-12
          lg:py-14
        "
      >
        <article
          className="
            grid
            overflow-hidden
            border
            border-[var(--charcoal)]/15

            md:grid-cols-12
          "
        >
          {/* =================================================
              DIALAC VISUALS
          ================================================= */}

          <div
            className="
              group
              relative
              min-h-[430px]
              overflow-hidden
              bg-[#171416]

              sm:min-h-[520px]

              md:col-span-7
              md:min-h-[560px]

              lg:col-span-8
              lg:min-h-[620px]

              xl:min-h-[650px]
            "
          >
            {/* BLURRED BACKGROUND */}

            {dialacImages.map((src, index) => {
              const isActive = index === activeImage;

              return (
                <img
                  key={`background-${src}`}
                  src={src}
                  alt=""
                  aria-hidden="true"
                  className={`
                    pointer-events-none
                    absolute
                    -inset-[5%]
                    h-[110%]
                    w-[110%]
                    object-cover
                    blur-[24px]
                    saturate-[0.8]

                    transition-all
                    duration-[1000ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    ${
                      isActive
                        ? "scale-110 opacity-30"
                        : "scale-[1.15] opacity-0"
                    }
                  `}
                />
              );
            })}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                z-[1]
                bg-[#171416]/35
              "
            />

            {/* MAIN IMAGE */}

            {dialacImages.map((src, index) => {
              const isActive = index === activeImage;

              return (
                <img
                  key={src}
                  src={src}
                  alt={isActive ? `DIALAC visual ${index + 1}` : ""}
                  aria-hidden={!isActive}
                  className={`
                    absolute
                    inset-0
                    z-[2]
                    h-full
                    w-full
                    object-contain

                    transition-all
                    duration-[1000ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-[0.985] opacity-0"
                    }
                  `}
                />
              );
            })}

            {/* OVERLAY */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                z-10
                bg-gradient-to-t
                from-[#16090d]/30
                via-transparent
                to-[#16090d]/10
              "
            />

            {/* LABEL */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-5
                z-20
                -translate-x-1/2
              "
            >
              <p
                className="
                  whitespace-nowrap
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-white/80
                  drop-shadow-md
                "
              >
                {copy.visualLabel}
              </p>
            </div>

            {/* COUNTER */}

            <span
              className="
                absolute
                left-5
                top-5
                z-20
                text-[7px]
                font-semibold
                tracking-[0.18em]
                text-white/85
                drop-shadow-md
              "
            >
              {String(activeImage + 1).padStart(2, "0")} /{" "}
              {String(dialacImages.length).padStart(2, "0")}
            </span>

            {/* YEAR */}

            <span
              className="
                absolute
                bottom-5
                right-5
                z-20
                text-[7px]
                tracking-[0.18em]
                text-white/85
                drop-shadow-md
              "
            >
              {dialac.year}
            </span>

            {/* SLIDE INDICATORS */}

            <div
              className="
                absolute
                bottom-5
                left-1/2
                z-30
                flex
                -translate-x-1/2
                items-center
                gap-1.5
              "
            >
              {dialacImages.map((_, index) => {
                const isActive = index === activeImage;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`DIALAC visual ${index + 1}`}
                    className={`
                      h-[2px]
                      cursor-pointer
                      transition-all
                      duration-500

                      ${
                        isActive
                          ? "w-8 bg-white"
                          : "w-3 bg-white/40 hover:bg-white/70"
                      }
                    `}
                  />
                );
              })}
            </div>
          </div>

          {/* =================================================
              DIALAC INFO
          ================================================= */}

          <div
            className="
              flex
              flex-col
              justify-between
              bg-[var(--ivory)]
              p-6

              sm:p-8

              md:col-span-5

              lg:col-span-4
              lg:p-9

              xl:p-10
            "
          >
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="
                    text-[9px]
                    font-semibold
                    tracking-[0.2em]
                    text-[var(--wine)]
                  "
                >
                  01
                </span>

                <span
                  aria-hidden="true"
                  className="
                    h-px
                    w-7
                    bg-[var(--wine)]/45
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.17em]
                    text-[var(--charcoal)]/65
                  "
                >
                  {copy.dialacType}
                </span>
              </div>

              <h2
                className="
                  mt-6
                  text-[clamp(3.8rem,6vw,6rem)]
                  font-medium
                  leading-[0.9]
                  tracking-[-0.065em]
                  text-[var(--charcoal)]
                "
              >
                DIALAC
              </h2>

              <p
                className="
                  mt-6
                  max-w-[430px]
                  text-[14px]
                  leading-[1.75]
                  text-[var(--charcoal)]/75

                  xl:text-[15px]
                "
              >
                {copy.dialacDescription}
              </p>

              <div
                className="
                  mt-8
                  border-t
                  border-[var(--charcoal)]/15
                  pt-6
                "
              >
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[var(--wine)]
                  "
                >
                  {copy.role}
                </p>

                <p
                  className="
                    mt-3
                    text-[13px]
                    leading-[1.65]
                    text-[var(--charcoal)]/65
                  "
                >
                  {copy.roleText}
                </p>
              </div>

              {/* TAGS */}

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {copy.areas.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-[var(--charcoal)]/20
                      px-3.5
                      py-2

                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-[var(--charcoal)]/65
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div
                className="
                  mt-10
                  flex
                  items-center
                  justify-between
                  gap-4
                  border-t
                  border-[var(--charcoal)]/15
                  pt-5
                "
              >
                <span
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[var(--charcoal)]/45
                  "
                >
                  {dialac.year}
                </span>

                <span
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[var(--charcoal)]/45
                  "
                >
                  Colombia
                </span>
              </div>

              <a
                href="https://dialac.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-7
                  flex
                  w-fit
                  items-center
                  gap-4

                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[var(--charcoal)]
                "
              >
                <span
                  className="
                    border-b
                    border-[var(--charcoal)]/50
                    pb-1.5

                    transition-colors
                    duration-300

                    group-hover:border-[var(--wine)]
                    group-hover:text-[var(--wine)]
                  "
                >
                  {copy.website}
                </span>

                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[var(--wine)]

                    text-[14px]
                    text-[var(--ivory)]

                    transition-all
                    duration-300

                    group-hover:rotate-45
                    group-hover:scale-105
                  "
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* =====================================================
          POSTERS
          SAME BACKGROUND AS DIALAC
      ===================================================== */}

      <div
        className="
          relative
          overflow-hidden
          bg-[var(--ivory)]
          text-[var(--charcoal)]
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1500px]
            px-5
            pb-16
            pt-3

            sm:px-8
            sm:pb-20

            lg:px-12
            lg:pb-24
          "
        >
          {/* POSTERS HEADER */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-6
              border-b
              border-[var(--charcoal)]/15
              pb-4
            "
          >
            <div className="flex items-center gap-4">
              

              <span
                aria-hidden="true"
                className="
                  h-px
                  w-8
                  bg-[var(--charcoal)]/25
                "
              />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[var(--charcoal)]/65
                "
              >
                {copy.postersLabel}
              </span>
            </div>

            <span
              className="
                hidden
                text-[8px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-[var(--charcoal)]/35

                sm:block
              "
            >
              {copy.postersMeta}
            </span>
          </div>

          {/* =================================================
              POSTER GRID
          ================================================= */}

          <div
            className="
              grid
              gap-7
              pt-8

              sm:grid-cols-2

              lg:grid-cols-3
              lg:gap-7
              lg:pt-10
            "
          >
            {posterStudies.map((poster, index) => {
              const isFocused = activePoster === index;

              const anotherFocused =
                activePoster !== null && !isFocused;

              return (
                <article
                  key={poster.title}
                  onMouseEnter={() => setActivePoster(index)}
                  onMouseLeave={() => setActivePoster(null)}
                  className={`
                    group
                    relative

                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    ${
                      anotherFocused
                        ? "lg:scale-[0.985] lg:opacity-45"
                        : "opacity-100"
                    }

                    ${
                      isFocused
                        ? "lg:z-20 lg:scale-[1.015]"
                        : "lg:z-10"
                    }
                  `}
                >
                  {/* NUMBER + TYPE */}

                  <div
                    className="
                      mb-3
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        text-[8px]
                        font-semibold
                        tracking-[0.16em]
                        text-[var(--wine)]
                      "
                    >
                      {poster.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className="
                        h-px
                        w-5
                        bg-[var(--charcoal)]/20
                      "
                    />

                    <span
                      className="
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.16em]
                        text-[var(--charcoal)]/40
                      "
                    >
                      {copy.postersMeta}
                    </span>
                  </div>

                  {/* ==========================================
                      FIXED POSTER FRAME
                      ALL THREE EXACT SAME SIZE
                  ========================================== */}

                  <div
                    className="
                      relative
                      aspect-[4/5]
                      w-full
                      overflow-hidden
                      bg-[#e9e2d9]
                    "
                  >
                    <img
                      src={poster.src}
                      alt={`${poster.title} poster`}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        object-center

                        transition-transform
                        duration-[900ms]
                        ease-[cubic-bezier(0.22,1,0.36,1)]

                        group-hover:scale-[1.025]
                      "
                    />

                    {/* HOVER SHADE */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-[var(--wine)]/0

                        transition-colors
                        duration-500

                        group-hover:bg-[var(--wine)]/[0.04]
                      "
                    />

                    {/* CORNER TOP LEFT */}

                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        left-4
                        top-4
                        h-6
                        w-6

                        border-l
                        border-t
                        border-white/0

                        transition-all
                        duration-500

                        group-hover:border-white/70
                      "
                    />

                    {/* CORNER BOTTOM RIGHT */}

                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        bottom-4
                        right-4
                        h-6
                        w-6

                        border-b
                        border-r
                        border-white/0

                        transition-all
                        duration-500

                        group-hover:border-white/70
                      "
                    />
                  </div>

                  {/* CAPTION */}

                  <div
                    className="
                      flex
                      items-end
                      justify-between
                      gap-5
                      border-b
                      border-[var(--charcoal)]/15
                      py-4
                    "
                  >
                    <div>
                      <p
                        className="
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-[var(--wine)]
                        "
                      >
                        {copy.poster} {poster.number}
                      </p>

                      <h3
                        className="
                          mt-1.5
                          font-editorial
                          text-[clamp(1.5rem,2vw,2.2rem)]
                          italic
                          leading-none
                          tracking-[-0.025em]
                          text-[var(--charcoal)]
                        "
                      >
                        {poster.title}
                      </h3>
                    </div>

                    <span
                      aria-hidden="true"
                      className="
                        text-[1.15rem]
                        text-[var(--charcoal)]/25

                        transition-all
                        duration-300

                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-[var(--wine)]
                      "
                    >
                      ↗
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          {/* BOTTOM */}

          <div
            className="
              mt-10
              flex
              items-center
              gap-4
              border-t
              border-[var(--charcoal)]/15
              pt-5
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-[var(--wine)]
              "
            />

            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[var(--charcoal)]/35
              "
            >
              Sara Acosta / {copy.postersLabel}
            </span>

            <span
              aria-hidden="true"
              className="
                h-px
                flex-1
                bg-[var(--charcoal)]/10
              "
            />

            <span
              className="
                hidden
                font-editorial
                text-[1rem]
                italic
                text-[var(--wine)]/70

                sm:block
              "
            >
              01 — 03
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}