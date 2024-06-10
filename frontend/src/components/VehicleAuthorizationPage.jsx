import React, { useState } from 'react';
// import axios from 'axios';
import './componentCss/vehicleAuthorizationPage.css';

const VehicleAuthorizationPage = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    try {
      console.log(vehicleNumber);
      const response = await fetch(`http://localhost:3000/api/driver/getVehicle?vehicleNumber=${vehicleNumber}`);
      const data = await response.json();

      if (data.data.length === 0) {
        setError('Vehicle does not exist');
        return;
      }

      setResult(data.data[0]);
      console.log(data.data[0]);
    } catch (error) {
      console.error('Error checking authorization:', error);
      setError('An error occurred while checking authorization');
    }
  };

  return (
    <div className="authorization-page">
      <h2>Check Vehicle and Driver Authorization</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="vehicleNumber">Vehicle Number:</label>
          <input
            type="text"
            id="vehicleNumber"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            required
          />
        </div>
        <div className='wrapper'>
          <button type="submit">Check Authorization</button>
        </div>
      </form>
      {error && <div className="error-message">{error}</div>}
      {result && (
        <div className="result">
          {result.verified ? (
            <p>
              The vehicle is authorized.
              Driver Name: {result.name}
            </p>
          ) : (
            <p>The vehicle is not authorized.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default VehicleAuthorizationPage;
