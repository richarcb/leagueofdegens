import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "@/auth"; // Assuming auth is a function that fetches the session

interface IUser {
  // Define the properties of your user object here
  id: string;
  name: string;
  email: string;
}

interface SessionContextProps {
  user: IUser | null;
  loading: boolean;
}

const SessionContext = createContext<SessionContextProps | undefined>(
  undefined
);

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const session: IUser | null = (await auth()) as IUser | null;
      setUser(session);
      setLoading(false);
    };

    fetchSession();
  }, []);

  return (
    <SessionContext.Provider value={{ user, loading }}>
      {children}
    </SessionContext.Provider>
  );
};
