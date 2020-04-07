import React from "react";
import { Table, Button } from "reactstrap";
import ModalForm from "../Modal";

export default ({ items, updateState }) => {
  const deleteItem = (id) => {
    let confirmDelete = window.confirm("Delete item forever?");
    if (confirmDelete) {
      //TODO...
    }
  };

  const rows = items.map((item) => {
    return (
      <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.first}</td>
        <td>{item.last}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.location}</td>
        <td>
          <div style={{ width: "110px" }}>
            <ModalForm
              buttonLabel="Edit"
              item={item}
              updateState={updateState}
            />{" "}
            <Button color="danger" onClick={() => deleteItem(item.id)}>
              Del
            </Button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <Table responsive hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>First</th>
          <th>Last</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Location</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};
