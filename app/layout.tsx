
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commerce Assignment',
  description: 'Fetching data from client-side and server-side',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-700 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">E-commerce</Link>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/client-side" className="hover:text-gray-300">Client-side</Link></li>
              <li><Link href="/server-side" className="hover:text-gray-300">Server-side</Link></li>
            </ul>
          </div>
        </nav>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}
