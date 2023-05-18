import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as Bai } from 'next/font/google' // pega font do google pelo nextjs
import { ReactNode } from 'react'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' }) // baixando o pacato da fonte, parte varible cria como nome da variavel.
const bai = Bai({ subsets: ['latin'], weight: '700', variable: '--font-bai' })

export const metadata = {
  title: 'time capsule',
  description:
    'Uma capsula do tempo feita com muito carinho com React, Nextjs, Tailwind e TypeScript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${bai.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
