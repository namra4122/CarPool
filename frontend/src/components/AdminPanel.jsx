import React, { useState } from 'react';
import './componentCss/adminPanel.css';

const AdminPage = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [vehicleDetails, setVehicleDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to the backend server
    console.log('Employee Details:', { name, contactNumber, vehicleDetails });
    // Clear the form
    setName('');
    setContactNumber('');
    setVehicleDetails('');
  };

  return (
    <div className="admin-page">
      <h2>Admin - Enter Employee Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="vehicleDetails">Vehicle Details:</label>
          <input
            type="text"
            id="vehicleDetails"
            value={vehicleDetails}
            onChange={(e) => setVehicleDetails(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminPage;
