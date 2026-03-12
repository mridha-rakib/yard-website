import { apiClient } from "./http";

const unwrap = (response) => response.data.data;
const unwrapList = (response) => ({
  items: response.data.items || [],
  pagination: response.data.pagination || null,
  summary: response.data.summary || null,
});

export const paymentApi = {
  createJobCheckoutSession: (payload) =>
    apiClient.post("/payments/checkout/job-request", payload).then(unwrap),
  getCheckoutSessionStatus: (sessionId) =>
    apiClient.get(`/payments/checkout/session/${sessionId}`).then(unwrap),
  listPayments: (params = {}) => apiClient.get("/payments", { params }).then(unwrapList),
  getPaymentById: (paymentId) => apiClient.get(`/payments/${paymentId}`).then(unwrap),
};
