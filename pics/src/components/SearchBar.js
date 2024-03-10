import './SearchBar.css';
import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
    const [term,setTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }

    const handleInputChange = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <label style={{marginBottom: "4px"}}>Enter search term</label>
                <input value={term} onChange={handleInputChange} type="text" />
            </form>
        </div>
    )
}

export default SearchBar;