export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden px-28 py-16">
        <div
          className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full border-r border-white/10 bg-purple-700 opacity-50 blur-full
        "
        />
        {/* cria o semi-circulo no lado direito desse quadrante. blur */}

        {/* stripes */}
        <div
          className="absolute bottom-0 right-2 top-0 w-2  bg-stripes
        "
        />
      </div>
      {/* right */}
      <div className="flex flex-col p-16">
        {/* bg-[url(path)] coloca bg image e bg-cover pega o background inteiro */}
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
