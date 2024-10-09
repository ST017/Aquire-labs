import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false); // Set loading to false once auth state is known
    });

    return () => unsubscribe(); // Cleanup the listener
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while authentication status is being checked
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
