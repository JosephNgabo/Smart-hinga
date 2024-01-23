import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Smart hinga',
  description: 'Choose the best crops to plant with us!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="relative overflow-hidden">
         <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}