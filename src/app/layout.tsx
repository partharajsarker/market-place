import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Multi-Vendor Marketplace',
  description: 'A full-stack multi-vendor marketplace built with Next.js 15',
  keywords: ['marketplace', 'ecommerce', 'multi-vendor', 'nextjs'],
  authors: [{ name: 'Marketplace Team' }],
  creator: 'Marketplace Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marketplace.com',
    title: 'Multi-Vendor Marketplace',
    description: 'A full-stack multi-vendor marketplace built with Next.js 15',
    siteName: 'Multi-Vendor Marketplace',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-Vendor Marketplace',
    description: 'A full-stack multi-vendor marketplace built with Next.js 15',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
