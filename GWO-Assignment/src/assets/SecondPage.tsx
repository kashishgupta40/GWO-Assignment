import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DepartmentList from './DepartmentalList';
import DataTable from './DataTable'; 

const SecondPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails');
    if (!userDetails) {
      navigate('/');
      alert('You must enter your details before accessing this page.');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Second Page</h1>
      <DataTable />
      <DepartmentList />
    </div>
  );
};

export default SecondPage;
