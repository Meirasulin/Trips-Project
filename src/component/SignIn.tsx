import User from "../../../Servers/src/models/user";
import { useDependencys } from "./providers/DependencyProvider";
import { useSignIn } from "./providers/SignInProvider";
import { useState } from "react";
import { usePages } from "./Pages";

const SignIn = () => {
  const { setPage } = usePages();
  const { Sign, setSign } = useDependencys();
  const { setSignIn } = useSignIn();
  const [signEmail, setSignEmail] = useState("");
  const [signPass, setSignPass] = useState("");
  const [signID, setSignID] = useState("");
  //
  const toggleFun = (obj: User) => {
    setSignIn(obj);
    setSign(!Sign);
    setPage("LogIn");
  };

  return (
    <>
      <div>
        <h3>Sign In</h3>

        <h5>Enter your Email</h5>
        <input
          type="text"
          value={signEmail}
          onChange={(e) => setSignEmail(e.target.value)}
        />
        <h5>Enter your Password</h5>
        <input
          type="text"
          value={signPass}
          onChange={(e) => setSignPass(e.target.value)}
        />
        <h5>ID</h5>
        <input
          type="text"
          value={signID}
          onChange={(e) => setSignID(e.target.value)}
        />
        <button
          style={{ display: "block" }}
          onClick={() =>
            toggleFun({
              id: signID,
              email: signEmail,
              password: signPass,
              role: "admin",
            })
          }
        >
          Sign In
        </button>
      </div>
    </>
  );
};
export default SignIn;
