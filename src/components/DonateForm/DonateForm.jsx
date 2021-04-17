import React from "react";
import styles from "./DonateForm.module.scss";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Donate = () => {
  return (
    <>
    <section className={styles.formBorder}>
      <Form>
        <Form.Group controlId="formBasicName">
            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text></InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="Name" placeholder="Name" />
            </InputGroup>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control type="Email" placeholder="Email address" />
        </Form.Group>

        <Form.Group controlId="formBasicLocation">
          <Form.Control type="Location" placeholder="Location" />
        </Form.Group>

        <Form.Group>
          <Form.Control as="select">
            <option disabled>Select donation item</option>
            <option>Chair</option>
            <option>Table</option>
            <option>Desk</option>
            <option>Drawers</option>
            <option>Bookshelf</option>
            <option>Cabinate</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Control as="select">
            <option disabled>Item condition</option>
            <option>Cosmetic damage only</option>
            <option>A little repair needed</option>
            <option>A lot of repair needed</option>
            <option>Completely broken</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Attach a image" />
        </Form.Group>

         <Form.Group controlId="description">
          <Form.Control as="textarea" rows={3} placeholder="Item description"/>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </section>
    </>
  );
};

export default Donate;
