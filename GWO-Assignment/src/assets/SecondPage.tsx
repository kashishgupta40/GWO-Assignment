import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const SecondPage = () => {
  const history = useHistory();

  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails');
    if (!userDetails) {
      history.push('/');
      alert('You must enter your details before accessing this page.');
    }
  }, [history]);

  return (
    <div>
      <h1>Second Page</h1>
      {/* Other components go here */}
    </div>
  );
};

export default SecondPage;
