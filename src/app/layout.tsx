import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import AuthProviders from "@/providers/AuthProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Blog",
  description: "A simple blog built with Next.js, Tailwind CSS, and shadcn/ui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* {children} */}
        {/* <main>{children}</main> */}
        <AuthProviders>{/* AuthProviders er kaj holo jate entire application e use client ortat client component theke user er information/provider access korte pari tar jonno entire application ta ei authprovider/sessionProvider diye wrap kora holo */}
          <Toaster richColors position="top-center" />
          {children}
          </AuthProviders>
        {/* <Toaster /> // eta shadcn-ui er */}
      </body>
    </html>
  );
}
