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
import { useDependencys } from "./DependencyProvider";

type ContextValue = {
  tripList: Trip[] | null;
  setTripList: Dispatch<SetStateAction<Trip[] | null>>;
};

const TripsContext = createContext<null | ContextValue>(null);

type TripsProviderProps = {
  children: ReactNode;
};

export const TripsProvider: FC<TripsProviderProps> = ({ children }) => {
  const [tripList, setTripList] = useState<Trip[] | null>(null);
  const { saveAdded, saveUpdate, saveDelete } = useDependencys();

  useEffect(() => {
    const fecthData = async () => {
      const respons = await fetch("http://localhost:3000/api/trips/");
      const data = await respons.json();
      setTripList(data);
    };
    fecthData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [[saveAdded, saveUpdate, saveDelete]]);

  return (
    <TripsContext.Provider value={{ tripList, setTripList }}>
      {children}
    </TripsContext.Provider>
  );
};

// **********************
// eslint-disable-next-line react-refresh/only-export-components
export const useTrips = () => {
  const context = useContext(TripsContext);
  if (!context) throw new Error("useTrips must be used within a TripsProvider");
  return context;
};

export default TripsProvider;
