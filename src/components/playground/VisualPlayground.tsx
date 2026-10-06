import type { Language } from "@/content";

type VisualPlaygroundProps = {
  lang: Language;
};

const pieces = [
  {
    id: "poster",
    label: "Poster",
    number: "01",
    className:
      "left-[4%] top-[18%] h-[32%] w-[27%] -rotate-[6deg] md:left-[7%] md:h-[38%] md:w-[23%]",
  },
  {
    id: "frame",
    label: "Frame",
    number: "02",
    className:
      "right-[3%] top-[12%] h-[24%] w-[34%] rotate-[4deg] md:right-[8%] md:h-[30%] md:w-[28%]",
  },
  {
    id: "story",
    label: "Story",
    number: "03",
    className:
      "left-[16%] bottom-[8%] h-[24%] w-[38%] rotate-[3deg] md:left-[20%] md:h-[29%] md:w-[31%]",
  },
  {
    id: "motion",
    label: "Motion",
    number: "04",
    className:
      "right-[5%] bottom-[13%] h-[30%] w-[27%] -rotate-[5deg] md:right-[11%] md:h-[34%] md:w-[22%]",
  },
];

export default function VisualPlayground({
  lang,
}: VisualPlaygroundProps) {
  return (
    <section
      id="playground"
      className="
        relative
        overflow-hidden
        bg-[var(--charcoal)]
        text-[var(--ivory)]
      "
    >
      {/* Header */}
      <div
        className="
          mx-auto
          flex w-full max-w-[1500px]
          items-end justify-between
          border-b border-[var(--ivory)]/10
          px-5 pb-6 pt-20

          sm:px-8
          sm:pt-28

          lg:px-12
          lg:pb-8
          lg:pt-32
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
            03 / Visual Playground
          </p>

          <p
            className="
              mt-3 max-w-[280px]
              text-[11px]
              leading-[1.7]
              text-[var(--ivory)]/40
            "
          >
            {lang === "es"
              ? "Un espacio para explorar ideas, imágenes, movimiento y experimentación."
              : "A space for exploring ideas, imagery, motion and experimentation."}
          </p>
        </div>

        <p
          className="
            hidden
            text-right text-[8px]
            uppercase
            leading-[1.7]
            tracking-[0.2em]
            text-[var(--ivory)]/30

            md:block
          "
        >
          Posters
          <br />
          Frames
          <br />
          Motion
          <br />
          Visual studies
        </p>
      </div>

      {/* Experimental canvas */}
      <div
        className="
          relative mx-auto
          h-[720px]
          w-full max-w-[1500px]

          sm:h-[850px]
          md:h-[950px]
          lg:h-[1050px]
        "
      >
        {/* Giant background typography */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            flex flex-col
            justify-center
            overflow-hidden
          "
        >
          <p
            className="
              -ml-[2vw]
              whitespace-nowrap
              font-editorial
              text-[clamp(5rem,18vw,17rem)]
              leading-[0.7]
              tracking-[-0.07em]
              text-[var(--ivory)]/[0.045]
            "
          >
            VISUAL
          </p>

          <p
            className="
              ml-[12vw]
              whitespace-nowrap
              font-editorial
              text-[clamp(5rem,18vw,17rem)]
              italic
              leading-[0.8]
              tracking-[-0.07em]
              text-[var(--wine)]
              opacity-25
            "
          >
            playground.
          </p>
        </div>

        {/* Central statement */}
        <div
          className="
            pointer-events-none
            absolute left-1/2 top-1/2
            z-20
            w-[82%]
            -translate-x-1/2 -translate-y-1/2
            text-center

            md:w-[65%]
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-[var(--rose-muted)]
            "
          >
            {lang === "es"
              ? "Ideas en movimiento"
              : "Ideas in motion"}
          </p>

          <h2
            className="
              mt-5
              font-editorial
              text-[clamp(3.3rem,9vw,8rem)]
              leading-[0.82]
              tracking-[-0.05em]
            "
          >
            {lang === "es" ? (
              <>
                Un espacio para
                <br />
                <span className="italic text-[var(--rose-muted)]">
                  experimentar.
                </span>
              </>
            ) : (
              <>
                A space to
                <br />
                <span className="italic text-[var(--rose-muted)]">
                  experiment.
                </span>
              </>
            )}
          </h2>
        </div>

        {/* Floating pieces */}
        {pieces.map((piece) => (
          <div
            key={piece.id}
            className={`
              group
              absolute z-10
              overflow-hidden
              border border-[var(--ivory)]/10
              bg-[var(--wine-deep)]
              shadow-[0_30px_80px_rgba(0,0,0,.25)]
              transition-all
              duration-700

              hover:z-30
              hover:rotate-0
              hover:scale-[1.04]

              ${piece.className}
            `}
          >
            {/* Placeholder */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-br
                from-[var(--wine)]/50
                via-[var(--wine-deep)]
                to-[var(--charcoal)]
              "
            />

            {/* Inner composition */}
            <div
              aria-hidden="true"
              className="
                absolute left-[12%] top-[14%]
                h-[55%] w-[58%]
                border border-[var(--ivory)]/10
                bg-[var(--ivory)]/[0.04]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute bottom-[12%] right-[10%]
                h-[38%] w-[42%]
                border border-[var(--rose-muted)]/20
                bg-[var(--wine)]/20
              "
            />

            {/* Metadata */}
            <div
              className="
                absolute inset-x-3 bottom-3
                flex items-end justify-between

                sm:inset-x-4
                sm:bottom-4
              "
            >
              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.18em]
                  text-[var(--ivory)]/65
                "
              >
                {piece.label}
              </span>

              <span
                className="
                  text-[8px]
                  tracking-[0.15em]
                  text-[var(--rose-muted)]
                "
              >
                {piece.number}
              </span>
            </div>
          </div>
        ))}

        {/* Small editorial notes */}
        <p
          className="
            absolute bottom-[4%] left-5
            text-[8px]
            uppercase
            tracking-[0.22em]
            text-[var(--ivory)]/25

            sm:left-8
            lg:left-12
          "
        >
          Visual research · Experiments · Process
        </p>

        <p
          className="
            absolute right-5 top-[5%]
            text-right
            text-[8px]
            uppercase
            leading-[1.7]
            tracking-[0.2em]
            text-[var(--ivory)]/25

            sm:right-8
            lg:right-12
          "
        >
          Sara Acosta
          <br />
          Creative archive
        </p>
      </div>

      {/* Bottom transition */}
      <div
        className="
          mx-auto flex
          w-full max-w-[1500px]
          items-center justify-between
          border-t border-[var(--ivory)]/10
          px-5 py-7

          sm:px-8
          lg:px-12
        "
      >
        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.22em]
            text-[var(--ivory)]/30
          "
        >
          03 / 08
        </span>

        <a
          href="#creative-universe"
          className="
            group flex items-center gap-4
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.18em]
          "
        >
          {lang === "es"
            ? "Descubre mi universo"
            : "Discover my universe"}

          <span
            className="
              transition-transform duration-300
              group-hover:translate-y-1
            "
          >
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}