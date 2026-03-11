import { apiClient } from "./http";

const unwrap = (response) => response.data.data;

export const bookingsApi = {
  startBooking: (bookingId) => apiClient.patch(`/bookings/${bookingId}/start`).then(unwrap),
  completeBooking: (bookingId) =>
    apiClient.patch(`/bookings/${bookingId}/complete`).then(unwrap),
};
