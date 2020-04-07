import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../firebase/AuthProvider.js";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default ({ children, ...rest }) => {
  const auth = useAuth();
  console.log(auth.user);

  if (auth.initializing) return <>Please wait...</>;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
