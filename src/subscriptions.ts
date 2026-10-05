// Pub/Sub topics this hub listens to, and the template each one sends.
export const SUBSCRIPTIONS: Record<string, string> = {
  "policy.renewal.due": "renewal-notice",
  "claims.claim.settled": "claim-settled",
  "billing.instalment.due": "instalment-reminder",
  "billing.payment.missed": "missed-payment",
  "payments.payout.sent": "payout-sent",
};
