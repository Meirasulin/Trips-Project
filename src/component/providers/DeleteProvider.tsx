import {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
  useEffect,
} from "react";
import { useLogIn } from "./LogInProvider";
import { useDependencys } from "./DependencyProvider";

type ContextValue = {
  idDelete: string | null;
  setId: Dispatch<SetStateAction<string | null>>;
};
const DeleteContext = createContext<null | ContextValue>(null);
const { Provider } = DeleteContext;
type DeleteProviderProps = {
  children: ReactNode;
};

const DeleteProvider: FC<DeleteProviderProps> = ({ children }) => {
  const [idDelete, setId] = useState<string | null>(null);
  const { token } = useLogIn();
  const { saveDelete } = useDependencys();

  useEffect(() => {
    const fetchData = async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const res = await fetch("http://localhost:3000/api/trips/" + idDelete, {
        method: "DELETE",
        headers: {
          authorization: token,
        },
      });
    };
    if (idDelete) fetchData();
  }, [[saveDelete]]);

  return <Provider value={{ idDelete, setId }}>{children}</Provider>;
};

export const useDelete = () => {
  const context = useContext(DeleteContext);
  if (!context)
    throw new Error("useDelete must be used within a DeleteProvider");
  return context;
};

export default DeleteProvider;
