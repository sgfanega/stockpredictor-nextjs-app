
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/styles.scss';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stock Predictor',
  description: 'A Simple Stock Predictor using SVM Linear Regression',
  openGraph: {
    title: 'Stock Predictor',
    description: 'A simple Stock Predictor using SVM Linear Regression',
    url: 'https://stockpredictor-smf.netlify.app',
    images: '/public/og-image.png'
  }
}

export default function RootLayout({ children, }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
