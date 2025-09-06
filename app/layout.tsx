import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { Analytics } from "@vercel/analytics/next"
import { CustomCursor } from '@/components/ui/custom-cursor'
import { FloatingCTA } from '@/components/ui/floating-cta'
import Script from 'next/script'
import { GA_TRACKING_ID } from '@/lib/analytics'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nim-fawn.vercel.app/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Koustav Ganguly | Strategic Technical Consulting',
    template: '%s | Koustav Ganguly'
  },
  description: 'Strategic technical consulting that bridges code and business needs. Helping startups make the right technical decisions from Kolkata, India.',
  keywords: ['Technical Consulting', 'Fullstack Developer', 'React', 'Next.js', 'TypeScript', 'Strategic Planning', 'Kolkata'],
  authors: [{ name: 'Koustav Ganguly' }],
  creator: 'Koustav Ganguly',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nim-fawn.vercel.app/',
    title: 'Koustav Ganguly | Strategic Technical Consulting',
    description: 'Strategic technical consulting that bridges code and business needs. Available for new projects.',
    siteName: 'Koustav Ganguly Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koustav Ganguly | Strategic Technical Consulting',
    description: 'Strategic technical consulting that bridges code and business needs. Available for new projects.',
    creator: '@KoustavGan39466',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {GA_TRACKING_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${plusJakarta.variable} ${jetbrainsMono.variable} bg-white text-black dark:bg-black dark:text-white tracking-tight antialiased font-sans`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
        >
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-md"
          >
            Skip to main content
          </a>
          <div className="flex min-h-screen w-full flex-col">
            <div className="relative mx-auto w-full max-w-2xl flex-1 px-6 py-16">
              <Header />
              <main id="main-content">
                {children}
              </main>
              <Analytics />
              <Footer />
            </div>
            <FloatingCTA />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
