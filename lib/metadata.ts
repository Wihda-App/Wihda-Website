import type { Metadata } from 'next'

const baseUrl = 'https://wihda.app'
const defaultImage = `${baseUrl}/og-default.png`

export function generateMetadata(
  title: string,
  description: string,
  path: string = '/',
  image: string = defaultImage
): Metadata {
  const url = `${baseUrl}${path}`

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    canonical: url,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Wihda',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
  }
}
