import type { Language } from "@/content";

type ContactProps = {
  lang: Language;
};

const email = "Saragutierrez0823@gmail.com";

export default function Contact({ lang }: ContactProps) {
  return (
    <section
      id="contact"
      className="
        relative flex min-h-[100svh]
        overflow-hidden
        bg-[var(--wine)]
        text-[var(--ivory)]
      "
    >
      {/* Decorative background typography */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-[4vw] top-[8%]
          font-editorial
          text-[clamp(9rem,28vw,30rem)]
          italic leading-none
          tracking-[-0.08em]
          text-[var(--wine-deep)]/15
        "
      >
        S
      </div>

      <div
        className="
          relative z-10 mx-auto
          flex min-h-[100svh]
          w-full max-w-[1500px]
          flex-col
          px-5 pb-7 pt-24

          sm:px-8 sm:pb-8 sm:pt-28
          lg:px-12 lg:pb-10 lg:pt-32
        "
      >
        {/* HEADER */}
        <div
          className="
            flex items-start justify-between
            border-b border-[var(--ivory)]/15
            pb-6
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
              07 / Contact
            </p>

            <p
              className="
                mt-3 max-w-[280px]
                text-[11px] leading-[1.7]
                text-[var(--ivory)]/50
              "
            >
              {lang === "es"
                ? "¿Tienes una idea, un proyecto o algo que quieras convertir en una experiencia visual?"
                : "Have an idea, a project or something you'd like to turn into a visual experience?"}
            </p>
          </div>

          <p
            className="
              hidden text-right
              text-[8px] uppercase
              leading-[1.7]
              tracking-[0.2em]
              text-[var(--ivory)]/35
              md:block
            "
          >
            Calgary, Alberta
            <br />
            Canada · Colombia
          </p>
        </div>

        {/* MAIN CTA */}
        <div
          className="
            flex flex-1
            items-center
            py-16
            sm:py-20
            lg:py-16
          "
        >
          <div className="w-full">
            <p
              className="
                mb-6
                text-[8px] uppercase
                tracking-[0.3em]
                text-[var(--rose-muted)]
              "
            >
              {lang === "es"
                ? "Hagamos algo juntos"
                : "Let's create something together"}
            </p>

            <h2
              className="
                font-editorial
                text-[clamp(4.5rem,13vw,12rem)]
                leading-[0.72]
                tracking-[-0.065em]
              "
            >
              {lang === "es" ? "Hagámoslo" : "Let's make"}
            </h2>

            <div
              className="
                mt-2 flex
                items-center justify-end
                sm:mt-4
              "
            >
              <span
                aria-hidden="true"
                className="
                  mr-5 hidden
                  h-px w-[10vw]
                  max-w-[150px]
                  bg-[var(--rose-muted)]/50
                  md:block
                "
              />

              <p
                className="
                  font-editorial
                  text-[clamp(5rem,15vw,14rem)]
                  italic leading-[0.7]
                  tracking-[-0.07em]
                  text-[var(--rose-muted)]
                "
              >
                visual.
              </p>
            </div>

            <div
              className="
                mt-12
                flex justify-end
                sm:mt-16
              "
            >
              <a
                href={`mailto:${email}`}
                className="
                  group flex
                  items-center gap-4
                  border-b border-[var(--ivory)]/20
                  pb-2
                  text-[11px]
                  tracking-[0.04em]
                  transition-colors duration-300

                  hover:border-[var(--rose-muted)]
                  hover:text-[var(--rose-muted)]

                  sm:text-[13px]
                "
              >
                <span>{email}</span>

                <span
                  className="
                    transition-transform duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* CONTACT DETAILS */}
        <div
          className="
            grid gap-8
            border-t border-[var(--ivory)]/15
            py-7

            sm:grid-cols-2

            lg:grid-cols-4
            lg:gap-12
          "
        >
          {/* Location */}
          <div>
            <p
              className="
                text-[7px] font-semibold uppercase
                tracking-[0.2em]
                text-[var(--rose-muted)]
              "
            >
              {lang === "es" ? "Ubicación" : "Based in"}
            </p>

            <p
              className="
                mt-3 text-[11px]
                leading-[1.6]
                text-[var(--ivory)]/65
              "
            >
              Calgary, Alberta
              <br />
              Canada · Colombia
            </p>
          </div>

          {/* Languages */}
          <div>
            <p
              className="
                text-[7px] font-semibold uppercase
                tracking-[0.2em]
                text-[var(--rose-muted)]
              "
            >
              {lang === "es" ? "Idiomas" : "Languages"}
            </p>

            <p
              className="
                mt-3 text-[11px]
                leading-[1.6]
                text-[var(--ivory)]/65
              "
            >
              Español · Native
              <br />
              English · B1
            </p>
          </div>

          {/* Social */}
          <div>
            <p
              className="
                text-[7px] font-semibold uppercase
                tracking-[0.2em]
                text-[var(--rose-muted)]
              "
            >
              Social
            </p>

            <div
              className="
                mt-3 flex flex-col
                items-start gap-1.5
                text-[11px]
                text-[var(--ivory)]/65
              "
            >
              {/* Links added when Sara provides them */}
              <span>Instagram</span>
              <span>LinkedIn</span>
            </div>
          </div>

          {/* Availability */}
          <div>
            <p
              className="
                text-[7px] font-semibold uppercase
                tracking-[0.2em]
                text-[var(--rose-muted)]
              "
            >
              {lang === "es"
                ? "Contacto"
                : "Get in touch"}
            </p>

            <a
              href={`mailto:${email}`}
              className="
                group mt-3
                inline-flex items-center gap-2
                text-[11px]
                text-[var(--ivory)]/65
                transition-colors duration-300

                hover:text-[var(--ivory)]
              "
            >
              {lang === "es"
                ? "Enviar un mensaje"
                : "Send a message"}

              <span
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>
          </div>
        </div>

        {/* FOOTER */}
        <footer
          className="
            flex flex-col gap-4
            border-t border-[var(--ivory)]/15
            pt-6

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[8px] uppercase
              tracking-[0.18em]
              text-[var(--ivory)]/30
            "
          >
            © 2026 Sara Acosta
          </p>

          <div
            className="
              flex items-center gap-5
              text-[8px] uppercase
              tracking-[0.18em]
              text-[var(--ivory)]/30
            "
          >
            <span>Audiovisual</span>
            <span>·</span>
            <span>Multimedia</span>
            <span>·</span>
            <span>Visual</span>
          </div>

          <a
            href="#home"
            className="
              group flex w-fit
              items-center gap-2
              text-[8px] uppercase
              tracking-[0.18em]
              text-[var(--ivory)]/40
              transition-colors duration-300

              hover:text-[var(--ivory)]
            "
          >
            {lang === "es"
              ? "Volver arriba"
              : "Back to top"}

            <span
              className="
                transition-transform duration-300
                group-hover:-translate-y-1
              "
            >
              ↑
            </span>
          </a>
        </footer>
      </div>
    </section>
  );
}