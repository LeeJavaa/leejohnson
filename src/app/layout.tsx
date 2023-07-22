import './globals.css'
import type { Metadata } from 'next'
import { VT323, Montserrat } from 'next/font/google'

const vt323 = VT323({
    weight: '400',
    subsets: ['latin'],
    variable: "--font-vt323",
})

const montserrat = Montserrat({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--font-montserrat",
})  

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${vt323.variable} font-montserrat bg-black text-white`}>{children}</body>
    </html>
  )
}
