import React from "react";
import styles from "./DonateForm.module.scss";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import SubmitButton from "../SubmitButton/index.js";
import Image from "react-bootstrap/Image";
import nameImg from "../../assets/Icons/name.png";
import emailImg from "../../assets/Icons/email.png";
import locationImg from "../../assets/Icons/location.png";

const DonateForm = () => {
  return (
    <section className={styles.formBorder}>
      <Form className="d-flex flex-column">
        <Form.Group controlId="formBasicName">
          <InputGroup className="mb-2">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <Image src={nameImg} height="20" rounded />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="Name" placeholder="Name" required />
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <InputGroup className="mb-2">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <Image src={emailImg} height="20" rounded />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="Email" placeholder="Email address" required />
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="formBasicLocation">
          <InputGroup className="mb-2">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <Image src={locationImg} height="20" rounded />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="Location" placeholder="Location" required />
          </InputGroup>
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
          <Form.Control as="select" required>
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
          <Form.Control as="textarea" rows={3} placeholder="Item description" />
        </Form.Group>

        <SubmitButton name="Submit" className={styles.submit} />
      </Form>
    </section>
  );
};

export default DonateForm;
