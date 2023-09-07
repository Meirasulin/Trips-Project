import {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
} from "react";

type ContextValue = {
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
};

const PagesContext = createContext<null | ContextValue>(null);

type PagesProviderProps = {
  children: ReactNode;
};

export const PagesProvider: FC<PagesProviderProps> = ({ children }) => {
  const [page, setPage] = useState("Home");

  return (
    <PagesContext.Provider value={{ page, setPage }}>
      {children}
    </PagesContext.Provider>
  );
};

export const usePages = () => {
  const context = useContext(PagesContext);
  if (!context) throw new Error("usePages must be used within a PagesProvider");
  return context;
};

export default PagesProvider;
