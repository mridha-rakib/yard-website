"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, LogOut, SquareUserRound } from "lucide-react";
import { MdClose, MdMenu } from "react-icons/md";
import { buildLoginPath } from "@/lib/auth/auth-redirect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getDefaultPathForUser } from "@/lib/auth/get-default-path";
import {
  ROLES,
  getPrimaryRole,
  hasRole,
  isDualRoleUser,
} from "@/lib/auth/user-roles";
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

const getRoleDashboardHref = (role) => {
  if (role === ROLES.WORKER) {
    return "/worker-home";
  }

  if (role === ROLES.CUSTOMER) {
    return "/myjobs";
  }

  return "/";
};

const getPrimaryActionHref = (user) => {
  if (getPrimaryRole(user) === ROLES.WORKER) {
    return "/all-jobs";
  }

  if (hasRole(user, ROLES.CUSTOMER)) {
    return "/book";
  }

  return "/";
};

const getPrimaryActionLabel = (user) => {
  if (getPrimaryRole(user) === ROLES.WORKER) {
    return "All Jobs";
  }

  if (hasRole(user, ROLES.CUSTOMER)) {
    return "Book Yard Work";
  }

  return "Browse";
};

const getProfileHref = (user) => {
  if (getPrimaryRole(user) === ROLES.WORKER) {
    return "/profile";
  }

  if (hasRole(user, ROLES.CUSTOMER)) {
    return "/my-profile";
  }

  return "/";
};

const getRoleLabel = (user) => {
  if (isDualRoleUser(user)) {
    return "Worker + Customer";
  }

  if (hasRole(user, ROLES.WORKER)) {
    return "Worker";
  }

  if (hasRole(user, ROLES.CUSTOMER)) {
    return "Customer";
  }

  return "Guest";
};

const getUserShortName = (user) => {
  const rawName = String(user?.name || "").trim();

  if (!rawName) {
    return "Account";
  }

  return rawName.split(/\s+/)[0];
};

