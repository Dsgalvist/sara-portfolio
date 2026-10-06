import type { Language } from "@/content";

type JourneyProps = {
  lang: Language;
};

const process = [
  {
    number: "01",
    en: "Discover",
    es: "Descubrir",
    descriptionEn: "Listen, observe and understand.",
    descriptionEs: "Escuchar, observar y entender.",
  },
  {
    number: "02",
    en: "Concept",
    es: "Concepto",
    descriptionEn: "Give the idea a direction.",
    descriptionEs: "Darle una dirección a la idea.",
  },
  {
    number: "03",
    en: "Create",
    es: "Crear",
    descriptionEn: "Turn the concept into something visual.",
    descriptionEs: "Convertir el concepto en algo visual.",
  },
  {
    number: "04",
    en: "Refine",
    es: "Refinar",
    descriptionEn: "Shape every detail with intention.",
    descriptionEs: "Trabajar cada detalle con intención.",
  },
  {
    number: "05",
    en: "Deliver",
    es: "Entregar",
    descriptionEn: "Bring the final story to life.",
    descriptionEs: "Dar vida a la historia final.",
  },
] as const;

export default function Journey({ lang }: JourneyProps) {
  return (
    <section
      id="journey"
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
              04 / {lang === "es" ? "Trayectoria" : "Journey"}
            </p>

            <p
              className="
                mt-3 max-w-[280px]
                text-[11px] leading-[1.7]
                text-[var(--charcoal)]/45
              "
            >
              {lang === "es"
                ? "Experiencias, lugares y procesos que han construido mi forma de crear."
                : "Experiences, places and processes that have shaped the way I create."}
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
            Bogotá · Colombia
            <br />
            Calgary · Canada
          </p>
        </div>

        {/* =====================================================
            JOURNEY HERO
        ===================================================== */}
        <div
          className="
            relative
            py-20
            sm:py-28
            lg:py-36
          "
        >
          <p
            className="
              text-[8px] uppercase
              tracking-[0.3em]
              text-[var(--charcoal)]/35
            "
          >
            {lang === "es" ? "Mi recorrido" : "My journey"}
          </p>

          <div className="mt-7">
            <h2
              className="
                font-editorial
                text-[clamp(4rem,10vw,9.5rem)]
                leading-[0.78]
                tracking-[-0.06em]
              "
            >
              {lang === "es" ? "Entre historias," : "Between stories,"}
            </h2>

            <div
              className="
                mt-1
                flex justify-center
                sm:mt-2
              "
            >
              <h2
                className="
                  font-editorial
                  text-[clamp(4.5rem,11vw,10rem)]
                  italic leading-[0.76]
                  tracking-[-0.065em]
                  text-[var(--wine)]
                "
              >
                {lang === "es" ? "imágenes" : "images"}
              </h2>
            </div>

            <div className="mt-1 flex justify-end">
              <h2
                className="
                  font-editorial
                  text-[clamp(4rem,10vw,9.5rem)]
                  leading-[0.78]
                  tracking-[-0.06em]
                "
              >
                &amp; {lang === "es" ? "lugares." : "places."}
              </h2>
            </div>
          </div>
        </div>

        {/* =====================================================
            EDUCATION
        ===================================================== */}
        <div
          className="
            grid gap-12
            border-t border-[var(--charcoal)]/10
            py-16

            md:grid-cols-12
            md:gap-8

            lg:py-24
          "
        >
          <div className="md:col-span-3">
            <p
              className="
                text-[8px] font-semibold uppercase
                tracking-[0.22em]
                text-[var(--wine)]
              "
            >
              {lang === "es" ? "Educación" : "Education"}
            </p>
          </div>

          <div className="md:col-span-6">
            <p
              className="
                text-[9px] uppercase
                tracking-[0.2em]
                text-[var(--charcoal)]/35
              "
            >
              Universidad de La Sabana
            </p>

            <h3
              className="
                mt-5 max-w-[700px]
                font-editorial
                text-[clamp(2.8rem,5vw,5rem)]
                leading-[0.92]
                tracking-[-0.045em]
              "
            >
              {lang === "es"
                ? "Lenguaje Audiovisual y Multimedia"
                : "Audiovisual & Multimedia Language"}
            </h3>

            <p
              className="
                mt-7 max-w-[520px]
                text-[12px]
                leading-[1.8]
                text-[var(--charcoal)]/50
              "
            >
              {lang === "es"
                ? "Un recorrido académico enfocado en narrativa, producción audiovisual, diseño, sonido, animación y exploración de distintos lenguajes visuales."
                : "An academic journey focused on storytelling, audiovisual production, design, sound, animation and the exploration of different visual languages."}
            </p>
          </div>

          <div
            className="
              flex flex-col justify-between
              border-t border-[var(--charcoal)]/10
              pt-5

              md:col-span-3
              md:border-l
              md:border-t-0
              md:pl-7
              md:pt-0
            "
          >
            <div>
              <p
                className="
                  text-[8px] uppercase
                  tracking-[0.2em]
                  text-[var(--charcoal)]/35
                "
              >
                {lang === "es" ? "Periodo" : "Period"}
              </p>

              <p
                className="
                  mt-2
                  font-editorial
                  text-2xl
                "
              >
                Aug 2024 — Jun 2026
              </p>
            </div>

            <div className="mt-8 md:mt-0">
              <p
                className="
                  text-[8px] uppercase
                  tracking-[0.2em]
                  text-[var(--charcoal)]/35
                "
              >
                {lang === "es" ? "Recorrido" : "Journey"}
              </p>

              <p
                className="
                  mt-2
                  font-editorial
                  text-2xl italic
                  text-[var(--wine)]
                "
              >
                {lang === "es"
                  ? "4 semestres completados"
                  : "4 semesters completed"}
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            CREATIVE PROCESS
        ===================================================== */}
        <div
          className="
            border-t border-[var(--charcoal)]/10
            py-16

            lg:py-24
          "
        >
          <div
            className="
              grid gap-10
              md:grid-cols-12
              md:items-end
            "
          >
            <div className="md:col-span-4">
              <p
                className="
                  text-[8px] font-semibold uppercase
                  tracking-[0.22em]
                  text-[var(--wine)]
                "
              >
                {lang === "es"
                  ? "Cómo creo"
                  : "How I create"}
              </p>

              <p
                className="
                  mt-4 max-w-[300px]
                  text-[11px] leading-[1.75]
                  text-[var(--charcoal)]/45
                "
              >
                {lang === "es"
                  ? "Cada proyecto puede ser diferente, pero siempre comienza entendiendo qué queremos contar."
                  : "Every project can be different, but it always begins by understanding what we want to say."}
              </p>
            </div>

            <div className="md:col-span-8">
              <h3
                className="
                  font-editorial
                  text-[clamp(3.4rem,7vw,7rem)]
                  leading-[0.82]
                  tracking-[-0.055em]
                "
              >
                {lang === "es" ? (
                  <>
                    Una idea,
                    <br />

                    <span className="ml-[12%] italic text-[var(--wine)]">
                      muchas decisiones.
                    </span>
                  </>
                ) : (
                  <>
                    One idea,
                    <br />

                    <span className="ml-[12%] italic text-[var(--wine)]">
                      many decisions.
                    </span>
                  </>
                )}
              </h3>
            </div>
          </div>

          {/* Desktop timeline */}
          <div
            className="
              relative mt-20
              hidden
              lg:grid
              lg:grid-cols-5
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute left-0 right-0 top-[18px]
                h-px
                bg-[var(--charcoal)]/15
              "
            />

            {process.map((step) => (
              <article
                key={step.number}
                className="
                  group relative
                  pr-7
                "
              >
                <div
                  className="
                    relative z-10
                    flex h-9 w-9
                    items-center justify-center
                    rounded-full
                    border border-[var(--charcoal)]/15
                    bg-[var(--ivory)]
                    text-[8px]
                    text-[var(--charcoal)]/40
                    transition-all duration-300

                    group-hover:border-[var(--wine)]
                    group-hover:bg-[var(--wine)]
                    group-hover:text-[var(--ivory)]
                  "
                >
                  {step.number}
                </div>

                <h4
                  className="
                    mt-9
                    font-editorial
                    text-[clamp(2rem,3vw,3.5rem)]
                    leading-none
                    tracking-[-0.035em]
                    transition-colors duration-300

                    group-hover:text-[var(--wine)]
                  "
                >
                  {lang === "es" ? step.es : step.en}
                </h4>

                <p
                  className="
                    mt-4 max-w-[180px]
                    text-[10px]
                    leading-[1.7]
                    text-[var(--charcoal)]/40
                  "
                >
                  {lang === "es"
                    ? step.descriptionEs
                    : step.descriptionEn}
                </p>
              </article>
            ))}
          </div>

          {/* Mobile / tablet process */}
          <div
            className="
              mt-16
              border-t border-[var(--charcoal)]/10
              lg:hidden
            "
          >
            {process.map((step) => (
              <article
                key={step.number}
                className="
                  grid grid-cols-[45px_1fr]
                  gap-4
                  border-b border-[var(--charcoal)]/10
                  py-6
                "
              >
                <span
                  className="
                    pt-1
                    text-[8px]
                    tracking-[0.15em]
                    text-[var(--wine)]
                  "
                >
                  {step.number}
                </span>

                <div>
                  <h4
                    className="
                      font-editorial
                      text-[2.2rem]
                      leading-none
                      tracking-[-0.035em]
                    "
                  >
                    {lang === "es" ? step.es : step.en}
                  </h4>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      leading-[1.7]
                      text-[var(--charcoal)]/45
                    "
                  >
                    {lang === "es"
                      ? step.descriptionEs
                      : step.descriptionEn}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =====================================================
            PLACES + LANGUAGES
        ===================================================== */}
        <div
          className="
            grid gap-12
            border-t border-[var(--charcoal)]/10
            py-16

            md:grid-cols-12

            lg:py-24
          "
        >
          <div className="md:col-span-3">
            <p
              className="
                text-[8px] font-semibold uppercase
                tracking-[0.22em]
                text-[var(--wine)]
              "
            >
              {lang === "es"
                ? "Entre dos lugares"
                : "Between two places"}
            </p>
          </div>

          <div className="md:col-span-6">
            <div
              className="
                flex items-center
                font-editorial
                text-[clamp(2.8rem,5vw,5.5rem)]
                leading-none
                tracking-[-0.045em]
              "
            >
              <span>Colombia</span>

              <span
                aria-hidden="true"
                className="
                  mx-4 h-px flex-1
                  bg-[var(--wine)]/35
                  sm:mx-7
                "
              />

              <span className="italic text-[var(--wine)]">
                Calgary
              </span>
            </div>

            <p
              className="
                mt-6 max-w-[500px]
                text-[11px]
                leading-[1.8]
                text-[var(--charcoal)]/45
              "
            >
              {lang === "es"
                ? "Dos lugares que forman parte de una misma historia y continúan ampliando mi perspectiva creativa."
                : "Two places that are part of the same story and continue to expand my creative perspective."}
            </p>
          </div>

          <div
            className="
              md:col-span-3
              md:border-l
              md:border-[var(--charcoal)]/10
              md:pl-7
            "
          >
            <p
              className="
                text-[8px] uppercase
                tracking-[0.2em]
                text-[var(--charcoal)]/35
              "
            >
              {lang === "es" ? "Idiomas" : "Languages"}
            </p>

            <div className="mt-5 space-y-4">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-editorial text-2xl">
                  {lang === "es" ? "Español" : "Spanish"}
                </span>

                <span
                  className="
                    text-[8px] uppercase
                    tracking-[0.16em]
                    text-[var(--wine)]
                  "
                >
                  {lang === "es" ? "Nativo" : "Native"}
                </span>
              </div>

              <div
                className="
                  flex items-baseline justify-between gap-4
                  border-t border-[var(--charcoal)]/10
                  pt-4
                "
              >
                <span className="font-editorial text-2xl">
                  {lang === "es" ? "Inglés" : "English"}
                </span>

                <span
                  className="
                    text-[8px] uppercase
                    tracking-[0.16em]
                    text-[var(--wine)]
                  "
                >
                  B1
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CLOSING
        ===================================================== */}
        <div
          className="
            flex min-h-[45vh]
            flex-col justify-center
            border-t border-[var(--charcoal)]/10
            py-20
            text-center

            sm:min-h-[55vh]
          "
        >
          <p
            className="
              text-[8px] uppercase
              tracking-[0.28em]
              text-[var(--charcoal)]/35
            "
          >
            {lang === "es"
              ? "El recorrido continúa"
              : "The journey continues"}
          </p>

          <p
            className="
              mx-auto mt-6
              max-w-[1000px]
              font-editorial
              text-[clamp(3.8rem,9vw,9rem)]
              leading-[0.8]
              tracking-[-0.06em]
            "
          >
            {lang === "es" ? (
              <>
                Y esto es solo
                <br />

                <span className="italic text-[var(--wine)]">
                  el comienzo.
                </span>
              </>
            ) : (
              <>
                And this is only
                <br />

                <span className="italic text-[var(--wine)]">
                  the beginning.
                </span>
              </>
            )}
          </p>

          <a
            href="#contact"
            className="
              group mx-auto mt-10
              flex w-fit items-center gap-4
              text-[9px] font-semibold uppercase
              tracking-[0.18em]
            "
          >
            {lang === "es" ? "Hablemos" : "Let's talk"}

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