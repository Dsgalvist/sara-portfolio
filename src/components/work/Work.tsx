import type { Language } from "@/content";
import { projects } from "@/data/projects";

type WorkProps = {
  lang: Language;
};

export default function Work({ lang }: WorkProps) {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="work"
      className="
        relative overflow-hidden
        bg-[var(--wine-deep)]
        text-[var(--ivory)]
      "
    >
      {/* =====================================================
          INTRO
      ===================================================== */}
      <div
        className="
          mx-auto w-full max-w-[1500px]
          px-5 pt-24
          sm:px-8 sm:pt-32
          lg:px-12 lg:pt-40
        "
      >
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
              03 / {lang === "es" ? "Trabajo" : "Work"}
            </p>

            <p
              className="
                mt-3 max-w-[300px]
                text-[11px] leading-[1.7]
                text-[var(--ivory)]/45
              "
            >
              {lang === "es"
                ? "Proyectos, experimentos y piezas que exploran distintas formas de contar visualmente."
                : "Projects, experiments and pieces exploring different ways of telling stories visually."}
            </p>
          </div>

          <p
            className="
              hidden text-right
              text-[8px] uppercase
              leading-[1.7]
              tracking-[0.2em]
              text-[var(--ivory)]/30
              md:block
            "
          >
            Selected projects
            <br />
            Visual experiments
            <br />
            Creative archive
          </p>
        </div>

        {/* Main title */}
        <div className="py-20 sm:py-28 lg:py-32">
          <p
            className="
              text-[8px] uppercase
              tracking-[0.3em]
              text-[var(--ivory)]/35
            "
          >
            {lang === "es"
              ? "Trabajo seleccionado"
              : "Selected work"}
          </p>

          <h2
            className="
              mt-5
              font-editorial
              text-[clamp(4.5rem,12vw,11rem)]
              leading-[0.74]
              tracking-[-0.065em]
            "
          >
            Selected
          </h2>

          <div className="flex justify-end">
            <h2
              className="
                font-editorial
                text-[clamp(5rem,13vw,12rem)]
                italic leading-[0.72]
                tracking-[-0.07em]
                text-[var(--rose-muted)]
              "
            >
              stories.
            </h2>
          </div>
        </div>
      </div>

      {/* =====================================================
          PROJECTS
      ===================================================== */}
      <div className="mx-auto w-full max-w-[1500px]">
        {featuredProjects.map((project, index) => {
          const reversed = index % 2 !== 0;

          return (
            <div key={project.id}>
              <article
                className="
                  grid min-h-[75vh]
                  gap-10
                  border-t border-[var(--ivory)]/10
                  px-5 py-16

                  sm:px-8 sm:py-20

                  md:grid-cols-12
                  md:items-center
                  md:gap-8

                  lg:min-h-[90vh]
                  lg:px-12
                  lg:py-24
                "
              >
                {/* VISUAL */}
                <div
                  className={`
                    md:col-span-7
                    ${
                      reversed
                        ? "md:col-start-6 md:row-start-1"
                        : "md:col-start-1"
                    }
                  `}
                >
                  <div
                    className="
                      group relative
                      aspect-[4/3]
                      overflow-hidden
                      bg-[var(--wine)]
                    "
                  >
                    {/* Temporary visual */}
                    <div
                      className="
                        absolute inset-0
                        transition-transform
                        duration-700
                        group-hover:scale-[1.02]
                      "
                    >
                      <div
                        className="
                          absolute
                          left-[12%] top-[12%]
                          h-[72%] w-[58%]
                          -rotate-[5deg]
                          border border-[var(--ivory)]/15
                          bg-[var(--charcoal)]/20
                          transition-transform duration-700

                          group-hover:-rotate-[2deg]
                        "
                      />

                      <div
                        className="
                          absolute
                          bottom-[10%] right-[9%]
                          h-[58%] w-[48%]
                          rotate-[5deg]
                          border border-[var(--rose-muted)]/20
                          bg-[var(--wine-deep)]/70
                          transition-transform duration-700

                          group-hover:rotate-[2deg]
                        "
                      />

                      <div
                        className="
                          absolute inset-0
                          flex items-center justify-center
                        "
                      >
                        <span
                          className="
                            relative z-10
                            font-editorial
                            text-[clamp(3rem,7vw,7rem)]
                            italic
                          "
                        >
                          {project.title}
                        </span>
                      </div>
                    </div>

                    <span
                      className="
                        absolute left-4 top-4
                        text-[8px]
                        tracking-[0.16em]
                        text-[var(--ivory)]/50

                        sm:left-5 sm:top-5
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
                        absolute bottom-4 right-4
                        text-[8px] uppercase
                        tracking-[0.18em]
                        text-[var(--ivory)]/45

                        sm:bottom-5 sm:right-5
                      "
                    >
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* INFO */}
                <div
                  className={`
                    md:col-span-4

                    ${
                      reversed
                        ? "md:col-start-1 md:row-start-1"
                        : "md:col-start-9"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        text-[8px]
                        tracking-[0.16em]
                        text-[var(--rose-muted)]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      aria-hidden="true"
                      className="
                        h-px w-8
                        bg-[var(--rose-muted)]/40
                      "
                    />

                    <span
                      className="
                        text-[8px] uppercase
                        tracking-[0.18em]
                        text-[var(--ivory)]/35
                      "
                    >
                      {project.type[lang]}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-6
                      font-editorial
                      text-[clamp(3rem,6vw,6rem)]
                      leading-[0.85]
                      tracking-[-0.045em]
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-6 max-w-[360px]
                      text-[12px]
                      leading-[1.8]
                      text-[var(--ivory)]/50
                    "
                  >
                    {project.description[lang]}
                  </p>

                  <button
                    type="button"
                    className="
                      group mt-8
                      flex items-center gap-4
                      text-[9px] font-semibold uppercase
                      tracking-[0.18em]
                    "
                  >
                    {lang === "es"
                      ? "Explorar proyecto"
                      : "Explore project"}

                    <span
                      className="
                        flex h-10 w-10
                        items-center justify-center
                        rounded-full
                        border border-[var(--ivory)]/20
                        transition-all duration-300

                        group-hover:border-[var(--rose-muted)]
                        group-hover:bg-[var(--rose-muted)]
                        group-hover:text-[var(--wine-deep)]
                      "
                    >
                      ↗
                    </span>
                  </button>
                </div>
              </article>

              {/* =============================================
                  EXPERIMENTAL BREAK
                  After project 2
              ============================================== */}
              {index === 1 && (
                <div
                  className="
                    relative
                    min-h-[650px]
                    overflow-hidden
                    border-t border-[var(--ivory)]/10
                    bg-[var(--charcoal)]

                    sm:min-h-[760px]
                    lg:min-h-[900px]
                  "
                >
                  {/* Giant typography */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute inset-0
                      flex flex-col justify-center
                      overflow-hidden
                    "
                  >
                    <p
                      className="
                        -ml-[3vw]
                        whitespace-nowrap
                        font-editorial
                        text-[clamp(6rem,20vw,20rem)]
                        leading-[0.68]
                        tracking-[-0.075em]
                        text-[var(--ivory)]/[0.04]
                      "
                    >
                      VISUAL
                    </p>

                    <p
                      className="
                        ml-[10vw]
                        whitespace-nowrap
                        font-editorial
                        text-[clamp(6rem,20vw,20rem)]
                        italic leading-[0.72]
                        tracking-[-0.075em]
                        text-[var(--wine)]
                        opacity-30
                      "
                    >
                      playground.
                    </p>
                  </div>

                  {/* Piece 1 */}
                  <div
                    className="
                      absolute
                      left-[5%] top-[14%]
                      h-[30%] w-[32%]
                      -rotate-[6deg]
                      border border-[var(--ivory)]/10
                      bg-[var(--wine)]
                      transition-transform duration-500

                      hover:z-20
                      hover:rotate-[-2deg]
                      hover:scale-[1.03]

                      md:left-[8%]
                      md:h-[37%]
                      md:w-[24%]
                    "
                  >
                    <span
                      className="
                        absolute bottom-3 left-3
                        text-[7px] uppercase
                        tracking-[0.18em]
                        text-[var(--ivory)]/50
                      "
                    >
                      Visual study / 01
                    </span>
                  </div>

                  {/* Piece 2 */}
                  <div
                    className="
                      absolute
                      right-[5%] top-[10%]
                      h-[25%] w-[38%]
                      rotate-[5deg]
                      border border-[var(--ivory)]/10
                      bg-[var(--wine-deep)]
                      transition-transform duration-500

                      hover:z-20
                      hover:rotate-[1deg]
                      hover:scale-[1.03]

                      md:right-[10%]
                      md:h-[31%]
                      md:w-[29%]
                    "
                  >
                    <span
                      className="
                        absolute bottom-3 left-3
                        text-[7px] uppercase
                        tracking-[0.18em]
                        text-[var(--ivory)]/50
                      "
                    >
                      Frame / 02
                    </span>
                  </div>

                  {/* Piece 3 */}
                  <div
                    className="
                      absolute
                      bottom-[8%] left-[15%]
                      h-[24%] w-[40%]
                      rotate-[4deg]
                      border border-[var(--rose-muted)]/15
                      bg-[var(--wine-deep)]
                      transition-transform duration-500

                      hover:z-20
                      hover:rotate-[1deg]
                      hover:scale-[1.03]

                      md:left-[22%]
                      md:h-[29%]
                      md:w-[30%]
                    "
                  >
                    <span
                      className="
                        absolute bottom-3 left-3
                        text-[7px] uppercase
                        tracking-[0.18em]
                        text-[var(--ivory)]/50
                      "
                    >
                      Story / 03
                    </span>
                  </div>

                  {/* Piece 4 */}
                  <div
                    className="
                      absolute
                      bottom-[12%] right-[5%]
                      h-[29%] w-[28%]
                      -rotate-[5deg]
                      border border-[var(--ivory)]/10
                      bg-[var(--wine)]
                      transition-transform duration-500

                      hover:z-20
                      hover:rotate-[-1deg]
                      hover:scale-[1.03]

                      md:right-[12%]
                      md:h-[35%]
                      md:w-[21%]
                    "
                  >
                    <span
                      className="
                        absolute bottom-3 left-3
                        text-[7px] uppercase
                        tracking-[0.18em]
                        text-[var(--ivory)]/50
                      "
                    >
                      Motion / 04
                    </span>
                  </div>

                  {/* Central text */}
                  <div
                    className="
                      pointer-events-none
                      absolute left-1/2 top-1/2
                      z-10
                      w-[80%]
                      -translate-x-1/2
                      -translate-y-1/2
                      text-center

                      md:w-[60%]
                    "
                  >
                    <p
                      className="
                        text-[8px] uppercase
                        tracking-[0.3em]
                        text-[var(--rose-muted)]
                      "
                    >
                      {lang === "es"
                        ? "Fuera del frame"
                        : "Outside the frame"}
                    </p>

                    <p
                      className="
                        mt-5
                        font-editorial
                        text-[clamp(3rem,8vw,7rem)]
                        leading-[0.82]
                        tracking-[-0.05em]
                      "
                    >
                      {lang === "es" ? (
                        <>
                          Ideas que también
                          <br />

                          <span className="italic text-[var(--rose-muted)]">
                            merecen existir.
                          </span>
                        </>
                      ) : (
                        <>
                          Ideas that also
                          <br />

                          <span className="italic text-[var(--rose-muted)]">
                            deserve to exist.
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* =====================================================
          END
      ===================================================== */}
      <div
        className="
          mx-auto w-full max-w-[1500px]
          px-5 pb-24 pt-16
          sm:px-8 sm:pb-32
          lg:px-12 lg:pb-40
        "
      >
        <div
          className="
            flex flex-col gap-10
            border-t border-[var(--ivory)]/10
            pt-10

            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <p
            className="
              max-w-[700px]
              font-editorial
              text-[clamp(3rem,6vw,6rem)]
              leading-[0.9]
              tracking-[-0.045em]
            "
          >
            {lang === "es" ? (
              <>
                Cada proyecto empieza
                <br />

                <span className="italic text-[var(--rose-muted)]">
                  con algo por contar.
                </span>
              </>
            ) : (
              <>
                Every project begins
                <br />

                <span className="italic text-[var(--rose-muted)]">
                  with something to say.
                </span>
              </>
            )}
          </p>

          <a
            href="#journey"
            className="
              group flex w-fit
              items-center gap-4
              text-[9px] font-semibold uppercase
              tracking-[0.18em]
            "
          >
            {lang === "es"
              ? "Conoce mi recorrido"
              : "Discover my journey"}

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