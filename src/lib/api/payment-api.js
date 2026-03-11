import { apiClient } from "./http";

const unwrap = (response) => response.data.data;

export const paymentApi = {
  createJobCheckoutSession: (payload) =>
    apiClient.post("/payments/checkout/job-request", payload).then(unwrap),
  getCheckoutSessionStatus: (sessionId) =>
    apiClient.get(`/payments/checkout/session/${sessionId}`).then(unwrap),
};
