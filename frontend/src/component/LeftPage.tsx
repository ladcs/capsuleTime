import { Blur } from './Blur'
import { Copyright } from './Copyrigth'
import { Hero } from './Hero'
import { Stripes } from './Stripes'

export function LeftPage() {
  return (
    <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
      <Blur />
      <Stripes />
      <Hero />
      <Copyright />
    </div>
  )
}
