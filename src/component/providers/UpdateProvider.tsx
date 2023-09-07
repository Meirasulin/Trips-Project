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
import Trip from "../../../../Servers/src/models/trip";
import { useTripDetails } from "./TripDetailsProvider";
import { useLogIn } from "./LogInProvider";
import { useDependencys } from "./DependencyProvider";
//
type ContextValue = {
  update: Trip | null;
  setUpdate: Dispatch<SetStateAction<Trip | null>>;
};

const UpdateContext = createContext<null | ContextValue>(null);
const { Provider } = UpdateContext;

type UpdateProviderProps = {
  children: ReactNode;
};

//
//
//

const UpdateProvider: FC<UpdateProviderProps> = ({ children }) => {
  const { saveUpdate } = useDependencys();
  const [update, setUpdate] = useState<Trip | null>(null);
  const { token } = useLogIn();
  const { IdDetails } = useTripDetails();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:3000/api/trips/" + IdDetails,
        {
          method: "PUT",
          body: JSON.stringify(update),
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to Update this trip");
      }
    };
    console.log(token);
    console.log(update);

    if (update) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saveUpdate]);

  return <Provider value={{ update, setUpdate }}>{children}</Provider>;
};

//
//
//
// eslint-disable-next-line react-refresh/only-export-components
export const useUpdate = () => {
  const context = useContext(UpdateContext);
  if (!context)
    throw new Error("useUpdate must be used within a UpdateProvider");
  return context;
};

export default UpdateProvider;
