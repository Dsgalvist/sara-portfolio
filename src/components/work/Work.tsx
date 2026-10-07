"use client";

import { useEffect, useState } from "react";
import type { Language } from "@/content";
import { projects } from "@/data/projects";

type WorkProps = {
  lang: Language;
};

const dialacImages = [
  "/images/Dialac/lacteo.png",
  "/images/Dialac/3.png",
  "/images/Dialac/2.png",
  "/images/Dialac/NO-PERROS.png",
  "/images/Dialac/1,2.png",
];

export default function Work({ lang }: WorkProps) {
  const dialac = projects.find((project) => project.id === "dialac");
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage(
        (current) => (current + 1) % dialacImages.length
      );
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  if (!dialac) {
    return null;
  }

  const copy =
    lang === "es"
      ? {
          section: "Trabajo",
          eyebrow: "Proyecto destacado",
          title: "Una idea.",
          titleAccent: "Un proyecto real.",
          intro:
            "Este espacio comienza con DIALAC y crecerá con nuevas historias, colaboraciones y proyectos visuales.",

          projectType: "Diseño visual / contenido",

          description:
            "Una propuesta visual creada para fortalecer la comunicación de DIALAC mediante diseño gráfico, contenido de producto y piezas digitales.",

          role: "Enfoque creativo",
          roleText:
            "Diseño visual, contenido de producto y piezas gráficas.",

          contribution: "Dentro del proyecto",

          areas: [
            {
              number: "01",
              title: "Dirección visual",
              text: "Una estética consistente para conectar las diferentes piezas.",
            },
            {
              number: "02",
              title: "Contenido de producto",
              text: "Composición y presentación visual para medios digitales.",
            },
            {
              number: "03",
              title: "Aplicación digital",
              text: "Adaptación del contenido visual para la experiencia web.",
            },
          ],

          explore: "Visitar DIALAC",
          current: "01 / PROYECTO ACTUAL",
          visualLabel: "DIALAC / VISUAL STUDY",
          future: "Más proyectos próximamente",
        }
      : {
          section: "Work",
          eyebrow: "Featured project",
          title: "One idea.",
          titleAccent: "One real project.",
          intro:
            "This space begins with DIALAC and will grow with new stories, collaborations and visual projects.",

          projectType: "Visual design / content",

          description:
            "A visual proposal created to strengthen DIALAC's communication through graphic design, product content and digital pieces.",

          role: "Creative focus",
          roleText:
            "Visual design, product content and graphic pieces.",

          contribution: "Inside the project",

          areas: [
            {
              number: "01",
              title: "Visual direction",
              text: "A consistent aesthetic connecting the different visual pieces.",
            },
            {
              number: "02",
              title: "Product content",
              text: "Composition and visual presentation for digital media.",
            },
            {
              number: "03",
              title: "Digital application",
              text: "Visual content adapted for the web experience.",
            },
          ],

          explore: "Visit DIALAC",
          current: "01 / CURRENT PROJECT",
          visualLabel: "DIALAC / VISUAL STUDY",
          future: "More projects coming soon",
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
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          py-12

          sm:px-8
          sm:py-14

          lg:px-12
          lg:py-16
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

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
            {copy.current}
          </span>
        </div>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <div
          className="
            grid
            gap-6
            py-8

            md:grid-cols-12
            md:items-end
            md:gap-10

            lg:py-10
          "
        >
          <div className="md:col-span-8">
            <p
              className="
                mb-3
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[var(--wine)]
              "
            >
              {copy.eyebrow}
            </p>

            <h2
              className="
                max-w-[780px]
                text-[clamp(2.8rem,5.2vw,5.7rem)]
                font-medium
                leading-[0.88]
                tracking-[-0.055em]
              "
            >
              {copy.title}

              <span
                className="
                  ml-[0.18em]
                  font-editorial
                  font-normal
                  italic
                  text-[var(--wine)]
                "
              >
                {copy.titleAccent}
              </span>
            </h2>
          </div>

          <div className="md:col-span-4">
            <p
              className="
                max-w-[390px]
                text-[13px]
                leading-[1.65]
                text-[var(--charcoal)]/60

                lg:text-[14px]
              "
            >
              {copy.intro}
            </p>
          </div>
        </div>

        {/* =====================================================
            DIALAC PROJECT
        ===================================================== */}

        <article
          className="
            grid
            overflow-hidden
            border
            border-[var(--charcoal)]/15

            md:grid-cols-12
          "
        >
          {/* ===================================================
              DIALAC SLIDESHOW
          =================================================== */}

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
            {/* BACKGROUND BLURRED IMAGE */}

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

            {/* DARK BACKGROUND CONTROL */}

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

            {/* COMPLETE IMAGES */}

            {dialacImages.map((src, index) => {
              const isActive = index === activeImage;

              return (
                <img
                  key={src}
                  src={src}
                  alt={
                    isActive
                      ? `DIALAC visual ${index + 1}`
                      : ""
                  }
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

            {/* SUBTLE OVERLAY */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                z-10
                bg-gradient-to-t
                from-[#16090d]/25
                via-transparent
                to-[#16090d]/10
              "
            />

            {/* VISUAL LABEL */}

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

            {/* TOP LEFT */}

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
              01 / 01
            </span>

            {/* CATEGORY */}

            <span
              className="
                absolute
                bottom-5
                left-5
                z-20
                hidden
                text-[7px]
                uppercase
                tracking-[0.2em]
                text-white/85
                drop-shadow-md

                sm:block
              "
            >
              Visual / Content
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
                    aria-label={`DIALAC image ${index + 1}`}
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

          {/* ===================================================
    PROJECT INFORMATION
=================================================== */}

<div
  className="
    flex
    flex-col
    bg-[var(--ivory)]
    p-6

    sm:p-8

    md:col-span-5

    lg:col-span-4
    lg:p-9

    xl:p-10
  "
>
  {/* TYPE */}

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
      {copy.projectType}
    </span>
  </div>

  {/* TITLE */}

  <h3
    className="
      mt-5
      text-[clamp(3.4rem,5vw,5.3rem)]
      font-medium
      leading-none
      tracking-[-0.06em]
      text-[var(--charcoal)]
    "
  >
    DIALAC
  </h3>

  {/* DESCRIPTION */}

  <p
    className="
      mt-6
      max-w-[430px]
      text-[14px]
      leading-[1.75]
      text-[var(--charcoal)]/80

      xl:text-[15px]
    "
  >
    {copy.description}
  </p>

  {/* CREATIVE FOCUS */}

  <div
    className="
      mt-7
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
        mt-2.5
        text-[13px]
        leading-[1.65]
        text-[var(--charcoal)]/70
      "
    >
      {copy.roleText}
    </p>

    {/* TAGS */}

    <div
      className="
        mt-5
        flex
        flex-wrap
        gap-2
      "
    >
      {[
        lang === "es"
          ? "Diseño gráfico"
          : "Graphic design",
        lang === "es"
          ? "Contenido"
          : "Content",
        lang === "es"
          ? "Producto"
          : "Product",
      ].map((tag) => (
        <span
          key={tag}
          className="
            rounded-full
            border
            border-[var(--charcoal)]/25
            px-3.5
            py-2
            text-[8px]
            font-medium
            uppercase
            tracking-[0.12em]
            text-[var(--charcoal)]/70
          "
        >
          {tag}
        </span>
      ))}
    </div>
  </div>

  {/* =================================================
      PROJECT AREAS
  ================================================= */}

  <div
    className="
      mt-7
      border-t
      border-[var(--charcoal)]/15
      pt-6
    "
  >
    <p
      className="
        mb-5
        text-[9px]
        font-semibold
        uppercase
        tracking-[0.22em]
        text-[var(--wine)]
      "
    >
      {copy.contribution}
    </p>

    <div
      className="
        grid
        border-t
        border-[var(--charcoal)]/15
      "
    >
      {copy.areas.map((area) => (
        <div
          key={area.number}
          className="
            grid
            grid-cols-[34px_1fr]
            gap-3
            border-b
            border-[var(--charcoal)]/15
            py-4
          "
        >
          <span
            className="
              pt-[2px]
              text-[8px]
              font-semibold
              tracking-[0.14em]
              text-[var(--wine)]
            "
          >
            {area.number}
          </span>

          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[var(--charcoal)]/90

                xl:text-[11px]
              "
            >
              {area.title}
            </p>

            <p
              className="
                mt-1.5
                max-w-[350px]
                text-[11px]
                leading-[1.6]
                text-[var(--charcoal)]/65

                xl:text-[12px]
              "
            >
              {area.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* =================================================
      META
  ================================================= */}

  <div
    className="
      mt-5
      flex
      items-center
      justify-between
      gap-4
    "
  >
    <span
      className="
        text-[8px]
        font-semibold
        uppercase
        tracking-[0.18em]
        text-[var(--charcoal)]/60
      "
    >
      2026
    </span>

    <span
      className="
        text-[8px]
        font-semibold
        uppercase
        tracking-[0.18em]
        text-[var(--charcoal)]/60
      "
    >
      Colombia
    </span>
  </div>

  {/* =================================================
      DIALAC WEBSITE
  ================================================= */}

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
      {copy.explore}
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
        </article>

        {/* =====================================================
            FUTURE PROJECTS
        ===================================================== */}

        <div
          className="
            flex
            items-center
            gap-4
            border-b
            border-[var(--charcoal)]/15
            py-5
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[var(--wine)]
            "
          />

          <p
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[var(--charcoal)]/40
            "
          >
            {copy.future}
          </p>

          <span
            aria-hidden="true"
            className="
              h-px
              flex-1
              bg-[var(--charcoal)]/10
            "
          />
        </div>
      </div>
    </section>
  );
}