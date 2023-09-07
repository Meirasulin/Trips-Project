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
import User from "../../../../Servers/src/models/user";
import { useDependencys } from "./DependencyProvider";
type ContextValue = {
  login: User | null;
  setLogIn: Dispatch<SetStateAction<User | null>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
};

const LogInContext = createContext<null | ContextValue>(null);
const { Provider } = LogInContext;

type LogInProviderProps = {
  children: ReactNode;
};
//
//
//
//
//
//
//
//
//

const LogInProvider: FC<LogInProviderProps> = ({ children }) => {
  const [login, setLogIn] = useState<User | null>(null);
  const [token, setToken] = useState<string>("");

  const { saveLogin } = useDependencys();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          body: JSON.stringify(login),
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        console.log(data);
        setToken(data.responseObj.token);

        if (!response.ok) {
          throw new Error("Failedm in fecth to log-in");
        }
      } catch (error) {
        console.error("Error Log-In:", error);
      }
    };
    if (login) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saveLogin]);
  return (
    <Provider value={{ login, setLogIn, token, setToken }}>{children}</Provider>
  );
};

//
//
//
//
//
//

// eslint-disable-next-line react-refresh/only-export-components
export const useLogIn = () => {
  const context = useContext(LogInContext);
  if (!context) throw new Error("useLogIn must be used within a LogInProvider");
  return context;
};

export default LogInProvider;
