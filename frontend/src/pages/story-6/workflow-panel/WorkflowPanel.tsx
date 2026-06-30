'use client';

import React, { useState } from 'react';
import { WorkflowPanelProps, BulkSuspensionRequest } from './WorkflowPanel.types';

export const WorkflowPanel: React.FC<WorkflowPanelProps> = ({ 
  requests, 
  onApprove, 
  onReject,
  isLoading = false 
}) => {
  const [processingId, setProcessingId] = useState<string | null>(null);

  const handleAction = async (id: string, action: 'approve' | 'reject') => {
    setProcessingId(id);
    try {
      if (action === 'approve') await onApprove(id);
      else await onReject(id);
    } finally {
      setProcessingId(null);
    }
  };

  if (isLoading) {
    return <div className="p-4 text-[var(--color-text-secondary)]">Loading requests...</div>;
  }

  if (!requests.length) {
    return <div className="p-4 text-[var(--color-text-secondary)]">No pending suspensions.</div>;
  }

  return (
    <div className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-[var(--color-text-primary)]">Bulk Suspension Approvals</h2>
      <div className="space-y-4">
        {requests.map((request) => (
          <div key={request.id} className="flex items-center justify-between p-4 border border-[var(--color-border)] rounded-md">
            <div>
              <p className="font-medium text-[var(--color-text-primary)]">{request.user}</p>
              <p className="text-sm text-[var(--color-text-secondary)]">{request.reason}</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">{new Date(request.submittedAt).toLocaleDateString()}</p>
            </div>
            <div className="flex gap-2">
              <button
                disabled={!!processingId}
                onClick={() => handleAction(request.id, 'reject')}
                className="px-4 py-2 text-sm font-medium text-[var(--color-error)] border border-[var(--color-error)] rounded hover:bg-[var(--color-error)]/10 transition-colors disabled:opacity-50"
              >
                Reject
              </button>
              <button
                disabled={!!processingId}
                onClick={() => handleAction(request.id, 'approve')}
                className="px-4 py-2 text-sm font-medium bg-[var(--color-primary)] text-white rounded hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-50"
              >
                {processingId === request.id ? 'Processing...' : 'Approve'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
