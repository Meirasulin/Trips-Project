import { usePages } from "./Pages";
import Home from "./Home";
import Trips from "./Trips";
import TripDetails from "./TripDetails";
import Add from "./Add";
import LogIn from "./LogIn";
import SignIn from "./SignIn";
import Update from "./Update";

const RoutesPage = () => {
  const { page } = usePages();
  if (page === "Home") return <Home />;
  if (page === "Trips") return <Trips />;
  if (page === "TripDetails") return <TripDetails />;
  if (page === "Add") return <Add />;
  if (page === "LogIn") return <LogIn />;
  if (page === "SignIn") return <SignIn />;
  if (page === "Update") return <Update />;
};
export default RoutesPage;
