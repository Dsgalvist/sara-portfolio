import type { Language } from "@/content";
import { projects } from "@/data/projects";

type SelectedStoriesProps = {
  lang: Language;
};

export default function SelectedStories({
  lang,
}: SelectedStoriesProps) {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="work"
      className="
        relative
        overflow-hidden
        bg-[var(--wine-deep)]
        text-[var(--ivory)]
      "
    >
      {/* Transition from Hero */}
      <div
        aria-hidden="true"
        className="
          h-16
          bg-gradient-to-b
          from-[var(--ivory)]
          to-[var(--wine-deep)]

          sm:h-24
          lg:h-32
        "
      />

      <div
        className="
          mx-auto
          w-full max-w-[1500px]
          px-5
          pb-24
          pt-14

          sm:px-8
          sm:pb-32
          sm:pt-20

          lg:px-12
          lg:pb-40
        "
      >
        {/* ================================================
            SECTION INTRO
        ================================================= */}
        <div
          className="
            grid gap-10
            border-b border-[var(--ivory)]/15
            pb-12

            md:grid-cols-[1fr_2fr]
            md:items-end

            lg:pb-16
          "
        >
          <div>
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[var(--rose-muted)]
              "
            >
              02 /{" "}
              {lang === "es"
                ? "Trabajo seleccionado"
                : "Selected work"}
            </p>

            <p
              className="
                mt-4
                max-w-[240px]
                text-[11px]
                leading-[1.7]
                text-[var(--ivory)]/45
              "
            >
              {lang === "es"
                ? "Una selección de proyectos visuales, audiovisuales y creativos."
                : "A selection of visual, audiovisual and creative projects."}
            </p>
          </div>

          <div>
            <h2
              className="
                font-editorial
                text-[clamp(4rem,12vw,9rem)]
                leading-[0.75]
                tracking-[-0.055em]
              "
            >
              Selected
            </h2>

            <div className="flex items-end justify-end">
              <h2
                className="
                  font-editorial
                  text-[clamp(4rem,12vw,9rem)]
                  italic
                  leading-[0.8]
                  tracking-[-0.055em]
                  text-[var(--rose-muted)]
                "
              >
                stories.
              </h2>
            </div>
          </div>
        </div>

        {/* ================================================
            PROJECTS
        ================================================= */}
        <div>
          {featuredProjects.map((project, index) => {
            const reversed = index % 2 !== 0;

            return (
              <article
                key={project.id}
                className="
                  grid
                  min-h-[70vh]
                  gap-8
                  border-b border-[var(--ivory)]/10
                  py-16

                  md:min-h-[80vh]
                  md:grid-cols-12
                  md:items-center
                  md:gap-8

                  lg:py-24
                "
              >
                {/* ========================================
                    PROJECT VISUAL
                ========================================= */}
                <div
                  className={`
                    relative
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
                      group
                      relative
                      aspect-[4/3]
                      overflow-hidden
                      rounded-[2px]
                      border border-[var(--ivory)]/10
                      bg-[var(--ivory)]/[0.04]
                    "
                  >
                    {/* Temporary visual until real assets */}
                    <div
                      className="
                        absolute inset-0
                        flex items-center justify-center
                      "
                    >
                      <div
                        className="
                          absolute
                          h-[65%] w-[55%]
                          rotate-[-5deg]
                          border
                          border-[var(--rose-muted)]/25
                          bg-[var(--wine)]/30
                          transition-transform
                          duration-700

                          group-hover:rotate-[-2deg]
                          group-hover:scale-[1.03]
                        "
                      />

                      <div
                        className="
                          absolute
                          h-[58%] w-[52%]
                          translate-x-[12%]
                          translate-y-[8%]
                          rotate-[5deg]
                          border
                          border-[var(--ivory)]/15
                          bg-[var(--charcoal)]/20
                          transition-transform
                          duration-700

                          group-hover:translate-x-[8%]
                          group-hover:rotate-[2deg]
                        "
                      />

                      <span
                        className="
                          relative z-10
                          font-editorial
                          text-[clamp(2.5rem,7vw,6rem)]
                          italic
                          text-[var(--ivory)]/80
                        "
                      >
                        {project.title}
                      </span>
                    </div>

                    {/* Project number */}
                    <span
                      className="
                        absolute
                        left-4 top-4
                        text-[9px]
                        tracking-[0.16em]
                        text-[var(--ivory)]/45

                        sm:left-5
                        sm:top-5
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* View */}
                    <span
                      className="
                        absolute
                        bottom-4 right-4
                        text-[9px]
                        uppercase
                        tracking-[0.15em]
                        text-[var(--ivory)]/45

                        sm:bottom-5
                        sm:right-5
                      "
                    >
                      {lang === "es"
                        ? "Ver proyecto ↗"
                        : "View project ↗"}
                    </span>
                  </div>
                </div>

                {/* ========================================
                    PROJECT INFORMATION
                ========================================= */}
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
                        text-[9px]
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
                        text-[9px]
                        uppercase
                        tracking-[0.16em]
                        text-[var(--ivory)]/40
                      "
                    >
                      {project.year}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-6
                      font-editorial
                      text-[clamp(3rem,7vw,6rem)]
                      leading-[0.85]
                      tracking-[-0.04em]
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-[var(--rose-muted)]
                    "
                  >
                    {project.type[lang]}
                  </p>

                  <p
                    className="
                      mt-6
                      max-w-[360px]
                      text-[13px]
                      leading-[1.75]
                      text-[var(--ivory)]/55
                    "
                  >
                    {project.description[lang]}
                  </p>

                  <a
                    href={`#${project.id}`}
                    className="
                      group
                      mt-8
                      inline-flex
                      items-center
                      gap-4
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                    "
                  >
                    {lang === "es"
                      ? "Explorar proyecto"
                      : "Explore project"}

                    <span
                      className="
                        flex h-9 w-9
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
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* ================================================
            SECTION END
        ================================================= */}
        <div
          className="
            flex flex-col
            gap-6
            pt-10

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-[var(--ivory)]/35
            "
          >
            {lang === "es"
              ? "Más por descubrir"
              : "More to discover"}
          </p>

          <a
            href="#playground"
            className="
              group
              flex items-center
              gap-4
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
            "
          >
            {lang === "es"
              ? "Entrar al playground"
              : "Enter the playground"}

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}