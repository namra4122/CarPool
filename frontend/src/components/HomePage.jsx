import React from 'react';
import { useNavigate } from 'react-router-dom';
import './componentCss/homePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/register');
  };

  const navigateToSuggestionsComplaints = () => {
    navigate('/suggestions-complaints');
  };

  const adminPanel = () => {
    navigate('/admin');
  };

  const vehicleAuthorizationPage = ()=>{
    navigate('/vehicleAuth');
  }

  const routeCreationPage = ()=>{
    navigate('/create-route');
  }

  return (
    <div className="home-page">
      <h1>&#128661;</h1>
      <h2>Welcome to the Carpooling System</h2>
      <button onClick={navigateToRegister}>Register</button>
      <button onClick={navigateToSuggestionsComplaints}>Submit Suggestions/Complaints</button>
      <button onClick={adminPanel}>Admin Panel</button>
      <button onClick={vehicleAuthorizationPage}>Vehicle Authorization</button>
      <button onClick={routeCreationPage}>Create New Route</button>
    </div>
  );
};

export default HomePage;
