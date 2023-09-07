import { usePages } from "./Pages";
import { useLogIn } from "./providers/LogInProvider";
const Home = () => {
  const { setPage } = usePages();
  const { login } = useLogIn();
  return (
    <>
      <header>User: {login?.email}</header>
      <h2>Welcome to TripsWeb</h2>
      <button onClick={() => setPage("LogIn")}>Log in</button>
      <button onClick={() => setPage("SignIn")}>Sign in</button>
      <button onClick={() => setPage("Trips")}>Our Trips</button>
    </>
  );
};
export default Home;
