"use client";

import type { Language } from "@/content";

type WhatsAppFloatingProps = {
  lang: Language;
};

export default function WhatsAppFloating({
  lang,
}: WhatsAppFloatingProps) {
  const message =
    lang === "es"
      ? "Hola Sara, vi tu portafolio y me gustaría hablar contigo sobre un proyecto."
      : "Hi Sara, I saw your portfolio and I'd like to talk with you about a project.";

  const whatsappUrl = `https://wa.me/18254885363?text=${encodeURIComponent(
    message
  )}`;

  const label = lang === "es" ? "Escríbeme" : "Let's talk";

  return (
    <div
      className="
        fixed
        bottom-6
        right-6
        z-[90]

        sm:bottom-8
        sm:right-8
      "
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          lang === "es"
            ? "Contactar a Sara por WhatsApp"
            : "Contact Sara on WhatsApp"
        }
        className="
          group
          flex
          h-[68px]
          w-[68px]
          items-center
          justify-end
          overflow-hidden
          rounded-full

          border
          border-[var(--ivory)]/15
          bg-[var(--wine)]

          text-[var(--ivory)]

          shadow-[0_14px_40px_rgba(42,13,21,0.28)]

          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          hover:-translate-y-1
          hover:shadow-[0_20px_55px_rgba(42,13,21,0.38)]

          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[var(--wine)]
          focus-visible:ring-offset-3
          focus-visible:ring-offset-[var(--ivory)]

          sm:h-[72px]
          sm:w-[72px]
          sm:hover:w-[210px]
        "
      >
        {/* ===================================================
            TEXT
        =================================================== */}

        <span
          className="
            hidden
            max-w-0
            translate-x-4
            overflow-hidden
            whitespace-nowrap

            text-[10px]
            font-semibold
            uppercase
            tracking-[0.22em]
            text-[var(--ivory)]

            opacity-0

            transition-all
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]

            sm:block

            sm:group-hover:mr-2
            sm:group-hover:max-w-[120px]
            sm:group-hover:translate-x-0
            sm:group-hover:opacity-100
          "
        >
          {label}
        </span>

        {/* ===================================================
            ICON
        =================================================== */}

        <span
          className="
            flex
            h-[68px]
            w-[68px]
            shrink-0
            items-center
            justify-center

            sm:h-[72px]
            sm:w-[72px]
          "
        >
          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            className="
              h-[27px]
              w-[27px]
              fill-current
              text-[var(--ivory)]

              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]

              group-hover:rotate-[-5deg]
              group-hover:scale-110

              sm:h-[29px]
              sm:w-[29px]
            "
          >
            <path d="M16.04 3C8.85 3 3 8.74 3 15.8c0 2.26.6 4.46 1.75 6.4L3 28.62l6.65-1.7a13.15 13.15 0 0 0 6.38 1.64h.01C23.22 28.56 29 22.82 29 15.77 29 8.73 23.22 3 16.04 3Zm0 23.4h-.01a10.96 10.96 0 0 1-5.58-1.51l-.4-.23-3.95 1.01 1.05-3.77-.26-.39a10.54 10.54 0 0 1-1.72-5.72c0-5.86 4.88-10.63 10.88-10.63 2.9 0 5.63 1.11 7.68 3.13a10.42 10.42 0 0 1 3.19 7.49c-.01 5.86-4.89 10.62-10.88 10.62Zm5.97-7.95c-.33-.16-1.94-.94-2.24-1.05-.3-.11-.52-.16-.74.16-.22.32-.85 1.05-1.04 1.27-.19.22-.38.24-.71.08-.33-.16-1.38-.5-2.63-1.59a9.84 9.84 0 0 1-1.82-2.22c-.19-.32-.02-.5.14-.66.15-.14.33-.37.49-.56.16-.19.22-.32.33-.54.11-.22.05-.4-.03-.56-.08-.16-.74-1.75-1.01-2.4-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.4-.3.32-1.15 1.1-1.15 2.69 0 1.59 1.18 3.12 1.34 3.34.16.21 2.32 3.48 5.63 4.88.79.33 1.4.53 1.88.68.79.25 1.51.21 2.08.13.63-.09 1.94-.78 2.21-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.63-.37Z" />
          </svg>
        </span>

        {/* ===================================================
            SUBTLE INNER HIGHLIGHT
        =================================================== */}

        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-[1px]
            rounded-full
            border
            border-[var(--ivory)]/[0.06]
          "
        />
      </a>
    </div>
  );
}