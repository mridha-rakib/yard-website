"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdClose, MdMenu } from "react-icons/md";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Worker-related routes
  const workerRoutes = [
    "/worker",
    "/payment",
    "/all-jobs",
    "/work-process",
    "/help-support",
    "/registration",
    "/terms-policy",
  ];

  const isWorkerPage = workerRoutes.some((route) => pathname.startsWith(route));

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {/* Public Menu */}
            {!isWorkerPage && (
              <>
                <NavLink href="/" active={pathname === "/"}>
                  Home
                </NavLink>
                <NavLink
                  href="/how-it-works"
                  active={pathname === "/how-it-works"}
                >
                  How It Works
                </NavLink>
                <NavLink href="/pricing" active={pathname === "/pricing"}>
                  Pricing
                </NavLink>
                <NavLink href="/myjobs" active={pathname === "/book"}>
                  Book
                </NavLink>
                <NavLink href="/about" active={pathname === "/about"}>
                  About
                </NavLink>
                <NavLink href="/contact" active={pathname === "/contact"}>
                  Contact
                </NavLink>
                <NavLink
                  href="/testimonials"
                  active={pathname === "/testimonials"}
                >
                  Testimonials
                </NavLink>
              </>
            )}

            {/* Worker Menu */}
            {isWorkerPage && (
              <>
                <NavLink
                  href="/worker-home"
                  active={pathname === "/worker-home"}
                >
                  Home
                </NavLink>
                <NavLink
                  href="/work-process"
                  active={pathname === "/work-process"}
                >
                  Work Process
                </NavLink>
                <NavLink href="/all-jobs" active={pathname === "/all-jobs"}>
                  All Jobs
                </NavLink>
                <NavLink href="/payment" active={pathname === "/payment"}>
                  Payment
                </NavLink>
                <NavLink
                  href="/terms-policy"
                  active={pathname === "/terms-policy"}
                >
                  Terms & Policy
                </NavLink>
              </>
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {isWorkerPage ? (
              <>
                <Link
                  href="/login"
                  className="text-sm font-medium text-gray-700 hover:text-green-700"
                >
                  Login
                </Link>

                <Link
                  href="/registration"
                  className="px-5 py-2 bg-green-900 text-white rounded-md hover:bg-green-800 transition"
                >
                  Apply as a Worker
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm font-medium text-gray-700 hover:text-green-700"
                >
                  Login
                </Link>

                <Link
                  href="/sign-up"
                  className="px-4 py-2 border rounded-md text-sm hover:bg-gray-50"
                >
                  Sign Up
                </Link>

                <Link
                  href="/book"
                  className="px-5 py-2 bg-green-900 text-white rounded-md hover:bg-green-800 transition"
                >
                  Book Yard Work
                </Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            {open ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-6 space-y-4 text-sm">
          {!isWorkerPage && (
            <>
              <MobileLink href="/" setOpen={setOpen}>
                Home
              </MobileLink>
              <MobileLink href="/how-it-works" setOpen={setOpen}>
                How It Works
              </MobileLink>
              <MobileLink href="/pricing" setOpen={setOpen}>
                Pricing
              </MobileLink>
              <MobileLink href="/book" setOpen={setOpen}>
                Book
              </MobileLink>
              <MobileLink href="/about" setOpen={setOpen}>
                About
              </MobileLink>
              <MobileLink href="/contact" setOpen={setOpen}>
                Contact
              </MobileLink>

              <div className="pt-4 border-t space-y-3">
                <MobileLink href="/login" setOpen={setOpen}>
                  Login
                </MobileLink>
                <MobileLink href="/sign-up" setOpen={setOpen}>
                  Sign Up
                </MobileLink>
                <MobileLink href="/book" setOpen={setOpen}>
                  Book Yard Work
                </MobileLink>
              </div>
            </>
          )}

          {isWorkerPage && (
            <>
              <MobileLink href="/payment" setOpen={setOpen}>
                Payment
              </MobileLink>
              <MobileLink href="/work-process" setOpen={setOpen}>
                Work Process
              </MobileLink>
              <MobileLink href="/all-jobs" setOpen={setOpen}>
                All Jobs
              </MobileLink>
              <MobileLink href="/help-support" setOpen={setOpen}>
                Support
              </MobileLink>

              <div className="pt-4 border-t space-y-3">
                <MobileLink href="/login" setOpen={setOpen}>
                  Login
                </MobileLink>
                <MobileLink href="/registration" setOpen={setOpen}>
                  Apply as a Worker
                </MobileLink>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

/* ===== Reusable Components ===== */

const NavLink = ({ href, active, children }) => (
  <Link
    href={href}
    className={
      active ? "text-black font-bold" : "text-gray-700 hover:text-green-700"
    }
  >
    {children}
  </Link>
);

const MobileLink = ({ href, children, setOpen }) => (
  <Link
    href={href}
    onClick={() => setOpen(false)}
    className="block text-gray-700 hover:text-green-700"
  >
    {children}
  </Link>
);
