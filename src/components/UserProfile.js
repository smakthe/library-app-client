import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;