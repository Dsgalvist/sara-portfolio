import type { Language } from "@/content";

type AboutProps = {
  lang: Language;
};

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
        {/* Header */}
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

        {/* Main editorial statement */}
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

                  <span className="ml-[16vw]">
                    en cada idea.
                  </span>
                </>
              ) : (
                <>
                  I like finding
                  <br />

                  <span className="ml-[7vw] italic text-[var(--wine)]">
                    a story
                  </span>

                  <br />

                  <span className="ml-[16vw]">
                    in every idea.
                  </span>
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

        {/* Identity strip */}
        <div
          className="
            grid
            border-y border-[var(--charcoal)]/10

            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          <div
            className="
              border-b border-[var(--charcoal)]/10
              py-7

              sm:border-r
              lg:border-b-0
              lg:px-6
            "
          >
            <p className="text-[7px] uppercase tracking-[0.2em] text-[var(--wine)]">
              01 / Visual
            </p>

            <p
              className="
                mt-3 font-editorial
                text-[1.8rem] leading-none
              "
            >
              {lang === "es"
                ? "Composición"
                : "Composition"}
            </p>
          </div>

          <div
            className="
              border-b border-[var(--charcoal)]/10
              py-7

              sm:pl-6
              lg:border-b-0
              lg:border-r
              lg:px-6
            "
          >
            <p className="text-[7px] uppercase tracking-[0.2em] text-[var(--wine)]">
              02 / Story
            </p>

            <p
              className="
                mt-3 font-editorial
                text-[1.8rem] leading-none
              "
            >
              {lang === "es"
                ? "Narrativa"
                : "Storytelling"}
            </p>
          </div>

          <div
            className="
              border-b border-[var(--charcoal)]/10
              py-7

              sm:border-r
              lg:border-b-0
              lg:px-6
            "
          >
            <p className="text-[7px] uppercase tracking-[0.2em] text-[var(--wine)]">
              03 / Motion
            </p>

            <p
              className="
                mt-3 font-editorial
                text-[1.8rem] leading-none
              "
            >
              {lang === "es"
                ? "Movimiento"
                : "Movement"}
            </p>
          </div>

          <div
            className="
              py-7
              sm:pl-6
              lg:px-6
            "
          >
            <p className="text-[7px] uppercase tracking-[0.2em] text-[var(--wine)]">
              04 / Sound
            </p>

            <p
              className="
                mt-3 font-editorial
                text-[1.8rem] leading-none
              "
            >
              {lang === "es"
                ? "Sonido"
                : "Sound"}
            </p>
          </div>
        </div>

        {/* Closing */}
        <div
          className="
            grid gap-10
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
                  It's not only about how it looks.
                  <br />

                  <span className="italic text-[var(--wine)]">
                    It's about how it feels.
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
              {lang === "es"
                ? "Ver mi trabajo"
                : "See my work"}

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