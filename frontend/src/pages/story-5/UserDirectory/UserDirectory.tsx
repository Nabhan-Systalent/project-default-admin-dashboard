'use client';

import React, { useState, useMemo } from 'react';
import { User } from './UserDirectory.types';

export const UserDirectory: React.FC<{ initialUsers?: User[] }> = ({ initialUsers = [] }) => {
  const [users] = useState<User[]>(initialUsers);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) || 
                            user.email.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [users, search, filterStatus]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-slate-200">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search users..."
          className="px-4 py-2 border border-slate-300 rounded-md flex-grow focus:ring-2 focus:ring-blue-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="px-4 py-2 border border-slate-300 rounded-md bg-white"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All Statuses</option>
          <option value="active">Active</option>
          <option value="suspended">Suspended</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} className="p-4 border rounded-md hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg">{user.name}</h3>
              <p className="text-sm text-slate-500">{user.email}</p>
              <span className={`inline-block mt-2 px-2 py-1 text-xs rounded ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {user.status}
              </span>
            </div>
          ))
        ) : (
          <div className="col-span-full py-10 text-center text-slate-500">
            No users found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};
