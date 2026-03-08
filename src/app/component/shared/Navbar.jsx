"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MdClose, MdMenu } from "react-icons/md";
import { getDefaultPathForUser } from "@/lib/auth/get-default-path";
import { useAuthStore } from "@/stores/use-auth-store";

const workerRoutes = [
  "/worker-home",
  "/payment",
  "/all-jobs",
  "/work-process",
  "/help-support",
  "/registration",
  "/terms-policy",
  "/profile",
  "/support",
];

const publicLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/book", label: "Book" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/testimonials", label: "Testimonials" },
];

const workerLinks = [
  { href: "/worker-home", label: "Home" },
  { href: "/work-process", label: "Work Process" },
  { href: "/all-jobs", label: "All Jobs" },
  { href: "/payment", label: "Payment" },
  { href: "/terms-policy", label: "Terms & Policy" },
];

const getPrimaryActionHref = (user) => {
  if (user?.role === "worker") {
    return "/all-jobs";
  }

  if (user?.role === "customer") {
    return "/book";
  }

  return "/";
};

const getPrimaryActionLabel = (user) => {
  if (user?.role === "worker") {
    return "All Jobs";
  }

  if (user?.role === "customer") {
    return "Book Yard Work";
  }

  return "Browse";
};

const getAccountLabel = (user) => {
  if (user?.role === "worker") {
    return "Worker Home";
  }

  if (user?.role === "customer") {
    return "My Jobs";
  }

  return "Account";
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isInitializing = useAuthStore((state) => state.isInitializing);
  const logout = useAuthStore((state) => state.logout);
  const isWorkerPage = workerRoutes.some((route) => pathname.startsWith(route));
  const navLinks = isWorkerPage ? workerLinks : publicLinks;
  const accountHref = getDefaultPathForUser(user);

  const handleLogout = async () => {
    await logout();
    setOpen(false);
    router.push("/");
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} active={pathname === link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated && user ? (
              <>
                <Link
                  href={accountHref}
                  className="text-sm font-medium text-gray-700 hover:text-green-700"
                >
                  {getAccountLabel(user)}
                </Link>

                <Link
                  href={getPrimaryActionHref(user)}
                  className="px-5 py-2 bg-green-900 text-white rounded-md hover:bg-green-800 transition"
                >
                  {getPrimaryActionLabel(user)}
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isInitializing}
                  className="px-4 py-2 border rounded-md text-sm hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isInitializing ? "Logging Out..." : "Log Out"}
                </button>
              </>
            ) : isWorkerPage ? (
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

          <button
            type="button"
            onClick={() => setOpen((currentValue) => !currentValue)}
            className="md:hidden text-gray-700"
          >
            {open ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden bg-white border-t px-4 py-6 space-y-4 text-sm">
          {navLinks.map((link) => (
            <MobileLink key={link.href} href={link.href} setOpen={setOpen}>
              {link.label}
            </MobileLink>
          ))}

          <div className="pt-4 border-t space-y-3">
            {isAuthenticated && user ? (
              <>
                <MobileLink href={accountHref} setOpen={setOpen}>
                  {getAccountLabel(user)}
                </MobileLink>
                <MobileLink href={getPrimaryActionHref(user)} setOpen={setOpen}>
                  {getPrimaryActionLabel(user)}
                </MobileLink>
                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isInitializing}
                  className="block text-left text-gray-700 hover:text-green-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isInitializing ? "Logging Out..." : "Log Out"}
                </button>
              </>
            ) : isWorkerPage ? (
              <>
                <MobileLink href="/login" setOpen={setOpen}>
                  Login
                </MobileLink>
                <MobileLink href="/registration" setOpen={setOpen}>
                  Apply as a Worker
                </MobileLink>
              </>
            ) : (
              <>
                <MobileLink href="/login" setOpen={setOpen}>
                  Login
                </MobileLink>
                <MobileLink href="/sign-up" setOpen={setOpen}>
                  Sign Up
                </MobileLink>
                <MobileLink href="/book" setOpen={setOpen}>
                  Book Yard Work
                </MobileLink>
              </>
            )}
          </div>
        </div>
      ) : null}
    </nav>
  );
}

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
