"use client";

import React from "react";
import Link from "next/link";
import { Scissors, MapPin, Clock, Phone, Mail } from "lucide-react";
import CurrentYear from "../CurrentYear";
import Image from "next/image";

export default function FooterMatrix() {


  return (
    <footer 
      id="contact" 
      className="bg-neutral-950 text-neutral-400 py-20 px-6 md:px-12 w-full border-t border-neutral-800 scroll-mt-16 pb-24 md:pb-12"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Maajabu Hair Salon — Footer Indexing Matrix</h2>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* COLUMN 1: Brand Positioning Architecture */}
        <div className="space-y-4">
          <Link href="/" aria-label="Maajabu Hair Salon home" className="inline-flex w-fit items-center">
            <Image src="/images/maajabu/brand-logo.webp" alt="Maajabu Hair Salon" width={220} height={110} className="h-14 w-auto object-contain" />
          </Link>
          <p className="text-xs text-neutral-500 font-light leading-relaxed max-w-xs">
            A women-focused hair salon in the heart of Cape Town, specialising in beautiful styling, braids and protective hairstyles.
          </p>
        </div>

        {/* COLUMN 2: Hyper-Local Geo-SEO Target Matrix */}
        <div className="space-y-4">
          <h3 className="text-white text-xs uppercase tracking-[0.2em] font-semibold flex items-center">
            <MapPin className="w-3.5 h-3.5 mr-2 stroke-[1.5]" /> Location District
          </h3>
          <address className="not-italic text-xs font-light text-neutral-400 space-y-1.5 leading-relaxed">
            <p>Kings in Cape Building</p>
            <p>67 Long Street, Cape Town City Centre</p>
            <p>Cape Town, Western Cape, 8000</p>
            <p className="text-[10px] text-neutral-600 uppercase tracking-widest mt-2 block">South Africa</p>
          </address>
        </div>

        {/* COLUMN 3: Operational Availability Windows */}
        <div className="space-y-4">
          <h3 className="text-white text-xs uppercase tracking-[0.2em] font-semibold flex items-center">
            <Clock className="w-3.5 h-3.5 mr-2 stroke-[1.5]" /> Timelines
          </h3>
          <ul className="text-xs font-light space-y-2" aria-label="Opening hours grid">
            <li className="flex justify-between border-b border-neutral-900 pb-1.5">
              <span>Daily listing</span>
              <span className="text-white">Closes 21:00</span>
            </li>
            <li className="flex justify-between text-neutral-600">
              <span>Hours may vary</span>
              <span className="tracking-wider uppercase text-[10px]">Call to confirm</span>
            </li>
          </ul>
        </div>

        {/* COLUMN 4: Communication Channels & Conversion Gateways */}
        <div className="space-y-4">
          <h3 className="text-white text-xs uppercase tracking-[0.2em] font-semibold flex items-center">
            <Scissors className="w-3.5 h-3.5 mr-2 stroke-[1.5]" /> Connections
          </h3>
          <ul className="text-xs font-light space-y-3">
            <li className="flex items-center">
              <Phone className="w-3.5 h-3.5 mr-2.5 text-neutral-600" />
              <a href="tel:+27612587973" className="hover:text-white transition-colors duration-300">061 258 7973</a>
            </li>
            <li className="flex items-center">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE2IiB4PSIyIiB5PSI0IiByeD0iMiIvPjxwYXRoIGQ9Im0yMiA3LTgtNSA4IDVabTAgMTBsLTgtNSA4IDVaTTIgN2w4IDUtOCA1Wm0wIDEwbDggLTUtOCA1WiIvPjwvc3ZnPg==" className="w-3.5 h-3.5 mr-2.5 text-neutral-600 filter invert-40" alt="" aria-hidden="true" style={{ width: '14px', height: '14px' }} />
              <a href="mailto:maajabu2020@gmail.com" className="hover:text-white transition-colors duration-300">maajabu2020@gmail.com</a>
            </li>
            <li className="pt-2">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Maajabu+Hair+Salon+67+Long+Street+Cape+Town" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[10px] uppercase tracking-[0.25em] bg-neutral-900 border border-neutral-800 text-neutral-300 px-3 py-1.5 hover:bg-white hover:text-neutral-950 transition-all inline-block"
              >
                Get Directions
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BASELINE: Legal Matrices & Index Validation Links */}
      <div className="max-w-7xl mx-auto border-t border-neutral-900 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-neutral-600">
        <div>
          &copy; <CurrentYear/> Maajabu Hair Salon. Realized for Top Local Rankings.
        </div>
        <nav className="flex space-x-6" aria-label="Legal & compliance links">
          <Link href="#privacy" className="hover:text-neutral-400 transition-colors">Privacy</Link>
          <Link href="#terms" className="hover:text-neutral-400 transition-colors">Terms & Conditions</Link>
          <Link href="#sitemap" className="hover:text-neutral-400 transition-colors">Sitemap</Link>
        </nav>
      </div>
    </footer>
  );
}
