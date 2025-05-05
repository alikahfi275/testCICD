import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

interface User {
  name: string;
  role: string;
}

interface AppContextType {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  const [user, setUser] = useState<User>({name: 'Andi', role: 'admin'});

  return (
    <AppContext.Provider value={{user, setUser}}>
      {children}
    </AppContext.Provider>
  );
};
