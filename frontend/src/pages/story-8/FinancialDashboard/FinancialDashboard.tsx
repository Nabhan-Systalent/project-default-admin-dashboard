'use client';

import React from 'react';
import { FinancialDashboardProps } from './FinancialDashboard.types';

export const FinancialDashboard: React.FC<FinancialDashboardProps> = ({
  data,
  isLoading,
  error,
}) => {
  if (isLoading) {
    return (
      <div className="flex h-64 w-full items-center justify-center p-8 text-neutral-500">
        Loading financial data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
        Error loading financial reports: {error}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="rounded-lg border border-neutral-200 bg-white p-8 text-center text-neutral-500">
        No financial data available for the selected period.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-neutral-900">GAAP Financial Reports</h2>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
          Export Report
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-50 text-neutral-600">
            <tr>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {data.map((report) => (
              <tr key={report.id} className="hover:bg-neutral-50">
                <td className="px-6 py-4 font-medium text-neutral-900">{report.category}</td>
                <td className="px-6 py-4 text-neutral-600">{new Date(report.date).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${report.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {report.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right font-mono text-neutral-900">${report.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
