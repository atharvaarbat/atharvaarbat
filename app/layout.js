import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atharva Arbat",
  description: "World's best portfolio website",
  icons: {
    icon: "/Aa..svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="icon" href="/Aa..svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
        </body>
    </html>
  );
}
