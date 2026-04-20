"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Check,
  ChevronRight,
  Clock3,
  LoaderCircle,
  RefreshCw,
  WalletMinimal,
} from "lucide-react";
import { FaWallet } from "react-icons/fa";
import { paymentApi } from "@/lib/api/payment-api";
import { getApiErrorMessage } from "@/lib/api/http";
import { useRequiredRole } from "@/lib/auth/use-required-role";
import {
  createEmptyPaymentSummary,
  formatCurrency,
  formatShortDate,
  getCompletedDate,
  getJobTitle,
  getPaymentDetailSummary,
  getPaymentStatusDetails,
} from "@/lib/worker-payments";

const PAGE_LIMIT = 50;

const paymentMethods = [
  {
    name: "Cash App",
    description: "Instant transfer",
    tone: "border-emerald-200 hover:border-emerald-500",
    badge: "bg-emerald-100 text-emerald-600",
    symbol: "$",
  },
  {
    name: "Venmo",
    description: "Instant transfer",
    tone: "border-blue-200 hover:border-blue-500",
    badge: "bg-blue-100 text-blue-600",
    symbol: "V",
  },
  {
    name: "Zelle",
    description: "Bank transfer",
    tone: "border-purple-200 hover:border-purple-500",
    badge: "bg-purple-100 text-purple-600",
    symbol: "Z",
  },
  {
    name: "PayPal",
    description: "Secure payment",
    tone: "border-indigo-200 hover:border-indigo-500",
    badge: "bg-indigo-100 text-indigo-600",
    symbol: "P",
  },
];

