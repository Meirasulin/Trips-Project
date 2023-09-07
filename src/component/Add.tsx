import { useState } from "react";
import { useAdd } from "./providers/AddProvider";
import { usePages } from "./Pages";
import Trip from "../../../Servers/src/models/trip";
import { useDependencys } from "./providers/DependencyProvider";

const Add = () => {
  const { saveAdded, setSaveAdded } = useDependencys();
  const { setPage } = usePages();
  const { setNewTrip } = useAdd();
  const [Name, setName] = useState("");
  const [ID, setID] = useState("");
  const [description, setDescription] = useState("");
  const [destination, setDestination] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [price, setPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activitiesOne, setActivitiesOne] = useState("");
  const [activitiesTwo, setActivitiesTwo] = useState("");
  const [activitiesThree, setActivitiesThree] = useState("");

  const togglefun = (obj: Trip) => {
    setNewTrip(obj);
    setPage("Trips");
    setSaveAdded(!saveAdded);

    // https://img.mako.co.il/2019/09/19/49Places_To_See_Israel_Part2_20_i.jpg
  };
  return (
    <div>
      <button onClick={() => setPage("Trips")}>All Trips</button>
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
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
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
            price: parseInt(price),
            image: imageLink,
            activities: [activitiesOne, activitiesTwo, activitiesThree],
          });
        }}
      >
        Add Trip
      </button>
    </div>
  );
};
export default Add;
