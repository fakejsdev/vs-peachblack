// App.tsx - Test TypeScript React
import React from 'react';

interface UserProps {
  name: string;
  age: number;
  isAdmin?: boolean;
}

export const UserProfile: React.FC<UserProps> = ({ name, age, isAdmin }) => {
  return (
    <div className="user-card">
      <span className="user-name">{name}</span>
      <span className="user-age">Age: {age}</span>
      {isAdmin && <strong>Admin</strong>}
    </div>
  );
};