"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Language } from "@/content";

type NavbarProps = {
  lang: Language;
  labels: {
    about: string;
    work: string;
    journey: string;
    contact: string;
  };
};

export default function Navbar({ lang, labels }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { id: "about", label: labels.about },
    { id: "work", label: labels.work },
    { id: "journey", label: labels.journey },
    { id: "contact", label: labels.contact },
  ];

  function languageHref(next: Language) {
    const segments = pathname.split("/");
    segments[1] = next;

    return segments.join("/") || `/${next}`;
  }

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50
        border-b border-[var(--charcoal)]/10
        bg-[var(--ivory)]/95
        text-[var(--charcoal)]
        shadow-[0_12px_36px_rgba(23,20,22,.06)]
        backdrop-blur-xl

        xl:top-4
        xl:border-0
        xl:bg-transparent
        xl:px-5
        xl:shadow-none
        xl:backdrop-blur-none
      "
    >
      <div
        className="
          relative mx-auto
          flex h-[76px]
          max-w-[1400px]
          items-center
          justify-between
          gap-2
          px-3

          sm:gap-4
          sm:px-8

          xl:h-[80px]
          xl:gap-3
          xl:rounded-[20px]
          xl:border
          xl:border-[var(--wine)]/15
          xl:bg-[var(--ivory)]/90
          xl:px-5
          xl:shadow-[0_22px_65px_rgba(42,13,21,.10)]
          xl:backdrop-blur-2xl
        "
      >
        {/* =================================================
            BRAND
        ================================================== */}
        <Link
          href={`/${lang}`}
          onClick={() => setOpen(false)}
          aria-label="Sara Acosta - Home"
          className="
            group relative
            flex shrink-0
            items-center
            xl:gap-4
          "
        >
          <div className="flex flex-col">
            <span
              className="
                font-editorial
                text-[18px]
                font-semibold
                leading-[0.9]
                tracking-[-0.02em]

                sm:text-[20px]
              "
            >
              SARA
            </span>

            <span
              className="
                mt-1
                text-[7px]
                font-semibold
                tracking-[0.24em]
                text-[var(--wine)]

                sm:text-[8px]
              "
            >
              ACOSTA
            </span>
          </div>

          {/* Divider only desktop */}
          <span
            aria-hidden="true"
            className="
              hidden h-7 w-px
              bg-[var(--charcoal)]/10
              xl:block
            "
          />

          {/* Small identity only desktop */}
          <span
            className="
              hidden
              text-[8px]
              font-medium
              uppercase
              leading-[1.55]
              tracking-[0.18em]
              text-[var(--charcoal)]/45

              xl:block
            "
          >
            Visual
            <br />

            <span className="text-[var(--wine)]">
              creative.
            </span>
          </span>

          <span
            aria-hidden="true"
            className="
              absolute
              -bottom-2 left-0
              h-px w-0
              bg-[var(--wine)]
              transition-all duration-300
              group-hover:w-full
            "
          />
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}
        <nav
          aria-label={
            lang === "es"
              ? "Navegación principal"
              : "Main navigation"
          }
          className="
            absolute left-1/2
            hidden -translate-x-1/2
            items-center
            gap-0.5

            xl:flex
          "
        >
          {navLinks.map(({ id, label }, index) => (
            <a
              key={id}
              href={`#${id}`}
              className="
                group relative
                flex items-center
                gap-1.5
                whitespace-nowrap
                rounded-lg
                px-2 py-3
                text-[12px]
                font-medium
                text-[var(--charcoal)]/65
                transition-colors duration-200

                hover:bg-[var(--wine)]/[0.04]
                hover:text-[var(--charcoal)]

                2xl:gap-2
                2xl:px-3
                2xl:text-[13px]
              "
            >
              <span
                aria-hidden="true"
                className="
                  text-[8px]
                  font-semibold
                  tracking-[0.12em]
                  text-[var(--wine)]/60
                  transition-colors
                  group-hover:text-[var(--wine)]
                "
              >
                0{index + 1}
              </span>

              {label}

              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-x-2
                  bottom-0
                  h-[2px]
                  origin-left
                  scale-x-0
                  rounded-full
                  bg-[var(--wine)]
                  transition-transform duration-300
                  group-hover:scale-x-100
                "
              />
            </a>
          ))}
        </nav>

        {/* =================================================
            RIGHT ACTIONS
        ================================================== */}
        <div
          className="
            relative
            ml-auto
            flex shrink-0
            items-center
            gap-2

            sm:gap-3
          "
        >
          {/* WHATSAPP */}
          <button
            type="button"
            disabled
            aria-label="WhatsApp"
            title="WhatsApp coming soon"
            className="
              group
              inline-flex h-10
              shrink-0
              cursor-default
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-[var(--wine)]
              px-2.5
              text-xs
              font-semibold
              text-[var(--ivory)]

              sm:px-3

              xl:px-4
            "
          >
            <WhatsAppIcon />

            <span className="hidden sm:inline">
              WhatsApp
            </span>

            <span
              aria-hidden="true"
              className="
                hidden
                transition-transform
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5

                xl:inline
              "
            >
              ↗
            </span>
          </button>

          {/* LANGUAGE */}
          <div
            role="group"
            aria-label={lang === "es" ? "Idioma" : "Language"}
            className="
              flex items-center
              rounded-full
              border border-[var(--charcoal)]/10
              bg-[var(--charcoal)]/[0.03]
              p-1
            "
          >
            <Link
              href={languageHref("en")}
              onClick={() => setOpen(false)}
              aria-label="English"
              aria-current={lang === "en" ? "true" : undefined}
              className={`
                rounded-full
                px-2 py-1.5
                text-[11px]
                font-bold
                tracking-wider
                transition-colors

                sm:px-3

                ${
                  lang === "en"
                    ? "bg-[var(--wine)] text-[var(--ivory)]"
                    : "text-[var(--charcoal)]/55 hover:text-[var(--charcoal)]"
                }
              `}
            >
              EN
            </Link>

            <Link
              href={languageHref("es")}
              onClick={() => setOpen(false)}
              aria-label="Español"
              aria-current={lang === "es" ? "true" : undefined}
              className={`
                rounded-full
                px-2 py-1.5
                text-[11px]
                font-bold
                tracking-wider
                transition-colors

                sm:px-3

                ${
                  lang === "es"
                    ? "bg-[var(--wine)] text-[var(--ivory)]"
                    : "text-[var(--charcoal)]/55 hover:text-[var(--charcoal)]"
                }
              `}
            >
              ES
            </Link>
          </div>

          {/* =================================================
              HAMBURGER
              Same 40x40 geometry as Diego's.
              Responsive only.
          ================================================== */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label={
              lang === "es"
                ? open
                  ? "Cerrar menú"
                  : "Abrir menú"
                : open
                  ? "Close menu"
                  : "Open menu"
            }
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-xl
              border border-[var(--charcoal)]/10
              text-xl
              leading-none
              text-[var(--charcoal)]
              transition

              hover:border-[var(--wine)]
              hover:text-[var(--wine)]

              xl:hidden
            "
          >
            <span aria-hidden="true">
              {open ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE / TABLET NAVIGATION
      ====================================================== */}
      {open && (
        <nav
          id="mobile-navigation"
          aria-label={
            lang === "es"
              ? "Navegación móvil"
              : "Mobile navigation"
          }
          className="
            absolute inset-x-0
            top-full
            max-h-[calc(100dvh-76px)]
            overflow-y-auto
            border-b
            border-[var(--wine)]/15
            bg-[var(--ivory)]/98
            px-5 py-4
            shadow-[0_30px_60px_rgba(42,13,21,.12)]
            backdrop-blur-xl

            xl:hidden
          "
        >
          <div className="mx-auto grid max-w-2xl gap-1">
            {navLinks.map(({ id, label }, index) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="
                  group
                  flex items-center
                  gap-4
                  rounded-xl
                  px-3 py-2.5
                  text-base
                  font-medium
                  text-[var(--charcoal)]/80
                  transition

                  hover:bg-[var(--wine)]/[0.05]
                  hover:text-[var(--wine)]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    w-6
                    text-[10px]
                    font-semibold
                    tracking-[0.1em]
                    text-[var(--wine)]/55
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {label}

                <span
                  aria-hidden="true"
                  className="
                    ml-auto
                    text-[var(--wine)]/45
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[18px] w-[18px]"
    >
      <path d="M12.04 2a9.95 9.95 0 0 0-8.6 14.96L2 22l5.18-1.36A9.96 9.96 0 1 0 12.04 2Zm0 18.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.07.81.82-3-.2-.32a8.13 8.13 0 1 1 6.88 3.82Zm4.47-6.07c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.56.13-.17.25-.65.81-.79.98-.14.17-.29.19-.54.06a6.64 6.64 0 0 1-1.99-1.23 7.44 7.44 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.51l.38-.45c.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44l-.76-1.84c-.2-.48-.4-.41-.55-.42h-.48c-.17 0-.44.06-.67.31s-.88.86-.88 2.09.9 2.42 1.02 2.59c.13.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.44.52.61.2 1.17.17 1.61.1.49-.08 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.2-.06-.1-.22-.17-.47-.29Z" />
    </svg>
  );
}