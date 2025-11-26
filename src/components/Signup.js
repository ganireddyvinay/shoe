import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./Signup.css";

export default function Signup() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });

  // Always show modal on refresh
  useEffect(() => {
    setShow(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.name.trim() || !user.email.trim()) {
      alert("Please fill out all fields!");
      return;
    }

    setShow(false); // close popup
  };

  return (
    <Modal
      show={show}
      backdrop="static"
      centered
      size="md"
      className="signup-popup"
    >
      <Modal.Header className="border-0 text-center d-block">
        <h4 className="fw-bold signup-title">Welcome to ShoeMart 👟</h4>
        <p className="signup-subtitle">Create your account to continue</p>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="signup-label">Full Name</Form.Label>
            <Form.Control
              className="signup-input"
              type="text"
              placeholder="Enter your name"
              value={user.name}
              onChange={(e) =>
                setUser({ ...user, name: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="signup-label">Email Address</Form.Label>
            <Form.Control
              className="signup-input"
              type="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, email: e.target.value })
              }
            />
          </Form.Group>

          <Button type="submit" className="signup-btn w-100">
            Create Account
          </Button>
        </Form>
      </Modal.Body>

      <Modal.Footer className="border-0 justify-content-center">
        <small className="signup-footer-text">
          Your information is kept private.
        </small>
      </Modal.Footer>
    </Modal>
  );
}
