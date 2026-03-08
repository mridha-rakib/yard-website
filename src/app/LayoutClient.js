"use client"

import { usePathname } from "next/navigation"
import AuthBootstrap from "@/components/auth/AuthBootstrap"
import Footer from "./component/shared/Footer"

export default function LayoutClient({ children }) {
  const pathname = usePathname()

  return (
    <>
      <AuthBootstrap />
      {children}
      {pathname === "/" && <Footer />}
    </>
  )
}
