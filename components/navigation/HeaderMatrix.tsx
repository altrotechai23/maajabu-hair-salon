"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGlobalBooking } from "@/components/providers/BookingDialogProvider";

import {
  Scissors,
  Sparkles,
  Image as ImageIcon,
  PhoneCall,
  CalendarDays,
  Check,
} from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  seoContext: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAVIGATION_ITEMS: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    seoContext: "Women’s Hair & Braiding Services",
    icon: Scissors,
  },
  {
    label: "About Us",
    href: "/about",
    seoContext: "About Maajabu Hair Salon",
    icon: Sparkles,
  },
  {
    label: "Gallery",
    href: "/gallery",
    seoContext: "Editorial Lookbook",
    icon: ImageIcon,
  },
  {
    label: "Contact",
    href: "/contact",
    seoContext: "Find Us in Cape Town",
    icon: PhoneCall,
  },
];

/**
 * Subscribe to browser hash changes without maintaining duplicate state.
 */
function subscribeToHashChange(callback: () => void) {
  window.addEventListener("hashchange", callback);

  return () => {
    window.removeEventListener("hashchange", callback);
  };
}

function getHashSnapshot() {
  return window.location.hash;
}

function getServerHashSnapshot() {
  return "";
}

/**
 * Tracks whether the component is being rendered on the client.
 */
