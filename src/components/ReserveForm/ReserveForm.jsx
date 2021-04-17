import React, { Component } from "react";
import styles from "./ReserveForm.module.scss";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import SubmitButton from "../SubmitButton/index.js";
import Image from "react-bootstrap/Image";
import nameImg from "../../assets/Icons/name.png";
import emailImg from "../../assets/Icons/email.png";
import phoneImg from "../../assets/Icons/phone.png";
import { sendMail } from "../../utils/sendMail";

export class ReseveForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };

  render() {
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
              <Form.Control
                type="Name"
                placeholder="Name"
                onChange={(e) => this.setState({ name: e.target.value })}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <Image src={emailImg} height="20" rounded />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="Email"
                placeholder="Email address"
                onChange={(e) => this.setState({ email: e.target.value })}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formBasicLocation">
            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <Image src={phoneImg} height="20" rounded />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="number"
                placeholder="Phone Number"
                onChange={(e) => this.setState({ phone: e.target.value })}
                required
              />
            </InputGroup>
          </Form.Group>

          <SubmitButton
            name="Reserve"
            className={styles.submit}
            onClick={() => sendMail(this.state.name, this.state.email)}
          />
        </Form>
      </section>
    );
  }
}

export default ReseveForm;
