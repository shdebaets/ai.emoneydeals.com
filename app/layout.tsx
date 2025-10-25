import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/next"
import GaProvider from "./ga-provider";

export const metadata = {
  title: "VIP Free Trial – eMoney Reselling",
  description: "Start your free trial. Cancel anytime.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-[#07070b] text-white antialiased">
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-Z4EJZTQJCT'} />
        <GaProvider />
        <Analytics />
      </body>
    </html>
  );
}
