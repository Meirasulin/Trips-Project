import { useTripDetails } from "./providers/TripDetailsProvider";
import { usePages } from "./Pages";

const TripDetails = () => {
  const { TripDetails } = useTripDetails();
  const { setPage } = usePages();
  return (
    <>
      <header>
        <button onClick={() => setPage("Trips")}>All Trips</button>
      </header>
      <div>
        <img src={TripDetails?.image} alt={TripDetails?.name} />
        <h3>{TripDetails?.name}</h3>
        <h5>{TripDetails?.description}</h5>
        <p>
          {TripDetails?.startDate} - {TripDetails?.endDate}
        </p>
        <h4>{TripDetails?.price}</h4>
        <p>destination: {TripDetails?.destination}</p>
        {TripDetails?.activities.map((act) => (
          <span>{act} </span>
        ))}
        <button onClick={() => setPage("Update")}>Update</button>
      </div>
    </>
  );
};
export default TripDetails;
