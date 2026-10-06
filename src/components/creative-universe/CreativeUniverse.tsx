import type { Language } from "@/content";

type CreativeUniverseProps = {
  lang: Language;
};

type Discipline = {
  number: string;
  title: string;
  items: {
    en: string[];
    es: string[];
  };
};

const disciplines: Discipline[] = [
  {
    number: "01",
    title: "VISUAL",
    items: {
      en: [
        "Graphic Design",
        "Visual Composition",
        "Advertising Design",
        "Digital Catalogs",
        "Product Presentation",
      ],
      es: [
        "Diseño Gráfico",
        "Composición Visual",
        "Diseño Publicitario",
        "Catálogos Digitales",
        "Presentación de Producto",
      ],
    },
  },
  {
    number: "02",
    title: "MOTION",
    items: {
      en: [
        "Video Editing",
        "Audiovisual Production",
        "Motion Graphics",
        "2D Animation",
        "Visual Effects",
      ],
      es: [
        "Edición de Video",
        "Producción Audiovisual",
        "Motion Graphics",
        "Animación 2D",
        "Efectos Visuales",
      ],
    },
  },
  {
    number: "03",
    title: "STORY",
    items: {
      en: [
        "Visual Storytelling",
        "Concept Development",
        "Storyboarding",
        "Scriptwriting",
        "Creative Ideation",
      ],
      es: [
        "Narrativa Visual",
        "Desarrollo de Conceptos",
        "Storyboarding",
        "Guion",
        "Ideación Creativa",
      ],
    },
  },
  {
    number: "04",
    title: "SOUND",
    items: {
      en: [
        "Sound Design",
        "Foley",
        "Audiovisual Sound",
      ],
      es: [
        "Diseño Sonoro",
        "Foley",
        "Sonido Audiovisual",
      ],
    },
  },
];

