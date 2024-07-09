import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SecondPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails');
    if (!userDetails) {
      alert('You must enter your details before accessing this page.');
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Second Page</h1>
      {/* Other components go here */}
    </div>
  );
};

export default SecondPage;
