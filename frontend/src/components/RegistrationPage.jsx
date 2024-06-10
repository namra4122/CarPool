import React, { useEffect, useState } from 'react';
import './componentCss/registrationPage.css';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [contact, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [routeId, setRouteId] = useState('');
  const [routes, setRoutes] = useState([]);
  const [error, setError] = useState(''); // State for error messages

  useEffect(()=>{
    const fetchRoutes = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/route/getAllRoute');
        if (response.ok) {
          const data = await response.json();
          // console.log(data.data);
          setRoutes(data.data);
        } else {
          console.error('Failed to fetch routes:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching routes:', error);
      }
    };

    fetchRoutes();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const registrationData = { name,username, contact, address,routeId };

    try {
      const response = await fetch('http://localhost:3000/api/emp/employeeRegister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Employee Registered:', result);
        setError(''); // Clear error message if registration is successful
      } else {
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
      setError('An error occurred. Please try again.');
    }

    console.log('Employee Registered:', { name, contact });
    setName('');
    setContactNumber('');
    setAddress('');
    setRouteId('');
    setUsername('');
  };

  return (
    <div className="registration-page">
      <h2>Employee Registration for Carpooling</h2>
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
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="route">Route:</label>
          <select
            id="route"
            value={routeId}
            onChange={(e)=>setRouteId(e.target.value)}
            required
          >
            <option value="" disabled>Select a route</option>

            {
              routes.map((route)=>{
                console.log(route);
                return(<option
                  key={route._id}
                  value={route._id}
                  style={{color: route.serviceAvability ? 'green':'red'}}
                >
                  {route.startingPoint} to {route.destination}
                </option>)
              })

            }
          </select>
        </div>

        {error && <div className='error-message'>{error}</div>}
        <div className="wrapper"><button type="submit">Register</button></div>
      </form>
    </div>
  );
};

export default RegistrationPage;
