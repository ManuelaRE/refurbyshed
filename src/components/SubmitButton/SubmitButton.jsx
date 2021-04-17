import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';

const SubmitButton = () => {
  const [isLoading, setLoading] = useState(false);

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 500));
  };
  
  function LoadingButton() {
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  }
  
  const handleClick = () => setLoading(true);

  return (
    <Button 
      variant="primary" 
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
      className="rounded-pill"
    >
      {isLoading ? 'Thank you' : 'Submit'}
    </Button>
  )
}

export default SubmitButton
