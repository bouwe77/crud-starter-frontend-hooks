import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default ({ item }) => {
  const [form, setValues] = useState({
    id: 0,
    first: "",
    last: "",
    email: "",
    phone: "",
    location: "",
  });

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitFormAdd = (e) => {
    e.preventDefault();
    //TODO...
  };

  const submitFormEdit = (e) => {
    e.preventDefault();
    //TODO...
  };

  useEffect(() => {
    if (item) {
      const { id, first, last, email, phone, location } = item;
      setValues({ id, first, last, email, phone, location });
    }
  }, false);

  return (
    <Form onSubmit={item ? submitFormEdit : submitFormAdd}>
      <FormGroup>
        <Label for="first">First Name</Label>
        <Input
          type="text"
          name="first"
          id="first"
          onChange={onChange}
          value={form.first === null ? "" : form.first}
        />
      </FormGroup>
      <FormGroup>
        <Label for="last">Last Name</Label>
        <Input
          type="text"
          name="last"
          id="last"
          onChange={onChange}
          value={form.last === null ? "" : form.last}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          onChange={onChange}
          value={form.email === null ? "" : form.email}
        />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone</Label>
        <Input
          type="text"
          name="phone"
          id="phone"
          onChange={onChange}
          value={form.phone === null ? "" : form.phone}
          placeholder="ex. 555-555-5555"
        />
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input
          type="text"
          name="location"
          id="location"
          onChange={onChange}
          value={form.location === null ? "" : form.location}
          placeholder="City, State"
        />
      </FormGroup>
      <Button>Save</Button>
    </Form>
  );
};
