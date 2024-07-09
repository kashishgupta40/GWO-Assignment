//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import DepartmentList from './assets/DepartmentalList';
import UserForm from './assets/userForm'; 
import SecondPage from './assets/SecondPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

export default App;

