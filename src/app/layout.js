import './globals.css'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export const metadata = {
  title: 'Yulun Wang',
  description: 'Welcome to Yulun\'s website!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId={GA_TRACKING_ID} />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
