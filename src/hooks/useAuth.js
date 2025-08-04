import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated on mount
    const checkAuth = () => {
      const authStatus = localStorage.getItem('isAuthenticated');
      const username = localStorage.getItem('username');
      
      if (authStatus === 'true' && username) {
        setIsAuthenticated(true);
        setUser({ username });
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = (userData) => {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('username', userData.username);
    setIsAuthenticated(true);
    setUser({ username: userData.username });
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
  };
};
