export interface User {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'suspended' | 'pending';
  role: string;
}

export interface UserDirectoryProps {
  initialUsers?: User[];
}
