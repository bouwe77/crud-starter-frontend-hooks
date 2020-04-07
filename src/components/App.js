import React from "react";
import { Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Users from "./users";
import Header from "./Header";
import PrivateRoute from "./auth/PrivateRoute";
import SignInPage from "./auth/SignInPage";
import { useAuth, AuthProvider } from "../firebase/AuthProvider";

function App() {
  const auth = useAuth();

  return (
    <AuthProvider>
      <Container className="App">
        <Router>
          {auth && auth.user && <Header />}

          <Switch>
            <Route path="/" exact>
              {auth && auth.user ? (
                <Redirect to="/users" />
              ) : (
                <Redirect to="/signin" />
              )}
            </Route>
            <Route path="/signin">
              <SignInPage />
            </Route>
            <PrivateRoute path="/users">
              <Users />
            </PrivateRoute>
          </Switch>
        </Router>
      </Container>
    </AuthProvider>
  );
}

export default App;
