import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Suspense } from "react";

import ScrollProvider from "@/components/providers/ScrollProvider";
import PageTransitionProvider from "@/components/providers/PageTransitionProvider";
import BookingDialogProvider from "@/components/providers/BookingDialogProvider";

import HeaderMatrix from "@/components/navigation/HeaderMatrix";
import FooterMatrix from "@/components/navigation/FooterMatrix";
import WhatsAppButton from "@/components/navigation/WhatsAppButton";

import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maajabuhairsalon.co.za"),
  title: {
    default: "Maajabu Hair Salon | Women’s Hair & Braiding in Cape Town",
    template: "%s | Maajabu Hair Salon Cape Town",
  },
  description:
    "Discover women’s hairstyling, braids, twists, relaxers, silk press and protective styles at Maajabu Hair Salon, 67 Long Street, Cape Town. Call 061 258 7973 to enquire or book.",
  applicationName: "Maajabu Hair Salon",
  keywords: [
    "women's hair salon Cape Town",
    "hair salon Long Street Cape Town",
    "braiding Cape Town",
    "protective hairstyles Cape Town",
    "Maajabu Hair Salon",
    "silk press Cape Town",
    "relaxers Cape Town",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "Maajabu Hair Salon",
    title: "Maajabu Hair Salon | Women’s Hair & Braiding in Cape Town",
    description: "Women’s hairstyling and protective styles on Long Street, Cape Town.",
    images: [{ url: "/images/maajabu/hero-image.webp", width: 1024, height: 1027, alt: "Maajabu Hair Salon editorial hair portrait" }],
    url: "https://maajabuhairsalon.co.za",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maajabu Hair Salon | Cape Town",
    description: "Women’s hairstyling and protective styles on Long Street, Cape Town.",
    images: ["/images/maajabu/hero-image.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className="antialiased selection:bg-neutral-900 selection:text-white"
    >
      <body className="min-h-screen overflow-x-hidden bg-neutral-50 text-neutral-900">
        <BookingDialogProvider>
          <Suspense fallback={null}>
            <ScrollProvider>
              <PageTransitionProvider>
                <HeaderMatrix />

                <main className="relative min-h-screen w-full md:pt-[80px]">
                  {children}
                </main>

                <WhatsAppButton />
                <FooterMatrix />
              </PageTransitionProvider>
            </ScrollProvider>
          </Suspense>
        </BookingDialogProvider>  
       
        {/* <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl font-bold mb-4 text-black">Website Under Maintenance</h1>
          <p className="max-w-3xl text-gray-600">
            We&apos;re currently making improvements to serve you better.
            Our website will be back online soon. Thank you for your patience and understanding! 
            We are currently working on the final version of the web.
          </p>
        </div> */}
      
      </body>
    </html>
  );
}