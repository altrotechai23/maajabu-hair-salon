"use client";

import { useEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Phone,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGlobalBooking } from "../providers/BookingDialogProvider";
import Link from "next/link";
import Image from "next/image";

export default function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  const { openBooking } = useGlobalBooking();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const copy = copyRef.current;
    const image = imageRef.current;

    if (!section || !copy) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Select actual elements so GSAP never receives undefined.
      const revealElements = copy.querySelectorAll<HTMLElement>(
        "[data-reveal]"
      );

      if (reduceMotion) return;

      // Reveal the hero content progressively.
      if (revealElements.length > 0) {
        gsap.fromTo(
          revealElements,
          {
            y: 28,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            delay: 0.12,
            clearProps: "transform",
          }
        );
      }

      // Subtle image parallax while scrolling.
      if (image) {
        gsap.to(image, {
          yPercent: 12,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        });
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="maja-hero relative isolate flex min-h-[780px] overflow-hidden bg-black text-white md:min-h-[min(850px,calc(100svh-78px))]"
      aria-labelledby="home-title"
    >
      {/* Background photography and visual effects */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {/* Local project photography */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          ref={imageRef}
          src="/images/maajabu/hero-image.jpg"
           alt="Editorial portrait celebrating natural afro hair"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center grayscale select-none pointer-events-none md:object-[65%_center]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/5 to-black/15" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/25" />

        <div className="maja-orbit absolute -right-36 top-20 h-[30rem] w-[30rem] rounded-full border border-white/20 md:right-[-7rem] md:top-[-3rem] md:h-[44rem] md:w-[44rem]" />

        <div className="maja-orbit maja-orbit--two absolute -right-16 top-44 h-[23rem] w-[23rem] rounded-full border border-white/15 md:right-[-1rem] md:top-12 md:h-[34rem] md:w-[34rem]" />
      </div>

      {/* Hero content */}
      <div
        ref={copyRef}
        className="mx-auto flex w-full max-w-[1440px] flex-col justify-center px-5 pb-24 pt-28 sm:px-8 md:px-12 md:pb-20 md:pt-28 lg:px-20"
      >
        <div
          data-reveal
          className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-white sm:text-xs"
        >
          <span className="h-px w-8 bg-white" />
          Cape Town · Long Street
        </div>

        <h1
          id="home-title"
          data-reveal
          className="max-w-3xl font-serif text-[clamp(3.5rem,9vw,7.8rem)] font-normal leading-[0.88] tracking-[-0.055em]"
        >
          Your hair.
          <br />
          Your <span className="maja-script text-white">Maajabu.</span>
        </h1>

        <p
          data-reveal
          className="mt-7 max-w-lg text-sm leading-7 text-white/75 sm:text-base sm:leading-8"
        >
          A women-focused hair sanctuary for beautiful braids, considered
          styling and protective looks that celebrate your natural beauty.
        </p>

        <div data-reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() =>openBooking()}
            className="maja-gold-button inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-black transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <CalendarDays size={16} />
            Book an appointment
            <ArrowRight size={16} />
          </button>

          <Link
            href="/services"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/35 bg-white/[0.04] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md transition-colors hover:border-white hover:bg-white/10"
          >
            Explore services
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Contact and opening hours */}
        <div
          data-reveal
          className="mt-12 grid max-w-3xl grid-cols-1 gap-4 border-t border-white/15 pt-6 text-xs text-white/75 sm:grid-cols-3 sm:gap-5"
        >
          <div className="flex items-start gap-3">
            <MapPin
              className="mt-0.5 shrink-0 text-white"
              size={17}
              aria-hidden="true"
            />
            <span>
              67 Long Street
              <br />
              Cape Town City Centre
            </span>
          </div>

          <a
            href="tel:+27612587973"
            className="flex items-start gap-3 transition-colors hover:text-white"
          >
            <Phone
              className="mt-0.5 shrink-0 text-white"
              size={17}
              aria-hidden="true"
            />
            <span>
              061 258 7973
              <br />
              Call the salon
            </span>
          </a>

          <div className="flex items-start gap-3">
            <Clock3
              className="mt-0.5 shrink-0 text-white"
              size={17}
              aria-hidden="true"
            />
            <span>
              Daily · Closes 21:00
              <br />
              Please call to confirm
            </span>
          </div>
        </div>
      </div>

      {/* Scroll navigation */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-white hover:text-white md:bottom-10 md:right-10"
      >
        <ArrowDown size={18} aria-hidden="true" />
      </a>

      <div className="pointer-events-none absolute bottom-8 left-5 hidden text-[9px] uppercase tracking-[0.3em] text-white/40 [writing-mode:vertical-rl] md:block">
        Beauty · Identity · Confidence
      </div>
    </section>
  );
}
