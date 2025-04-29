import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'My E-Commerce Site',
  description: 'Buy quality products with ease!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* HEADER */}
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-xl font-bold">🛒 My E-Commerce Store</h1>
        </header>

        {/* MAIN CONTENT */}
        <main className="p-6">{children}</main>

        {/* FOOTER */}
        <footer className="bg-gray-100 text-center py-4 mt-10 text-sm">
          &copy; {new Date().getFullYear()} iamyourqlmalaysia Store.
        </footer>
      </body>
    </html>
  )
}
