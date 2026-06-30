import React, { useState, useEffect } from 'react';
import { FinancialDashboard } from './FinancialDashboard/FinancialDashboard';
import { getFinancialReports } from '../../lib/api';

/**
 * Container for story-8 — synthesised by the AEGIS integration pass [SYS-264].
 * Mounts the screen's generated component(s), fetches list data, and wires
 * action handlers to the typed API client.
 */
export default function Page(): React.ReactElement {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);

  const reload = () => {
    setIsLoading(true);
    Promise.resolve((getFinancialReports as any)())
      .then((res: any) => setData(res))
      .catch((e: any) => setError(e?.message ?? String(e)))
      .finally(() => setIsLoading(false));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { reload(); }, []);

  const financialDashboardProps: any = {
    data: data,
    isLoading: isLoading,
    error: error,
  };

  return (
    <div>
      <FinancialDashboard {...financialDashboardProps} />
    </div>
  );
}
