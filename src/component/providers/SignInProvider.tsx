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
  signin: User | null;
  setSignIn: Dispatch<SetStateAction<User | null>>;
};

const SignInContext = createContext<null | ContextValue>(null);
const { Provider } = SignInContext;

type SignInProviderProps = {
  children: ReactNode;
};

//
//
//

const SignInProvider: FC<SignInProviderProps> = ({ children }) => {
  const { Sign } = useDependencys();
  const [signin, setSignIn] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        body: JSON.stringify(signin),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();

      console.log(data.message);
    };
    if (signin) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Sign]);

  return <Provider value={{ signin, setSignIn }}>{children}</Provider>;
};

//
//
//

// eslint-disable-next-line react-refresh/only-export-components
export const useSignIn = () => {
  const context = useContext(SignInContext);
  if (!context)
    throw new Error("useSignIn must be used within a SignInProvider");
  return context;
};

export default SignInProvider;
