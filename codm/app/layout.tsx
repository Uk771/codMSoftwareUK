import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CODM Software | Salesforce Consulting Partner | Software Development',
  description: 'Discover CODM Software\'s bespoke software development and CRM solutions. We specialize in .NET, React, Python applications, and AI-driven LLMs to elevate your business',
  icons: {
    icon: '/assets/imgs/template/New Favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CTE4BLE99H"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-CTE4BLE99H');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div id="top"></div>
        {children}
      </body>
    </html>
  )
} 