export interface WorkflowPanelProps {
  requests: BulkSuspensionRequest[];
  onApprove: (id: string) => Promise<void>;
  onReject: (id: string) => Promise<void>;
  isLoading?: boolean;
}

export interface BulkSuspensionRequest {
  id: string;
  user: string;
  reason: string;
  submittedAt: string;
}
