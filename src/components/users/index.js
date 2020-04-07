import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Modal from "../Modal";
import List from "./List";
import { useAuth } from "../../firebase/AuthProvider";

export default (props) => {
  const [items, setItems] = useState([]);
  const auth = useAuth();

  const getItems = () => {
    const items = [
      {
        id: "1",
        first: "Bouwe",
        last: "Westerdijk",
        email: "bouwe@bouwe.nl",
        phone: "+3126490027",
        location: "Drachten",
      },
    ];

    setItems(items);
  };

  const addItemToState = (item) => {
    setItems([...items, item]);
  };

  const updateState = (item) => {
    const itemIndex = items.findIndex((data) => data.id === item.id);
    const newArray = [
      ...items.slice(0, itemIndex),
      item,
      ...items.slice(itemIndex + 1),
    ];
    setItems(newArray);
  };

  const deleteItemFromState = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <Row>
        <Col>
          <Modal buttonLabel="Add Item" addItemToState={addItemToState} />
        </Col>
      </Row>
      <Row>
        <Col>
          <List
            items={items}
            updateState={updateState}
            deleteItemFromState={deleteItemFromState}
          />
        </Col>
      </Row>
    </>
  );
};
