import React, { useState } from 'react';
// import axios from 'axios';
import './componentCss/vehicleAuthorizationPage.css';

const VehicleAuthorizationPage = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(vehicleNumber);
      // const response = await axios.post('http://localhost:5000/check-authorization', {
      //   vehicleNumber,
      // });
      // setResult(response.data);
    } catch (error) {
      console.error('Error checking authorization:', error);
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
        <button type="submit">Check Authorization</button>
      </form>
      {result && (
        <div className="result">
          {result.isAuthorized ? (
            <p>
              The vehicle is authorized. Driver Name: {result.driverName}
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