function subscribeToNothing() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export default function HeaderMatrix() {
  const pathname = usePathname();
  const { openBooking } = useGlobalBooking();

  const [isScrolled, setIsScrolled] = useState(false);

  const isMounted = useSyncExternalStore(
    subscribeToNothing,
    getClientSnapshot,
    getServerSnapshot
  );

  const currentHash = useSyncExternalStore(
    subscribeToHashChange,
    getHashSnapshot,
    getServerHashSnapshot
  );

  // Track scrolling for the desktop header.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActiveLink = (href: string) => {
    if (href === "/#story") {
      return pathname === "/" && currentHash === "#story";
    }

    if (href === "/services") {
      return (
        pathname === "/services" ||
        pathname.startsWith("/services/")
      );
    }

    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href;
  };

  // Premium mobile navigation rendered outside transformed page wrappers.
  const mobileNavigation = (
    <nav
      className="
        fixed inset-x-0 bottom-0 z-[90]
        md:hidden
        pb-[env(safe-area-inset-bottom)]
        pointer-events-none
      "
      aria-label="Mobile navigation"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        isolation: "isolate",
      }}
    >
      <div
        className="
          pointer-events-auto
          mx-2 mb-2
          flex h-[68px] items-center
          rounded-[22px]
          border border-black/80
          bg-black/95
          px-2
          shadow-[0_8px_35px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.04)]
          backdrop-blur-2xl
          supports-[backdrop-filter]:bg-black/90
          sm:mx-4 sm:px-3
        "
      >
        {/* Maajabu Hair Salon wordmark */}
        <Link
          href="/"
          aria-label="Maajabu Hair Salon home"
          className="
            group flex h-full w-[66px] shrink-0
            items-center justify-center
            rounded-l-[18px]
            outline-none
            focus-visible:ring-2
            focus-visible:ring-inset
            focus-visible:ring-white
            sm:w-[78px]
          "
        >
          <span className="flex flex-col items-center justify-center leading-none">
            <span
              className="
                font-serif text-[13px] font-medium
                tracking-[0.12em] text-white
                transition-colors duration-300
                group-hover:text-neutral-300
                sm:text-[15px]
              "
            >
              MAAJABU
            </span>

            <span
              className="
                mt-[3px] font-sans text-[10px]
                font-light tracking-[0.19em]
                text-neutral-400
                sm:text-[11px]
              "
            >
              HAIR SALON
            </span>

            <span
              className="
                mt-[5px] h-[2px] w-5
                rounded-full bg-white
                transition-all duration-300
                group-hover:w-8
              "
              aria-hidden="true"
            />
          </span>
        </Link>

        {/* Elegant vertical divider */}
        <span
          className="mx-1 h-9 w-px shrink-0 bg-neutral-200 sm:mx-2"
          aria-hidden="true"
        />

        {/* Main navigation links */}
        <div className="flex h-full min-w-0 flex-1 items-center justify-around">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isActiveLink(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.seoContext}
                aria-label={item.label}
                aria-current={active ? "page" : undefined}
                className={`
                  group relative flex h-full min-w-0 flex-1
                  flex-col items-center justify-center
                  gap-[5px] rounded-xl
                  outline-none
                  transition-all duration-300 ease-out
                  active:scale-95
                  focus-visible:ring-2
                  focus-visible:ring-inset
                  focus-visible:ring-white
                  ${
                    active
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  }
                `}
              >
                {/* Active indicator */}
                {active && (
                  <span
                    className="
                      absolute top-[7px]
                      h-[3px] w-5 rounded-full
                      bg-white
                    "
                    aria-hidden="true"
                  />
                )}

                <span
                  className={`
                    flex h-7 w-7 items-center justify-center
                    rounded-xl
                    transition-all duration-300 ease-out
                    ${
                      active
                        ? "bg-white/10 text-white"
                        : "bg-transparent group-hover:bg-white/10"
                    }
                  `}
                >
                  <Icon
                    className={`
                      h-[17px] w-[17px]
                      stroke-[1.5]
                      transition-transform duration-300
                      ${
                        active
                          ? "scale-105"
                          : "group-hover:-translate-y-0.5"
                      }
                    `}
                    aria-hidden="true"
                  />
                </span>

                <span
                  className={`
                    max-w-full truncate
                    px-0.5 font-sans
                    text-[7px] font-semibold
                    uppercase tracking-[0.09em]
                    sm:text-[8px] sm:tracking-[0.12em]
                    ${
                      active
                        ? "text-neutral-900"
                        : "text-neutral-400"
                    }
                  `}
                >
                  {item.label === "About Us" ? "About" : item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Booking action — existing booking logic preserved */}
        <div className="ml-1 flex h-full shrink-0 items-center sm:ml-2">
          <button
            type="button"
            onClick={() => openBooking()}
            aria-label="Book a salon session"
            className="
              group relative flex h-[46px] w-[46px]
              cursor-pointer items-center justify-center
              rounded-[15px]
              border border-neutral-800
              bg-neutral-950 text-white
              shadow-[0_3px_10px_rgba(0,0,0,0.16)]
              outline-none
              transition-all duration-300 ease-out
              hover:border-white
              hover:bg-neutral-900
              active:scale-90
              focus-visible:ring-2
              focus-visible:ring-white
              focus-visible:ring-offset-2
              focus-visible:ring-offset-black
              sm:h-[48px] sm:w-[48px]
            "
          >
            <CalendarDays
              className="
                h-[22px] w-[22px]
                stroke-[1.6]
                transition-transform duration-300
                group-hover:scale-105
              "
              aria-hidden="true"
            />

            {/* Gold accent */}
            <span
              className="
                absolute -right-1 -top-1
                flex h-[17px] w-[17px]
                items-center justify-center
                rounded-full
                border-2 border-black
                bg-white text-black
                shadow-sm
              "
              aria-hidden="true"
            >
              <Check className="h-[10px] w-[10px] stroke-[3]" />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <header
        className={`
          fixed left-0 top-0 z-40 hidden w-full
          border-b transition-all duration-500 ease-out
          md:block
          ${
            isScrolled
              ? "border-white/15 bg-black/90 py-4 text-white shadow-lg backdrop-blur-xl"
              : "border-transparent bg-gradient-to-b from-black/70 to-transparent py-6 text-white"
          }
        `}
      >
        <h2 className="sr-only">
          Maajabu Hair Salon — Desktop Navigation
        </h2>

        {/* Responsive desktop container */}
        <div
          className="
            mx-auto flex w-full max-w-7xl
            items-center justify-between gap-3
            px-4 md:gap-3 md:px-5
            lg:gap-6 lg:px-8
            xl:gap-8 xl:px-12
          "
        >
          {/* Logo */}
          <Link
            href="/"
            className="group flex shrink-0 items-center outline-none"
            aria-label="Maajabu Hair Salon home"
          >
            <div className="flex shrink-0 items-center">
              <Image
                src="/images/maajabu/brand-logo.webp"
                alt="Maajabu Hair Salon Logo"
                width={260}
                height={94}
                priority       // Ensures the logo loads instantly as an LCP element
                className="h-9 w-auto object-contain lg:h-11 xl:h-12"
              />
            </div>
          </Link>

          {/* Desktop links */}
          <nav
            className="
              flex min-w-0 flex-1
              items-center justify-center
              gap-3 lg:gap-5 xl:gap-10
            "
            aria-label="Desktop navigation"
          >
            {NAVIGATION_ITEMS.map((item) => {
              const active = isActiveLink(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  title={item.seoContext}
                  className={`
                    group relative shrink-0 py-2
                    text-[9px] font-medium
                    uppercase tracking-[0.12em]
                    transition-colors duration-300
                    lg:text-[10px] lg:tracking-[0.16em]
                    xl:text-xs xl:tracking-[0.2em]
                    ${
                      active
                        ? "text-white"
                        : "text-white/65 hover:text-white"
                    }
                  `}
                >
                  {item.label}

                  <span
                    className={`
                      absolute bottom-0 left-0 h-px
                      bg-white
                      transition-all duration-300 ease-out
                      ${
                        active
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Booking button */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => openBooking()}
              className="
                inline-flex shrink-0 cursor-pointer
                items-center justify-center whitespace-nowrap
                bg-neutral-900 px-3 py-2.5
                text-[9px] font-medium
                uppercase tracking-[0.12em]
                text-white shadow-lg transition-all duration-300
                hover:bg-neutral-800
                focus:outline-none focus-visible:ring-2
                focus-visible:ring-neutral-500
                focus-visible:ring-offset-2
                lg:px-4 lg:text-[10px]
                lg:tracking-[0.16em]
                xl:px-6 xl:text-xs
                xl:tracking-[0.2em]
              "
            >
              Book Session
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation portal */}
      {isMounted
        ? createPortal(mobileNavigation, document.body)
        : null}
    </>
  );
}