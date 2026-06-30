import React from 'react';

export interface FinancialDashboardProps {
  data?: FinancialReportData[];
  isLoading?: boolean;
  error?: string;
}

export interface FinancialReportData {
  id: string;
  category: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending';
}
