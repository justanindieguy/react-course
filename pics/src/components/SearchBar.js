import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(term);
  };

  const handleChange = (evt) => setTerm(evt.target.value);

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="term">Enter Search Term:</label>
        <input value={term} onChange={handleChange} name="term" />
      </form>
    </div>
  );
}

export default SearchBar;
