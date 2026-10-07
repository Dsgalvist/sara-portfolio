"use client";

import { motion } from "motion/react";
import type { Language } from "@/content";

type JourneyProps = {
  lang: Language;
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

type VisualIconProps = {
  type: "visual" | "audiovisual" | "motion" | "sound";
};

function VisualIcon({ type }: VisualIconProps) {
  if (type === "visual") {
    return (
      <div className="relative h-full w-full">
        <motion.div
          className="
            absolute
            left-[17%]
            top-[18%]
            h-[55%]
            w-[58%]
            border
            border-current
          "
          whileHover={{
            rotate: -5,
            x: -3,
            y: 2,
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="
            absolute
            bottom-[16%]
            right-[13%]
            h-[48%]
            w-[48%]
            border
            border-current
          "
          whileHover={{
            rotate: 6,
            x: 4,
            y: -3,
          }}
          transition={{ duration: 0.3 }}
        />

        <div
          className="
            absolute
            left-[48%]
            top-[48%]
            h-2
            w-2
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-current
          "
        />
      </div>
    );
  }

  if (type === "audiovisual") {
    return (
      <div className="relative h-full w-full">
        <motion.div
          className="
            absolute
            left-[14%]
            top-[24%]
            h-[52%]
            w-[61%]
            border
            border-current
          "
          whileHover={{
            scale: 1.04,
          }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <div
              className="
                ml-1
                h-0
                w-0
                border-b-[10px]
                border-l-[16px]
                border-t-[10px]
                border-b-transparent
                border-l-current
                border-t-transparent
              "
            />
          </div>
        </motion.div>

        <motion.div
          className="
            absolute
            right-[11%]
            top-[35%]
            h-[30%]
            w-[17%]
            border
            border-current
          "
          whileHover={{
            x: 4,
          }}
        />
      </div>
    );
  }

  if (type === "motion") {
    return (
      <div className="relative h-full w-full">
        <motion.div
          className="
            absolute
            left-[14%]
            top-[30%]
            h-[38%]
            w-[38%]
            rounded-full
            border
            border-current
          "
          animate={{
            x: [0, 24, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            right-[14%]
            top-[30%]
            h-[38%]
            w-[38%]
            rounded-full
            border
            border-current
          "
          animate={{
            x: [0, -24, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[52%]
            w-px
            -translate-x-1/2
            -translate-y-1/2
            bg-current
          "
          animate={{
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <svg
        viewBox="0 0 220 100"
        className="h-[70%] w-[84%]"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M5 50 C18 50 18 18 31 18 C44 18 44 82 57 82 C70 82 70 30 83 30 C96 30 96 70 109 70 C122 70 122 12 135 12 C148 12 148 88 161 88 C174 88 174 37 187 37 C200 37 200 50 215 50"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          initial={{
            pathLength: 0,
          }}
          whileInView={{
            pathLength: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}

export default function Journey({ lang }: JourneyProps) {
  const copy =
    lang === "es"
      ? {
          section: "Trayectoria",
          eyebrow: "Mi recorrido",

          title: "Una historia",
          titleAccent: "en movimiento.",

          intro:
            "Mi recorrido creativo se ha construido entre aprendizaje, exploración y nuevas perspectivas que continúan transformando mi manera de contar visualmente.",

          timeline: "Línea del tiempo",
          now: "AHORA",

          beginning: "El comienzo",
          university: "Universidad de La Sabana",
          degree: "Lenguaje Audiovisual y Multimedia",
          beginningText:
            "Un espacio para descubrir la narrativa audiovisual, el diseño, la producción, el sonido y nuevas formas de construir historias.",

          evolution: "Evolución creativa",
          evolutionTitle: "Nuevos horizontes",
          evolutionSubtitle: "Diseño · Imagen · Movimiento · Sonido",
          evolutionText:
            "La formación se convierte en una mirada propia: explorar ideas, experimentar con distintos medios y desarrollar una identidad visual cada vez más personal.",

          present: "Nuevas perspectivas",
          presentTitle: "Colombia → Calgary",
          presentSubtitle: "Una mirada que sigue evolucionando",
          presentText:
            "Una nueva etapa para llevar esa experiencia a proyectos reales, nuevas colaboraciones y diferentes formas de crear.",

          visualLanguage: "Mi lenguaje visual",
          visualLanguageDescription:
            "Las disciplinas que se encuentran constantemente en mi manera de crear.",

          visual: "Diseño",
          visualDescription: "Composición e identidad visual.",

          audiovisual: "Audiovisual",
          audiovisualDescription: "Imagen, edición y narrativa.",

          motion: "Movimiento",
          motionDescription: "Animación, ritmo y expresión.",

          sound: "Sonido",
          soundDescription: "Atmósfera, detalle y Foley.",

          languages: "Idiomas",
          languagesDescription:
            "Dos idiomas que forman parte de mi experiencia personal y creativa.",

          spanish: "Español",
          native: "Nativo",

          english: "Inglés",
          englishLevel: "B1",
        }
      : {
          section: "Journey",
          eyebrow: "My journey",

          title: "A story",
          titleAccent: "in motion.",

          intro:
            "My creative journey has been shaped by learning, exploration and new perspectives that continue to transform the way I tell visual stories.",

          timeline: "Timeline",
          now: "NOW",

          beginning: "The beginning",
          university: "Universidad de La Sabana",
          degree: "Audiovisual & Multimedia Language",
          beginningText:
            "A space to discover audiovisual storytelling, design, production, sound and new ways of building stories.",

          evolution: "Creative evolution",
          evolutionTitle: "New horizons",
          evolutionSubtitle: "Design · Image · Motion · Sound",
          evolutionText:
            "Education becomes a personal perspective: exploring ideas, experimenting with different media and developing an increasingly distinctive visual identity.",

          present: "New perspectives",
          presentTitle: "Colombia → Calgary",
          presentSubtitle: "A perspective that keeps evolving",
          presentText:
            "A new stage to bring that experience into real projects, new collaborations and different ways of creating.",

          visualLanguage: "My visual language",
          visualLanguageDescription:
            "The disciplines that constantly come together in the way I create.",

          visual: "Design",
          visualDescription: "Composition and visual identity.",

          audiovisual: "Audiovisual",
          audiovisualDescription: "Image, editing and storytelling.",

          motion: "Motion",
          motionDescription: "Animation, rhythm and expression.",

          sound: "Sound",
          soundDescription: "Atmosphere, detail and Foley.",

          languages: "Languages",
          languagesDescription:
            "Two languages that are part of my personal and creative experience.",

          spanish: "Spanish",
          native: "Native",

          english: "English",
          englishLevel: "B1",
        };

  const timeline = [
    {
      year: "2024",
      label: copy.beginning,
      title: copy.university,
      subtitle: copy.degree,
      description: copy.beginningText,
    },
    {
      year: "2026",
      label: copy.evolution,
      title: copy.evolutionTitle,
      subtitle: copy.evolutionSubtitle,
      description: copy.evolutionText,
    },
    {
      year: copy.now,
      label: copy.present,
      title: copy.presentTitle,
      subtitle: copy.presentSubtitle,
      description: copy.presentText,
    },
  ];

  const disciplines = [
    {
      number: "01",
      type: "visual" as const,
      title: copy.visual,
      description: copy.visualDescription,
    },
    {
      number: "02",
      type: "audiovisual" as const,
      title: copy.audiovisual,
      description: copy.audiovisualDescription,
    },
    {
      number: "03",
      type: "motion" as const,
      title: copy.motion,
      description: copy.motionDescription,
    },
    {
      number: "04",
      type: "sound" as const,
      title: copy.sound,
      description: copy.soundDescription,
    },
  ];

  return (
    <section
      id="journey"
      className="
        relative
        overflow-hidden
        bg-[#151112]
        text-[#f2ece4]
      "
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-28
          bottom-[-14rem]
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-[#6d1f33]/[0.09]
          blur-[130px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          py-10

          sm:px-8
          sm:py-12

          lg:px-12
          lg:py-14
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
            border-white/[0.12]
            pb-4
          "
        >
          <div className="flex items-center gap-4">
            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.22em]
                text-[#c47c8b]
              "
            >
              04
            </span>

            <span className="h-px w-8 bg-white/25" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#f2ece4]/75
              "
            >
              {copy.section}
            </span>
          </div>

          <div
            className="
              hidden
              items-center
              gap-3
              text-[8px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[#f2ece4]/45

              sm:flex
            "
          >
            <span>Bogotá</span>
            <span className="text-[#c47c8b]">→</span>
            <span>Calgary</span>
          </div>
        </div>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            grid
            gap-6
            border-b
            border-white/[0.12]
            py-8

            md:grid-cols-12
            md:items-end
            md:gap-8

            lg:py-9
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
                text-[#c47c8b]
              "
            >
              {copy.eyebrow}
            </p>

            <h2
              className="
                max-w-[850px]
                text-[clamp(2.6rem,4.7vw,5rem)]
                font-medium
                leading-[0.9]
                tracking-[-0.055em]
              "
            >
              {copy.title}

              <span
                className="
                  ml-[0.2em]
                  font-editorial
                  font-normal
                  italic
                  text-[#c47c8b]
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
                text-[12px]
                leading-[1.7]
                text-[#f2ece4]/65

                lg:text-[13px]
              "
            >
              {copy.intro}
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            TIMELINE
        ===================================================== */}

        <div
          className="
            border-b
            border-white/[0.12]
            py-8

            lg:py-9
          "
        >
          <div className="flex items-center justify-between gap-5">
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#c47c8b]
              "
            >
              {copy.timeline}
            </p>

            <p
              className="
                hidden
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-[#f2ece4]/35

                sm:block
              "
            >
              2024 — 2026 — {copy.now}
            </p>
          </div>

          {/* DESKTOP */}

          <div className="relative mt-7 hidden md:block">
            <div
              className="
                absolute
                left-0
                right-0
                top-[7px]
                h-px
                bg-white/[0.14]
              "
            />

            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                left-0
                right-0
                top-[7px]
                h-px
                origin-left
                bg-[#c47c8b]
              "
            />

            <div className="relative grid grid-cols-3 gap-10">
              {timeline.map((item, index) => (
                <motion.article
                  key={`${item.year}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.18 + index * 0.16,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    relative
                    pt-7
                  "
                >
                  <span
                    className="
                      absolute
                      left-0
                      top-0
                      z-10
                      h-[15px]
                      w-[15px]
                      rounded-full
                      border
                      border-[#c47c8b]
                      bg-[#151112]
                      transition-all
                      duration-300

                      group-hover:scale-125
                      group-hover:bg-[#c47c8b]
                    "
                  />

                  <p
                    className="
                      text-[clamp(2rem,3vw,3.4rem)]
                      font-medium
                      leading-none
                      tracking-[-0.045em]
                    "
                  >
                    {item.year}
                  </p>

                  <p
                    className="
                      mt-3
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#c47c8b]
                    "
                  >
                    {item.label}
                  </p>

                  <h3
                    className="
                      mt-3
                      max-w-[360px]
                      font-editorial
                      text-[clamp(1.45rem,2vw,2.1rem)]
                      leading-[1]
                      tracking-[-0.025em]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.15em]
                      text-[#f2ece4]/45
                    "
                  >
                    {item.subtitle}
                  </p>

                  <p
                    className="
                      mt-3
                      max-w-[350px]
                      text-[10px]
                      leading-[1.65]
                      text-[#f2ece4]/55

                      lg:text-[11px]
                    "
                  >
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          {/* MOBILE */}

          <div className="relative mt-7 md:hidden">
            <motion.div
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 1.2,
              }}
              className="
                absolute
                bottom-0
                left-[6px]
                top-0
                w-px
                origin-top
                bg-[#c47c8b]/70
              "
            />

            <div className="space-y-7">
              {timeline.map((item, index) => (
                <motion.article
                  key={`${item.year}-${index}`}
                  initial={{
                    opacity: 0,
                    x: -14,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                  }}
                  className="
                    relative
                    grid
                    grid-cols-[30px_1fr]
                  "
                >
                  <div>
                    <span
                      className="
                        relative
                        z-10
                        block
                        h-[13px]
                        w-[13px]
                        rounded-full
                        border
                        border-[#c47c8b]
                        bg-[#151112]
                      "
                    />
                  </div>

                  <div>
                    <div
                      className="
                        flex
                        items-baseline
                        justify-between
                        gap-4
                      "
                    >
                      <p
                        className="
                          text-[1.9rem]
                          font-medium
                          leading-none
                          tracking-[-0.04em]
                        "
                      >
                        {item.year}
                      </p>

                      <p
                        className="
                          text-right
                          text-[7px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-[#c47c8b]
                        "
                      >
                        {item.label}
                      </p>
                    </div>

                    <h3
                      className="
                        mt-3
                        font-editorial
                        text-[1.5rem]
                        leading-none
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[7px]
                        uppercase
                        tracking-[0.14em]
                        text-[#f2ece4]/40
                      "
                    >
                      {item.subtitle}
                    </p>

                    <p
                      className="
                        mt-2
                        max-w-[430px]
                        text-[10px]
                        leading-[1.6]
                        text-[#f2ece4]/55
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            VISUAL LANGUAGE + LANGUAGES
        ===================================================== */}

        <div
          className="
            grid
            gap-8
            pt-8

            lg:grid-cols-[1.55fr_0.65fr]
            lg:gap-10
            lg:pt-9
          "
        >
          {/* VISUAL LANGUAGE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.65,
            }}
          >
            <div
              className="
                flex
                items-end
                justify-between
                gap-6
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#c47c8b]
                  "
                >
                  {copy.visualLanguage}
                </p>

                <p
                  className="
                    mt-2
                    max-w-[520px]
                    text-[10px]
                    leading-[1.6]
                    text-[#f2ece4]/50
                  "
                >
                  {copy.visualLanguageDescription}
                </p>
              </div>

              <span
                className="
                  hidden
                  font-editorial
                  text-[1.15rem]
                  italic
                  text-[#f2ece4]/25

                  sm:block
                "
              >
                01 — 04
              </span>
            </div>

            <div
              className="
                mt-5
                grid
                grid-cols-2
                border-l
                border-t
                border-white/[0.12]

                md:grid-cols-4
              "
            >
              {disciplines.map((item, index) => (
                <motion.article
                  key={item.number}
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
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    relative
                    min-h-[210px]
                    overflow-hidden
                    border-b
                    border-r
                    border-white/[0.12]
                    transition-colors
                    duration-500

                    hover:bg-[#6d1f33]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      px-4
                      pt-4
                    "
                  >
                    <span
                      className="
                        text-[7px]
                        font-semibold
                        tracking-[0.16em]
                        text-[#c47c8b]

                        group-hover:text-white/70
                      "
                    >
                      {item.number}
                    </span>

                    <motion.span
                      className="
                        text-[10px]
                        text-white/20

                        group-hover:text-white/60
                      "
                      whileHover={{
                        rotate: 45,
                      }}
                    >
                      ↗
                    </motion.span>
                  </div>

                  <div
                    className="
                      mx-auto
                      mt-2
                      h-[92px]
                      w-[82%]
                      text-[#c47c8b]
                      transition-colors
                      duration-500

                      group-hover:text-[#f2ece4]
                    "
                  >
                    <VisualIcon type={item.type} />
                  </div>

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      right-4
                    "
                  >
                    <h3
                      className="
                        font-editorial
                        text-[clamp(1.25rem,1.6vw,1.7rem)]
                        leading-none
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[8px]
                        leading-[1.5]
                        text-[#f2ece4]/45
                        transition-colors
                        duration-300

                        group-hover:text-white/70
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* ===================================================
              LANGUAGES
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
            }}
            className="
              border-t
              border-white/[0.12]
              pt-6

              lg:border-l
              lg:border-t-0
              lg:pl-8
              lg:pt-0
            "
          >
            <div
              className="
                flex
                h-full
                flex-col
                justify-between
              "
            >
              <div>
                <div className="flex items-center justify-between">
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-[#c47c8b]
                    "
                  >
                    {copy.languages}
                  </p>

                  <span
                    className="
                      text-[8px]
                      tracking-[0.18em]
                      text-[#f2ece4]/25
                    "
                  >
                    02
                  </span>
                </div>

                <p
                  className="
                    mt-3
                    max-w-[350px]
                    text-[10px]
                    leading-[1.6]
                    text-[#f2ece4]/50
                  "
                >
                  {copy.languagesDescription}
                </p>
              </div>

              <div
                className="
                  mt-6
                  border-t
                  border-white/[0.12]
                "
              >
                {/* SPANISH */}

                <motion.div
                  whileHover={{
                    x: 5,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    group
                    flex
                    items-end
                    justify-between
                    gap-4
                    border-b
                    border-white/[0.12]
                    py-5
                  "
                >
                  <div>
                    <p
                      className="
                        font-editorial
                        text-[clamp(2rem,3vw,3.2rem)]
                        leading-none
                        tracking-[-0.03em]
                        transition-colors
                        duration-300

                        group-hover:text-[#c47c8b]
                      "
                    >
                      {copy.spanish}
                    </p>

                    <p
                      className="
                        mt-2
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#f2ece4]/40
                      "
                    >
                      {copy.native}
                    </p>
                  </div>

                  <span
                    className="
                      font-editorial
                      text-[1.4rem]
                      italic
                      text-[#c47c8b]
                    "
                  >
                    ES
                  </span>
                </motion.div>

                {/* ENGLISH */}

                <motion.div
                  whileHover={{
                    x: 5,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    group
                    flex
                    items-end
                    justify-between
                    gap-4
                    py-5
                  "
                >
                  <div>
                    <p
                      className="
                        font-editorial
                        text-[clamp(2rem,3vw,3.2rem)]
                        leading-none
                        tracking-[-0.03em]
                        transition-colors
                        duration-300

                        group-hover:text-[#c47c8b]
                      "
                    >
                      {copy.english}
                    </p>

                    <p
                      className="
                        mt-2
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#f2ece4]/40
                      "
                    >
                      {copy.englishLevel}
                    </p>
                  </div>

                  <span
                    className="
                      font-editorial
                      text-[1.4rem]
                      italic
                      text-[#c47c8b]
                    "
                  >
                    EN
                  </span>
                </motion.div>
              </div>

              <div
                aria-hidden="true"
                className="
                  mt-5
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="h-[7px] w-[7px] rounded-full bg-[#c47c8b]" />

                <span className="h-px flex-1 bg-white/[0.12]" />

                <span
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.18em]
                    text-[#f2ece4]/30
                  "
                >
                  ES / EN
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}