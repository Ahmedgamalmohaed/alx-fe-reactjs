import React, { createContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children, userData }) => {
  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
