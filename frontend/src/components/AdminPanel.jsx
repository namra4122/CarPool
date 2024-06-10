import React, { useState } from 'react';
import './componentCss/adminPanel.css';

const AdminPage = () => {
  const [name, setName] = useState('');
  const [contact, setContactNumber] = useState('');
  const [vehicle, setVehicleDetails] = useState('');
  const [error, setError] = useState(''); // New state for error message
  const [result, setResult] = useState(''); // New state for result message

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to the backend server
    const registrationData = { name, contact, vehicle };

    try {
      const response = await fetch('http://localhost:3000/api/driver/driverRegister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData)
      });
      console.log(response);

      if (response.ok) {
        const result = await response.json();
        console.log('Employee Registered:', result);
        setResult('Driver Detailes Registered');
        setError('');
      } else{
        const result = await response.json();
        if (result.error) {
          setError(result.error); // Set error message from server response
          } else {
            console.error('Registration failed:', response.statusText);
            setError('Registration failed. Please try again.');
          }
      }
    } catch (error) {
      console.error('Error:', error);
    }
    console.log('Employee Registered:', { name, contact, vehicle });
    setName('');
    setContactNumber('');
    setVehicleDetails ('');
  };

  return (
    <div className="admin-page">
      <h2>Admin - Enter Driver Details</h2>
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
          <label htmlFor="contact">Contact Number:</label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="vehicle">Vehicle Details:</label>
          <input
            type="text"
            id="vehicle"
            value={vehicle}
            onChange={(e) => setVehicleDetails(e.target.value)}
            required
          />
        </div>
        {error && <div className='error-message'>{error}</div>}
        {result && <div className='result-message'>{result}</div>}
        <div className='wrapper'><button type="submit">Submit</button></div>
      </form>
    </div>
  );
};

export default AdminPage;
