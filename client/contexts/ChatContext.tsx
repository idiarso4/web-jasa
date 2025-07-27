import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { ChatMessage, ChatRoom } from "@shared/auth";
import { AuthContext } from "./AuthContext";

interface ChatContextType {
  rooms: ChatRoom[];
  activeRoom: ChatRoom | null;
  messages: ChatMessage[];
  loading: boolean;
  setActiveRoom: (room: ChatRoom | null) => void;
  sendMessage: (content: string, projectId?: string) => Promise<void>;
  markAsRead: (messageId: string) => void;
  createRoom: (
    participantIds: string[],
    name: string,
    projectId?: string,
  ) => Promise<ChatRoom>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Mock data for demonstration
const mockRooms: ChatRoom[] = [
  {
    id: "room_1",
    name: "E-Commerce TokoBaju",
    participants: [
      {
        id: "1",
        email: "admin@digitalagensi.com",
        name: "Admin DigitalAgensi",
        role: "admin",
        company: "DigitalAgensi",
        createdAt: "2024-01-01T00:00:00Z",
      },
      {
        id: "2",
        email: "client@tokobaju.com",
        name: "Budi Santoso",
        role: "client",
        company: "PT. Fashion Digital",
        createdAt: "2024-01-15T00:00:00Z",
      },
    ],
    lastMessage: {
      id: "msg_1",
      senderId: "2",
      senderName: "Budi Santoso",
      senderRole: "client",
      content: "Kapan bisa review prototype yang baru?",
      timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
      projectId: "project_1",
      isRead: false,
    },
    unreadCount: 2,
    projectId: "project_1",
    createdAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "room_2",
    name: "Sistem MediCare",
    participants: [
      {
        id: "1",
        email: "admin@digitalagensi.com",
        name: "Admin DigitalAgensi",
        role: "admin",
        company: "DigitalAgensi",
        createdAt: "2024-01-01T00:00:00Z",
      },
      {
        id: "3",
        email: "client@mediccare.com",
        name: "Dr. Sari Indah",
        role: "client",
        company: "RS. Mitra Sehat",
        createdAt: "2024-02-01T00:00:00Z",
      },
    ],
    lastMessage: {
      id: "msg_2",
      senderId: "3",
      senderName: "Dr. Sari Indah",
      senderRole: "client",
      content: "Ada bug di modul appointment booking",
      timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
      projectId: "project_2",
      isRead: true,
    },
    unreadCount: 1,
    projectId: "project_2",
    createdAt: "2024-02-01T00:00:00Z",
  },
];

const mockMessages: { [roomId: string]: ChatMessage[] } = {
  room_1: [
    {
      id: "msg_1_1",
      senderId: "1",
      senderName: "Admin DigitalAgensi",
      senderRole: "admin",
      content: "Halo Pak Budi! Bagaimana kabar proyek e-commerce nya?",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      projectId: "project_1",
      isRead: true,
    },
    {
      id: "msg_1_2",
      senderId: "2",
      senderName: "Budi Santoso",
      senderRole: "client",
      content:
        "Halo! Baik sekali. Tim sudah menyelesaikan fitur shopping cart kemarin.",
      timestamp: new Date(Date.now() - 90 * 60 * 1000).toISOString(),
      projectId: "project_1",
      isRead: true,
    },
    {
      id: "msg_1_3",
      senderId: "1",
      senderName: "Admin DigitalAgensi",
      senderRole: "admin",
      content:
        "Bagus! Kami juga sudah selesai dengan payment gateway integration. Prototype baru sudah ready untuk review.",
      timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
      projectId: "project_1",
      isRead: true,
    },
    {
      id: "msg_1_4",
      senderId: "2",
      senderName: "Budi Santoso",
      senderRole: "client",
      content: "Kapan bisa review prototype yang baru?",
      timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
      projectId: "project_1",
      isRead: false,
    },
  ],
  room_2: [
    {
      id: "msg_2_1",
      senderId: "3",
      senderName: "Dr. Sari Indah",
      senderRole: "client",
      content: "Selamat pagi tim! Saya menemukan issue di sistem appointment.",
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
      projectId: "project_2",
      isRead: true,
    },
    {
      id: "msg_2_2",
      senderId: "1",
      senderName: "Admin DigitalAgensi",
      senderRole: "admin",
      content: "Pagi Dok! Bisa dijelaskan lebih detail issue nya?",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      projectId: "project_2",
      isRead: true,
    },
    {
      id: "msg_2_3",
      senderId: "3",
      senderName: "Dr. Sari Indah",
      senderRole: "client",
      content:
        "Ada bug di modul appointment booking, patient tidak bisa pilih jadwal dokter tertentu.",
      timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
      projectId: "project_2",
      isRead: false,
    },
  ],
};

export const ChatProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Safely get auth context, handle case where it might not be ready
  const authContext = useContext(AuthContext);
  const user = authContext?.user;
  const isAuthenticated = authContext?.isAuthenticated || false;

