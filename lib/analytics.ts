declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-HDNFTSV780'

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

export const event = (action: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, parameters)
  }
}

// Custom events for detailed tracking
export const trackProjectView = (projectName: string) => {
  event('project_view', {
    project_name: projectName,
    event_category: 'engagement'
  })
}

export const trackCTAClick = (ctaType: string, location: string) => {
  event('cta_click', {
    cta_type: ctaType,
    location: location,
    event_category: 'conversion'
  })
}

export const trackSocialClick = (platform: string) => {
  event('social_click', {
    platform: platform,
    event_category: 'social'
  })
}

export const trackScrollDepth = (depth: number) => {
  event('scroll_depth', {
    scroll_depth: depth,
    event_category: 'engagement'
  })
}
