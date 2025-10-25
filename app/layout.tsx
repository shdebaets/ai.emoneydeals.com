import "./globals.css";

export const metadata = {
  title: "VIP Free Trial – eMoney Reselling",
  description: "Start your free trial. Cancel anytime.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-[#07070b] text-white antialiased">{children}</body>
    </html>
  );
}
