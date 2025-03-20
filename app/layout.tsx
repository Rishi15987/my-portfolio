import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rishi Raj",
  description: "I'm Backend Developer with a passion for building high-performance systems and solving complex problems.",
  openGraph: {
    title: "Rishi Raj",
    description: "I'm Backend Developer with a passion for building high-performance systems and solving complex problems.",
    images: ["/og-image.png"], // Use an array for images
    url: "https://rishiraj.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishi Raj",
    description: "I'm Backend Developer with a passion for building high-performance systems and solving complex problems.",
    images: ["/og-image.png"], // Use an array for images
  },
  keywords: [
    "Rishi Raj",
    "Backend Developer",
    "Java",
    "Spring Boot",
    "Hibernate",
    "AWS",
    "System Design",
    "Data Structures",
    "Algorithms",
    "Software Engineer",
    "Infosys",
    "Suven Consultants",
    "RiteAid",
    "FIV-RiteAid",
    "AWS Certified Cloud Practitioner",
    "Technical Leadership",
    "Collaboration",
    "Backend Development",
    "Microservices",
    "Cloud Architecture",
    "Database Optimization",
    "Performance Tuning",
    "Problem Solving",
    "System Design",
    "Technical Leadership",
    "Collaboration",
  ],
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
        {children}
      </body>
    </html>
  );
}
