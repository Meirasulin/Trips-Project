import {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  useEffect,
  FC,
  createContext,
} from "react";
import Trip from "../../../../Servers/src/models/trip";

type ContextValue = {
  TripDetails: Trip | null;
  setTripDetails: Dispatch<SetStateAction<Trip | null>>;
  IdDetails: string | null;
  setIdDetails: Dispatch<SetStateAction<string | null>>;
};

const TripDetailsContext = createContext<null | ContextValue>(null);

type TripDetailsProviderProps = {
  children: ReactNode;
};

const TripDetailsProvider: FC<TripDetailsProviderProps> = ({ children }) => {
  const [TripDetails, setTripDetails] = useState<Trip | null>(null);
  const [IdDetails, setIdDetails] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const respons = await fetch(
        "http://localhost:3000/api/trips/" + IdDetails
      );
      const data = await respons.json();
      setTripDetails(data);
    };
    if (IdDetails) {
      fetchData();
    }
  }, [IdDetails]);

  return (
    <TripDetailsContext.Provider
      value={{ TripDetails, setTripDetails, IdDetails, setIdDetails }}
    >
      {children}
    </TripDetailsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTripDetails = () => {
  const context = useContext(TripDetailsContext);
  if (!context) {
    throw new Error("useTripDetails must be used within a TripDetailsProvider");
  }
  return context;
};

export default TripDetailsProvider;
