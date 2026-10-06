import type { Language } from "@/content";

type JourneyProps = {
  lang: Language;
};

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
        {/* HEADER */}
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
              06 / Journey
            </p>

            <p
              className="
                mt-3 max-w-[300px]
                text-[11px] leading-[1.7]
                text-[var(--charcoal)]/45
              "
            >
              {lang === "es"
                ? "Formación, lugares y experiencias que han construido mi manera de crear."
                : "Education, places and experiences that have shaped the way I create."}
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
            Colombia
            <br />
            Canada
            <br />
            2024 — 2026
          </p>
        </div>

        {/* EDITORIAL INTRO */}
        <div
          className="
            grid gap-12
            py-20
            sm:py-28
            lg:grid-cols-12
            lg:items-end
            lg:py-32
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
              {lang === "es"
                ? "Mi recorrido"
                : "My journey"}
            </p>

            <h2
              className="
                mt-5
                font-editorial
                text-[clamp(4rem,10vw,9rem)]
                leading-[0.8]
                tracking-[-0.06em]
              "
            >
              {lang === "es" ? (
                <>
                  Entre historias,
                  <br />

                  <span className="ml-[8vw] italic text-[var(--wine)]">
                    imágenes y lugares.
                  </span>
                </>
              ) : (
                <>
                  Between stories,
                  <br />

                  <span className="ml-[8vw] italic text-[var(--wine)]">
                    images & places.
                  </span>
                </>
              )}
            </h2>
          </div>

          <div className="lg:col-span-3">
            <p
              className="
                max-w-[330px]
                text-[12px]
                leading-[1.8]
                text-[var(--charcoal)]/55
              "
            >
              {lang === "es"
                ? "Mi formación audiovisual me permitió explorar distintas formas de comunicar ideas a través de la imagen, el sonido, el diseño y la narrativa."
                : "My audiovisual education allowed me to explore different ways of communicating ideas through image, sound, design and storytelling."}
            </p>
          </div>
        </div>

        {/* =================================================
            JOURNEY TIMELINE
        ================================================== */}
        <div className="border-t border-[var(--charcoal)]/10">
          {/* 2024 */}
          <article
            className="
              grid gap-7
              border-b border-[var(--charcoal)]/10
              py-10

              md:grid-cols-12
              md:gap-8
              md:py-14
            "
          >
            <div className="md:col-span-2">
              <span
                className="
                  font-editorial
                  text-[clamp(2.8rem,5vw,4.5rem)]
                  italic
                  text-[var(--wine)]
                "
              >
                2024
              </span>
            </div>

            <div className="md:col-span-3">
              <p
                className="
                  text-[8px] font-semibold uppercase
                  tracking-[0.2em]
                  text-[var(--charcoal)]/35
                "
              >
                {lang === "es"
                  ? "El comienzo"
                  : "The beginning"}
              </p>
            </div>

            <div className="md:col-span-7">
              <h3
                className="
                  font-editorial
                  text-[clamp(2rem,4vw,3.7rem)]
                  leading-[0.95]
                  tracking-[-0.035em]
                "
              >
                Universidad de La Sabana
              </h3>

              <p
                className="
                  mt-3 text-[11px]
                  uppercase tracking-[0.16em]
                  text-[var(--wine)]
                "
              >
                {lang === "es"
                  ? "Lenguaje Audiovisual y Multimedia"
                  : "Audiovisual & Multimedia Language"}
              </p>

              <p
                className="
                  mt-5 max-w-[650px]
                  text-[12px] leading-[1.8]
                  text-[var(--charcoal)]/50
                "
              >
                {lang === "es"
                  ? "En agosto de 2024 comenzó una etapa de exploración creativa alrededor de la producción audiovisual, la narrativa, el diseño, la imagen y el sonido."
                  : "In August 2024, a new stage of creative exploration began around audiovisual production, storytelling, design, image and sound."}
              </p>
            </div>
          </article>

          {/* 2024 - 2026 */}
          <article
            className="
              grid gap-7
              border-b border-[var(--charcoal)]/10
              py-10

              md:grid-cols-12
              md:gap-8
              md:py-14
            "
          >
            <div className="md:col-span-2">
              <span
                className="
                  font-editorial
                  text-[clamp(2.3rem,4vw,3.8rem)]
                  italic
                  text-[var(--wine)]
                "
              >
                04
              </span>
            </div>

            <div className="md:col-span-3">
              <p
                className="
                  text-[8px] font-semibold uppercase
                  tracking-[0.2em]
                  text-[var(--charcoal)]/35
                "
              >
                {lang === "es"
                  ? "Semestres"
                  : "Semesters"}
              </p>
            </div>

            <div className="md:col-span-7">
              <h3
                className="
                  font-editorial
                  text-[clamp(2rem,4vw,3.7rem)]
                  leading-[0.95]
                  tracking-[-0.035em]
                "
              >
                {lang === "es"
                  ? "Explorar diferentes formas de crear."
                  : "Exploring different ways to create."}
              </h3>

              <p
                className="
                  mt-5 max-w-[650px]
                  text-[12px] leading-[1.8]
                  text-[var(--charcoal)]/50
                "
              >
                {lang === "es"
                  ? "Cuatro semestres desarrollando proyectos y explorando composición visual, producción audiovisual, edición, narrativa, sonido y desarrollo creativo."
                  : "Four semesters developing projects and exploring visual composition, audiovisual production, editing, storytelling, sound and creative development."}
              </p>

              <div
                className="
                  mt-7 flex flex-wrap
                  gap-x-6 gap-y-2
                  text-[8px] uppercase
                  tracking-[0.16em]
                  text-[var(--charcoal)]/35
                "
              >
                <span>Aug 2024</span>
                <span>→</span>
                <span>Jun 2026</span>
              </div>
            </div>
          </article>

          {/* NOW */}
          <article
            className="
              grid gap-7
              border-b border-[var(--charcoal)]/10
              py-10

              md:grid-cols-12
              md:gap-8
              md:py-14
            "
          >
            <div className="md:col-span-2">
              <span
                className="
                  font-editorial
                  text-[clamp(2.8rem,5vw,4.5rem)]
                  italic
                  text-[var(--wine)]
                "
              >
                NOW
              </span>
            </div>

            <div className="md:col-span-3">
              <p
                className="
                  text-[8px] font-semibold uppercase
                  tracking-[0.2em]
                  text-[var(--charcoal)]/35
                "
              >
                {lang === "es"
                  ? "Una nueva perspectiva"
                  : "A new perspective"}
              </p>
            </div>

            <div className="md:col-span-7">
              <h3
                className="
                  font-editorial
                  text-[clamp(2rem,4vw,3.7rem)]
                  leading-[0.95]
                  tracking-[-0.035em]
                "
              >
                Calgary, Alberta
                <br />

                <span className="italic text-[var(--wine)]">
                  Canada · Colombia
                </span>
              </h3>

              <p
                className="
                  mt-5 max-w-[650px]
                  text-[12px] leading-[1.8]
                  text-[var(--charcoal)]/50
                "
              >
                {lang === "es"
                  ? "Hoy continúo construyendo mi universo creativo desde Calgary, conectando mi experiencia en Colombia con nuevas referencias, ideas y formas de comunicar visualmente."
                  : "Today, I continue building my creative universe from Calgary, connecting my experience in Colombia with new references, ideas and ways of communicating visually."}
              </p>
            </div>
          </article>
        </div>

        {/* =================================================
            LANGUAGES
        ================================================== */}
        <div
          className="
            grid gap-8
            border-b border-[var(--charcoal)]/10
            py-12

            md:grid-cols-12
            md:py-16
          "
        >
          <div className="md:col-span-5">
            <p
              className="
                text-[8px] font-semibold uppercase
                tracking-[0.22em]
                text-[var(--wine)]
              "
            >
              {lang === "es" ? "Idiomas" : "Languages"}
            </p>
          </div>

          <div
            className="
              grid gap-8
              sm:grid-cols-2
              md:col-span-7
            "
          >
            <div>
              <p
                className="
                  font-editorial
                  text-[clamp(2.4rem,4vw,4rem)]
                  leading-none
                "
              >
                Español
              </p>

              <p
                className="
                  mt-3 text-[8px] uppercase
                  tracking-[0.18em]
                  text-[var(--charcoal)]/35
                "
              >
                {lang === "es" ? "Nativo" : "Native"}
              </p>
            </div>

            <div>
              <p
                className="
                  font-editorial
                  text-[clamp(2.4rem,4vw,4rem)]
                  leading-none
                "
              >
                English
              </p>

              <p
                className="
                  mt-3 text-[8px] uppercase
                  tracking-[0.18em]
                  text-[var(--charcoal)]/35
                "
              >
                B1
              </p>
            </div>
          </div>
        </div>

        {/* END */}
        <div
          className="
            flex flex-col gap-10
            pt-20

            sm:pt-28

            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <p
            className="
              max-w-[750px]
              font-editorial
              text-[clamp(3rem,6vw,6rem)]
              leading-[0.9]
              tracking-[-0.045em]
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
              group flex w-fit
              items-center gap-4
              text-[9px] font-semibold uppercase
              tracking-[0.18em]
            "
          >
            {lang === "es"
              ? "Hablemos"
              : "Let's talk"}

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