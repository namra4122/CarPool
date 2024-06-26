import { useState } from 'react';
import axios from 'axios';
import './componentCss/routeCreationPage.css';

const RouteCreationPage = () => {
  const [startingPoint, setStartingPoint] = useState('');
  const [destinationPoint, setDestinationPoint] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const routeData = {destinationPoint,startingPoint}
    try {
      const response = await axios.post('http://localhost:3000/api/route/routeRegister', routeData);
      
      setResult(response)
      console.log(response.data);
      // Clear the form
      setStartingPoint('');
      setDestinationPoint('');
    } catch (error) {
      console.error('Error creating route:', error);
    }
  };

  return (
    <div className="route-creation-page">
      <h2>Create a New Route</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="startingPoint">Starting Point:</label>
          <input
            type="text"
            id="startingPoint"
            value={startingPoint}
            onChange={(e) => setStartingPoint(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="destinationPoint">Destination Point:</label>
          <input
            type="text"
            id="destinationPoint"
            value={destinationPoint}
            onChange={(e) => setDestinationPoint(e.target.value)}
            required
          />
        </div>
        <div className='wrapper'>
            <button type="submit" className="form-group">Create Route</button>
        </div>
      </form>
      {result && (
        <div className="result">
          <p>Route created successfully!</p>
        </div>
      )}
    </div>
  );
};

export default RouteCreationPage;
