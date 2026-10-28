"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

const LOOKS = [
  { src: "/images/maajabu/hero-image.webp", alt: "S-pattern stitch braids styled into a high ponytail", label: "Sculpted braids", number: "01", shape: "tall" },
  { src: "/images/maajabu/single-braids.jpeg", alt: "Protective single braids created by a stylist", label: "Protective styling", number: "02", shape: "short" },
  { src: "/images/maajabu/short-jumbo-box-braids-bob.png", alt: "Jumbo box braids styled into a bob", label: "Braids with character", number: "03", shape: "tall" },
  { src: "/images/maajabu/blow-and-perms.jpeg", alt: "Professional hair styling and finish", label: "The finishing touch", number: "04", shape: "short" },
];

export default function BrandNarrativeGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.utils.toArray<HTMLElement>("[data-look-card]").forEach((card, index) => {
        gsap.fromTo(card, { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, delay: (index % 2) * 0.08, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 88%", once: true } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="story" className="relative overflow-hidden bg-black px-5 py-20 text-white sm:px-8 md:px-12 md:py-28 lg:px-20" aria-labelledby="lookbook-title">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-white"><span className="h-px w-8 bg-white" /> The Maajabu lookbook</p>
            <h2 id="lookbook-title" className="max-w-2xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">Crafted with care.<br /><span className="maja-script text-white">Worn with confidence.</span></h2>
          </div>
          <Link href="/gallery" className="inline-flex w-fit items-center gap-2 border-b border-white/60 pb-2 text-xs uppercase tracking-[0.15em] text-white/80 transition hover:text-white">Explore the gallery <ArrowUpRight size={16} /></Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {LOOKS.map((look) => (
            <Link href="/gallery" key={look.number} data-look-card className={`maja-look-card group relative overflow-hidden rounded-[1.15rem] border border-white/10 bg-neutral-900 ${look.shape === "tall" ? "lg:mt-0" : "lg:mt-14"}`}>
              <div className="aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={look.src} alt={look.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/5 opacity-80 transition-opacity group-hover:opacity-100" />
              <span className="absolute left-4 top-4 text-[10px] tracking-[0.2em] text-white/70">{look.number} / 04</span>
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-2 sm:inset-x-5 sm:bottom-5"><span className="max-w-[10rem] font-serif text-lg leading-tight sm:text-2xl">{look.label}</span><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/40 transition group-hover:border-white group-hover:bg-white group-hover:text-black"><ArrowUpRight size={15} /></span></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
