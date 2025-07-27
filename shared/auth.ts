// User roles
export type UserRole = 'admin' | 'client';

// User interface
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  company?: string;
  phone?: string;
  createdAt: string;
  lastLogin?: string;
}

// Authentication requests
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  company?: string;
  phone?: string;
}

// Authentication responses
export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  message?: string;
}

// Chat interfaces
export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  senderRole: UserRole;
  content: string;
  timestamp: string;
  projectId?: string;
  attachments?: string[];
  isRead: boolean;
}

export interface ChatRoom {
  id: string;
  name: string;
  participants: User[];
  lastMessage?: ChatMessage;
  unreadCount: number;
  projectId?: string;
  createdAt: string;
}

// Project interfaces for context
export interface Project {
  id: string;
  name: string;
  description: string;
  clientId: string;
  status: 'planning' | 'development' | 'testing' | 'completed';
  progress: number;
  startDate: string;
  endDate?: string;
  budget: number;
  technologies: string[];
  timeline: string;
}
