// auto-generated — do not edit

const BASE = '/api';

/** Get financial data */
export async function getFinancialReports(): Promise<unknown> {
  const res = await fetch(`${BASE}/finance/reports`, { method: 'GET' });
  if (!res.ok) throw new Error(`getFinancialReports failed: ${res.status}`);
  const text = await res.text();
  return (text ? JSON.parse(text) : undefined) as unknown;
}

/** Create suspension request */
export async function requestBulkSuspension(): Promise<void> {
  const res = await fetch(`${BASE}/bulk-actions`, { method: 'POST' });
  if (!res.ok) throw new Error(`requestBulkSuspension failed: ${res.status}`);
}

/** Search and filter users */
export async function searchUsers(): Promise<unknown> {
  const res = await fetch(`${BASE}/users`, { method: 'GET' });
  if (!res.ok) throw new Error(`searchUsers failed: ${res.status}`);
  const text = await res.text();
  return (text ? JSON.parse(text) : undefined) as unknown;
}
