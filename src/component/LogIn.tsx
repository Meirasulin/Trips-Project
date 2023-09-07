import User from "../../../Servers/src/models/user";
import { useDependencys } from "./providers/DependencyProvider";
import { useLogIn } from "./providers/LogInProvider";
import { useState } from "react";
import { usePages } from "./Pages";

const LogIn = () => {
  const { setPage } = usePages();
  const { saveLogin, setSaveLogin } = useDependencys();
  const { setLogIn, token } = useLogIn();
  const [logID, setLogID] = useState("");
  const [logEmail, setLogEmail] = useState("");
  const [logPass, setLogPass] = useState("");
  //
  const toggleFun = (obj: User) => {
    setLogIn(obj);
    setSaveLogin(!saveLogin);
  };

  return (
    <>
      <button onClick={() => setPage("Home")}>🏠</button>

      <div>
        <h3>Log In</h3>
        <h5>Enter Yuor ID</h5>
        <input
          type="text"
          value={logID}
          onChange={(e) => setLogID(e.target.value)}
        />
        <h5>Enter your Email</h5>
        <input
          type="text"
          value={logEmail}
          onChange={(e) => setLogEmail(e.target.value)}
        />
        <h5>Enter your Password</h5>
        <input
          type="text"
          value={logPass}
          onChange={(e) => setLogPass(e.target.value)}
        />
        <button
          style={{ display: "block" }}
          onClick={() =>
            toggleFun({
              id: logID,
              email: logEmail,
              password: logPass,
            })
          }
        >
          Log In
        </button>
      </div>
      <h6>your token is {token}</h6>
    </>
  );
};
export default LogIn;
