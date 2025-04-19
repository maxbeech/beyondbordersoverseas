import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'], 
  variable: '--font-poppins' 
})

export const metadata: Metadata = {
  title: 'Beyond Borders Overseas | Global Education Experts',
  description: 'Beyond Borders Overseas empowers students to secure placements at over 800 universities across 30+ countries, offering end-to-end support from test prep to visa processing.',
  keywords: 'study abroad, overseas education, university application, test preparation, IELTS, TOEFL, GRE, GMAT, SAT, visa support, university shortlisting, education loans',
  icons: {
    icon: '/media/favicon.png',
    apple: '/media/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 