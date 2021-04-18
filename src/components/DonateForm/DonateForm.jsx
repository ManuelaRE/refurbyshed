import React, { useState } from "react";
import styles from "./DonateForm.module.scss";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import SubmitButton from "../SubmitButton/index.js";
import Image from "react-bootstrap/Image";
import nameImg from "../../assets/Icons/name.png";
import emailImg from "../../assets/Icons/email.png";
import locationImg from "../../assets/Icons/location.png";
import { navigate } from "@reach/router";
import firebase from "firebase";
import config from "../../config";

const DonateForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [condition, setCondition] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [itemName, setItemName] = useState("");
  const [make, setMake] = useState("");

  const readfichier = (e) => {
    if (window.FileReader) {
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file && file.type.match("image.*")) {
        reader.readAsDataURL(file);
      } else {
        console.log("HUH");
      }
      reader.onloadend = function (e) {
        setImage(reader.result);
      };
    }
  };

  const submitDonation = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    const todoRef = firebase.database().ref("Form").child("donationForm");
    const item = {
      userName,
      email,
      type,
      condition,
      image,
      description,
      itemName,
      make,
    };
    todoRef.push(item);
    navigate("/donatecomplete");
  };

  return (
    <section className={styles.formBorder}>
      <Form className="d-flex flex-column">
        <Form.Group controlId="formBasicName">
          <InputGroup className="mb-2">
            <Image as={InputGroup.Prepend} src={nameImg} height="38" rounded />
            <Form.Control
              type="Name"
              placeholder="Name"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <InputGroup className="mb-2">
            <Image as={InputGroup.Prepend} src={emailImg} height="38" rounded />
            <Form.Control
              type="Email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="formBasicLocation">
          <InputGroup className="mb-2">
            <Image
              as={InputGroup.Prepend}
              src={locationImg}
              height="38"
              rounded
            />
            <Form.Control type="Location" placeholder="Location" required />
          </InputGroup>
        </Form.Group>

        <Form.Group>
          <Form.Control value={-1} key={-1} as="select" onChange={(e) => setType(e.target.value)}>
            <option value={-1} disabled>Select donation item</option>
            <option>Chair</option>
            <option>Table</option>
            <option>Desk</option>
            <option>Drawers</option>
            <option>Bookshelf</option>
            <option>Cabinate</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <InputGroup className="mb-2">
            <Image as={InputGroup.Prepend} src={nameImg} height="38" rounded />
            <Form.Control
              type="ItemName"
              placeholder="Item Name"
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <InputGroup className="mb-2">
            <Image as={InputGroup.Prepend} src={nameImg} height="38" rounded />
            <Form.Control
              type="ItemBrand"
              placeholder="Item Brand"
              onChange={(e) => setMake(e.target.value)}
              required
            />
          </InputGroup>
        </Form.Group>

        <Form.Group>
          <Form.Control
            as="select"
            onChange={(e) => setCondition(e.target.value)}
            required
            value={-1} key={-1}
          >
            <option value={-1} disabled>Item condition</option>
            <option>Cosmetic damage only</option>
            <option>A little repair needed</option>
            <option>A lot of repair needed</option>
            <option>Completely broken</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.File
            id="exampleFormControlFile1"
            label="Attach a image"
            // onChange={(e) => setImage(e.target.value)}
            onChange={(e) => readfichier(e)}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Item description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <SubmitButton
          onClick={submitDonation}
          name="Submit"
          className={styles.submit}
        />
      </Form>
    </section>
  );
};

export default DonateForm;
