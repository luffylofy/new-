import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal Portfolio Website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