  const [rooms, setRooms] = useState<ChatRoom[]>([]);
  const [activeRoom, setActiveRoom] = useState<ChatRoom | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  // Load chat rooms when user authenticates
  useEffect(() => {
    if (isAuthenticated && user) {
      loadChatRooms();
    } else {
      setRooms([]);
      setActiveRoom(null);
      setMessages([]);
    }
  }, [isAuthenticated, user]);

  // Load messages when active room changes
  useEffect(() => {
    if (activeRoom) {
      loadMessages(activeRoom.id);
    } else {
      setMessages([]);
    }
  }, [activeRoom]);

  const loadChatRooms = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Filter rooms based on user role
      const userRooms = mockRooms.filter((room) =>
        room.participants.some((p) => p.id === user?.id),
      );

      setRooms(userRooms);
    } catch (error) {
      console.error("Error loading chat rooms:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMessages = async (roomId: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 300));

      const roomMessages = mockMessages[roomId] || [];
      setMessages(roomMessages);
    } catch (error) {
      console.error("Error loading messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (content: string, projectId?: string) => {
    if (!activeRoom || !user) return;

    const newMessage: ChatMessage = {
      id: `msg_${Date.now()}`,
      senderId: user.id,
      senderName: user.name,
      senderRole: user.role,
      content,
      timestamp: new Date().toISOString(),
      projectId,
      isRead: false,
    };

    try {
      // Optimistically update UI
      setMessages((prev) => [...prev, newMessage]);

      // Update room's last message
      setRooms((prev) =>
        prev.map((room) =>
          room.id === activeRoom.id
            ? { ...room, lastMessage: newMessage }
            : room,
        ),
      );

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      // In real app, this would be handled by backend
      if (!mockMessages[activeRoom.id]) {
        mockMessages[activeRoom.id] = [];
      }
      mockMessages[activeRoom.id].push(newMessage);
    } catch (error) {
      console.error("Error sending message:", error);
      // Revert optimistic update
      setMessages((prev) => prev.filter((msg) => msg.id !== newMessage.id));
    }
  };

  const markAsRead = (messageId: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, isRead: true } : msg,
      ),
    );
  };

  const createRoom = async (
    participantIds: string[],
    name: string,
    projectId?: string,
  ): Promise<ChatRoom> => {
    const newRoom: ChatRoom = {
      id: `room_${Date.now()}`,
      name,
      participants: [], // Would be populated by backend
      unreadCount: 0,
      projectId,
      createdAt: new Date().toISOString(),
    };

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      setRooms((prev) => [...prev, newRoom]);
      return newRoom;
    } catch (error) {
      console.error("Error creating room:", error);
      throw error;
    }
  };

  const value: ChatContextType = {
    rooms,
    activeRoom,
    messages,
    loading,
    setActiveRoom,
    sendMessage,
    markAsRead,
    createRoom,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
