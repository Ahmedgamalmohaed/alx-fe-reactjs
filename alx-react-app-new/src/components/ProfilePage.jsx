import React, { useContext } from 'react';
import { UserContext } from './components/UserContext';

const ProfilePage = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default ProfilePage;
