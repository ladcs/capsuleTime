import { LeftPage } from '@/component/LeftPage'
import { RightPage } from '@/component/RightPage'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <LeftPage />
      <RightPage />
    </main>
  )
}