export default function CreativeUniverse({
  lang,
}: CreativeUniverseProps) {
  return (
    <section
      id="creative-universe"
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
          w-full max-w-[1500px]
          px-5 py-24

          sm:px-8
          sm:py-32

          lg:px-12
          lg:py-40
        "
      >
        {/* ================================================
            HEADER
        ================================================= */}
        <div
          className="
            flex items-start justify-between
            border-b border-[var(--charcoal)]/10
            pb-7
          "
        >
          <div>
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[var(--wine)]
              "
            >
              04 / Creative Universe
            </p>

            <p
              className="
                mt-3
                max-w-[280px]
                text-[11px]
                leading-[1.7]
                text-[var(--charcoal)]/45
              "
            >
              {lang === "es"
                ? "Distintas disciplinas conectadas por una misma forma de pensar visualmente."
                : "Different disciplines connected by one way of thinking visually."}
            </p>
          </div>

          <p
            className="
              hidden
              text-right
              text-[8px]
              uppercase
              leading-[1.7]
              tracking-[0.2em]
              text-[var(--charcoal)]/30

              md:block
            "
          >
            Visual
            <br />
            Motion
            <br />
            Story
            <br />
            Sound
          </p>
        </div>

        {/* ================================================
            EDITORIAL TITLE
        ================================================= */}
        <div className="relative py-20 sm:py-28 lg:py-32">
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.28em]
              text-[var(--charcoal)]/35
            "
          >
            {lang === "es"
              ? "Lo que creo"
              : "What I create"}
          </p>

          <h2
            className="
              mt-5
              max-w-[1200px]
              font-editorial
              text-[clamp(4rem,11vw,10rem)]
              leading-[0.78]
              tracking-[-0.06em]
            "
          >
            {lang === "es" ? (
              <>
                Vive entre
                <br />

                <span className="ml-[10vw] italic text-[var(--wine)]">
                  disciplinas.
                </span>
              </>
            ) : (
              <>
                Lives between
                <br />

                <span className="ml-[10vw] italic text-[var(--wine)]">
                  disciplines.
                </span>
              </>
            )}
          </h2>

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-[18%] right-[4%]
              hidden
              h-20 w-20
              rounded-full
              border border-[var(--wine)]/20

              lg:block
            "
          >
            <span
              className="
                absolute left-1/2 top-1/2
                h-1.5 w-1.5
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                bg-[var(--wine)]
              "
            />
          </div>
        </div>

        {/* ================================================
            DISCIPLINES
        ================================================= */}
        <div
          className="
            grid
            border-t border-[var(--charcoal)]/10

            md:grid-cols-2

            xl:grid-cols-4
          "
        >
          {disciplines.map((discipline, index) => (
            <article
              key={discipline.title}
              className={`
                group
                relative
                min-h-[320px]
                border-b
                border-[var(--charcoal)]/10
                px-1 py-8

                sm:min-h-[360px]
                sm:py-10

                md:px-7

                xl:min-h-[430px]
                xl:border-b-0
                xl:px-7
                xl:py-10

                ${
                  index !== disciplines.length - 1
                    ? "xl:border-r xl:border-[var(--charcoal)]/10"
                    : ""
                }
              `}
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span
                  className="
                    text-[8px]
                    font-semibold
                    tracking-[0.14em]
                    text-[var(--wine)]/60
                  "
                >
                  {discipline.number}
                </span>

                <span
                  className="
                    h-1.5 w-1.5
                    rounded-full
                    border border-[var(--wine)]/35
                    transition-all duration-300

                    group-hover:bg-[var(--wine)]
                  "
                />
              </div>

              {/* Discipline */}
              <h3
                className="
                  mt-10
                  font-editorial
                  text-[clamp(3rem,5vw,5rem)]
                  leading-none
                  tracking-[-0.045em]
                  transition-all duration-500

                  group-hover:italic
                  group-hover:text-[var(--wine)]
                "
              >
                {discipline.title}
              </h3>

              {/* Skills */}
              <div className="mt-12">
                {discipline.items[lang].map((item, itemIndex) => (
                  <div
                    key={item}
                    className="
                      flex items-center
                      border-t border-[var(--charcoal)]/[0.07]
                      py-2.5
                    "
                  >
                    <span
                      className="
                        mr-3
                        text-[7px]
                        tracking-[0.12em]
                        text-[var(--charcoal)]/25
                      "
                    >
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
                        text-[11px]
                        text-[var(--charcoal)]/55
                        transition-colors duration-300

                        group-hover:text-[var(--charcoal)]/75
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* ================================================
            TOOLS
        ================================================= */}
        <div
          className="
            grid gap-8
            border-t border-[var(--charcoal)]/10
            pt-8

            md:grid-cols-[1fr_3fr]
            md:items-start

            lg:pt-10
          "
        >
          <div>
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[var(--wine)]
              "
            >
              {lang === "es"
                ? "Herramientas"
                : "Tools"}
            </p>
          </div>

          <div
            className="
              flex flex-wrap
              gap-x-6 gap-y-3

              sm:gap-x-8
            "
          >
            {[
              "Adobe Photoshop",
              "DaVinci Resolve",
              "Canva Pro",
            ].map((tool) => (
              <span
                key={tool}
                className="
                  font-editorial
                  text-[clamp(1.5rem,3vw,2.8rem)]
                  italic
                  text-[var(--charcoal)]/55
                  transition-colors duration-300

                  hover:text-[var(--wine)]
                "
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* ================================================
            END STATEMENT
        ================================================= */}
        <div
          className="
            mt-24
            flex flex-col
            border-t border-[var(--charcoal)]/10
            pt-8

            sm:mt-32

            md:flex-row
            md:items-end
            md:justify-between

            lg:mt-40
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
                Diferentes medios,
                <br />
                <span className="italic text-[var(--wine)]">
                  un mismo lenguaje visual.
                </span>
              </>
            ) : (
              <>
                Different mediums,
                <br />
                <span className="italic text-[var(--wine)]">
                  one visual language.
                </span>
              </>
            )}
          </p>

          <a
            href="#process"
            className="
              group
              mt-10
              flex w-fit
              items-center gap-4
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.18em]

              md:mt-0
            "
          >
            {lang === "es"
              ? "Cómo creo"
              : "How I create"}

            <span
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-[var(--charcoal)]/15
                transition-all duration-300

                group-hover:border-[var(--wine)]
                group-hover:bg-[var(--wine)]
                group-hover:text-[var(--ivory)]
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