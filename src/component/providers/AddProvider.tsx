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
import { usePages } from "../Pages";
import { useDependencys } from "./DependencyProvider";
import { useLogIn } from "./LogInProvider";

type ContextValue = {
  NewTrip: Trip | null;
  setNewTrip: Dispatch<SetStateAction<Trip | null>>;
};

const AddContext = createContext<null | ContextValue>(null);

type AddProviderProps = {
  children: ReactNode;
};

const AddProvider: FC<AddProviderProps> = ({ children }) => {
  const { token } = useLogIn();
  const [NewTrip, setNewTrip] = useState<Trip | null>(null);
  const { page } = usePages();
  const { saveAdded } = useDependencys();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (NewTrip && page === "Trips") {
          const response = await fetch("http://localhost:3000/api/trips/", {
            method: "POST",
            body: JSON.stringify(NewTrip),
            headers: {
              "Content-Type": "application/json",
              authorization: token,
            },
          });

          if (!response.ok) {
            throw new Error("Failed to add a new trip");
          }
          // const result = await response.json();
        }
      } catch (error) {
        console.error("Error adding a new trip:", error);
      }
    };

    if (NewTrip) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saveAdded]);

  return (
    <AddContext.Provider value={{ NewTrip, setNewTrip }}>
      {children}
    </AddContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAdd = () => {
  const context = useContext(AddContext);
  if (!context) throw new Error("useAdd must be used within an AddProvider");
  return context;
};

export default AddProvider;
