import "@/app/_assets/css/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animals",
  description: "Animals Search",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