export default function HeroPaymentsPage() {
  const pathname = usePathname();
  const { user, isRoleReady } = useRequiredRole("worker", pathname);
  const [payments, setPayments] = useState([]);
  const [summary, setSummary] = useState(createEmptyPaymentSummary());
  const [isLoading, setIsLoading] = useState(true);
  const [pageError, setPageError] = useState("");
  const [reloadVersion, setReloadVersion] = useState(0);

  useEffect(() => {
    if (!isRoleReady) {
      return;
    }

    let isActive = true;

    const loadPayments = async () => {
      setIsLoading(true);

      try {
        const result = await paymentApi.listPayments({
          limit: PAGE_LIMIT,
        });

        if (!isActive) {
          return;
        }

        setPayments(result.items || []);
        setSummary(result.summary || createEmptyPaymentSummary());
        setPageError("");
      } catch (error) {
        if (!isActive) {
          return;
        }

        setPayments([]);
        setSummary(createEmptyPaymentSummary());
        setPageError(getApiErrorMessage(error));
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    loadPayments();

    return () => {
      isActive = false;
    };
  }, [isRoleReady, reloadVersion, user]);

  const breakdown = useMemo(() => {
    if (!payments.length) {
      return {
        amount: 100,
        platformFee: 12,
        workerPayout: 88,
        platformFeePercentage: 12,
      };
    }

    return getPaymentDetailSummary(payments[0]);
  }, [payments]);

  const keepPercentage = Math.max(0, 100 - Number(breakdown.platformFeePercentage || 12));

  if (!isRoleReady) {
    return <div className="min-h-screen bg-gray-50" />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b border-gray-200 bg-white px-4 py-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold text-gray-900">Earnings & Payments</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track your earnings and review completed jobs.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 lg:px-6">
        {pageError ? (
          <div className="flex flex-col gap-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-700 md:flex-row md:items-center md:justify-between">
            <p>{pageError}</p>
            <button
              type="button"
              onClick={() => setReloadVersion((currentValue) => currentValue + 1)}
              className="inline-flex items-center justify-center rounded-full border border-red-200 bg-white px-4 py-2 font-semibold text-red-700 transition-colors hover:bg-red-100"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </button>
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7ebe8]">
                <FaWallet className="h-4 w-4 text-[#0A3019]" />
              </div>
              <span className="text-sm text-gray-600">Total Balance</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {formatCurrency(summary.totalPaidHeroPayout)}
            </p>
            <p className="mt-1 text-xs text-gray-500">Available to withdraw</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#dcfce7]">
                <Check className="h-4 w-4 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-600">Pending Balance</span>
            </div>
            <p className="text-3xl font-bold text-emerald-600">
              {formatCurrency(summary.pendingHeroPayout)}
            </p>
            <p className="mt-1 text-xs text-gray-500">Being processed</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#fef3c7]">
                <Clock3 className="h-4 w-4 text-amber-600" />
              </div>
              <span className="text-sm text-gray-600">This Month</span>
            </div>
            <p className="text-3xl font-bold text-amber-600">
              {formatCurrency(summary.currentMonthHeroPayout)}
            </p>
            <p className="mt-1 text-xs text-gray-500">Earned this month</p>
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, #0A3019 0%, rgba(10, 48, 25, 0.9) 70.71%)",
          }}
          className="rounded-xl p-6 text-white shadow-lg"
        >
          <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="mb-1 text-lg font-semibold">
                You keep {keepPercentage}% of every job
              </h3>
              <p className="text-sm text-emerald-100">
                Platform fees are deducted automatically before your payout is released.
              </p>
            </div>
            <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center self-start rounded-full border-2 border-[#5a7465] bg-[#335340] text-center sm:h-36 sm:w-36 md:h-48 md:w-48">
              <p className="text-2xl font-bold sm:text-3xl md:text-5xl">{keepPercentage}%</p>
              <p className="mt-1 text-sm text-emerald-200">Your earnings</p>
            </div>
          </div>

          <div className="w-full rounded-lg bg-[#335340] p-4 sm:max-w-md">
            <p className="text-sm text-emerald-100">
              {payments.length ? "Latest breakdown:" : "Sample breakdown:"}
            </p>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between">
                <span>Job Payment</span>
                <span className="font-semibold">{formatCurrency(breakdown.amount)}</span>
              </div>
              <div className="flex justify-between">
                <span>Platform Fee ({breakdown.platformFeePercentage}%)</span>
                <span className="font-semibold">-{formatCurrency(breakdown.platformFee)}</span>
              </div>
              <div className="mt-2 border-t border-emerald-700 pt-2">
                <div className="flex justify-between">
                  <span className="font-semibold">You Receive</span>
                  <span className="text-lg font-bold text-emerald-300">
                    {formatCurrency(breakdown.workerPayout)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">Payment Methods</h3>
          <p className="mb-4 text-sm text-gray-500">
            Payments are fast and safe. Choose your preferred payout method in your
            profile settings.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className={`cursor-default rounded-lg border-2 p-4 transition-colors ${method.tone}`}
              >
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${method.badge}`}
                >
                  <span className="text-xl font-bold">{method.symbol}</span>
                </div>
                <p className="text-sm font-medium text-gray-900">{method.name}</p>
                <p className="text-xs text-gray-500">{method.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-white shadow-sm">
          <div className="border-b border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Earnings History</h3>
            <p className="text-sm text-gray-500">
              View completed jobs and payout status.
            </p>
          </div>

          {isLoading ? (
            <div className="flex min-h-[220px] items-center justify-center px-6 py-10 text-sm text-gray-600">
              <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
              Loading payment history...
            </div>
          ) : payments.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <WalletMinimal className="mx-auto h-10 w-10 text-gray-300" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">No earnings yet</h3>
              <p className="mt-2 text-sm text-gray-500">
                Completed jobs and payouts will appear here once customer payments are
                processed.
              </p>
            </div>
          ) : (
            <>
              <div className="hidden grid-cols-12 gap-4 bg-gray-50 px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500 md:grid">
                <div className="col-span-4">Job Type</div>
                <div className="col-span-2">Date Completed</div>
                <div className="col-span-2">Job Payment</div>
                <div className="col-span-2">Your Earnings</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-1" />
              </div>

              <div className="divide-y divide-gray-200">
                {payments.map((payment) => {
                  const statusDetails = getPaymentStatusDetails(payment.status);
                  const detailHref = `/payment/payment-details?paymentId=${payment._id}`;
                  const payout = getPaymentDetailSummary(payment);

                  return (
                    <div
                      key={payment._id}
                      className="px-6 py-4 transition-colors hover:bg-gray-50"
                    >
                      <div className="space-y-2 md:hidden">
                        <Link href={detailHref} className="flex items-center justify-between gap-3">
                          <div>
                            <p className="font-medium text-gray-900">{getJobTitle(payment)}</p>
                            <p className="text-xs text-gray-500">
                              {formatShortDate(getCompletedDate(payment))}
                            </p>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        </Link>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Payment:</span>
                          <span className="font-semibold text-gray-900">
                            {formatCurrency(payout.amount)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Your earnings:</span>
                          <span className="font-semibold text-gray-900">
                            {formatCurrency(payout.workerPayout)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Status:</span>
                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusDetails.tone}`}
                          >
                            {statusDetails.label}
                          </span>
                        </div>
                      </div>

                      <div className="hidden grid-cols-12 items-center gap-4 md:grid">
                        <div className="col-span-4 font-medium text-gray-900">
                          {getJobTitle(payment)}
                        </div>
                        <div className="col-span-2 text-sm text-gray-600">
                          {formatShortDate(getCompletedDate(payment))}
                        </div>
                        <div className="col-span-2 font-medium text-gray-900">
                          {formatCurrency(payout.amount)}
                        </div>
                        <div className="col-span-2 font-medium text-gray-900">
                          {formatCurrency(payout.workerPayout)}
                        </div>
                        <div className="col-span-1">
                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusDetails.tone}`}
                          >
                            {statusDetails.label}
                          </span>
                        </div>
                        <div className="col-span-1 flex justify-end">
                          <Link
                            href={detailHref}
                            className="text-gray-400 transition-colors hover:text-gray-600"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
