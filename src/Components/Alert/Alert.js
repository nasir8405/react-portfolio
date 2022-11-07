import React from "react";
import Alert from "react-bootstrap/Alert";
import "./Alert.css";

export const AlertComponent = () => {
  return (
    <div className="container alert-container">
      <Alert className="success">Thank You! Your message has been sent</Alert>
    </div>
  );
};
