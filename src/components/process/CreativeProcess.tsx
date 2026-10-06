import type { Language } from "@/content";

type CreativeProcessProps = {
  lang: Language;
};

const steps = [
  {
    number: "01",
    time: "00:00",
    en: {
      title: "Discover",
      description:
        "Understanding the idea, its purpose and the story behind it.",
    },
    es: {
      title: "Descubrir",
      description:
        "Entender la idea, su propósito y la historia que existe detrás.",
    },
  },
  {
    number: "02",
    time: "00:08",
    en: {
      title: "Concept",
      description:
        "Turning references, research and possibilities into a visual direction.",
    },
    es: {
      title: "Concepto",
      description:
        "Convertir referencias, investigación y posibilidades en una dirección visual.",
    },
  },
  {
    number: "03",
    time: "00:16",
    en: {
      title: "Create",
      description:
        "Giving the concept form through image, motion, sound and composition.",
    },
    es: {
      title: "Crear",
      description:
        "Dar forma al concepto a través de imagen, movimiento, sonido y composición.",
    },
  },
  {
    number: "04",
    time: "00:24",
    en: {
      title: "Refine",
      description:
        "Adjusting details, rhythm and visual decisions until everything feels intentional.",
    },
    es: {
      title: "Refinar",
      description:
        "Ajustar detalles, ritmo y decisiones visuales hasta que todo se sienta intencional.",
    },
  },
  {
    number: "05",
    time: "00:32",
    en: {
      title: "Deliver",
      description:
        "Preparing the final piece to communicate clearly in the format it was made for.",
    },
    es: {
      title: "Entregar",
      description:
        "Preparar la pieza final para comunicar con claridad en el formato para el que fue creada.",
    },
  },
];

