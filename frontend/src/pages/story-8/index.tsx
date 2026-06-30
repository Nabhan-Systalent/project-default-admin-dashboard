import React from 'react';
import { FinancialDashboard } from './FinancialDashboard/FinancialDashboard';

/**
 * Page for story-8 — synthesised by the AEGIS pipeline so the generated
 * component is mounted by the SPA router. Props are safe placeholders; the
 * integration pass upgrades this into a data-wired container.
 */
export default function Page(): React.ReactElement {
  const props: any = {
    data: [],
    isLoading: false,
    error: undefined,
  };
  return (
    <div>
      <h1>Story 8</h1>
      <FinancialDashboard {...props} />
    </div>
  );
}
