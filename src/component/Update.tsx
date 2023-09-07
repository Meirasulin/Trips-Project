import { useState } from "react";
import { usePages } from "./Pages";
import Trip from "../../../Servers/src/models/trip";
import { useDependencys } from "./providers/DependencyProvider";
import { useTripDetails } from "./providers/TripDetailsProvider";
import { useUpdate } from "./providers/UpdateProvider";

const Update = () => {
  const { saveUpdate, setSaveUpdate } = useDependencys();
  const { setPage } = usePages();
  const { setUpdate } = useUpdate();
  const { TripDetails } = useTripDetails();
  const [Name, setName] = useState(TripDetails.name);
  const [ID, setID] = useState(TripDetails.id);
  const [description, setDescription] = useState(TripDetails.description);
  const [destination, setDestination] = useState(TripDetails.destination);
  const [imageLink, setImageLink] = useState(TripDetails.image);
  const [price, setPrice] = useState(TripDetails.price);
  const [startDate, setStartDate] = useState(TripDetails.startDate);
  const [endDate, setEndDate] = useState(TripDetails.endDate);
  const [activitiesOne, setActivitiesOne] = useState(TripDetails.activities[0]);
  const [activitiesTwo, setActivitiesTwo] = useState(TripDetails.activities[1]);
  const [activitiesThree, setActivitiesThree] = useState(
    TripDetails.activities[1]
  );

  const togglefun = (obj: Trip) => {
    setUpdate(obj);
    setPage("Trips");
    setSaveUpdate(!saveUpdate);
  };
  return (
    <div>
      <button onClick={() => setPage("Trips")}>🏠</button>
      <h5>Name</h5>
      <input
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
      <h5>ID</h5>
      <input type="text" value={ID} onChange={(e) => setID(e.target.value)} />
      <h5>description</h5>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <h5>destination</h5>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <h5>image Link</h5>
      <input
        type="text"
        value={imageLink}
        onChange={(e) => setImageLink(e.target.value)}
      />
      <h5>Price</h5>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(parseInt(e.target.value))}
      />
      <h5>startDate</h5>
      <input
        type="text"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <h5>endDate</h5>
      <input
        type="text"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <h5>activities</h5>
      <input
        type="text"
        value={activitiesOne}
        onChange={(e) => setActivitiesOne(e.target.value)}
      />
      <input
        type="text"
        value={activitiesTwo}
        onChange={(e) => setActivitiesTwo(e.target.value)}
      />
      <input
        type="text"
        value={activitiesThree}
        onChange={(e) => setActivitiesThree(e.target.value)}
      />
      <button
        style={{ display: "block" }}
        onClick={() => {
          togglefun({
            id: ID,
            name: Name,
            destination: destination,
            startDate: startDate,
            endDate: endDate,
            description: description,
            price: price,
            image: imageLink,
            activities: [activitiesOne, activitiesTwo, activitiesThree],
          });
        }}
      >
        Update Trip
      </button>
    </div>
  );
};
export default Update;
