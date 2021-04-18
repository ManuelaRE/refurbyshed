import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const SubmitButton = (props) => {
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      props.onClick();
    }, 500);
  };

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
      className="rounded-pill"
    >
      {isLoading ? "Thank you" : props.name}
    </Button>
  );
};

export default SubmitButton;
