import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VAULTY — The Fox That Guards Your Bags",
  description: "$VAULTY auto-rewards on Solana via TaxSplit. 30% Dev Vault, 2% burn."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
