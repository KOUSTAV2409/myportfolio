import type { Metadata, Viewport } from 'next'
import './globals.css'
import './fonts.css'
import { ThemeProvider } from 'next-themes'
import { Analytics } from "@vercel/analytics/next"
import { ErrorBoundary } from '@/components/error-boundary'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FloatingCTA } from '@/components/ui/floating-cta'
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
        
        {/* Preload critical resources */}
        <link rel="preload" as="image" href="/profile.png" />
        <link rel="preload" as="font" href="/FasthinRegular-9MWOZ.ttf" type="font/ttf" crossOrigin="anonymous" />
        
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Koustav Portfolio" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        
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
      <body className="bg-white dark:bg-neutral-900">
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
        >
          <ErrorBoundary>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </ErrorBoundary>
          <Analytics />
          <FloatingCTA />
        </ThemeProvider>
      </body>
    </html>
  )
}
