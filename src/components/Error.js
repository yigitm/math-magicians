import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Page not found!</h1>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Back to Home
      </button>
    </div>
  );
};
export default Error;
