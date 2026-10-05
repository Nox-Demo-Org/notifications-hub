export const TEMPLATES = {
  "renewal-notice": { channel: "email", subject: "Your Tidewell policy renews soon" },
  "claim-settled": { channel: "email", subject: "Your claim is settled" },
  "instalment-reminder": { channel: "email", subject: "Your next payment" },
  "missed-payment": { channel: "sms", subject: "We couldn't take your payment" },
  "payout-sent": { channel: "sms", subject: "We've paid your claim" },
} as const;
