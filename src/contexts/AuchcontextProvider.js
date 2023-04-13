import React, { useState, useEffect, Children } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const AuthContext = React.createContext();

const AuthContextProvier = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setloading(false);
      if (user) navigate('/chats');
    });
  }, [user, navigate]);

  return (
    <AuthContext.Provider value={user}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvier;
