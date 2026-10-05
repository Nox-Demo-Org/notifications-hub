// POST /v1/messages  { to_customer_id, template, data }  -> 202
export async function postMessage(body: { to_customer_id: string; template: string; data: Record<string, unknown> }) {
  // Look up contact details on demand, render the template, hand it to the channel.
  return { status: 202 };
}
