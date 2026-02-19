'use client'
import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname()
  const isHome = pathname === '/'
  return (
    <div className="flex flex-col font-sans">

      <header
        className={`absolute top-0 left-0 w-full z-20 ${
          isHome ? 'bg-transparent' : 'bg-white shadow-sm'
        }`}
      >
       <div
          className={`max-w-7xl mx-auto px-6 py-6 flex justify-between items-center ${
            isHome ? 'text-white ' : 'text-gray-900'
          }`}
        >
           <Link href="/">
            <Image
              src={isHome ? '/logo.svg' : '/logo-black.svg'}
              alt="Outlet"
              width={130}
              height={130}
            />
          </Link>
          <div className={`flex items-center rounded-full backdrop-blur px-4 py-2 shadow-md text-gray-900 text-sm gap-4 ${
            isHome ? 'bg-white/90' : 'bg-gray-50'
          }`}>

            <div className="flex items-center gap-2">
              <p className="text-base">🇨🇴</p>
              <p className="font-medium">COP</p>
            </div>

            <span className="h-5 w-px bg-gray-200" />

            <div className="flex items-center gap-2">
              <p className="text-base">🇪🇸</p>
              <p className="font-medium">ES</p>
            </div>

          </div>
        </div>
      </header>


      <main className="flex-1">
        {children}
      </main>


      <footer className=" left-0 w-full">
        <div className="mx-auto max-w-7xl  px-6 py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Outlet Rental Cars
        </div>
      </footer>
    </div>
  )
}
