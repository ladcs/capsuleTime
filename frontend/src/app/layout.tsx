import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as Bai } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const bai = Bai({ subsets: ['latin'], weight: '700', variable: '--font-bai' })

// isso impede o layout shift

export const metadata = {
  title: 'time capsule',
  description:
    'capsula do tempo construida com react, nextjs, tailwind, typescript e node',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${bai.variable} bg-gray-700 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
