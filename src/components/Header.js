import React from "react";
import { Row, Col } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../firebase/AuthProvider.js";

export default () => {
  const auth = useAuth();
  const history = useHistory();

  function signOut() {
    auth.signOut().then(() => history.push("/"));
  }

  return (
    <>
      <Row>
        <Col>
          <h1>ClimateSwipe CMS</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ margin: "10px 0px 20px 0px" }}>
            <Link to="/users">Users</Link>
          </div>
          <div>
            <button onClick={signOut}>Signout</button>
          </div>
        </Col>
      </Row>
    </>
  );
};
