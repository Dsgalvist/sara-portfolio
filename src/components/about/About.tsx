"use client";

import { motion } from "motion/react";
import type { Language } from "@/content";

type AboutProps = {
  lang: Language;
};

type CreativeArea = {
  number: string;
  title: string;
  subtitle: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  skills: {
    es: string[];
    en: string[];
  };
  letter: string;
};

const creativeAreas: CreativeArea[] = [
  {
    number: "01",
    title: "VISUAL",
    subtitle: {
      es: "DISEÑO / COMPOSICIÓN",
      en: "DESIGN / COMPOSITION",
    },
    description: {
      es: "Identidades, composiciones y piezas visuales construidas con intención.",
      en: "Identities, compositions and visual pieces built with intention.",
    },
    skills: {
      es: ["Diseño gráfico", "Composición", "Publicidad"],
      en: ["Graphic Design", "Composition", "Advertising"],
    },
    letter: "V",
  },
  {
    number: "02",
    title: "MOTION",
    subtitle: {
      es: "MOVIMIENTO / RITMO",
      en: "MOVEMENT / RHYTHM",
    },
    description: {
      es: "Movimiento y ritmo para transformar ideas estáticas en experiencias audiovisuales.",
      en: "Movement and rhythm that transform static ideas into audiovisual experiences.",
    },
    skills: {
      es: ["Edición de video", "Producción", "Motion"],
      en: ["Video Editing", "Production", "Motion"],
    },
    letter: "M",
  },
  {
    number: "03",
    title: "STORY",
    subtitle: {
      es: "IDEAS / NARRATIVA",
      en: "IDEAS / NARRATIVE",
    },
    description: {
      es: "Conceptos e historias visuales construidas con estructura, intención y lenguaje.",
      en: "Concepts and visual stories built with structure, intention and language.",
    },
    skills: {
      es: ["Narrativa", "Conceptos", "Storyboard"],
      en: ["Narrative", "Concepts", "Storyboard"],
    },
    letter: "S",
  },
  {
    number: "04",
    title: "SOUND",
    subtitle: {
      es: "SONIDO / ATMÓSFERA",
      en: "SOUND / ATMOSPHERE",
    },
    description: {
      es: "El sonido como otra capa de narrativa, atmósfera e identidad audiovisual.",
      en: "Sound as another layer of narrative, atmosphere and audiovisual identity.",
    },
    skills: {
      es: ["Diseño sonoro", "Foley", "Audio"],
      en: ["Sound Design", "Foley", "Audio"],
    },
    letter: "S",
  },
];

