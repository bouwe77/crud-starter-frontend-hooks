import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../firebase/AuthProvider.js";
import { useMounted } from "../../utils";

export default () => {
  const auth = useAuth();
  const [emailAddress, setEmailAddress] = useState("bwesterdijk@newnexus.nl");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState();
  const isMounted = useMounted();
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/users" } };

  function signInClick() {
    if (isMounted.current) setError(false);
    auth
      .signIn(emailAddress, password)
      .then(() => {
        history.replace(from);
      })
      .catch((reason) => {
        const { code, message } = reason;
        if (isMounted.current) setError(true);
        console.log(`Error: ${code} ${message}`);
      });
  }

  return (
    <>
      <div>
        <h1>Sign In</h1>
      </div>
      <div>
        <input
          type="text"
          value={emailAddress}
          onChange={(event) => setEmailAddress(event.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <button onClick={signInClick}>Sign In</button>
      </div>
      {error && <div>Invalid credentials, please try again</div>}
      <div>
        <Link to="/register">Register</Link>
      </div>
    </>
  );
};
