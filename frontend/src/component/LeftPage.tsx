import { cookies } from 'next/headers'
import { Blur } from './Blur'
import { Copyright } from './Copyrigth'
import { Hero } from './Hero'
import { SignIn } from './SignIn'
import { Stripes } from './Stripes'
import { Profile } from './Profile'

export function LeftPage() {
  const isAuthenticated = cookies().has('token')
  return (
    <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
      {!isAuthenticated ? <SignIn /> : <Profile />}
      <Blur />
      <Stripes />
      <Hero />
      <Copyright />
    </div>
  )
}
