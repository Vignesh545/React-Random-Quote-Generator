import React, { useState } from 'react';

const AddQuote = ({ onFormSubmit }) => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call the onFormSubmit function with the new quote and author values
    // onFormSubmit({ quote, author });

    // Reset the form fields
    setQuote('');
    setAuthor('');

    // Display an alert message with the added quote and author
    const message = `Quote-"${quote}" by "${author}" added.`;
    alert(message);
  };

  return (
    <div className="card flip-vertical">
    <div className="front" >Add New Quote</div>
    <div className="back">
    <div id="form-container">
      <form onSubmit={handleSubmit} id="form">
        <div>
          <label htmlFor="quote">Quote:</label>
          <input
            type="text"
            class="input"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            class="input"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div><br></br>
        <button type="submit" id="submitbtn">Add Quote</button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default AddQuote;
