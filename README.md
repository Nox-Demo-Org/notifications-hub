# notifications-hub

Sends email, SMS and letters for every Tidewell service. Other services either call `POST /v1/messages` or publish an event this hub listens to. Templates live in `src/templates.ts`.

| Contract | Kind |
| --- | --- |
| `POST /v1/messages` | REST, called by policy-admin, claims-management, billing-service |
| `policy.renewal.due`, `claims.claim.settled`, `billing.instalment.due`, `billing.payment.missed`, `payments.payout.sent` | Events it listens to |

It does not listen to `claims.handler.assigned`, so customers get no message when a handler picks up their claim.
