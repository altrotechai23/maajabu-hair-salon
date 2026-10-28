"use client";

import React, { useEffect, useRef } from "react";
import { useGlobalBooking } from "@/components/providers/BookingDialogProvider";
import {
  Sparkles,
  ShieldCheck,
  Heart,
  ArrowRight,
  Award,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ValueItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const BRAND_VALUES: ValueItem[] = [
  {
    icon: Sparkles,
    title: "Structural Precision Cut",
    description:
      "Honoring individual natural hair texture variations and personal identity shapes over standard commercial templates.",
  },
  {
    icon: ShieldCheck,
    title: "Healthy Hair Care",
    description:
      "Utilizing medical-grade aesthetic resurfacing formulations configured to withstand high Cape Town coastal humidity factors.",
  },
  {
    icon: Heart,
    title: "A Welcoming Experience",
    description:
      "An uncompromising peaceful space designed away from urban timelines, paired with complimentary artisanal coffee curations.",
  },
];

export default function AboutStoryPage() {
  const { openBooking } = useGlobalBooking();

  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const revealElement = revealRef.current;

    if (!revealElement) return;

    const textElements =
      revealElement.querySelectorAll<HTMLElement>(".reveal-text-node");

    const valueCards =
      revealElement.querySelectorAll<HTMLElement>(".value-card-node");

    if (!textElements.length || !valueCards.length) return;

    const ctx = gsap.context(() => {
      // Hardware-accelerated batch text fade sequence
      gsap.fromTo(
        textElements,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: revealElement,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Elastic card entrance sequence matching Lenis smooth physics damping
      gsap.fromTo(
        valueCards,
        {
          opacity: 0,
          scale: 0.97,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: valueCards[0],
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // Programmatic Local SEO Organization JSON-LD markup
  const aboutOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "BeautySalon",
      name: "Maajabu Hair Salon",
      description:
        "Women’s hairstyling, braids and protective styles at 67 Long Street, Cape Town.",
      knowsAbout: [
        "Editorial Hair Styling",
        "Precision Texturized Haircuts",
        "Advanced Micro-needling Collagen Therapy",
        "Hydro-Infusion Pore Resurfacing",
      ],
      award: "Premium Local Craftsmanship Excellence Award 2026",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutOrganizationSchema),
        }}
      />

      <div
        ref={containerRef}
        className="min-h-screen bg-neutral-50 px-4 py-16 font-sans antialiased text-neutral-900 sm:px-6 md:px-12"
      >
        <div
          ref={revealRef}
          className="mx-auto max-w-7xl space-y-24"
        >
          {/* ================================================================ */}
          {/* EDITORIAL HERO HEADER SECTION                                    */}
          {/* ================================================================ */}

          <div className="max-w-3xl border-b border-neutral-200 pb-12">
            <span className="reveal-text-node mb-3 block text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">
              02 / Heritage Statement
            </span>

            <h1 className="reveal-text-node mb-6 text-4xl font-light leading-[1.1] tracking-tight text-neutral-900 md:text-6xl">
              Crafting Form.
              <br />
              <span className="font-serif font-normal italic text-neutral-500">
                The Maajabu Hair Salon Story.
              </span>
            </h1>

            <p className="reveal-text-node max-w-2xl text-sm font-light leading-relaxed text-neutral-600 md:text-base">
              Located at 67 Long Street in Cape Town City Centre, Maajabu Hair Salon is a women-focused destination for thoughtful hairstyling, braids and protective looks. We celebrate natural texture, personal expression and styles that help every client feel confidently herself.
            </p>
          </div>

          {/* ================================================================ */}
          {/* CORE NARRATIVE CONTENT ASYMMETRIC GRID                            */}
          {/* ================================================================ */}

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Visual Media Graphic Mask Node (5 Columns) */}

            <div className="group relative aspect-[4/5] overflow-hidden border border-neutral-200 bg-neutral-200 shadow-sm lg:col-span-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/maajabu/salon-interior.webp"
                alt="Salon interior at Maajabu Hair Salon"
                className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
                loading="lazy"
              />

              <div className="absolute left-4 top-4 z-10 flex items-center gap-2 border border-white/10 bg-neutral-950/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                <Award className="h-3.5 w-3.5 text-neutral-300" />
                67 Long St · Cape Town
              </div>
            </div>

            {/* In-Depth Historical Context Blocks (7 Columns) */}

            <div className="space-y-8 text-xs font-light leading-relaxed text-neutral-500 sm:text-sm lg:col-span-7 lg:pl-6">
              <h3 className="reveal-text-node text-lg font-light tracking-tight text-neutral-950 sm:text-xl">
                Hair artistry, shaped around you.
              </h3>

              <p className="reveal-text-node">
                We believe great hair starts with listening. From braids and twists to styling, treatments and finishing services, we take care to understand your preferences and the look you want to achieve. Every appointment is an opportunity to celebrate your individual style.
              </p>

              <p className="reveal-text-node">
                Our service menu focuses on women’s hair care, styling and protective hairstyles. If you are considering a new look or need help choosing a service, contact our team before your appointment and we will help you explore the options available.
              </p>

              <div className="reveal-text-node mt-6 flex flex-col items-start justify-between gap-4 border border-neutral-200 bg-white p-6 sm:flex-row sm:items-center">
                <div>
                  <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-wider text-neutral-900">
                    A thoughtful salon experience
                  </span>

                  <p className="text-[11px] text-neutral-400">
                    A welcoming space, careful styling and a personal approach.
                  </p>
                </div>

                <span className="whitespace-nowrap bg-neutral-100 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-neutral-500">
                  Our approach
                </span>
              </div>
            </div>
          </div>

          {/* ================================================================ */}
          {/* BRAND VALUE MATRICES PILLARS                                     */}
          {/* ================================================================ */}

          <div className="border-t border-neutral-200 pt-16">
            <div className="mb-12 max-w-xl">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.35em] text-neutral-400">
                Our Commitments
              </span>

              <h2 className="text-2xl font-light tracking-tight text-neutral-900 sm:text-3xl">
                Foundational Principles
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
              {BRAND_VALUES.map((value, idx) => {
                const Icon = value.icon;

                return (
                  <div
                    key={idx}
                    className="value-card-node flex flex-col justify-between border border-neutral-200/80 bg-white p-6 shadow-sm transition-colors duration-500 hover:border-neutral-900 sm:p-8"
                  >
                    <div className="mb-6 w-max bg-neutral-100 p-3 text-neutral-900">
                      <Icon className="h-5 w-5 stroke-[1.5]" />
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-neutral-900">
                        {value.title}
                      </h4>

                      <p className="text-[11px] font-light leading-relaxed text-neutral-400 sm:text-xs">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================================================================ */}
          {/* HIGH-CONVERSION REDIRECTION HUB BANNER                           */}
          {/* ================================================================ */}

          <div className="flex flex-col items-start justify-between gap-6 border-t border-neutral-200 pt-12 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.35em] text-neutral-400">
                Your Experience
              </span>

              <h2 className="mb-3 text-2xl font-light tracking-tight text-neutral-900 sm:text-3xl">
                Ready to map your structural customization style?
              </h2>

              <p className="text-xs font-light leading-relaxed text-neutral-500 sm:text-sm">
                Coordinate an automated priority slot choice inside our global
                bottom-sheet interface drawer module or establish communication
                queues via our mobile WhatsApp concierge channels.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openBooking()}
              className="flex cursor-pointer items-center gap-2 self-start whitespace-nowrap bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-neutral-950 shadow-md transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 md:self-center"
            >
                
              Initialize Reservation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
