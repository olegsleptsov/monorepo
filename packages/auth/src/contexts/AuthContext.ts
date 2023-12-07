import React from 'react';

const AuthContext = React.createContext({
  signIn: (tenant: string) => {},
  signOut: () => {},
  signUp: () => {},
});

const useAuth = () => React.useContext(AuthContext);

export {useAuth, AuthContext};
