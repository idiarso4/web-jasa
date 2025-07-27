import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthResponse, LoginRequest, RegisterRequest } from '@shared/auth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (credentials: LoginRequest) => Promise<AuthResponse>;
  register: (userData: RegisterRequest) => Promise<AuthResponse>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isClient: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@digitalagensi.com',
    name: 'Admin DigitalAgensi',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
    company: 'DigitalAgensi',
    phone: '+62 812-3456-7890',
    createdAt: '2024-01-01T00:00:00Z',
    lastLogin: new Date().toISOString()
  },
  {
    id: '2',
    email: 'client@tokobaju.com',
    name: 'Budi Santoso',
    role: 'client',
    avatar: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
    company: 'PT. Fashion Digital',
    phone: '+62 811-2345-6789',
    createdAt: '2024-01-15T00:00:00Z',
    lastLogin: new Date().toISOString()
  },
  {
    id: '3',
    email: 'client@mediccare.com',
    name: 'Dr. Sari Indah',
    role: 'client',
    avatar: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
    company: 'RS. Mitra Sehat',
    phone: '+62 813-4567-8901',
    createdAt: '2024-02-01T00:00:00Z',
    lastLogin: new Date().toISOString()
  }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for stored auth on app start
  useEffect(() => {
    const storedUser = localStorage.getItem('auth_user');
    const storedToken = localStorage.getItem('auth_token');
    
    if (storedUser && storedToken) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Invalid stored user data:', error);
        localStorage.removeItem('auth_user');
        localStorage.removeItem('auth_token');
      }
    }
    
    setLoading(false);
  }, []);

  const login = async (credentials: LoginRequest): Promise<AuthResponse> => {
    setLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Find user in mock data
      const foundUser = mockUsers.find(u => u.email === credentials.email);
      
      if (!foundUser) {
        setLoading(false);
        return {
          success: false,
          message: 'Email tidak ditemukan'
        };
      }
      
      // Simple password validation (in real app, this would be handled by backend)
      if (credentials.password !== 'password123') {
        setLoading(false);
        return {
          success: false,
          message: 'Password salah'
        };
      }
      
      // Update last login
      const userWithLogin = {
        ...foundUser,
        lastLogin: new Date().toISOString()
      };
      
      // Store auth data
      const token = `mock_token_${foundUser.id}_${Date.now()}`;
      localStorage.setItem('auth_user', JSON.stringify(userWithLogin));
      localStorage.setItem('auth_token', token);
      
      setUser(userWithLogin);
      setLoading(false);
      
      return {
        success: true,
        user: userWithLogin,
        token,
        message: 'Login berhasil'
      };
      
    } catch (error) {
      setLoading(false);
      return {
        success: false,
        message: 'Terjadi kesalahan saat login'
      };
    }
  };

  const register = async (userData: RegisterRequest): Promise<AuthResponse> => {
    setLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if email already exists
      const existingUser = mockUsers.find(u => u.email === userData.email);
      if (existingUser) {
        setLoading(false);
        return {
          success: false,
          message: 'Email sudah terdaftar'
        };
      }
      
      // Create new user
      const newUser: User = {
        id: `${Date.now()}`,
        email: userData.email,
        name: userData.name,
        role: userData.role,
        company: userData.company,
        phone: userData.phone,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };
      
      // Add to mock users (in real app, this would be saved to backend)
      mockUsers.push(newUser);
      
      // Store auth data
      const token = `mock_token_${newUser.id}_${Date.now()}`;
      localStorage.setItem('auth_user', JSON.stringify(newUser));
      localStorage.setItem('auth_token', token);
      
      setUser(newUser);
      setLoading(false);
      
      return {
        success: true,
        user: newUser,
        token,
        message: 'Registrasi berhasil'
      };
      
    } catch (error) {
      setLoading(false);
      return {
        success: false,
        message: 'Terjadi kesalahan saat registrasi'
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_user');
    localStorage.removeItem('auth_token');
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    isClient: user?.role === 'client'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Export mock users for development
export { mockUsers };
