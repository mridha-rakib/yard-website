import Navbar from "./component/shared/Navbar"
import "./globals.css"
import LayoutClient from "./LayoutClient"

export const metadata = {
  title: "Yard Hero",
  description: "Next.js Multi-role Website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  )
}
