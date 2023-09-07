/* eslint-disable react-hooks/exhaustive-deps */
import { useTrips } from "./providers/TripsProvider";
import { usePages } from "./Pages";
import { useTripDetails } from "./providers/TripDetailsProvider";
import "./style/card.css";
import { useDependencys } from "./providers/DependencyProvider";
import { useDelete } from "./providers/DeleteProvider";

const Trips = () => {
  const { tripList } = useTrips();
  const { setPage } = usePages();
  const { setIdDetails } = useTripDetails();
  const { setSaveDelete } = useDependencys();
  const { setId } = useDelete();

  const toggleDetails = (ids: string) => {
    setPage("TripDetails");
    setIdDetails(ids);
  };
  const toggleDelete = (ids: string) => {
    setId(ids);
    setSaveDelete((prev) => !prev);
  };

  return (
    <>
      <button onClick={() => setPage("Home")}>🏠</button>
      <button onClick={() => setPage("Add")}>➕</button>
      <div>
        {tripList &&
          tripList.map((trip) => {
            return (
              <>
                <div key={trip.id} onClick={() => toggleDetails(trip.id)}>
                  <img src={trip.image} alt={trip.name} />
                  <h4>{trip.name}</h4>
                </div>
                <button onClick={() => toggleDelete(trip.id)}>Remove</button>
              </>
            );
          })}
      </div>
    </>
  );
};
export default Trips;
