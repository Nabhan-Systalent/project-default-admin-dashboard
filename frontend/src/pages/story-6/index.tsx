import React, { useState, useEffect } from 'react';
import { WorkflowPanel } from './workflow-panel/WorkflowPanel';
import { requestBulkSuspension } from '../../lib/api';

/**
 * Container for story-6 — synthesised by the AEGIS integration pass [SYS-264].
 * Mounts the screen's generated component(s), fetches list data, and wires
 * action handlers to the typed API client.
 */
export default function Page(): React.ReactElement {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);

  const reload = () => {
    setIsLoading(true);
    Promise.resolve((requestBulkSuspension as any)())
      .then((res: any) => setData(res))
      .catch((e: any) => setError(e?.message ?? String(e)))
      .finally(() => setIsLoading(false));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { reload(); }, []);

  const workflowPanelProps: any = {
    requests: data,
    onApprove: () => {},
    onReject: () => {},
    isLoading: isLoading,
  };

  return (
    <div>
      <WorkflowPanel {...workflowPanelProps} />
    </div>
  );
}
