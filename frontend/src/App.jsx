import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import SuggestionsComplaintsPage from './components/SuggestionsComplaintsPage';
import AdminPage from './components/AdminPanel';
import VehicleAuthorizationPage from './components/VehicleAuthorizationPage';
import RouteCreationPage from './components/RouteCreationPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/suggestions-complaints" element={<SuggestionsComplaintsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/vehicleAuth" element={<VehicleAuthorizationPage />} />
          <Route path="/create-route" element={<RouteCreationPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
