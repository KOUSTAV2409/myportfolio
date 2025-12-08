import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { Analytics } from "@vercel/analytics/next"
import { FloatingCTA } from '@/components/ui/floating-cta'
import { ErrorBoundary } from '@/components/error-boundary'
import Script from 'next/script'
import { GA_TRACKING_ID } from '@/lib/analytics'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ]
}

export const metadata: Metadata = {
  metadataBase: new URL('https://iamk.xyz/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Koustav Ganguly | Frontend Developer & Technical Writer',
    template: '%s | Koustav Ganguly'
  },
  description: 'Frontend Developer & Technical Writer who builds exceptional web applications and explains complex concepts clearly. Specializing in React, Next.js, and developer education.',
  keywords: ['Frontend Developer', 'Technical Writer', 'React Developer', 'Next.js', 'TypeScript', 'Developer Education', 'Technical Content', 'Problem Solving'],
  authors: [{ name: 'Koustav Ganguly' }],
  creator: 'Koustav Ganguly',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iamk.xyz/',
    title: 'Koustav Ganguly | Frontend Developer & Technical Writer',
    description: 'Building exceptional web experiences and creating educational content for developers. Available for projects and collaborations.',
    siteName: 'Koustav Ganguly Portfolio',
    images: [
      {
        url: '/og-image',
        width: 1200,
        height: 630,
        alt: 'Koustav Ganguly - Frontend Developer & Technical Writer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koustav Ganguly | Frontend Developer & Technical Writer',
    description: 'Frontend Developer & Technical Writer. Building apps and educating developers.',
    creator: '@KoustavGan39466',
    images: ['/og-image'],
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



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Resource hints for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdn.hashnode.com" />
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
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
        className="bg-white text-black dark:bg-black dark:text-white tracking-tight antialiased font-sans"
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
        >
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Skip to main content
          </a>
          <div className="flex min-h-screen w-full flex-col">
            <div className="relative mx-auto w-full max-w-2xl flex-1 px-6 py-16">
              <ErrorBoundary>
                <Header />
                <main id="main-content">
                  {children}
                </main>
                <Footer />
              </ErrorBoundary>
              <Analytics />
            </div>
            <FloatingCTA />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
