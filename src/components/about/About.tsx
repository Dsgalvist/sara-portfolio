import type { Language } from "@/content";

type AboutProps = {
  lang: Language;
};

const disciplines = [
  {
    number: "01",
    title: "VISUAL",
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
  {
    number: "02",
    title: "MOTION",
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
  {
    number: "03",
    title: "STORY",
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
  {
    number: "04",
    title: "SOUND",
    en: ["Sound Design", "Foley", "Audiovisual Sound"],
    es: ["Diseño Sonoro", "Foley", "Sonido Audiovisual"],
  },
] as const;

const tools = ["Adobe Photoshop", "DaVinci Resolve", "Canva Pro"];

export default function About({ lang }: AboutProps) {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        bg-[var(--ivory)]
        text-[var(--charcoal)]
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
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
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
                text-[9px] font-semibold uppercase
                tracking-[0.24em]
                text-[var(--wine)]
              "
            >
              02 / {lang === "es" ? "La persona" : "The Person"}
            </p>

            <p
              className="
                mt-3 max-w-[260px]
                text-[11px] leading-[1.7]
                text-[var(--charcoal)]/45
              "
            >
              {lang === "es"
                ? "La mirada detrás de cada idea."
                : "The perspective behind every idea."}
            </p>
          </div>

          <p
            className="
              hidden text-right
              text-[8px] uppercase
              leading-[1.7]
              tracking-[0.2em]
              text-[var(--charcoal)]/30
              md:block
            "
          >
            Sara Acosta
            <br />
            Calgary · Colombia
          </p>
        </div>

        {/* =====================================================
            ABOUT
        ===================================================== */}
        <div
          className="
            grid gap-14
            py-20
            sm:py-28
            lg:grid-cols-12
            lg:gap-8
            lg:py-36
          "
        >
          <div className="lg:col-span-9">
            <p
              className="
                text-[8px] uppercase
                tracking-[0.3em]
                text-[var(--charcoal)]/35
              "
            >
              {lang === "es" ? "Sobre mí" : "About me"}
            </p>

            <h2
              className="
                mt-6
                font-editorial
                text-[clamp(3.8rem,9vw,8.5rem)]
                leading-[0.82]
                tracking-[-0.055em]
              "
            >
              {lang === "es" ? (
                <>
                  Me gusta encontrar
                  <br />

                  <span className="ml-[7vw] italic text-[var(--wine)]">
                    una historia
                  </span>

                  <br />

                  <span className="ml-[16vw]">en cada idea.</span>
                </>
              ) : (
                <>
                  I like finding
                  <br />

                  <span className="ml-[7vw] italic text-[var(--wine)]">
                    a story
                  </span>

                  <br />

                  <span className="ml-[16vw]">in every idea.</span>
                </>
              )}
            </h2>
          </div>

          <div
            className="
              flex flex-col justify-end
              lg:col-span-3
            "
          >
            <span
              aria-hidden="true"
              className="
                mb-7 h-px w-14
                bg-[var(--wine)]
              "
            />

            <p
              className="
                max-w-[340px]
                text-[12px]
                leading-[1.85]
                text-[var(--charcoal)]/60
              "
            >
              {lang === "es"
                ? "Soy una creativa audiovisual y multimedia interesada en transformar ideas en piezas visuales que comuniquen, conecten y cuenten algo. Mi trabajo explora la relación entre diseño, imagen, narrativa, movimiento y sonido."
                : "I'm an audiovisual and multimedia creative interested in transforming ideas into visual pieces that communicate, connect and tell a story. My work explores the relationship between design, image, storytelling, motion and sound."}
            </p>
          </div>
        </div>

        {/* =====================================================
            CREATIVE UNIVERSE INTRO
        ===================================================== */}
        <div
          className="
            border-t border-[var(--charcoal)]/10
            pt-8
          "
        >
          <div
            className="
              grid gap-12
              py-14
              md:grid-cols-12
              md:items-end
              lg:py-20
            "
          >
            <div className="md:col-span-4">
              <p
                className="
                  text-[8px] font-semibold uppercase
                  tracking-[0.24em]
                  text-[var(--wine)]
                "
              >
                {lang === "es"
                  ? "Mi universo creativo"
                  : "My creative universe"}
              </p>

              <p
                className="
                  mt-3 max-w-[270px]
                  text-[11px] leading-[1.7]
                  text-[var(--charcoal)]/45
                "
              >
                {lang === "es"
                  ? "Distintas disciplinas conectadas por una misma forma de pensar visualmente."
                  : "Different disciplines connected by one way of thinking visually."}
              </p>
            </div>

            <div className="md:col-span-8">
              <h3
                className="
                  font-editorial
                  text-[clamp(3.5rem,8vw,7.5rem)]
                  leading-[0.8]
                  tracking-[-0.055em]
                "
              >
                {lang === "es" ? (
                  <>
                    Diferentes medios,
                    <br />

                    <span className="ml-[8vw] italic text-[var(--wine)]">
                      un lenguaje.
                    </span>
                  </>
                ) : (
                  <>
                    Different mediums,
                    <br />

                    <span className="ml-[8vw] italic text-[var(--wine)]">
                      one language.
                    </span>
                  </>
                )}
              </h3>
            </div>
          </div>

          {/* =====================================================
              DISCIPLINES
          ===================================================== */}
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
                  min-h-[310px]
                  border-b border-[var(--charcoal)]/10
                  py-8

                  md:px-6

                  xl:min-h-[390px]
                  xl:border-b-0

                  ${
                    index < disciplines.length - 1
                      ? "xl:border-r xl:border-[var(--charcoal)]/10"
                      : ""
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-[8px]
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

                <h4
                  className="
                    mt-10
                    font-editorial
                    text-[clamp(2.8rem,4vw,4.5rem)]
                    leading-none
                    tracking-[-0.045em]
                    transition-all duration-300

                    group-hover:italic
                    group-hover:text-[var(--wine)]
                  "
                >
                  {discipline.title}
                </h4>

                <div className="mt-10">
                  {discipline[lang].map((item, itemIndex) => (
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

          {/* =====================================================
              TOOLS
          ===================================================== */}
          <div
            className="
              grid gap-8
              border-t border-[var(--charcoal)]/10
              py-10

              md:grid-cols-[1fr_3fr]
              md:items-center
            "
          >
            <div>
              <p
                className="
                  text-[8px] font-semibold uppercase
                  tracking-[0.22em]
                  text-[var(--wine)]
                "
              >
                {lang === "es" ? "Herramientas" : "Tools"}
              </p>
            </div>

            <div
              className="
                flex flex-wrap
                gap-x-7 gap-y-3
                sm:gap-x-9
              "
            >
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="
                    font-editorial
                    text-[clamp(1.7rem,3vw,2.8rem)]
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
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ===================================================== */}
        <div
          className="
            grid gap-10
            border-t border-[var(--charcoal)]/10
            pt-20

            sm:pt-28

            lg:grid-cols-12
            lg:items-end
          "
        >
          <div className="lg:col-span-8">
            <p
              className="
                max-w-[850px]
                font-editorial
                text-[clamp(2.8rem,5vw,5.5rem)]
                leading-[0.92]
                tracking-[-0.04em]
              "
            >
              {lang === "es" ? (
                <>
                  No se trata solo de cómo se ve.
                  <br />

                  <span className="italic text-[var(--wine)]">
                    Se trata de lo que hace sentir.
                  </span>
                </>
              ) : (
                <>
                  It&apos;s not only about how it looks.
                  <br />

                  <span className="italic text-[var(--wine)]">
                    It&apos;s about how it feels.
                  </span>
                </>
              )}
            </p>
          </div>

          <div
            className="
              flex justify-start
              lg:col-span-4
              lg:justify-end
            "
          >
            <a
              href="#work"
              className="
                group flex items-center gap-4
                text-[9px] font-semibold uppercase
                tracking-[0.18em]
              "
            >
              {lang === "es" ? "Ver mi trabajo" : "See my work"}

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
      </div>
    </section>
  );
}