const getAccountLabel = (user) => {
  if (getPrimaryRole(user) === ROLES.WORKER) {
    return "Worker Home";
  }

  if (hasRole(user, ROLES.CUSTOMER)) {
    return "My Jobs";
  }

  return "Account";
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [roleSwitching, setRoleSwitching] = useState("");
  const accountMenuRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isInitializing = useAuthStore((state) => state.isInitializing);
  const logout = useAuthStore((state) => state.logout);
  const switchRole = useAuthStore((state) => state.switchRole);
  const isWorkerPage = workerRoutes.some((route) => pathname.startsWith(route));
  const navLinks = isWorkerPage ? workerLinks : publicLinks;
  const accountHref = getDefaultPathForUser(user);
  const profileHref = getProfileHref(user);
  const guestBookHref = buildLoginPath("/book");
  const dashboardLinks = [
    ...(hasRole(user, ROLES.CUSTOMER)
      ? [{ href: "/myjobs", label: "Customer Dashboard", role: ROLES.CUSTOMER }]
      : []),
    ...(hasRole(user, ROLES.WORKER)
      ? [{ href: "/worker-home", label: "Worker Dashboard", role: ROLES.WORKER }]
      : []),
  ];
  const roleToggleOptions = isDualRoleUser(user)
    ? [
        { role: ROLES.CUSTOMER, label: "Customer", href: "/myjobs" },
        { role: ROLES.WORKER, label: "Worker", href: "/worker-home" },
      ]
    : [];
  const canBecomeWorker = hasRole(user, ROLES.CUSTOMER) && !hasRole(user, ROLES.WORKER);

  const closeMenus = () => {
    setAccountMenuOpen(false);
    setOpen(false);
  };

  const handleLogout = async () => {
    closeMenus();
    await logout();
    router.push("/");
  };

  const handleRoleSwitch = async (targetRole, href = getRoleDashboardHref(targetRole)) => {
    if (!user || !hasRole(user, targetRole)) {
      return;
    }

    closeMenus();
    setRoleSwitching(targetRole);

    try {
      if (user.role !== targetRole) {
        await switchRole(targetRole);
      }

      router.push(href);
    } finally {
      setRoleSwitching("");
    }
  };

  const handleMenuNavigation = async (href, targetRole = "") => {
    if (targetRole && user && hasRole(user, targetRole)) {
      await handleRoleSwitch(targetRole, href);
      return;
    }

    closeMenus();
    router.push(href);
  };

  useEffect(() => {
    if (!accountMenuOpen) {
      return;
    }

    const handlePointerDown = (event) => {
      if (!accountMenuRef.current?.contains(event.target)) {
        setAccountMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setAccountMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [accountMenuOpen]);

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center gap-8">
          <Link href="/" className="flex shrink-0 items-center">
            <img src="/header-logo-mark.png" alt="Yard Heroes" className="h-10 w-10" />
          </Link>

          <div className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={!isAuthenticated && link.href === "/book" ? guestBookHref : link.href}
                active={pathname === link.href}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex shrink-0 items-center gap-3">
            {isAuthenticated && user ? (
              <>
                {roleToggleOptions.length ? (
                  <div className="inline-flex items-center rounded-full border border-[#d7e0d9] bg-[#f8faf8] p-1">
                    {roleToggleOptions.map((option) => {
                      const isActiveRole = user.role === option.role;
                      const isBusy = roleSwitching === option.role;

                      return (
                        <button
                          key={option.role}
                          type="button"
                          onClick={() => handleRoleSwitch(option.role, option.href)}
                          disabled={isInitializing || Boolean(roleSwitching)}
                          className={`rounded-full px-3 py-2 text-xs font-semibold transition-colors ${
                            isActiveRole
                              ? "bg-[#0A3019] text-white"
                              : "text-[#334155] hover:bg-white"
                          } disabled:cursor-not-allowed disabled:opacity-70`}
                        >
                          {isBusy ? "Switching..." : option.label}
                        </button>
                      );
                    })}
                  </div>
                ) : null}

                <div ref={accountMenuRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setAccountMenuOpen((currentValue) => !currentValue)}
                    className="inline-flex items-center gap-3 rounded-full border border-[#d7e0d9] bg-[#f8faf8] px-2 py-1.5 text-left transition-colors hover:bg-[#f2f6f2] focus:outline-none"
                  >
                    <Avatar className="size-9">
                      <AvatarImage src={user.profilePhotoUrl || ""} alt={user.name || "Account"} />
                      <AvatarFallback className="bg-[#0A3019] text-xs font-semibold text-white">
                        {getUserShortName(user).slice(0, 1).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex items-center gap-2 pr-1">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold leading-none text-[#111827]">
                          {getUserShortName(user)}
                        </span>
                        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6b7280]">
                          {getRoleLabel(user)}
                        </span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-[#64748b] transition-transform ${
                          accountMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {accountMenuOpen ? (
                    <div className="absolute right-0 top-full z-50 mt-3 w-64 rounded-2xl border border-[#d7e0d9] bg-white p-2 shadow-[0_18px_48px_rgba(15,23,42,0.12)]">
                      <div className="px-3 py-2">
                        <div className="flex items-center gap-3">
                          <Avatar className="size-10">
                            <AvatarImage
                              src={user.profilePhotoUrl || ""}
                              alt={user.name || "Account"}
                            />
                            <AvatarFallback className="bg-[#0A3019] text-xs font-semibold text-white">
                              {getUserShortName(user).slice(0, 1).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-[#111827]">
                              {user.name || "Account"}
                            </p>
                            <p className="truncate text-xs font-medium text-[#6b7280]">
                              {user.email || getRoleLabel(user)}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="my-1 h-px bg-[#e2e8e3]" />

                      <button
                        type="button"
                        onClick={() => handleMenuNavigation(profileHref, getPrimaryRole(user))}
                        className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-[#334155] transition-colors hover:bg-[#f6f8f6]"
                      >
                        <SquareUserRound className="h-4 w-4 text-[#0A3019]" />
                        Profile
                      </button>

                      <button
                        type="button"
                        onClick={() => handleMenuNavigation(accountHref, getPrimaryRole(user))}
                        className="mt-1 flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-[#334155] transition-colors hover:bg-[#f6f8f6]"
                      >
                        <SquareUserRound className="h-4 w-4 text-[#0A3019]" />
                        {getAccountLabel(user)}
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleMenuNavigation(getPrimaryActionHref(user), getPrimaryRole(user))
                        }
                        className="mt-1 flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-[#334155] transition-colors hover:bg-[#f6f8f6]"
                      >
                        <SquareUserRound className="h-4 w-4 text-[#0A3019]" />
                        {getPrimaryActionLabel(user)}
                      </button>

                      {dashboardLinks.map((link) => (
                        <button
                          key={link.href}
                          type="button"
                          onClick={() => handleMenuNavigation(link.href, link.role)}
                          className="mt-1 flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-[#334155] transition-colors hover:bg-[#f6f8f6]"
                        >
                          <SquareUserRound className="h-4 w-4 text-[#0A3019]" />
                          {link.label}
                        </button>
                      ))}

                      {canBecomeWorker ? (
                        <button
                          type="button"
                          onClick={() => handleMenuNavigation("/registration")}
                          className="mt-1 flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-[#334155] transition-colors hover:bg-[#f6f8f6]"
                        >
                          <SquareUserRound className="h-4 w-4 text-[#0A3019]" />
                          Become a Worker
                        </button>
                      ) : null}

                      <div className="my-1 h-px bg-[#e2e8e3]" />

                      <button
                        type="button"
                        onClick={handleLogout}
                        disabled={isInitializing}
                        className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-[#b42318] transition-colors hover:bg-[#fff5f5] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <LogOut className="h-4 w-4" />
                        {isInitializing ? "Logging Out..." : "Log Out"}
                      </button>
                    </div>
                  ) : null}
                </div>
              </>
            ) : isWorkerPage ? (
              <>
                <Link
                  href="/login"
                  className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-green-700"
                >
                  Login
                </Link>

                <Link
                  href="/registration"
                  className="whitespace-nowrap rounded-md bg-green-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
                >
                  Apply as a Worker
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-green-700"
                >
                  Login
                </Link>

                <Link
                  href="/sign-up"
                  className="whitespace-nowrap rounded-md border px-4 py-2 text-sm hover:bg-gray-50"
                >
                  Sign Up
                </Link>

                <Link
                  href={guestBookHref}
                  className="whitespace-nowrap rounded-md bg-green-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
                >
                  Book Yard Work
                </Link>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={() => setOpen((currentValue) => !currentValue)}
            className="ml-auto md:hidden text-gray-700"
          >
            {open ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden bg-white border-t px-4 py-6 space-y-4 text-sm">
          {navLinks.map((link) => (
            <MobileLink
              key={link.href}
              href={!isAuthenticated && link.href === "/book" ? guestBookHref : link.href}
              setOpen={setOpen}
            >
              {link.label}
            </MobileLink>
          ))}

          <div className="pt-4 border-t space-y-3">
            {isAuthenticated && user ? (
              <>
                <Link
                  href={profileHref}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-3 rounded-full border border-[#d7e0d9] bg-[#f8faf8] px-3 py-2"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A3019] text-xs font-semibold text-white">
                    {getUserShortName(user).slice(0, 1).toUpperCase()}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#111827]">
                      {getUserShortName(user)}
                    </span>
                    <span className="rounded-full bg-[#0A3019] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                      {getRoleLabel(user)}
                    </span>
                  </div>
                </Link>

                {roleToggleOptions.length ? (
                  <div className="flex items-center gap-2 rounded-2xl border border-[#d7e0d9] bg-[#f8faf8] p-1">
                    {roleToggleOptions.map((option) => {
                      const isActiveRole = user.role === option.role;
                      const isBusy = roleSwitching === option.role;

                      return (
                        <button
                          key={option.role}
                          type="button"
                          onClick={() => handleRoleSwitch(option.role, option.href)}
                          disabled={isInitializing || Boolean(roleSwitching)}
                          className={`flex-1 rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                            isActiveRole
                              ? "bg-[#0A3019] text-white"
                              : "text-[#334155] hover:bg-white"
                          } disabled:cursor-not-allowed disabled:opacity-70`}
                        >
                          {isBusy ? "Switching..." : option.label}
                        </button>
                      );
                    })}
                  </div>
                ) : null}

                <MobileLink href={accountHref} setOpen={setOpen}>
                  {getAccountLabel(user)}
                </MobileLink>
                <MobileLink href={getPrimaryActionHref(user)} setOpen={setOpen}>
                  {getPrimaryActionLabel(user)}
                </MobileLink>
                {dashboardLinks.map((link) => (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => handleMenuNavigation(link.href, link.role)}
                    className="block text-left text-gray-700 hover:text-green-700"
                  >
                    {link.label}
                  </button>
                ))}
                {canBecomeWorker ? (
                  <button
                    type="button"
                    onClick={() => handleMenuNavigation("/registration")}
                    className="block text-left text-gray-700 hover:text-green-700"
                  >
                    Become a Worker
                  </button>
                ) : null}
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
                <MobileLink href={guestBookHref} setOpen={setOpen}>
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