export default function About({ lang }: AboutProps) {
  const isEs = lang === "es";

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#151112]
        text-[#f2ece4]
      "
    >
      {/* =====================================================
          DECORACIÓN
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-10rem]
          top-[10rem]
          h-[34rem]
          w-[34rem]
          rounded-full
          bg-[#6d1f33]/[0.07]
          blur-[150px]
        "
      />

      {/* =====================================================
          CONTENEDOR
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1800px]

          px-6
          pb-8
          pt-10

          md:px-10
          md:pb-10
          md:pt-12

          xl:px-14
          xl:pb-12
          xl:pt-14
        "
      >
        {/* =====================================================
            CABECERA
        ====================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/[0.12]
            pb-5
          "
        >
          <div className="flex items-center gap-5">
            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.3em]
                text-[#c47c8b]
              "
            >
              02
            </span>

            <span className="h-px w-10 bg-white/20" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-white/70
              "
            >
              {isEs ? "Sobre mí" : "About"}
            </span>
          </div>

          <div
            className="
              hidden
              text-right
              text-[9px]
              uppercase
              leading-[1.6]
              tracking-[0.2em]
              text-white/35
              sm:block
            "
          >
            <p>Sara Acosta</p>
            <p>Calgary · Colombia</p>
          </div>
        </div>

        {/* =====================================================
            CONTENIDO PRINCIPAL

            DESKTOP:
            INFO IZQUIERDA / CARDS DERECHA

            MOBILE:
            INFO / CARDS 2X2
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10
            border-b
            border-white/[0.12]
            py-9

            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-12
            lg:py-10

            xl:grid-cols-[0.92fr_1.08fr]
            xl:gap-16
          "
        >
          {/* ===================================================
              IZQUIERDA — SARA + INFORMACIÓN
          ==================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              flex-col
              lg:pr-4
            "
          >
            {/* LABEL */}

            <p
              className="
                mb-4
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[#c47c8b]
              "
            >
              {isEs
                ? "La persona detrás de la imagen"
                : "The person behind the image"}
            </p>

            {/* NOMBRE */}

            <h2
              className="
                text-[clamp(4rem,6.6vw,7.4rem)]
                font-medium
                leading-[0.76]
                tracking-[-0.075em]
              "
            >
              SARA
              <br />

              <span className="text-[#c47c8b]">
                ACOSTA.
              </span>
            </h2>

            {/* DISCIPLINAS */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-x-4
                gap-y-2

                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-white/45

                sm:text-[9px]
              "
            >
              <span>
                {isEs
                  ? "Creativa Audiovisual"
                  : "Audiovisual Creative"}
              </span>

              <span className="h-1 w-1 rounded-full bg-[#c47c8b]" />

              <span>Multimedia</span>

              <span className="h-1 w-1 rounded-full bg-[#c47c8b]" />

              <span>Visual Storytelling</span>
            </div>

            {/* DIVISOR */}

            <div className="my-6 h-px w-full bg-white/[0.1]" />

            {/* DESCRIPCIÓN */}

            <div
              className="
                grid
                max-w-[700px]
                gap-4

                text-[14px]
                leading-[1.7]
                text-white/58

                md:text-[15px]
                xl:text-[16px]
              "
            >
              <p>
                {isEs
                  ? "Soy una creativa audiovisual y multimedia enfocada en transformar ideas en piezas visuales con intención. Mi trabajo combina diseño gráfico, producción audiovisual, edición de video, narrativa, movimiento y sonido."
                  : "I’m an audiovisual and multimedia creative focused on transforming ideas into intentional visual pieces. My work combines graphic design, audiovisual production, video editing, narrative, motion and sound."}
              </p>

              <p>
                {isEs
                  ? "Me formé durante cuatro semestres en Lenguaje Audiovisual y Multimedia en la Universidad de La Sabana, donde exploré conceptos, piezas gráficas, producción audiovisual, storyboards y proyectos de sonido."
                  : "I completed four semesters of Audiovisual & Multimedia Language at Universidad de La Sabana, where I explored concepts, graphic pieces, audiovisual production, storyboards and sound projects."}
              </p>
            </div>

            {/* LOCATION */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                items-center
                gap-4
                border-t
                border-white/10
                pt-5

                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-white/65

                sm:text-[9px]
              "
            >
              <span>Calgary, Canada</span>

              <span className="h-1 w-1 rounded-full bg-[#c47c8b]" />

              <span>Colombia</span>
            </div>
          </motion.div>

          {/* ===================================================
              DERECHA — UNIVERSO CREATIVO
          ==================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              lg:border-l
              lg:border-white/[0.12]
              lg:pl-10

              xl:pl-12
            "
          >
            {/* HEADER UNIVERSO */}

            <div
              className="
                mb-5
                flex
                items-end
                justify-between
                gap-4
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#c47c8b]
                  "
                >
                  {isEs
                    ? "Universo creativo"
                    : "Creative universe"}
                </p>

                <p
                  className="
                    mt-2
                    font-editorial
                    text-[20px]
                    italic
                    leading-none
                    text-white/50

                    xl:text-[24px]
                  "
                >
                  {isEs
                    ? "Cuatro formas de construir una historia."
                    : "Four ways to build a story."}
                </p>
              </div>

              <span
                className="
                  hidden
                  text-[7px]
                  uppercase
                  tracking-[0.22em]
                  text-white/25

                  sm:block
                "
              >
                {isEs
                  ? "Explora / interactúa"
                  : "Explore / interact"}
              </span>
            </div>

            {/* CARDS 2 X 2 */}

            <div
              className="
                grid
                grid-cols-2
                border-l
                border-t
                border-white/[0.12]
              "
            >
              {creativeAreas.map((area, index) => (
                <CreativeCard
                  key={area.title}
                  area={area}
                  index={index}
                  lang={lang}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            HERRAMIENTAS
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            flex-col
            gap-4
            pt-6

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div className="flex items-center gap-4">
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#c47c8b]
              "
            >
              {isEs ? "Herramientas" : "Tools"}
            </p>

            <span
              className="
                hidden
                h-px
                w-14
                bg-white/15
                sm:block
              "
            />
          </div>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2

              font-editorial
              text-[clamp(1.25rem,2vw,2rem)]
              italic
              leading-none
              text-white/60
            "
          >
            <span>Adobe Photoshop</span>

            <span className="text-[#c47c8b]/50">
              ·
            </span>

            <span>DaVinci Resolve</span>

            <span className="text-[#c47c8b]/50">
              ·
            </span>

            <span>Canva Pro</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   CREATIVE CARD
========================================================= */

function CreativeCard({
  area,
  index,
  lang,
}: {
  area: CreativeArea;
  index: number;
  lang: Language;
}) {
  const isEs = lang === "es";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 16,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative

        min-h-[180px]
        overflow-hidden

        border-b
        border-r
        border-white/[0.12]

        bg-white/[0.015]

        p-3.5

        transition-colors
        duration-500

        hover:bg-[#6d1f33]/30

        sm:min-h-[200px]
        sm:p-5

        xl:min-h-[215px]
        xl:p-6
      "
    >
      {/* LETRA DE FONDO */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-1.5rem]
          right-[-0.2rem]

          select-none

          text-[6rem]
          font-semibold
          leading-none
          tracking-[-0.1em]
          text-white/[0.018]

          transition-all
          duration-500

          group-hover:-translate-y-2
          group-hover:text-[#c47c8b]/[0.08]

          sm:text-[8rem]
        "
      >
        {area.letter}
      </span>

      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
        "
      >
        {/* NUMBER + SUBTITLE */}

        <div
          className="
            flex
            items-start
            justify-between
            gap-2
          "
        >
          <span
            className="
              text-[7px]
              font-semibold
              tracking-[0.18em]
              text-[#c47c8b]

              sm:text-[8px]
            "
          >
            {area.number}
          </span>

          <span
            className="
              max-w-[65%]
              text-right
              text-[6px]
              uppercase
              tracking-[0.12em]
              text-white/30

              sm:text-[7px]
            "
          >
            {isEs
              ? area.subtitle.es
              : area.subtitle.en}
          </span>
        </div>

        {/* TITLE */}

        <h3
          className="
            mt-5

            text-[clamp(1.55rem,2.8vw,3.2rem)]
            font-medium
            leading-none
            tracking-[-0.06em]
            text-white/78

            transition-all
            duration-500

            group-hover:translate-x-1
            group-hover:text-[#f2ece4]

            sm:mt-6
          "
        >
          {area.title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mt-3
            max-w-[300px]

            text-[8px]
            leading-[1.5]
            text-white/40

            sm:text-[10px]

            xl:text-[11px]
          "
        >
          {isEs
            ? area.description.es
            : area.description.en}
        </p>

        {/* SKILLS */}

        <div
          className="
            mt-auto
            flex
            flex-wrap
            gap-1
            pt-4

            sm:gap-1.5
            sm:pt-4
          "
        >
          {(isEs
            ? area.skills.es
            : area.skills.en
          ).map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border
                border-white/[0.12]

                px-1.5
                py-1

                text-[5px]
                uppercase
                tracking-[0.06em]
                text-white/45

                transition-colors
                duration-300

                group-hover:border-[#c47c8b]/40
                group-hover:text-white/65

                sm:px-2
                sm:text-[6px]

                xl:text-[7px]
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}