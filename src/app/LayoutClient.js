"use client"

import { usePathname } from "next/navigation"
import Footer from "./component/shared/Footer"

export default function LayoutClient({ children }) {
  const pathname = usePathname()

  return (
    <>
      {children}
      {pathname === "/" && <Footer />}
    </>
  )
}
