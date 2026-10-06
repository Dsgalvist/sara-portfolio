import type { Language } from "@/content";

type HeroProps = {
  lang: Language;
  content: {
    eyebrow: string;
    line1: string;
    line2: string;
    line3: string;
    explore: string;
  };
};

export default function Hero({
  lang,
  content,
}: HeroProps) {
  return (
    <section
      id="home"
      className="
        relative min-h-[100svh]
        overflow-hidden
        bg-[var(--ivory)]
        px-5 pb-8 pt-[110px]
        text-[var(--charcoal)]

        sm:px-8
        sm:pt-[125px]

        xl:px-12
        xl:pb-10
        xl:pt-[130px]
      "
    >
      {/* Decorative editorial lines */}
      <div
        aria-hidden="true"
        className="
          absolute left-5 right-5 top-[105px]
          h-px bg-[var(--charcoal)]/10

          sm:left-8 sm:right-8 sm:top-[118px]

          xl:left-12 xl:right-12 xl:top-[125px]
        "
      />

      <div
        className="
          relative mx-auto
          flex min-h-[calc(100svh-140px)]
          w-full max-w-[1500px]
          flex-col
        "
      >
        {/* Top metadata */}
        <div
          className="
            flex items-start justify-between
            pt-5

            sm:pt-6
          "
        >
          <p
            className="
              max-w-[190px]
              text-[9px] font-medium
              uppercase
              leading-[1.5]
              tracking-[0.22em]
              text-[var(--wine)]

              sm:max-w-none
              sm:text-[10px]
            "
          >
            {content.eyebrow}
          </p>

          <p
            className="
              hidden
              text-right
              text-[9px]
              uppercase
              leading-[1.5]
              tracking-[0.18em]
              text-[var(--charcoal)]/40

              md:block
            "
          >
            Portfolio
            <br />
            2026
          </p>
        </div>

        {/* Main composition */}
        <div
  className="
    flex flex-1
    items-center
    py-6

    sm:py-8

    xl:-translate-y-[2vh]
    xl:py-4
  "
>
          <div className="w-full">
            {/* Line 01 */}
            <div className="flex items-baseline">
              <span
                className="
                  mr-3 hidden
                  text-[9px]
                  tracking-[0.15em]
                  text-[var(--wine)]/55

                  md:block
                "
              >
                01
              </span>

              <h1
                className="
                  text-[clamp(3.4rem,14vw,7rem)]
                  font-medium
                  leading-[0.82]
                  tracking-[-0.07em]

                  md:text-[clamp(5rem,10vw,9rem)]

                  xl:text-[clamp(6.2rem,8.3vw,9rem)]
                "
              >
                {content.line1}
              </h1>
            </div>

            {/* Line 02 */}
            <div
              className="
                mt-1
                flex items-center

                md:mt-2
                md:pl-[8%]

                xl:pl-[12%]
              "
            >
              <span
                aria-hidden="true"
                className="
                  mr-4 hidden
                  h-px w-[7vw]
                  max-w-[110px]
                  bg-[var(--wine)]

                  lg:block
                "
              />

              <p
                className="
                  text-[clamp(3.4rem,14vw,7rem)]
                  font-medium
                  leading-[0.82]
                  tracking-[-0.07em]

                  md:text-[clamp(5rem,10vw,9rem)]

                  xl:text-[clamp(6.8rem,9vw,10rem)]
                "
              >
                {content.line2}
              </p>
            </div>

            {/* Line 03 */}
            <div
              className="
                mt-2
                flex justify-end

                sm:mt-3

                md:pr-[4%]

                xl:pr-[8%]
              "
            >
              <p
                className="
                  font-editorial
                  text-[clamp(4rem,16vw,8rem)]
                  italic
                  leading-[0.75]
                  tracking-[-0.06em]
                  text-[var(--wine)]

                  md:text-[clamp(6rem,11vw,10rem)]

                  xl:text-[clamp(7rem,10vw,11rem)]
                "
              >
                {content.line3}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            flex flex-col
            gap-6
            border-t border-[var(--charcoal)]/10
            pt-5

            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-[var(--charcoal)]/40
              "
            >
              {lang === "es" ? "Entre dos lugares" : "Between two places"}
            </p>

            <p
              className="
                mt-1.5
                text-[11px]
                font-medium
                tracking-[0.04em]
              "
            >
              Canada · Colombia
            </p>
          </div>

          <a
            href="#work"
            className="
              group
              flex w-fit
              items-center gap-4
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[var(--charcoal)]
            "
          >
            <span>{content.explore}</span>

            <span
              className="
                flex h-9 w-9
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

      {/* Small decorative marker */}
      <div
        aria-hidden="true"
        className="
          absolute
          bottom-[28%] right-5
          hidden
          items-center gap-2

          lg:flex
        "
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--wine)]" />

        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.2em]
            text-[var(--charcoal)]/35
          "
        >
          Visual stories
        </span>
      </div>
    </section>
  );
}