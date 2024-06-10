import React, { useState } from 'react';
import './componentCss/suggestionsComplaintsPage.css';

const SuggestionsComplaintsPage = () => {
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');
  const [issue, setIssue] = useState('');
  const [error, setError] = useState(''); // New state for error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userIssue = {title,username,issue};
    try {
      const response = await fetch('http://localhost:3000/api/suggestion/suggestionCreation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userIssue)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Employee Issue:', result);
        setError('');
      } else{
        const result = await response.json();
        if (result.error) {
          setError(result.error); // Set error message from server response
          } else {
            console.error('Issue Registration failed: ', response.statusText);
            setError('Issue Registration failed. Please try again.');
          }
      }
    } catch (error) {
      console.error('Error:', error);
    }
    console.log('Employee Feedback:', { title, username, issue });
    // Clear the form
    setTitle('');
    setUsername('');
    setIssue('');
  };

  return (
    <div className="suggestions-complaints-page">
      <h2>Submit Your Suggestions or Complaints</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="issue">Suggestion/Complaint:</label>
          <textarea
            id="issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            required
          ></textarea>
        </div>
        <div className='wrapper'>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SuggestionsComplaintsPage;