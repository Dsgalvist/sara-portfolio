"use client";

import { type PointerEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

import type { Language } from "@/content";

type ContactProps = {
  lang: Language;
};

const phone = "+18254885363";
const phoneDisplay = "+1 (825) 488-5363";
const email = "Saragutierrez0823@gmail.com";

export default function Contact({ lang }: ContactProps) {
  const es = lang === "es";
  const reducedMotion = useReducedMotion();

  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);

  const x = useSpring(pointerX, {
    stiffness: 280,
    damping: 34,
  });

  const y = useSpring(pointerY, {
    stiffness: 280,
    damping: 34,
  });

  const spotlight = useMotionTemplate`
    radial-gradient(
      600px circle at ${x}% ${y}%,
      rgba(196, 124, 139, 0.13),
      transparent 70%
    )
  `;

  const whatsappMessage = es
    ? "Hola Sara, encontré tu portafolio y me gustaría hablar contigo sobre una idea o proyecto creativo."
    : "Hi Sara, I found your portfolio and I'd like to talk with you about a creative idea or project.";

  const whatsappUrl = `https://wa.me/${phone.slice(1)}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const emailSubject = es
    ? "Hablemos de un proyecto creativo"
    : "Let's talk about a creative project";

  const emailBody = es
    ? `Hola Sara,

Encontré tu portafolio y me gustaría conversar contigo sobre un proyecto.

Mi idea es:

`
    : `Hi Sara,

I found your portfolio and I'd like to talk with you about a project.

My idea is:

`;

  const emailUrl = `mailto:${email}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const channels = [
    {
      number: "01",
      name: "WhatsApp",
      detail: es
        ? "Cuéntame tu idea por mensaje"
        : "Tell me about your idea",
      value: phoneDisplay,
      href: whatsappUrl,
      external: true,
      icon: "message",
    },
    {
      number: "02",
      name: es ? "Correo" : "Email",
      detail: es
        ? "Escríbeme con los detalles"
        : "Send me the details",
      value: email,
      href: emailUrl,
      external: false,
      icon: "mail",
    },
    {
      number: "03",
      name: es ? "Llamada" : "Call",
      detail: es
        ? "Hablemos directamente"
        : "Let's talk directly",
      value: phoneDisplay,
      href: `tel:${phone}`,
      external: false,
      icon: "phone",
    },
  ];

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reducedMotion || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();

    pointerX.set(
      ((event.clientX - bounds.left) / bounds.width) * 100
    );

    pointerY.set(
      ((event.clientY - bounds.top) / bounds.height) * 100
    );
  }

  return (
    <section
      id="contact"
      onPointerMove={handlePointerMove}
      className="
        relative
        isolate
        scroll-mt-24
        overflow-hidden
        bg-[#f2ece4]
        text-[#171416]
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
        "
        style={{
          background: spotlight,
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[5vw]
          top-[2%]
          -z-10

          font-editorial
          text-[clamp(12rem,29vw,31rem)]
          italic
          leading-none
          tracking-[-0.08em]
          text-[#6d1f33]/[0.025]
        "
      >
        C
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]

          px-5
          pb-7
          pt-10

          sm:px-8
          sm:pb-8
          sm:pt-12

          lg:px-12
          lg:pb-9
          lg:pt-14
        "
      >
        {/* =====================================================
            TOP LABEL
        ===================================================== */}

        <div
          className="
            flex
            items-center
            justify-between

            border-b
            border-[#171416]/15

            pb-4
          "
        >
          <div className="flex items-center gap-4">
            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.22em]
                text-[#6d1f33]
              "
            >
              05
            </span>

            <span className="h-px w-9 bg-[#6d1f33]/40" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#171416]/60
              "
            >
              {es ? "Contacto" : "Contact"}
            </span>
          </div>

          <div
            className="
              hidden
              items-center
              gap-2

              text-[8px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#171416]/40

              sm:flex
            "
          >
            <span
              className="
                h-[6px]
                w-[6px]
                rounded-full
                bg-[#6d1f33]
              "
            />

            {es ? "Disponible para proyectos" : "Available for projects"}
          </div>
        </div>

        {/* =====================================================
            HERO CONTACT
        ===================================================== */}

        <div
          className="
            grid
            gap-8

            border-b
            border-[#171416]/15

            py-9

            lg:grid-cols-[1.3fr_.7fr]
            lg:items-end
            lg:gap-16
            lg:py-11
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p
              className="
                mb-4
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#6d1f33]
              "
            >
              {es
                ? "Una idea puede empezar con un mensaje"
                : "An idea can start with a message"}
            </p>

            <h2
              className="
                max-w-[920px]

                text-[clamp(3.2rem,6.8vw,7.2rem)]
                font-medium
                leading-[0.82]
                tracking-[-0.065em]
              "
            >
              {es ? (
                <>
                  Hagamos algo
                  <span
                    className="
                      ml-[0.12em]
                      font-editorial
                      font-normal
                      italic
                      text-[#a65368]
                    "
                  >
                    visual.
                  </span>
                </>
              ) : (
                <>
                  Let&apos;s make something
                  <span
                    className="
                      ml-[0.12em]
                      font-editorial
                      font-normal
                      italic
                      text-[#a65368]
                    "
                  >
                    visual.
                  </span>
                </>
              )}
            </h2>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-[430px]

              lg:justify-self-end
            "
          >
            <p
              className="
                text-[13px]
                leading-[1.75]
                text-[#171416]/65

                sm:text-[14px]
              "
            >
              {es
                ? "¿Tienes una idea, una marca, un producto o una historia? Cuéntame qué tienes en mente y exploremos cómo convertirlo en una experiencia visual."
                : "Have an idea, a brand, a product or a story? Tell me what you have in mind and let's explore how to turn it into a visual experience."}
            </p>

            <div
              className="
                mt-5
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#6d1f33]
                "
              />

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#171416]/40
                "
              >
                Sara Acosta
              </span>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            CONTACT LIST
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {channels.map((channel) => (
            <a
              key={channel.number}
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noopener noreferrer" : undefined}
              className="
                group
                relative

                grid
                grid-cols-[36px_1fr_auto]
                items-center
                gap-3

                overflow-hidden

                border-b
                border-[#171416]/15

                py-5

                sm:grid-cols-[60px_1fr_auto]
                sm:gap-5
                sm:py-6

                lg:grid-cols-[80px_0.8fr_1fr_auto]
                lg:py-6
              "
            >
              {/* HOVER BACKGROUND */}

              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-0

                  origin-left
                  scale-x-0

                  bg-[#6d1f33]

                  transition-transform
                  duration-500
                  ease-[cubic-bezier(.22,1,.36,1)]

                  group-hover:scale-x-100
                "
              />

              {/* NUMBER */}

              <span
                className="
                  relative
                  z-10

                  text-[9px]
                  font-semibold
                  tracking-[0.15em]
                  text-[#6d1f33]

                  transition-colors
                  duration-300

                  group-hover:text-[#f2ece4]/55
                "
              >
                {channel.number}
              </span>

              {/* TITLE */}

              <span
                className="
                  relative
                  z-10

                  font-editorial
                  text-[clamp(1.8rem,3.2vw,3.3rem)]
                  leading-none
                  tracking-[-0.035em]

                  transition-all
                  duration-500

                  group-hover:translate-x-2
                  group-hover:text-[#f2ece4]
                "
              >
                {channel.name}
              </span>

              {/* INFO DESKTOP */}

              <span
                className="
                  relative
                  z-10

                  hidden
                  min-w-0

                  lg:block
                "
              >
                <span
                  className="
                    block

                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#171416]/40

                    transition-colors
                    duration-300

                    group-hover:text-[#f2ece4]/55
                  "
                >
                  {channel.detail}
                </span>

                <span
                  className="
                    mt-1.5
                    block
                    break-all

                    text-[12px]
                    text-[#171416]/65

                    transition-colors
                    duration-300

                    group-hover:text-[#f2ece4]/80
                  "
                >
                  {channel.value}
                </span>
              </span>

              {/* ARROW */}

              <span
                aria-hidden="true"
                className="
                  relative
                  z-10

                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  rounded-full
                  border
                  border-[#6d1f33]/25

                  text-[#6d1f33]

                  transition-all
                  duration-300

                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  group-hover:border-[#f2ece4]/30
                  group-hover:bg-[#f2ece4]
                  group-hover:text-[#6d1f33]

                  sm:h-11
                  sm:w-11
                "
              >
                ↗
              </span>

              {/* INFO MOBILE / TABLET */}

              <span
                className="
                  relative
                  z-10

                  col-start-2
                  col-end-4

                  -mt-1
                  block

                  lg:hidden
                "
              >
                <span
                  className="
                    block

                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#171416]/40

                    transition-colors
                    duration-300

                    group-hover:text-[#f2ece4]/55
                  "
                >
                  {channel.detail}
                </span>

                <span
                  className="
                    mt-1
                    block
                    break-all

                    text-[11px]
                    text-[#171416]/60

                    transition-colors
                    duration-300

                    group-hover:text-[#f2ece4]/80
                  "
                >
                  {channel.value}
                </span>
              </span>
            </a>
          ))}
        </motion.div>

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <footer
          className="
            flex
            flex-col
            gap-3

            pt-6

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-[#171416]/35
            "
          >
            © 2026 Sara Acosta
          </p>

          <p
            className="
              font-editorial
              text-[1rem]
              italic
              text-[#a65368]

              sm:text-[1.1rem]
            "
          >
            {es
              ? "Ideas visuales. Creadas con intención."
              : "Visual ideas. Created with intention."}
          </p>
        </footer>
      </div>
    </section>
  );
}