export default function CreativeProcess({
  lang,
}: CreativeProcessProps) {
  return (
    <section
      id="process"
      className="
        relative overflow-hidden
        bg-[var(--wine-deep)]
        text-[var(--ivory)]
      "
    >
      <div
        className="
          mx-auto w-full max-w-[1500px]
          px-5 py-24
          sm:px-8 sm:py-32
          lg:px-12 lg:py-40
        "
      >
        {/* HEADER */}
        <div
          className="
            flex items-start justify-between
            border-b border-[var(--ivory)]/10
            pb-7
          "
        >
          <div>
            <p
              className="
                text-[9px] font-semibold uppercase
                tracking-[0.24em]
                text-[var(--rose-muted)]
              "
            >
              05 / {lang === "es" ? "Cómo creo" : "How I Create"}
            </p>

            <p
              className="
                mt-3 max-w-[310px]
                text-[11px] leading-[1.7]
                text-[var(--ivory)]/45
              "
            >
              {lang === "es"
                ? "Cada proyecto comienza con una idea y evoluciona a través de decisiones visuales, narrativas y creativas."
                : "Every project begins with an idea and evolves through visual, narrative and creative decisions."}
            </p>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="h-2 w-2 rounded-full bg-[var(--rose-muted)]" />

            <span
              className="
                text-[8px] uppercase
                tracking-[0.2em]
                text-[var(--ivory)]/35
              "
            >
              Creative sequence
            </span>
          </div>
        </div>

        {/* MAIN TITLE */}
        <div className="py-20 sm:py-28 lg:py-32">
          <p
            className="
              text-[8px] uppercase
              tracking-[0.3em]
              text-[var(--ivory)]/35
            "
          >
            {lang === "es"
              ? "De la idea a la experiencia"
              : "From idea to experience"}
          </p>

          <h2
            className="
              mt-5 max-w-[1250px]
              font-editorial
              text-[clamp(4rem,11vw,10rem)]
              leading-[0.78]
              tracking-[-0.06em]
            "
          >
            {lang === "es" ? (
              <>
                Así toma forma
                <br />

                <span
                  className="
                    ml-[8vw]
                    italic
                    text-[var(--rose-muted)]
                  "
                >
                  una idea.
                </span>
              </>
            ) : (
              <>
                This is how an
                <br />

                <span
                  className="
                    ml-[8vw]
                    italic
                    text-[var(--rose-muted)]
                  "
                >
                  idea takes shape.
                </span>
              </>
            )}
          </h2>
        </div>

        {/* =================================================
            DESKTOP EDITING TIMELINE
        ================================================== */}
        <div className="hidden md:block">
          {/* Timeline header */}
          <div
            className="
              grid grid-cols-[90px_1fr]
              border-y border-[var(--ivory)]/10
            "
          >
            <div
              className="
                border-r border-[var(--ivory)]/10
                px-3 py-3
                text-[8px] uppercase
                tracking-[0.18em]
                text-[var(--ivory)]/30
              "
            >
              Track
            </div>

            <div
              className="
                flex items-center justify-between
                px-4 py-3
                text-[8px]
                tracking-[0.14em]
                text-[var(--ivory)]/25
              "
            >
              {steps.map((step) => (
                <span key={step.time}>
                  {step.time}
                </span>
              ))}

              <span>00:40</span>
            </div>
          </div>

          {/* VIDEO TRACK */}
          <div
            className="
              grid min-h-[150px]
              grid-cols-[90px_1fr]
              border-b border-[var(--ivory)]/10
            "
          >
            <div
              className="
                flex flex-col justify-between
                border-r border-[var(--ivory)]/10
                px-3 py-4
              "
            >
              <span
                className="
                  text-[8px] font-semibold
                  tracking-[0.16em]
                  text-[var(--rose-muted)]
                "
              >
                V1
              </span>

              <span
                className="
                  text-[7px] uppercase
                  tracking-[0.14em]
                  text-[var(--ivory)]/25
                "
              >
                Visual
              </span>
            </div>

            <div className="grid grid-cols-5 gap-[2px] p-1">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="
                    group relative
                    overflow-hidden
                    bg-[var(--ivory)]/[0.045]
                    px-4 py-5
                    transition-colors duration-300
                    hover:bg-[var(--wine)]/35
                  "
                >
                  {/* fake frame */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute inset-x-3 top-3
                      h-8
                      overflow-hidden
                      opacity-25
                    "
                  >
                    <div className="flex h-full gap-[2px]">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <span
                          key={i}
                          className="
                            flex-1
                            bg-[var(--rose-muted)]/30
                          "
                          style={{
                            transform: `scaleY(${
                              0.35 +
                              ((i + index) % 4) * 0.18
                            })`,
                            transformOrigin: "bottom",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="relative mt-10">
                    <span
                      className="
                        text-[8px]
                        tracking-[0.14em]
                        text-[var(--rose-muted)]
                      "
                    >
                      {step.number}
                    </span>

                    <p
                      className="
                        mt-2
                        font-editorial
                        text-[clamp(1.7rem,3vw,3rem)]
                        leading-none
                        transition-all duration-300
                        group-hover:italic
                      "
                    >
                      {step[lang].title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AUDIO / DESCRIPTION TRACK */}
          <div
            className="
              grid min-h-[170px]
              grid-cols-[90px_1fr]
              border-b border-[var(--ivory)]/10
            "
          >
            <div
              className="
                flex flex-col justify-between
                border-r border-[var(--ivory)]/10
                px-3 py-4
              "
            >
              <span
                className="
                  text-[8px] font-semibold
                  tracking-[0.16em]
                  text-[var(--rose-muted)]
                "
              >
                A1
              </span>

              <span
                className="
                  text-[7px] uppercase
                  tracking-[0.14em]
                  text-[var(--ivory)]/25
                "
              >
                Story
              </span>
            </div>

            <div className="grid grid-cols-5 gap-[2px] p-1">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="
                    flex items-end
                    bg-[var(--charcoal)]/20
                    px-4 py-5
                  "
                >
                  <p
                    className="
                      max-w-[190px]
                      text-[10px]
                      leading-[1.65]
                      text-[var(--ivory)]/45
                    "
                  >
                    {step[lang].description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PLAYHEAD */}
          <div className="relative h-12">
            <div
              aria-hidden="true"
              className="
                absolute left-[40%] top-0
                h-12 w-px
                bg-[var(--rose-muted)]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute left-[40%] top-0
                -translate-x-1/2
                border-l-[5px]
                border-r-[5px]
                border-t-[7px]
                border-l-transparent
                border-r-transparent
                border-t-[var(--rose-muted)]
              "
            />

            <span
              className="
                absolute left-[40%] top-5
                -translate-x-1/2
                text-[7px]
                tracking-[0.14em]
                text-[var(--rose-muted)]
              "
            >
              00:16
            </span>
          </div>
        </div>

        {/* =================================================
            MOBILE PROCESS
        ================================================== */}
        <div
          className="
            border-t border-[var(--ivory)]/10
            md:hidden
          "
        >
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="
                grid grid-cols-[42px_1fr]
                border-b border-[var(--ivory)]/10
              "
            >
              {/* Track */}
              <div
                className="
                  relative
                  border-r border-[var(--ivory)]/10
                  py-7
                "
              >
                <span
                  className="
                    text-[8px]
                    tracking-[0.14em]
                    text-[var(--rose-muted)]
                  "
                >
                  {step.number}
                </span>

                {index !== steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-0 left-[19px]
                      top-[52px]
                      w-px
                      bg-[var(--wine)]/60
                    "
                  />
                )}
              </div>

              {/* Content */}
              <div className="py-7 pl-6">
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-[7px]
                      tracking-[0.14em]
                      text-[var(--ivory)]/30
                    "
                  >
                    {step.time}
                  </span>

                  <span
                    className="
                      text-[7px] uppercase
                      tracking-[0.16em]
                      text-[var(--ivory)]/20
                    "
                  >
                    V1 / A1
                  </span>
                </div>

                <h3
                  className="
                    mt-4
                    font-editorial
                    text-[clamp(2.8rem,13vw,4.5rem)]
                    leading-[0.85]
                    tracking-[-0.04em]
                  "
                >
                  {step[lang].title}
                </h3>

                <p
                  className="
                    mt-5 max-w-[390px]
                    text-[11px]
                    leading-[1.7]
                    text-[var(--ivory)]/45
                  "
                >
                  {step[lang].description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* FOOTER */}
        <div
          className="
            mt-20
            flex flex-col gap-8
            border-t border-[var(--ivory)]/10
            pt-8

            sm:mt-28

            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <p
            className="
              max-w-[650px]
              font-editorial
              text-[clamp(2.5rem,5vw,5rem)]
              leading-[0.95]
              tracking-[-0.04em]
            "
          >
            {lang === "es" ? (
              <>
                Cada detalle
                <br />

                <span className="italic text-[var(--rose-muted)]">
                  cuenta una historia.
                </span>
              </>
            ) : (
              <>
                Every detail
                <br />

                <span className="italic text-[var(--rose-muted)]">
                  tells a story.
                </span>
              </>
            )}
          </p>

          <a
            href="#journey"
            className="
              group
              flex w-fit items-center gap-4
              text-[9px] font-semibold uppercase
              tracking-[0.18em]
            "
          >
            {lang === "es"
              ? "Mi trayectoria"
              : "My journey"}

            <span
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-[var(--ivory)]/20
                transition-all duration-300

                group-hover:bg-[var(--rose-muted)]
                group-hover:text-[var(--wine-deep)]
              "
            >
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}