import "../styles/globals.css";
import type { Metadata } from "next";
import { poppins } from "../styles/fonts";

export const metadata: Metadata = {
  title: "Voidlabs",
  description: "Voidlabs website developed by infusedd.co",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
