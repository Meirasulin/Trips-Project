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
  saveAdded: boolean;
  setSaveAdded: Dispatch<SetStateAction<boolean>>;
  saveLogin: boolean;
  setSaveLogin: Dispatch<SetStateAction<boolean>>;
  Sign: boolean;
  setSign: Dispatch<SetStateAction<boolean>>;
  saveUpdate: boolean;
  setSaveUpdate: Dispatch<SetStateAction<boolean>>;
  saveDelete: boolean;
  setSaveDelete: Dispatch<SetStateAction<boolean>>;
};

const DependencysContext = createContext<null | ContextValue>(null);
const { Provider } = DependencysContext;

type DependencysProviderProps = {
  children: ReactNode;
};

const DependencysProvider: FC<DependencysProviderProps> = ({ children }) => {
  const [saveAdded, setSaveAdded] = useState<boolean>(false);
  const [saveLogin, setSaveLogin] = useState<boolean>(false);
  const [Sign, setSign] = useState<boolean>(false);
  const [saveUpdate, setSaveUpdate] = useState<boolean>(false);
  const [saveDelete, setSaveDelete] = useState<boolean>(false);

  return (
    <Provider
      value={{
        saveAdded,
        setSaveAdded,
        saveLogin,
        setSaveLogin,
        Sign,
        setSign,
        saveUpdate,
        setSaveUpdate,
        saveDelete,
        setSaveDelete,
      }}
    >
      {children}
    </Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDependencys = () => {
  const context = useContext(DependencysContext);
  if (!context)
    throw new Error("useDependencys must be used within a DependencysProvider");
  return context;
};

export default DependencysProvider;
