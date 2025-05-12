import React, { createContext, useState, useContext, useEffect } from 'react';

// Define the User type
interface User {
  id: string;
  name: string;
  email: string;
  role: 'volunteer' | 'organization' | 'admin';
}

// Define the auth context type
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, role: 'volunteer' | 'organization') => Promise<void>;
  logout: () => void;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
});

// Export the hook for using the auth context
export const useAuth = () => useContext(AuthContext);

// Create the auth provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for existing user session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('vore_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Mock login function - in a real app, this would call an API
  const login = async (email: string, password: string) => {
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, create a mock user
      const mockUser: User = {
        id: '1',
        name: email.split('@')[0],
        email,
        role: 'volunteer',
      };
      
      setUser(mockUser);
      localStorage.setItem('vore_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  // Mock signup function
  const signup = async (name: string, email: string, password: string, role: 'volunteer' | 'organization') => {
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, create a mock user
      const mockUser: User = {
        id: '1',
        name,
        email,
        role,
      };
      
      setUser(mockUser);
      localStorage.setItem('vore_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('vore_user');
  };

  // Define the context value
  const value = {
    user,
    loading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};